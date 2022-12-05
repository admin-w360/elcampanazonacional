<?php

namespace App\Traits;

use App\Models\Coupon;

Trait HasCode
{

    protected function generate(string $user_id): ?Coupon {
        $coupon = Coupon::where('user_id', $user_id)->where('expire_at', '>=', now()->toDateTimeString())->first();
        if(!$coupon){
            $coupon = Coupon::whereNull('user_id')->first() ;
        }

        if(empty($coupon->user_id) AND empty($coupon->send_at)) {
            $coupon->user_id = $user_id;
            $coupon->send_at = now();
            $coupon->expire_at = new \Carbon\Carbon('next monday');
            $coupon->save();
        } else {
            return null;
        }
        return $coupon;
    }

    protected function forwarded(string $user_id): ?Coupon {
        $coupon = Coupon::where('user_id', $user_id)->where('expire_at', '>=', now()->toDateString())->first();
        if($coupon) {
            $coupon->forwarded_at = now();
            $coupon->save();
            return $coupon;
        }
        return null;
    }


}

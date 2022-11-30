<html>
<head>
    <title>index</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<style>
    @font-face {
        font-family: "AmsiPro-Bold";
        src: url("./public/assets/fonts/AmsiPro-Bold.ttf");
    }

    @page {
        margin: 0;
        size: 195.5mm 296.5mm;  /** original size andrea 275.5mm 418mm; **/
        font-family: AmsiPro-Bold, serif;
    }
</style>
<body style="font-size: 0px; margin: 0; padding: 0">
<table id="Tabla_01" style="width: 800px; height: 1073px; align-self: center; border: 0; padding: 0; margin: 0;"
       cellpadding="0" cellspacing="0">
    <tr>
        <td style="width: 800px; height: 395px;">
            <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_01.jpg')}}" width="800" height="395"
                 alt="">
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 182px;">
            <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_02.jpg')}}" width="800" height="182"
                 alt="">
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 121px;">
            <table style="width: 800px; height: 121px; border: 0;" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="width: 247px; height: 121px;"></td>
                    <td style="width: 306px; height: 121px;">
                        @php($generatorPNG = new Picqer\Barcode\BarcodeGeneratorPNG())
                        <img style="display: block; border: 0; "
                             src="{{"data:image/png;base64,".base64_encode($generatorPNG->getBarcode($coupon->code, $generatorPNG::TYPE_CODE_128))}}"
                             width="306" height="121" alt="">
                    </td>
                    <td style="width: 247px; height: 121px;"></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 53px; font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: #4a7637; text-align: center; padding: 0;">
            {{ substr($coupon->code, 0,-1) }}
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 156px;">
            <a href="https://supermercadosnacional.com/" style="width: 800px; height: 156px; display: block; border: 0;">
            <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_07.jpg')}}" width="800" height="156"
                 alt="">
            </a>
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 138px;">
            <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_08.jpg')}}" width="800" height="138"
                 alt="">
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 55px;">
            <table style="width: 800px; height: 55px; border: 0;" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="width: 247px; height: 55px;">
                        <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_09.jpg')}}" width="247"
                             height="55" alt="">
                    </td>
                    <td style="width: 374px; height: 55px;">
                        <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_10.jpg')}}" width="374"
                             height="55" alt="">
                    </td>
                    <td style="width: 179px; height: 55px;">
                        <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_11.jpg')}}" width="179"
                             height="55" alt="">
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 47px;" >
            <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_12_01.jpg')}}" width="800" height="47" alt="">
        </td>
    </tr>
    <tr>
        <td  style="width: 800px; height: 29px; background-color: #174c22; display: block;  margin: 0; padding: 0; ">
            <table  style="width: 800px; height: 29px; border: 0; background-color: #174c22;  position:relative;" cellpadding="0" cellspacing="0"  >
                <tr>
                    <td style="width: 41px; height: 29px;">
                        <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_12_02.jpg')}}" width="41" height="29" alt="">
                    </td>
                    <td style="width: 400px; height: 29px;  border: 0; margin: 0; padding: 0; line-height: 0; font-family: Helvetica, Sans-Serif, serif; font-style: italic; color: #fff; background-color: #174c22; font-size: 12px; font-weight: bold;">
                        Este cupon es valido desde {{ $coupon->send_at->format('d M') }} hasta {{ ($coupon->expire_at->format('d')-1)." ".$coupon->expire_at->format('M') }} del 2022
                    </td>
                    <td style="width: 359px; height: 29px;">
                        <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_12_04.jpg')}}" width="359" height="29" alt="">
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="width: 800px; height: 36px;">
            <img style="display: block; border: 0;" src="{{asset('assets/mail/cupon_12_05.jpg')}}" width="800" height="36" alt="">
        </td>
    </tr>
</table>
</body>
</html>

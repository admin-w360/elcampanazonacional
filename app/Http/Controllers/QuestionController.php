<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Traits\HasResponseJson;
use Illuminate\Support\Facades\Request;


class QuestionController extends Controller
{
    use HasResponseJson;

    public function __invoke(Request $request)
    {
        try {
            $games = Question::all();
            return $this->success($games, "get all questions");
        }catch (\Exception $e){
            return $this->error("Error get questions", $e->getMessage());
        }
    }

}

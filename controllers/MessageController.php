<?php

namespace app\controllers;

use yii\web\Controller;
use app\models\Cafe;

class MessageController extends Controller{
    public function actionIndex(){
        $cafes = Cafe::find()->all();
        return $this->render('index', compact('cafes'));
    }
}
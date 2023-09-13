<?php

namespace app\models;

use yii\db\ActiveRecord;

class Cafe extends ActiveRecord{

    public static function tableName(){
        return 'cafe';
    }
}
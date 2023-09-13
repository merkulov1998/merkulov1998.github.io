<?php

namespace app\models;

use yii\db\ActiveRecord;

class Message extends ActiveRecord
{
    public $id;
    public $text;
    public $id_cafe;
    
    public static function tableName()
    {
        return 'message';
    }

    public function rules()
    {
        return [
            [['id', 'text', 'id_cafe'], 'required'],
            [['id', 'id_cafe'], 'integer'],
            [['text'], 'string', 'max' => 255],
        ];
    }
/*
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'text' => 'Текст сообщения',
            'id_cafe' => 'ID кафе',
        ];
    }
    */
    public function getCafe()
    {
        return $this->hasOne(Cafe::class, ['id_cafe' => 'id_cafe']);
    }
}
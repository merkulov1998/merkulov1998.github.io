<?php

namespace app\models;

use yii\base\Model;

class MessageForm extends Model
{
    public $id;
    public $text;
    public $id_cafe;

    public function rules()
    {
        return [
            [['id', 'text', 'id_cafe'], 'required'],
            [['id', 'id_cafe'], 'integer'],
            [['text'], 'string', 'max' => 255],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'text' => 'Text',
            'id_cafe' => 'Cafe ID',
        ];
    }
}
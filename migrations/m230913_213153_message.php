<?php

use yii\db\Migration;

/**
 * Class m230909_201753_message
 */
class m230909_201753_message extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('message', [
            'id' => $this->primaryKey(),
            'text' => $this->text(),
            'id_cafe' => $this->integer(),
        ]);
    
        $this->addForeignKey(
            'fk-message-id_cafe',
            'message',
            'id_cafe',
            'cafe',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m230913_213153_message cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    */
}

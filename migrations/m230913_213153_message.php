<?php

use yii\db\Migration;

/**
 * Class m230909_201753_messages
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
            'fk-messages-id_cafe',
            'messages',
            'id_cafe',
            'cafes',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m230913_213153_messages cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m230909_201753_messages cannot be reverted.\n";

        return false;
    }
    */
}

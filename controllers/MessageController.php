<?php

namespace app\controllers;
use Yii;
//use Longman\TelegramBot\Telegram;
use yii\web\Controller;
use app\models\Messages;
use app\models\MessageForm;
use yii\web\NotFoundHttpException;
use app\models\Cafe;

class MessageController extends Controller{
    public function actionCreate()
{
    $model = new MessageForm(); // Предположим, что у вас есть форма для создания записи

    if ($model->load(Yii::$app->request->post()) && $model->validate()) {
        // Если форма успешно отправлена и прошла валидацию

        // Создание нового экземпляра модели Message
        $message = new Message();
        $message->id = $model->id;
        $message->text = $model->text;
        $message->id_cafe = $model->id_cafe;

        if ($message->save()) {
            // Если запись успешно сохранена
            //$telegram = new Telegram('API_KEY', 'BOT_USERNAME');
            //$chatId = 'YOUR_CHAT_ID';
            //$message = 'Новое сообщение: ' . $model->text;
            //$telegram->sendMessage($chatId, $message);
            return $this->redirect(['view', 'id' => $message->id]);
            // Перенаправить пользователя на страницу просмотра созданной записи
        }
    }
    
    // Если запрос GET или форма не прошла валидацию, отобразить форму создания записи снова
    return $this->render('create', ['model' => $model]);

}
public function actionView($id=1, $version=null)
    {
        //$model = Message::find()->all();
        $model = Cafe::findOne($id);
    
        return $this->render('view', ['model' => $model]);
       
    }
    public function actionIndex(){
        $cafes = Cafe::find()->all();
        return $this->render('index', compact('cafes'));
    }
    protected function findModel($id)
    {
        if (($model = Message::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
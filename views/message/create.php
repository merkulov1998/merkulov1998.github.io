<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;

?>

<h1>Create Message</h1>

<?php $form = ActiveForm::begin(); ?>

<?= $form->field($model, 'id')->textInput() ?>

<?= $form->field($model, 'text')->textarea(['rows' => 5]) ?>

<?= $form->field($model, 'id_cafe')->textInput() ?>

<div class="form-group">
    <?= Html::submitButton('Create', ['class' => 'btn btn-primary']) ?>
</div>

<?php ActiveForm::end(); ?>
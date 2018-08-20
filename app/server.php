<?php

$name = $_POST['name'];
//  $name = $_POST['name'];
//  $phone = $_POST['phone'];

 echo json_encode($name);

//  $disturb = $_POST['dont-disturb'];
//  $disturb = isset($disturb) ? 'Нет' : 'Да';

//  $mail_message = '
//  <html>
//      <head>
//          <title>Заявка</title>
//      </head>
//      <body>
//          <h2>Заказ</h2>
//          <ul>
//              <li>Имя: ' . $name . '</li>
//              <li>Email: ' . $phone . '</li>
//          </ul>
//      </body>
//  </html>    
//  ';

//  $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
//  "MIME-Version: 1.0" . "\r\n" .
//  "Content-type: text/html; charset=UTF-8" . "\r\n";

//  $mail = mail('maxim_91@inbox.ru', 'Заказ', $mail_message, $headers);

    // if ($name) {
    //     $data['status'] = "OK";
    //     $data['mes'] = "Письмо успешно отправлено";
    // }else{
    //     $data['status'] = "NO";
    //     $data['mes'] = "На сервере произошла ошибка";
    // }


    // echo json_encode($data);
?>
<?php
/*
if (isset($_POST['submit'])) {
    $to  = "<verstka.alexander@seo-zharkov.ru>, " ; 
    $to .= "verstka.alexander@seo-zharkov.ru>"; 

    $subject = "Заявка с сайта"; 

    $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
    $headers .= "From: От кого письмо <info@boxwall.ru>\r\n"; 

    $message = $_POST['phone'];
    mail($to, $subject, $message, $headers);

}*/

$method = $_SERVER['REQUEST_METHOD'];
$c = true;

$project_name = trim($_POST["project_name"]);
$email_sender = trim($_POST["email_sender"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);

foreach ( $_POST as $key => $value ) {
  if ( is_array($value) ) {
    $value = implode(", ", $value);
  }
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e2dddd 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e2dddd 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$email_sender.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

if (mail($admin_email, adopt($form_subject), $message, $headers )) {
    http_response_code(200);
    echo "Сообщение отправлено.";
} else {
    http_response_code(400);
    echo "Ошибка. Данные не отправлены.";
};
?>
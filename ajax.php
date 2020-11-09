<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/SMTP.php';

$data = $_POST;
$action = $data['action'];
switch ($action) {
    case 'ifeed':
        echo json_encode(array(
            'status' => sendEmail()
        ));
        exit();
        break;
    case 'callback':
        echo json_encode(array(
            'status' => sendEmail()
        ));
        exit();
        break;
    case 'question':
        echo json_encode(array(
            'status' => sendEmail()
        ));
        exit();
        break;
    case 'price':
        echo json_encode(array(
            'status' => sendEmail()
        ));
        exit();
        break;
    case 'solution':
        echo json_encode(array(
            'status' => sendEmail()
        ));
        exit();
        break;
    case 'sendEmail':
        echo json_encode(array(
            'status' => sendEmail()
        ));
        exit();
        break;

    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}

function sendEmail()
{

    ob_start();
    ?>
    <h3><?= $_POST['theme'] ?></h3>
    <table>
        <tr>
            <td>
                Имя: <?= $_POST['name'] ?>
            </td>
        </tr>
        <? if (!empty($_POST['tel'])): ?>
            <tr>
                <td>
                    Телефон: <?= $_POST['tel'] ?>
                </td>
            </tr>
        <? endif; ?>
        <? if (!empty($_POST['email'])): ?>
            <tr>
                <td>
                    Email: <?= $_POST['email'] ?>
                </td>
            </tr>
        <? endif; ?>
        <? if (!empty($_POST['comment'])): ?>
            <tr>
                <td>
                    Комменатрий: <?= $_POST['comment'] ?>
                </td>
            </tr>
        <? endif; ?>
    </table>
    <?
    $html = ob_get_contents();
    ob_end_clean();

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    $mail->CharSet = $mail::CHARSET_UTF8;

    try {
        //Recipients
        $mail->setFrom('info@mrcable.ru', 'Mailer');
        $mail->addAddress('m.batyrov@mrcable.ru');              // Name is optional

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $_POST['theme'];
        $mail->Body = $html;

        $mail->send();
        return true;
    } catch (Exception $e) {
        die(print_r($e));
        return false;
    }
}


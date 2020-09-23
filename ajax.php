<?php
header('Content-Type: application/json');

$data = $_POST;
$action = $data['action'];
switch ($action) {
    case 'ifeed':
        echo json_encode(array(
            'status' => true
        ));
        exit();
        break;
    case 'callback':
        echo json_encode(array(
            'status' => true
        ));
        exit();
        break;
    case 'question':
        echo json_encode(array(
            'status' => true
        ));
        exit();
        break;
    case 'price':
        echo json_encode(array(
            'status' => true
        ));
        exit();
        break;
    case 'solution':
        echo json_encode(array(
            'status' => true
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


<?php
// Configuração de cabeçalhos para permitir CORS (se necessário) e retornar JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Trata requisições OPTIONS (preflight CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Método não permitido. Utilize o método POST."
    ]);
    exit();
}

// Obtém o corpo da requisição JSON
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

// Validação dos dados
$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$subject = isset($input['subject']) ? trim($input['subject']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Por favor, preencha todos os campos obrigatórios."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Formato de e-mail inválido."
    ]);
    exit();
}

// Simulando o envio de e-mail ou salvamento em banco de dados
// Em produção, você pode usar a função mail() do PHP ou bibliotecas como PHPMailer:
// $to = "contato@mlinfotech.com.br";
// $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
// mail($to, $subject, $message, $headers);

// Retorna uma resposta de sucesso simulada
http_response_code(200);
echo json_encode([
    "success" => true,
    "message" => "Mensagem enviada com sucesso! A equipe da ML InfoTech entrará em contato em breve."
]);

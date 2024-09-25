<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8');

    // Initialize an array for errors
    $errors = [];

    // Validate name
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    // Validate email
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "A valid email address is required.";
    }

    // Validate message
    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    // If no validation errors, proceed with further processing (e.g., sending email)
    if (empty($errors)) {
        // Prepare email headers and body
        $to = "info@gordonsbaysecurity.co.za";  // Your destination email
        $subject = "New Contact Form Submission from $name";
        $body = "You have received a new message from the contact form.\n\n"
              . "Name: $name\n"
              . "Email: $email\n"
              . "Message:\n$message";
        $headers = "From: $email\r\nReply-To: $email";

        // Try to send the email
        if (mail($to, $subject, $body, $headers)) {
            // Respond with success message
            echo json_encode(["status" => "success", "message" => "Your message was sent successfully."]);
        } else {
            // Respond with failure message
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => "Failed to send your message. Please try again later."]);
        }
    } else {
        // Respond with validation errors
        http_response_code(400);
        echo json_encode(["status" => "error", "errors" => $errors]);
    }
} else {
    // Respond with method not allowed error
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>

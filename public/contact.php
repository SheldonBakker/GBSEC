<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user input to prevent XSS and other injection attacks
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        echo "All required fields (Name, Email, Message) must be filled!";
        exit;
    }

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit;
    }

    // Set email parameters
    $to = "your-email@example.com"; // Change to your email address
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $email_subject = "New Contact Form Submission: " . (!empty($subject) ? $subject : 'No Subject');
    $email_body = "You have received a new message from $name ($email):\n\n$message";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "success"; // Use this to show success in the front-end
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}

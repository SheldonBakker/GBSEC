<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the inputs (basic example)
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Process the form data (e.g., send email, save to database, etc.)
        $to = "your-email@example.com"; // Replace with your email address
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message. Please try again.";
        }
    } else {
        echo "Please fill in all fields correctly.";
    }
} else {
    echo "Invalid request method.";
}
?>

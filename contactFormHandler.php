<<?php 
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];


	$email_from = '$visitor_email.\n';

	$email_subject = "CHS_Website - New Form Submission";

	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email.\n".
						"User Message: $message.\n";


	$to = "22jpise@aes.ac.in, 21ibelkhodja@aes.ac.in, mdelfino@aes.ac.in";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: contactInfo.html")

?>
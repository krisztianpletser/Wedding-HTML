<?php

	$name = @trim(stripslashes($_POST['name'])); 
	$email = @trim(stripslashes($_POST['email']));
	$phone = @trim(stripslashes($_POST['phone']));
	$address = @trim(stripslashes($_POST['address']));
	$message = @trim(stripslashes($_POST['message'])); 

	$email_from = $email;
	$email_to = 'yourmail@site.com';//replace with your email

	$body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Phone: ' . $phone . "\n\n" . 'Address: ' . $address . "\n\n" . 'Message: ' . $message;

	$success = @mail($email_to, $body, 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Phone: ' . $phone . "\n\n" . 'Address: ' . $address . "\n\n" . 'Message: ' . $message);
	
?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<script>alert("Thank you for contact us. As early as possible  we will contact you.");</script>
	<meta HTTP-EQUIV="REFRESH" content="0; url=../index.html"> 
</head>
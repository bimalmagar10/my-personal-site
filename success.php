<?php 
   $name = $POST['name'];
   $email = $POST['email'];
   $phone = $POST['phone'];
   $message = $POST['message'];
   if(empty($name) OR empty($email) OR empty($phone) OR empty($message)){
   	header("Location:https://bimalthapamagar.com.np/");
   	exit;
   }
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
<<<<<<< HEAD:success.php
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
=======
	<meta http-equiv="X-UA-Compatible" content="IE=edge
>>>>>>> c8dcd216b2b75d4dca3f678f48a3fce0e99f3572:success.html
	<meta name=viewport content="width=device-width, initial-scale=1">
	<title>Bimal Thapa Magar | Thank You</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<section class="section-success">
		<div class="success__content">
			<figure class="success__figure">
				<img src="sass/vendor/img/success.svg" alt="Success Message Image" class="success__img">
			</figure>
			<p class="success__text">THANK YOU! <br>Your message has been sent.</p>
			<div class="success__back">
				<a href="/" class="success__back--link">&larr;&nbsp;Back to site</a>
			</div>			
		</div>
	</section>
</body>
</html>
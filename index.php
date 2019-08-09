<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: NeilMackay contact form'; 
    $to = 'neilmackay01@gmail.com'; 
    $subject = 'New contact submission';
    $human = $_POST['human'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
    if ($name != '' && $email != '') {
        if ($human == '4') {				 
            if (mail ($to, $subject, $body, $from)) { 
	        echo '<p>Your message has been sent!</p>';
	    } else { 
	        echo '<p>Something went wrong, go back and try again!</p>'; 
	    } 
	} else if ($_POST['submit'] && $human != '4') {
	    echo '<p>You answered the anti-spam question incorrectly!</p>';
	}
    } else {
        echo '<p>You need to fill in all required fields!!</p>';
    }
}
?>
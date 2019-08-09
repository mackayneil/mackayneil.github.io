<!-- Used for when site is on a hosted platform as Github doesn't support PHP
Just need to add action="index.php"  and  
<label>*What is 2+4? (Anti-spam)</label> 
<input name="human" placeholder="Type Here">
to form -->
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: NeilMackay contact form'; 
    $to = 'neilmackay01@gmail.com'; 
    $subject = 'New contact submission';
    $human = $_POST['human'];

    		
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] && $human == '4') {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Your message has been sent!</p>';
	} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
	} 
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>

<?php
    $dsn = "mysql:host=localhost; dbname=asm";
	$username = "root";
	$password = "123";
	try{
		$conn = new PDO($dsn, $username, $password);
		$conn->setAttribute(PDO::ATTR_PERSISTENT, true);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);   
        echo " <h1> Welcome to Bao Khanh's e-commerce website ! </h1>"  ;       
	}catch(PDOException $ex) {
		echo "Connection error: " . $ex->getMessage();	
	}
?>
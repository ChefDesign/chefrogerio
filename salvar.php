<?php
error_reporting(0);
$email = $_POST['email'];


if(isset($email)){
		adicionar($email,$tipo);
}

function adicionar($email,$tipo)
{
    $servername = "localhost";
    $username = "chefd689_roger";
    $password = "olivia17";
    $dbname = "chefd689_campanha";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die('<div class="sucesso"><p>Erro, por favor envie email para rogerio@chefdesign.com.br</p></div>');
    }

    $sql = "INSERT INTO proposta (email) VALUES ('".$email."')";
    if ($conn->query($sql) === TRUE) {
			// echo "<script language=javascript>alert( 'Sucesso.' );
			// window.location='index.php';
			// </script>";

    } else {
        echo "<p>";
        echo htmlentities("Por favor, mande um email para: rogerio@chefdesign.com.br");
        echo "</p><p>";
        echo htmlentities("Estamos trabalhando para que isso não ocorra.");
        echo "</p>";
    }

}

?>

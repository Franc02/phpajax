<?php 
   function connect_db() {
    $DATABASE_HOST = 'localhost';
    $DATABASE_NAME = 'gestuser';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    try {
        return new PDO('mysql:host=' . $DATABASE_HOST . ';dbname=' . $DATABASE_NAME . ';charset=utf8', $DATABASE_USER, $DATABASE_PASS);
    } catch (PDOException $exception) {
        // S'il y a une erreur avec le connexion, on arrete le script et on affiche le message d'erreur.
        die('Echéc de connexion à la base de données : ' . $exception->getMessage() . '<br/>');
    }
}
?>
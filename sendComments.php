<?php 

    include("connectdb.php"); 
    // insert data
    $nom=$_POST['nom'];
    $commentaire=$_POST['commentaire'];
    $db=connect_db();
    $insert="INSERT INTO `comments`(`nom`,`commentaire`) VALUES (:nom,:commentaire)";
    $result=$db->prepare($insert);
    $res=$result->execute(array(":nom"=>$nom,":commentaire"=>$commentaire));

    // get all data

    $request="SELECT * from comments";
    $allComments=$db->prepare($request);
    $allComments->execute();
    $listComments=$allComments->fetchAll();
    $list=array();
    for($i=0; $i<count($listComments); $i++){
       $list[$i]['nom']=$listComments[$i]['nom'];
       $list[$i]['commentaire']=$listComments[$i]['commentaire'];
    }
    echo json_encode($list);

?>
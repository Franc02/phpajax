var CONFIG = {
        url:"http://localhost:8080/phpajax/",
        auteur:"Cyprien"
};



function send_comments(){

}

function getAllComments(){

}

$(document).ready(function(){
    $("#send_form").click(function(){
        $nom=document.getElementById("nom").value;
        $commentaire=document.getElementById("commentaire").value;
        $.ajax({
            url:CONFIG.url+'sendComments.php',
            method:'post',
            data:{
                nom:$nom,
                commentaire:$commentaire
            },
            dataType:'json',
           
        }).done(function(data){

            $cmt='<p>hello </p>';
            for(var i=0; i<data.length; i++){
                $cmt+= '<p>'+data[i].nom+' </p>';
                $cmt+= '<p>'+data[i].commentaire+' </p>';
            }
            $("#comments").append($cmt);
        }).fail(function(){
            console.log(data);
        });
    });

    send_comments();
    getAllComments();
});




    
 <?php    
    include("header.php");
    include("connectdb.php"); 
?>
    
 
    <body>
        <div class="container">
             <form >
                <div class="mb-3">
                    <label  class="form-label">Votre Nom</label>
                    <input type="text" id="nom" class="form-control" name="nom" >
                </div>
                <div class="mb-3">
                    <label  class="form-label">Commentaire</label>
                    <textarea class="form-control" id="commentaire"  name="commentaire" rows="3"></textarea>
                </div>
                <input id="send_form" class="btn btn-primary pull pull-left" value="comments">
           </form>

            <div id="comments" class="alert alert-primary " role="alert">
                
            </div>


        </div>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.js" integrity="sha512-8Z5++K1rB3U+USaLKG6oO8uWWBhdYsM3hmdirnOEWp8h2B1aOikj5zBzlXs8QOrvY9OxEnD2QDkbSKKpfqcIWw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="test.js"></script>
        
    </body>

</html>
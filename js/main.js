$ (document).ready( function(){
    $("#image1a").click(function(){
        $("#image1b").show(1000);
        $("#image1a").hide(1000);
    });
    
    $("#image1b").click(function(){
        $("#image1a").show(1000);
        $("#image1b").hide(1000);
    });
    $("#image2a").click(function(){
        $("#image2b").show(1000);
        $("#image2a").hide(1000);
    });
    $("#image2b").click(function(){
        $("#image2a").show(1000);
        $("#image2b").hide(1000);
    });
    $("#image3a").click(function(){
        $("#image3b").show(1000);
        $("#image3a").hide(1000);
    });
    $("#image3b").click(function(){
        $("#image3a").show(1000);
        $("#image3b").hide(1000);
    });
   $ (".image1").mouseover(function () {
       $("#work").show()
   });

     $ (".image1").mouseout(function () {
       $("#work").hide();
       
   })
    $ (".image2").mouseover(function () {
        $("#work").show()
    });
 
      $ (".image2").mouseout(function () {
        $("#work").hide();
        
    })
})
 $(document).ready(function () {
    $ (".image3").mouseover(function () {
        $("#work").show(1000)
    });
 
      $ (".image13").mouseout(function () {
        $("#work").hide(1000);
        
    })
 
 
    $ (".image4").mouseover(function () {
        $("#work").show(1000)
    });
 
      $ (".image4").mouseout(function () {
        $("#work").hide(1000);
        
    })
 
    $ (".image5").mouseover(function () {
        $("#work").show(1000)
    });
 
      $ (".image5").mouseout(function () {
        $("#work").hide(1000);
        
    })
 
    $ (".image6").mouseover(function () {
        $("#work").show(1000)
    });
 
      $ (".image6").mouseout(function () {
        $("#work").hide(1000);
        
    })
 
    $ (".image7").mouseover(function () {
        $("#work").show(1000)
    });
 
      $ (".image7").mouseout(function () {
        $("#work").hide(1000);
        
    })

    $ (".image8").mouseover(function () {
        $("#work").show(1000)
    });
 
      $ (".image8").mouseout(function () {
        $("#work").hide(1000);
        
    })
 
    
      $ ("#contact").submit(function ( )   {
          var Name =$("#name").value();
          var Email =$("#email").value();
        alert( " THANK YOU FOR CONTACTING US.WE HAVE GLADLY RECIEVED YOUR MESSAGE ");
        
      })   
      })

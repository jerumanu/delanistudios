$ (document).ready( function(){
    $("#image1a").click(function(){
        $("#image1b").slide().show(1000);
        $("#image1a").slideUp().hide(1000);
    });
    
    $("#image1b").click(function(){
        $("#image1a").slideDown().show(1000);
        $("#image1b").slideUp().hide(1000);
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
        $("#image3a").show();
        $("#image3b").hide();
    });
   $ (".image1").mouseover(function () {
       $("#work1").show()
   });

     $ (".image1").mouseout(function () {
       $("#work1").hide();
       
   })
    $ (".image2").mouseover(function () {
        $("#work2").show()
    });
 
      $ (".image2").mouseout(function () {
        $("#work2").hide();
        
    })

    $ (".image3").mouseover(function () {
        $("#work3").show()
    });
 
      $ (".image3").mouseout(function () {
        $("#work3").hide();
        
    })
 
 
    $ (".image4").mouseover(function () {
        $("#work4").show()
    });
 
      $ (".image4").mouseout(function () {
        $("#work4").hide();
        
    })
 
    $ (".image5").mouseover(function () {
        $("#work5").show()
    });
 
      $ (".image5").mouseout(function () {
        $("#work5").hide();
        
    })
 
    $ (".image6").mouseover(function () {
        $("#work6").show()
    });
 
      $ (".image6").mouseout(function () {
        $("#work6").hide();
        
    })
 
    $ (".image7").mouseover(function () {
        $("#work7").show()
    });
 
      $ (".image7").mouseout(function () {
        $("#work7").hide();
        
    })

    $ (".image8").mouseover(function () {
        $("#work8").show()
    });
 
      $ (".image8").mouseout(function () {
        $("#work8").hide();
        
    })
    $("button").click(function () {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      if (name === "") {
        alert("Please Insert your name")
      } else
           if(email === ""){
          alert("Enter your Email")
      }else
         if(message === "") {
        alert("Please insert your message!")
      }else {
         alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
      }
    });
      
    
      })


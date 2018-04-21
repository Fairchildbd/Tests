$(function(){
    $('.error').hide();
    $('#successMsg').hide();
    $('#btnSubmit').on('click', submit);
    $('#btnReset').on('click', reset);

    $('#firstName').on('blur', function(){
      if ($('#firstName').val() === ""){
        $('.requiredMsg1').fadeIn(200);
      } else {
        $('.requiredMsg1').fadeOut(200);
      }
    });

    $('#lastName').on('blur', function(){
      if ($('#lastName').val() === ""){
        $('.requiredMsg2').fadeIn(200);
      } else {
        $('.requiredMsg2').fadeOut(200);
      }
    });

    $('#emailAddress').on('blur', function(){
      if ($('#emailAddress').val() === ""){
        $('.requiredMsg3').fadeIn(200);
      } else {
        $('.requiredMsg3').fadeOut(200);
      }
    });

    $('#emailAddress').on('blur', function(){
    if ($('#emailAddress').val().indexOf('@') == -1) {
        $('.emailMsg').fadeIn(200);
    } else {
        $('.emailMsg').fadeOut(200);
    }
    });

    $('#emailAddress').on('blur', function(){
    if ($('#emailAddress').val().indexOf(".com") == -1) {
        $('.emailMsg').fadeIn(200);
    } else {
        $('.emailMsg').fadeOut(200);
    }
    });

    $('#howDidYou').on('blur', function(){
      if ($('#howDidYou').val() === ""){
        $('.requiredMsg4').fadeIn(200);
      } else {
        $('.requiredMsg4').fadeOut(200);
      }
    });

    $('#myTextArea').on('blur', function(){
      if ($('#myTextArea').val() === ""){
        $('.requiredMsg5').fadeIn(200);
      } else {
        $('.requiredMsg5').fadeOut(200);
      }
    });

    $('#terms').on('blur', function(){
        if($(this).is(":checked")){
            $('.requiredMsg6').fadeIn(200);
        }
        else if($(this).is(":not(:checked)")){
            $('.requiredMsg6').fadeOut(200);
        }
    });

    function submit(){
      $('#successMsg').show();
      $.ajax({
          url:'/AddEntry',
          method:'POST',
          success: function(response){},
          failure:function(response){}
        });
    }

    function reset(){
      document.getElementById("myForm").reset();
    }
});

$(document).ready(function () {

    var mySlider;
    document.getElementById("startPage").style.display = 'block';
    document.getElementById("slides").style.display = 'none';
    document.getElementById("fixedbutton").style.display = 'none';
    document.getElementById("thanksform").style.display = 'none';
  

    $('#btnStart').click(function () {

        document.getElementById("startPage").style.display = 'none';
        document.getElementById("slides").style.display = 'block';
        document.getElementById("fixedbutton").style.display = 'block';
        document.getElementById("thanksform").style.display = 'none';
        mySlider = slider('.slides');
       
    });

    $('#slides input[type="text"]').blur(function () {
        if (!$(this).val()) {

            $(this).parent().children(".toolbtn").addClass("invalid");
          
            return false;
        } else {
            if ($(this).parent().children(".toolbtn").hasClass('invalid')) {
                $(this).parent().children(".toolbtn").removClass("invalid");
            }
           
        }
    });

    function validateFields() {

        var slideId = 0;
        var requiredFields = [];
        $('#slides input[type="text"]').each(function () {

            if (!$(this).val()) {
                requiredFields.push($(this).attr('id'));
            }

            if (requiredFields.length > 0) {
                slideId = requiredFields[0];
            }
        });

            return slideId;

    }


   

    $('#startSurveyAgain').click(function () {
        window.location.reload();
    });

    $('#btnSubmit').click(function () {
        var slideId = 0;
        var requiredFields = [];
        var surveyansList = [];
        $('#slides input[type="text"]').each(function () {


            if (!$(this).val()) {
                requiredFields.push($(this).attr('id'));
            }

          
            var ques = $(this).siblings('.label_name').attr('data-label');
            let surveyAnswers = {
                SurveryQuestionId: $(this).attr('id'),
                SurveyQuestionAnswer: $(this).val(),
                SetId: Math.floor(Math.random() * 345345345345), //generating random set ids
                SurveryQuestionName: ques
            };

            surveyansList.push(surveyAnswers);
        });

        if (requiredFields.length > 0) {
            slideId = requiredFields[0];
        }
    

        if (slideId > 0) {

            var sId = '#' + $('#' + slideId).parent().parent().parent().attr('id');
            mySlider.gotoSlide(sId);
           
        }

        else {

            document.getElementById("startPage").style.display = 'none';
            document.getElementById("slides").style.display = 'none';
            document.getElementById("fixedbutton").style.display = 'none';
            document.getElementById("thanksform").style.display = 'block';

        }
    });

});
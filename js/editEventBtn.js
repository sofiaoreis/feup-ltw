

$('document').ready(function() {

  $( "#datepicker" ).datepicker();

  $("#event_title_edit_btn").click(function() {
    console.log("ugh");
    $("#event_title_edit").before('<section id="event_title_dynamic"> <label><span>New title :</span><input id="event_name_edit_dynamic" type="text" name="name_dym" value="'+$("#event_title_edit_h1").text()+'"/><button type="button" id="event_name_done_btn_dynamic"><i class="fa fa-check"></i></button></label></section>');
    $("#event_title_edit").remove();
    $("#event_name_done_btn_dynamic").click(function() {
      var title=$("#event_name_edit_dynamic").val();
      console.log(title);
      $("#event_title_dynamic").before('<input type="hidden" name="name" value="' + title +'">');
      $("#event_title_dynamic").remove();
      console.log(title);
    });
  });

  $("#event_description_edit_btn").click(function() {
    console.log("ugh");
    $("#event_description_edit").before('<section id="event_description_dynamic"><label><span>New description :</span><input id="event_description_edit" type="text" name="description" value='+ $("#event_description_edit").text() +'/><button type="button" id="event_description_done_btn_dynamic"><i class="fa fa-check"></i></button></label></section>');
    $("#event_description_edit").remove();
    $("#event_description_done_btn_dynamic").click(function() {
      console.log("ugh");

    });
  });




  /*
    $("#addQuestion").click(function() {
        var size = $(".removeQuestion").length;
        if(size >=6){
        	alert("You can't have more than 6 questions");
        	return false;
        }
        var pntr = 'button' + questionId;
        $("#addQuestion").before("<div class='col_md_12' name='Q"+questionId+"'><input required type='text' class='question' placeholder='Question' name= 'Q" + questionId + "' id= 'question" + questionId + "'/><button class='removeQuestion' value='X' name='rmvQ" + questionId + "'><i class='fa fa_times' style='color: #00669B;'></i> </button> <button class='addAnswer' id ='button" + questionId + "' name='addAQ" + questionId + "' value='+' ><i class='fa fa_plus' style='color: #00669B;'></i> Add Answer </button></div>");
        questions[questionId] = 0;
        questionId++;
        $(".addAnswer").off('click').click(function(event) {
        	var questionN = Number($(event.target).attr("name").substring(5, 6));
        	var answerN = questions[questionN];
        	var size = $(".removeAnswer[name*='Q" + questionN + "']").length;
            if(size >=6){
            	alert("You can't have more than 6 answers");
            	return false;
            }
            questions[questionN] ++;
            $(event.target).before("<div class='col_md_12' name='Q"+questionN+"A"+answerN+"'><input type='text' class='answer' placeholder='Answer' required name='Q" + questionN + "A" + answerN + "'/><button class='removeAnswer' value='X' name='rmvQ" + questionN + "A" + answerN + "' > <i class='fa fa_times' style='color: #00669B;'></i> </button>");
            $(".removeAnswer").off('click').click(function(event) {

                var nm = $(event.target).attr("name");
                var qs = Number(nm.substring(4, 5));
                var ans = Number(nm.substring(6, 7));
                var size = $(".removeAnswer[name*='Q" + qs + "']").length;
                if (size <= 2) {
                    alert('Must have at least 2 answers');
                    return false;
                }
                questions[qs]__;
                $("[name *='Q" + qs + "A" + ans + "']").remove();
                for (var i = (ans + 1); i < size; i++) {
                    var j = i _ 1;
                    $("[name ='Q" + qs + "A" + i + "']").attr("name", "Q" + qs + "A" + j);
                    $("[name ='rmvQ" + qs + "A" + i + "']").attr("name", "rmvQ" + qs + "A" + j);
                }
            });
        });
        $("#" + pntr).click();
        $("#" + pntr).click();
        $(".removeQuestion").off('click').click(function(event) {
            var nm = $(event.target).attr("name");
            var qs = Number(nm.substring(4, 5));
            var size = $(".removeQuestion").length;
            if (size <= 1) {
                alert('Must have at least 1 question');
                return false;
            }
            questions[qs]=0;
            questionId__;
            $("[name *='Q" + qs + "']").remove();
            for (var i = (qs + 1); i < size; i++) {
            	var size2 = $(".removeAnswer[name*='Q" + i + "']").length;
                var j = i _ 1;
                questions[j]=questions[i];
                $("[name = 'Q"+i+"']").attr("name","Q" + j);
                $("[name = 'addAQ"+i+"']").attr("name","addAQ" + j);
                $("[id = 'button"+i+"']").attr("id","button" + j);
                $("[id = 'question"+i+"']").attr("id","question" + j);
                $("[name = 'rmvQ"+i+"']").attr("name","rmvQ" + j);
                for (var k = 0; k < size2; k++) {
                	$("[name ='Q" + i + "A" + k + "']").attr("name", "Q" + j + "A" + k);
                	$("[name ='rmvQ" + i + "A" + k + "']").attr("name", "rmvQ" + j + "A" + k);
                }
            }
        });
    });
    $("#addQuestion").click();

    */
});

function get_radio_answer_calculate(name) {
    var value='';
    for(var answer_list= 0;answer_list<4;answer_list++){
        var answers=document.getElementsByName(name);
        if(answers[answer_list].checked){
            value+=answers[answer_list].value
        }
    }
    return value
}
function gap_answer_calculate() {
    var scores=[];
    var gap_question=question_types().gap_filling;

    for(var number=0;number<gap_question.length;number++){
        var model_answer=gap_question[number][1],qid=gap_question[number][0];
        var answer=document.getElementById(qid).value,score=gap_question[number][2];
        if(model_answer==answer){
            scores[scores.length]=[qid,score]
        }

    }
    return scores
}
function calculate() {

    console.log(gap_answer_calculate());



    document.getElementsByName('class')[0].focus();
    document.getElementById('score').innerText='分'
}

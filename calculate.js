function gap_answer_calculate() {
    var scores=[],gap={};
    gap.answers=question_types().gap_filling;
    for(var number=0;number<gap.answers.length;number++){
        gap.model_answer=gap.answers[number][1];
        gap.qid=gap.answers[number][0];
        gap.sub_score=gap.answers[number][2];
        gap.score=0;
        var answer=document.getElementById(gap.qid).value;
        gap_filling_judge_calculate(gap,answer);
        scores[scores.length]=[gap.qid,gap.score];

        console.log(gap.score)
    }
    return scores
}
function gap_filling_judge_calculate(gap_filling,my_answer) {
    for (var answer_number=0;answer_number<gap_filling.model_answer.length;answer_number++){
        var model_answer_array=gap_filling.model_answer[answer_number];
        if(my_answer.indexOf(model_answer_array)!=-1){
            gap_filling.score+=gap_filling.sub_score
        }
    }
    return gap_filling.score
}
/*function get_radio_answer_calculate(name) {
    var value='';
    for(var answer_list= 0;answer_list<4;answer_list++){
        var answers=document.getElementsByName(name),option=(answers[answer_list]).checked;
        if(option){
            value+=answers[answer_list].value
        }
    }
    return value
}
function choice_calculate() {
    var scores=[];
    var gap_question=question_types().choice;
    for(var number=0;number<gap_question.length;number++){
        var model_answer=gap_question[number][1],qid=gap_question[number][0];
        var answer=get_radio_answer_calculate(qid),score=gap_question[number][2];
        if(model_answer==answer){
            scores[scores.length]=[qid,score]
        }
        console.log(answer)
    }
    return scores
}*/
function calculate() {
    gap_answer_calculate();



    document.getElementsByName('class')[0].focus();
    document.getElementById('score').innerText='分'
}

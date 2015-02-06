function special_gap_filling_answer_adjust_calculate(qid) {
    var answers=document.getElementsByName(qid),answer='';
    for (var qid_list=0;qid_list<answers.length;qid_list++){
        answer+=answers[qid_list].value
    }
    return answer
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
function gap_answer_adjust_calculate() {
    var scores=[],gap={};
    gap.answers=question_types().gap_filling;
    for(var number=0;number<gap.answers.length;number++){
        gap.model_answer=gap.answers[number][1];
        gap.qid=gap.answers[number][0];
        gap.sub_score=gap.answers[number][2];
        gap.score=0;
        var answer=special_gap_filling_answer_adjust_calculate(gap.qid);
        gap_filling_judge_calculate(gap,answer);
        scores[scores.length]=[gap.qid,gap.score];
    }
    return scores
}
function get_choice_answer_calculate(name) {
    var value='',answers=document.getElementsByName(name);
    for(var answer_list= 0;answer_list<answers.length;answer_list++){
        if((answers[answer_list]).checked){
            value+=answers[answer_list].value
        }
    }
    return value
}
function choice_adjust_calculate() {
    var scores=[];
    var gap_question=question_types().choice;
    for(var number=0;number<gap_question.length;number++){
        var model_answer=gap_question[number][1],qid=gap_question[number][0];
        var answer=get_choice_answer_calculate(qid),score=gap_question[number][2];
        if(model_answer==answer){
            scores[scores.length]=[qid,score]
        }
    }
    return scores
}
function sub_score_calculate(score_array) {
    var sub=0;
    for(var list=0;list<score_array.length;list++){
        sub+=score_array[list][1]
    }
    return sub
}
function customer() {
    var customer_required=document.getElementsByName('required'),judge=true;
    for(var customer_number= 0;customer_number<customer_required.length;customer_number++){
    if(customer_required[customer_number].value==''){
        judge=false;
    }
    }
    return judge
}
function calculate() {
    var gap_scores=sub_score_calculate(gap_answer_adjust_calculate());
    var choice_scores=sub_score_calculate(choice_adjust_calculate());
    var total=gap_scores+choice_scores,custom=customer();
    document.getElementsByName('required')[0].focus();
    if(custom){
        document.getElementsByName('score')[0].disabled=true;
        document.getElementById('score').innerText=total+'分'
    }
    else{
        alert('请确定班级、学号、姓名')
    }
}

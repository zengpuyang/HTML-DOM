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
function save_answer_calculate(name,value) {

}
function judge_calculate() {
    var model_answer=answers(),total_score= 0;
    for(var qid= 0;qid<model_answer.length;qid++){
    }





    document.getElementsByName('class')[0].focus();
    document.getElementById('score').innerText='分'
}

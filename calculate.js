function radio_calculate(name,value) {
    document.getElementById(name).innerText=value
}
function checkbox_calculate(name) {
    var value='';
    for(var list_number= 0;list_number<4;list_number++){
        var list=document.getElementsByName(name);
        if(list[list_number].checked){
            value+=list[list_number].value
        }
    }
    document.getElementById(name).innerText=value
}
function judge_calculate() {

}
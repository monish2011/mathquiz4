function send(){
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_anwser = parseInt("number1")*parseInt("number2"); 

}
question_number = "<h4>" + number1 +  "x"  + number2 +"</h4>";
input_box = "<br> Anwser: <input type='text' id = 'input_check_box'";
button = "<br><br> <button class='btn btn-info' onclick = 'check()'> Check </button>";
row = question_number + input_box + button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").innerHTML="";
document.getElementById("number2").innerHTML="";
function check(){
    get_awnser=document.getElementById("input_check_box").value;
    if(get_awnser==actual_awnser){
        if(anwser_turn == "player1"){
            update_player1_score= playerA_score+1;
        }

    }
}
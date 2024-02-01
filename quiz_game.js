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
        if (anwser == word){
            if(anwser_turn == "player_1"){
                playerA_score = playerA_score + 1;
                document.getElementById("playerA_score").innerHTML = playerA_score;
    
            }
            else
                if(anwser_turn == "player_B"){
                    playerB_score = playerB_score + 1;
                    document.getElementById("playerB_score").innerHTML = playerB_score;
        
    
            }
        }
            if(question_turn == "player_A"){
                question_turn = "player_B";
                document.getElementById("player_question").innerHTMl = "Question turn -" + playerB_name;
    
    
            }
            else{
                
                    question_turn = "player_A";
                    document.getElementById("player_question").innerHTMl = "Question turn -" + playerA_name;
        
        
                }
                if(anwser_turn == "playerA"){
                    anwser_turn = "playerB";
                    document.getElementById("player_anwser").innerHTML = "Anwser turn - " + playerB_name;
                }
                else{
                    anwser_turn = "playerA";
                    document.getElementById("player_anwser").innerHTML = "Anwser turn - " + playerA_name;
                }
    
        document.getElementById("output").innerHTML="";
    
        }
}
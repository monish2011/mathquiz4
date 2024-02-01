function addUser() {
    playerA_name = document.getElementById("playerA_name_input").value;
    playerB_name = document.getElementById("playerB_name_input").value;
    
    localStorage.setItem('playerA_name', playerA_name);
    localStorage.setItem('playerB_name', playerB_name);
    
    window.location = "quiz_game_page.html";
}

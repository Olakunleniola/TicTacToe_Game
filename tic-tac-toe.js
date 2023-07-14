// use strict

// WELCOME SECTION

$("#oops").click(() => {
    $("#msg").text("Oops Computer Not Available Try Again Later")
            .css("text-transform","capitalize")
            .css("color", "red")
})

$("#start").click(() => {
    $(".start-question").fadeOut(2000)
    $(".marker").fadeIn(3000)
})



// MARKER AND PLAYER INPUT SECTION 
let ply1_name = ''
let ply2_name = ''
let = ply1_marker = 'A'
let = ply2_marker = 'C'

$("#inp1").blur(function(){
    if ($(this).val()[0] != " ") {
        $(this).val($(this).val().toUpperCase())
        ply1_name = $(this).val()
        ply1_marker = $(this).val()[0]
        $(".p1n h3").text(`${ply1_name}: `)
    }
    else {
        $("#warn").text("Oops name cannot start with a space")
        $(this).val("")
    }
})


$("#inp2").blur(function() {
    if ($(this).val()[0] != " ") {
        $(this).val($(this).val().toUpperCase())
        ply2_name = $(this).val()
        ply2_marker = $(this).val()[0]
        $(".p2n h3").text(`${ply2_name}: `)
    }
    else {
        $("#warn").text("Oops name cannot start with a space")
        $(this).val("")
    }
})

function enterGame() {
    if (ply1_name !== "" && ply2_name !== ""){
        $(".marker").fadeOut()
        $(".game-mode").fadeIn(4000)

    }else {
        $("#warn").text("Oops You must enter a Your Name")
    }    

}



// GAME LOGIC SECTION 

const btn1 = $("#game-a")
const btn2 = $("#game-b")
const btn3 = $("#game-c")
const btn4 = $("#game-d")
const btn5 = $("#game-e")
const btn6 = $("#game-f")
const btn7 = $("#game-g")
const btn8 = $("#game-h")
const btn9 = $("#game-i")

let play_board = ["","","","","","","","","",""]
let player1_score = $(".p1-score")
let player2_score = $(".p2-score")
let round = $(".round span")

function check_win( board, mark){
        if (board[1] == mark && board[2] == mark && board [3] == mark){
            btn1.css("color", "red")
            btn2.css("color", "red")
            btn3.css("color", "red")
            return true
        }

        else if(board[4] == mark && board[5] == mark && board[6] == mark) {
            btn4.css("color", "red")
            btn5.css("color", "red")
            btn6.css("color", "red")
            return true
        }
        else if (board[7] == mark && board[8] == mark && board[9] == mark) {
            btn7.css("color", "red")
            btn8.css("color", "red")
            btn9.css("color", "red")
            return true
        }
        else if (board[1] == mark && board[4] == mark && board[7] == mark) {
            btn1.css("color", "red")
            btn4.css("color", "red")
            btn7.css("color", "red")
            return true
        }
        else if(board[2] == mark && board[5] == mark && board[8] == mark) {
            btn2.css("color", "red")
            btn5.css("color", "red")
            btn8.css("color", "red")
            return true
        }
        else if(board[3] == mark && board[6] == mark && board[9] == mark) {
            btn3.css("color", "red")
            btn6.css("color", "red")
            btn9.css("color", "red")
            return true
        }
        else if(board[1] == mark && board[5] == mark && board[9] == mark) {
            btn1.css("color", "red")
            btn5.css("color", "red")
            btn9.css("color", "red")
            return true
        }
        else if(board[3] == mark && board[5] == mark && board[7] == mark) {
            btn3.css("color", "red")
            btn5.css("color", "red")
            btn7.css("color", "red")
            return true
        }
        
    
    }

function check_board_full(board) {
    for (a=1; a<board.length; a++) {
        if(board[a] === ""){
            return false
        }
    }
    return true
}

// Button Control Functions 
let play_turn = 0 
const myfunc1 = () => {
    if (play_turn == 0 ) {
        btn1.text(ply1_marker)
        play_board[1] = ply1_marker
        $("#game-a").prop("disabled", true)
        play_turn = 1
    }
    else {
        btn1.text(ply2_marker)
        play_board[1] = ply2_marker
        play_turn = 0
        $("#game-a").prop("disabled", true)

    }
}

const myfunc2 = () => {
    if (play_turn == 0 ) {
        btn2.text(ply1_marker)
        play_turn = 1
        play_board[2] = ply1_marker
        $("#game-b").prop("disabled", true)

    }
    else {
        btn2.text(ply2_marker)
        play_turn = 0
        play_board[2] = ply2_marker
        $("#game-b").prop("disabled", true)

    }
}

const myfunc3 = () => {
    if (play_turn == 0 ) {
        btn3.text(ply1_marker)
        play_turn = 1
        play_board[3] = ply1_marker
        $("#game-c").prop("disabled", true)
    }
    else {
        btn3.text(ply2_marker)
        play_turn = 0
        play_board[3] = ply2_marker
        $("#game-c").prop("disabled", true)
    }
}

const myfunc4 = () => {
    if (play_turn == 0 ) {
        btn4.text(ply1_marker)
        play_turn = 1
        play_board[4] = ply1_marker
        $("#game-d").prop("disabled", true)
    }
    else {
        btn4.text(ply2_marker)
        play_turn = 0
        play_board[4] = ply2_marker
        $("#game-d").prop("disabled", true)

    }
}

const myfunc5 = () => {
    if (play_turn == 0 ) {
        btn5.text(ply1_marker)
        play_turn = 1
        play_board[5] = ply1_marker
        $("#game-e").prop("disabled", true)

    }
    else {
        btn5.text(ply2_marker)
        play_turn = 0
        play_board[5] = ply2_marker
        $("#game-e").prop("disabled", true)

    }
}

const myfunc6 = () => {
    if (play_turn == 0 ) {
        btn6.text(ply1_marker)
        play_turn = 1
        play_board[6] = ply1_marker
        $("#game-f").prop("disabled", true)

    }
    else {
        btn6.text(ply2_marker)
        play_turn = 0
        play_board[6] = ply2_marker
        $("#game-f").prop("disabled", true)

    }
}

const myfunc7 = () => {
    if (play_turn == 0 ) {
        btn7.text(ply1_marker)
        play_turn = 1
        play_board[7] = ply1_marker
        $("#game-g").prop("disabled", true)
    }
    else {
        btn7.text(ply2_marker)
        play_turn = 0
        play_board[7] = ply2_marker
        $("#game-g").prop("disabled", true)
    }
}

const myfunc8 = () => {
    if (play_turn == 0 ) {
        btn8.text(ply1_marker)
        play_turn = 1
        play_board[8] = ply1_marker
        $("#game-h").prop("disabled", true)

    }
    else {
        btn8.text(ply2_marker)
        play_turn = 0
        play_board[8] = ply2_marker
        $("#game-h").prop("disabled", true)

    }
}

const myfunc9 = () => {
    if (play_turn == 0 ) {
        btn9.text(ply1_marker)
        play_turn = 1
        play_board[9] = ply1_marker
        $("#game-i").prop("disabled", true)

    }
    else {
        btn9.text(ply2_marker)
        play_turn = 0
        play_board[9] = ply2_marker
        $("#game-i").prop("disabled", true)

    }
}
        
//  Game play Function 

function gaming_func() {
    
    if (check_win(play_board, ply1_marker)) {
        $(".info").text(`${ply1_name} wins`)
        player1_score.text(Number(player1_score.text()) + 1)
        $(".play-button button").prop("disabled", true)
        round.text(Number(round.text())+1)
        $(".star-but").prop("disabled", false)
                       .text("Play Another Round")
                       .css("color", "white")
                       .css("backgroundColor", "blue")
    }
    
    else if (check_win(play_board, ply2_marker)) {
        $(".info").text(`${ply2_name} wins`)
        $(".play-button button").prop("disabled", true)
        player2_score.text(Number(player2_score.text()) + 1)
        round.text(Number(round.text())+1)
        $(".star-but").prop("disabled", false)
                       .text("Play Another Round")
                       .css("color", "white")
                       .css("backgroundColor", "blue")
    }



    else if (check_board_full(play_board)){
            $(".info").text("Game is a Tie")
            $(".play-button button").prop("disabled", true)
            round.text(Number(round.text())+1)
            $(".star-but").prop("disabled", false)
                       .text("Play Another Round")
                       .css("color", "white")
                       .css("backgroundColor", "blue")

    }

    else {
        if(play_turn === 0 ) {
            $(".info").text(`${ply1_name}'s turn`)    
        }else {
            $(".info").text(`${ply2_name}'s turn`)    
        }
    }


    
    
    
}

// Pre-game and Post-game Logic

$(".play-button button").prop("disabled", true)
$(".star-but").addClass("anime")

$(".star-but").click(function() {
    if($(this).text().trim() == "Start Game") {
        $(".play-button button").prop("disabled", false)
        $(this).prop("disabled", true)
        $(this).removeClass("anime")
        $(this).css("backgroundColor", "black")
        if(play_turn === 0 ) {
            $(".info").text(`${ply1_name}'s turn`)    
        }else {
            $(".info").text(`${ply2_name}'s turn`)    
        }
      }
      
    else {
        play_board = ["","","","","","","","","",""]
        $(".play-button button").text("")
        $(this).text("Start Game")
               .addClass("anime")
        $(".play-button button").css("color", "green")
                                .prop("disabled", true)
        $(".info").text("")
    }
})

$(".res-but").click(function() {
    play_board = ["","","","","","","","","",""]
    $(".play-button button").text("")
    $(".star-but").text("Start Game")
                  .prop("disabled", false)
                  .addClass("anime")
    $(".play-button button").css("color", "green")
                            .prop("disabled", true)
    $(".info").text("")
    player2_score.text("0")
    player1_score.text("0")
    round.text("0")
})




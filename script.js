window.onload = function() {
    selectQuestion()
}

function readText(localRoute) {
    let text = null
    let xmlhttp = new XMLHttpRequest()
    
    xmlhttp.open("GET", localRoute, false)
    xmlhttp.send()
    
    if (xmlhttp.status == 200) {
        text = xmlhttp.responseText
    }

    return text
}

function selectById(id) {
    return document.getElementById(id)
}

function style(id) {
    return selectById(id).style;
  }

const jsonQuestions = readText('questionsData.json')
const questions = JSON.parse(jsonQuestions)

let question
let questionCounter
let possiblesAnswers
let nquestions = []
let answers = [
    selectById("answer1"),
    selectById("answer2"),
    selectById("answer3"),
    selectById("answer4")
]
let n = 0

function selectQuestion() {
    question = questions[n]
    selectById("question").innerHTML = question.question
    randomAnswers(question)
}

function randomAnswers(question) {
    possiblesAnswers = [question.correct,question.incorrect1, question.incorrect2, question.incorrect3]
    possiblesAnswers.sort(() => Math.random()-0.5)

    selectById("answer1").innerHTML = possiblesAnswers[0]
    selectById("answer2").innerHTML = possiblesAnswers[1]
    selectById("answer3").innerHTML = possiblesAnswers[2]
    selectById("answer4").innerHTML = possiblesAnswers[3]
}

const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')

function clickOnAnswer(i) {
    if(possiblesAnswers[i] == question.correct){
        answers[i].style.background = "rgba(18, 118, 0, 0.671)"
    } else {
        answers[i].style.background = "rgba(161, 2, 2, 0.671)"
    }

    setTimeout(() => {
        restart()
    }, 2000)
}

function restart() {
    for (const answ of answers) {
        answ.style.background = "rgba(58, 58, 58, 0.862)"
    }
    n++
    if (n == 10){
        alert('Vivamos esta experiencia inolvidable juntos, te amo con toda mi vida. (Mirame que te estoy mostrando las entradas :)')
        n = 0
    }
    selectQuestion()
}

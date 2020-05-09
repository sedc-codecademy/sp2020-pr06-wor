let msg = document.getElementById('msg')
let user = document.getElementById("user-name")

// Vo otsustvo na elementi od html za prozorecot nova igra dadeni se rezultati samo za proba.
let userResult = 101;
let compResult = 75;

let quotesForWinners = [
    "Браво, успеа да победиш!",
    "УАУ, твојата игра е неверојатно добра!",
    "Секоја чест за тебе, денес ти стана збор-јунак!",
    "Само напред, никој не може да те сопре!",
    "Неверојатно, ти навистина знаеш да составуваш супер зборови!",
]

let quotesForLosers = [
    "Најдоброто нешто кога губиш е тоа што секогаш можеш да се обидеш повторно!",
    "Овој пат не успеа, но никогаш не се откажувај",
    "Изгуби, но нели си среќен што научи нов збор!",
    "Ауу, беше толку блиску до победата!",
    "Не грижи се, со малку вежбање и ти ќе станеш нов збор-јунак!"
]

function randomMsg() {
    if (userResult > compResult) {
        msg.innerHTML = quotesForWinners[Math.floor(Math.random() * quotesForWinners.length)]
    } else {
        msg.innerHTML = quotesForLosers[Math.floor(Math.random() * quotesForLosers.length)]
    }
};

randomMsg();
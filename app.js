import { rosco } from './data/questions.js';

let continueGame = true;
let rightAnswers = 0;
let wrongAnswers = 0;
let pasapalabraQuestions = [];

function randomQuestionIndex() {
  return Math.floor(Math.random() * 3);
}

function exitGame() {
  continueGame = false;
  console.log(
    `End of the game! Thank you for playing. You have guessed ${rightAnswers} questions`
  );
}

function formatAnswer(answer) {
  return answer
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function start(rosco) {
  for (const letter of rosco) {
    let randomIndex = randomQuestionIndex();
    let answer = window.prompt(letter.question[randomIndex]);
    answer = formatAnswer(answer);
    if (answer === 'end') {
      exitGame();
      break;
    } else if (answer === 'pasapalabra') {
      letter.status = 2;
      let pasapalabra = {
        pasapalabraQuestion: letter.question[randomIndex],
        pasapalabraAnswer: letter.answer[randomIndex],
        status: letter.status,
      };
      pasapalabraQuestions.push(pasapalabra);
    } else if (answer === letter.answer[randomIndex]) {
      window.alert('Correct!');
      rightAnswers++;
      letter.status = 1;
    } else {
      window.alert(`Nope! Correct answer was "${letter.answer[randomIndex]}"`);
      wrongAnswers++;
    }
  }
}

function nextRounds(pasapalabraQuestions) {
  if (continueGame) {
    window.alert('starting next round!');
    for (const question of pasapalabraQuestions) {
      if (question.status === 2 && continueGame) {
        let answer = window.prompt(question.pasapalabraQuestion);
        answer = formatAnswer(answer);
        if (answer === 'end') {
          exitGame();
          break;
        } else if (answer === question.pasapalabraAnswer) {
          window.alert('Correct!');
          rightAnswers++;
          question.status = 1;
          continue;
        } else if (answer === 'pasapalabra') {
          continue;
        } else {
          window.alert(
            `Nope! Correct answer was "${question.pasapalabraAnswer}"`
          );
          question.status = 0;
          wrongAnswers++;
          continue;
        }
      }
    }
    for (const question of pasapalabraQuestions) {
      while (question.status === 2) {
        nextRounds(pasapalabraQuestions);
      }
    }
  }
}
function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.showScore = function () {
  console.log(`${this.name} with ${this.score} right questions`);
};

const player1 = new Player('Player 1', 8);
const player2 = new Player('Player 2', 22);
const player3 = new Player('Player 3', 14);
const player4 = new Player('Player 4', 27);

function showRanking() {
  if (continueGame) {
    console.log(`Thank you for playing!
    You have guessed correctly a total of ${rightAnswers} questions and failed ${wrongAnswers} questions. See you soon!`);

    let ranking = [];
    const user = new Player('You', rightAnswers);
    ranking.push(user, player1, player2, player3, player4);
    ranking.sort(function (a, b) {
      return b.score - a.score;
    });
    console.log('Final ranking is:');
    ranking.forEach((player) => player.showScore());
  }
}

function reset() {
  if (continueGame) {
    continueGame = true;
    rightAnswers = 0;
    wrongAnswers = 0;
    pasapalabraQuestions = [];
    const startAgain = window.confirm('Want to play again?');
    if (startAgain) pasapalabraGame();
    else window.alert('Thank you for playing!');
  }
}

function pasapalabraGame() {
  start(rosco);
  nextRounds(pasapalabraQuestions);
  showRanking();
  reset();
}

pasapalabraGame();

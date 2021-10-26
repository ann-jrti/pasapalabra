console.log('working');

const rosco = [
  {
    letter: 'a',
    status: 0,
    answer: ['abducir', 'aluminio', 'asterix'],
    question: [
      'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
      'CON LA A. Su símbolo en la tabla periódica es AI',
      'CON LA A. El fiel acompañante de Obelix',
    ],
  },

  {
    letter: 'b',
    status: 0,
    answer: ['bingo', 'biblioteca', 'botiquin'],
    question: [
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
      'CON LA B. Lugar en el que se lleva a cabo el préstamo de libros',
      'CON LA B. Caja en la que se guardan las medicinas',
    ],
  },

  {
    letter: 'c',
    status: 0,
    answer: ['churumbel', 'corchea', 'clarividencia'],
    question: [
      'CON LA C. Niño, crío, bebé',
      'CON LA C. Figura musical equivalente a 1/8 del valor de la figura redonda',
      'CON LA C. Habilidad paranormal de percibir realidades visuales que no pueden ver todas las personas',
    ],
  },

  {
    letter: 'd',
    status: 0,
    answer: ['diarrea', 'Dionisio', 'drop'],
    question: [
      'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
      'CON LA D. En mitología griega, dios de la fertilidad y del vino',
      'CON LA D. Cambio repentino de ritmo en un tema musical',
    ],
  },

  {
    letter: 'e',
    status: 0,
    answer: ['ectoplasma', 'esperpento', 'extasis'],
    question: [
      'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
      'CON LA E. Género literario que se caracteriza por la presentación de una realidad deformada y grotesco',
      'CON LA E. Droga conocida también como MDMA',
    ],
  },

  {
    letter: 'f',
    status: 0,
    answer: ['facil', 'fiebre', 'fraude'],
    question: [
      'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
      'CON LA F. Principal síntoma del COVID',
      'CON LA F. Engaño económico para conseguir algún beneficio',
    ],
  },

  {
    letter: 'g',
    status: 0,
    answer: ['galaxia', 'gluten', 'google'],
    question: [
      'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
      'CON LA G. Compuesto de proteína que no puede tomar un diabético',
      'CON LA G. Motor de búsqueda que ha venido que tiene la respuesta a todo',
    ],
  },

  {
    letter: 'h',
    status: 0,
    answer: ['harakiri', 'husky', 'haiku'],
    question: [
      'CON LA H. Suicidio ritual japonés por desentrañamiento',
      'CON LA H. Raza de perro que tira de los trineos',
      'CON LA H. Poema corto japonés compuesto por 17 sílabas',
    ],
  },

  {
    letter: 'i',
    status: 0,
    answer: ['iglesia', 'isosceles', 'IPA'],
    question: [
      'CON LA I. Templo cristiano',
      'CON LA I. Tipo de triángulo que tiene 2 lados iguales',
      'CON LA I. Estilo de cerveza espumosa con alto nivel de alcohol y de lúpulo',
    ],
  },

  {
    letter: 'j',
    status: 0,
    answer: ['jabali', 'jaguar', 'jueves'],
    question: [
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      'CON LA J. Marca de coches deportivos y animal del género de las panteras',
      'CON LA J. Después del miércoles y antes del viernes',
    ],
  },

  {
    letter: 'k',
    status: 0,
    answer: ['kamikaze', 'karma', 'Shakira'],
    question: [
      'CON LA K. Persona que se juega la vida realizando una acción temeraria',
      'CON LA K. Sistema de votación en reddit',
      'CONTIENE LA K. Cantante colombiana que interpretó el himno oficial de la copa mundial de la FIFA de 2010 ',
    ],
  },

  {
    letter: 'l',
    status: 0,
    answer: ['licantropo', 'liberte', 'lugo'],
    question: [
      'CON LA L. Hombre lobo',
      'CON LA L. _ _ _ _ _ _ _, Egalité, Fraternité',
      'CON LA L. Provincia de Galicia',
    ],
  },

  {
    letter: 'm',
    status: 0,
    answer: ['misantropo', 'maquiavelo', 'mestizo'],
    question: [
      'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
      'CON LA M. Autor de la frase "El fin justifica los medios"',
      'CON LA M. Hijo de padres de diferente raza',
    ],
  },

  {
    letter: 'n',
    status: 0,
    answer: ['necedad', 'nimio', 'nebulosa'],
    question: [
      'CON LA N. Demostración de poca inteligencia',
      'CON LA N. Que tiene muy poca importancia',
      'CON LA N. Masa de materia cósmica celeste, difusa y luminosa, que tiene aspecto de nube',
    ],
  },

  {
    letter: 'ñ',
    status: 0,
    answer: ['señal', 'ñoqui', 'añada'],
    question: [
      'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
      'CON LA Ñ. Tipo de pasta italiana',
      'CONTIENE LA Ñ. La cosecha de un año, especialmente referida a la del vino',
    ],
  },

  {
    letter: 'o',
    status: 0,
    answer: ['orco', 'obvio', 'ontologia'],
    question: [
      'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
      'CON LA O. Que es muy muy evidente',
      'CON LA O. Rama de la filosofía que estudia "lo que es"',
    ],
  },

  {
    letter: 'p',
    status: 0,
    answer: ['protoss', 'pandemonium', 'persefone'],
    question: [
      'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
      'CON LA P. Capital del Infierno',
      'CON LA P. Hija de Zeus y Deméter. Reina del inframundo',
    ],
  },

  {
    letter: 'q',
    status: 0,
    answer: ['queso', 'quid', 'quimica'],
    question: [
      'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
      'CON LA Q. El punto más importante de algo',
      'CON LA Q. Ciencia que estudia la materia',
    ],
  },

  {
    letter: 'r',
    status: 0,
    answer: ['raton', 'razzmatazz', 'radioactividad'],
    question: [
      'CON LA R. Roedor que come queso',
      'CON LA R. Discoteca de Barcelona',
      'CON LA R. Reacción nuclear de descomposición instantánea que a partir de cierto umbral afecta al funcionamiento de los órganos',
    ],
  },

  {
    letter: 's',
    status: 0,
    answer: ['stackoverflow', 'siroco', 'sinfonia'],
    question: [
      'CON LA S. Comunidad salvadora de todo desarrollador informático',
      'CON LA S. Viento muy cálido y seco que sopla desde el norte de África',
      'CON LA S. Composición musical de larga duración. La n.º9 de Beethoven es muy famosa',
    ],
  },

  {
    letter: 't',
    status: 0,
    answer: ['terminator', 'tars', 'tuetano'],
    question: [
      'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
      'CON LA T. Robot principal de la película Interstellar',
      'CON LA T. Médula ósea del interior de los huesos de un animal',
    ],
  },

  {
    letter: 'u',
    status: 0,
    answer: ['unamuno', 'usuarpar', 'urano'],
    question: [
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      'CON LA U. Apropiarse de la identidad de una persona',
      'CON LA U. Séptimo planeta del sistema solar',
    ],
  },

  {
    letter: 'v',
    status: 0,
    answer: ['vikingos', 'venecia', 'vilano'],
    question: [
      'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
      'CON LA V. Ciudad que en vez de tráfico de coches tiene tráfico de embarcariones',
      'CON LA V. Flor del cardo que soplas y sus pelusas salen volando',
    ],
  },

  {
    letter: 'w',
    status: 0,
    answer: ['sandwich', 'wikipedia', 'wasabi'],
    question: [
      'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
      'CON LA W. Enciclopedia libre, reina de Internet',
      'CON LA W. Condimento japonés muy picante',
    ],
  },

  {
    letter: 'x',
    status: 0,
    answer: ['botox', 'b2', 'b3'],
    question: [
      'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
      'b2',
      'b3',
    ],
  },

  {
    letter: 'y',
    status: 0,
    answer: ['peyote', 'p2', 'p3'],
    question: [
      'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
      'y2',
      'y3',
    ],
  },

  {
    letter: 'z',
    status: 0,
    answer: ['zen', 'zyzz', 'z3'],
    question: [
      'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
      'Famoso culturista fallecido en 2011 por un ataque al corazón',
      'z3',
    ],
  },
];

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
    if (letter.status >= 0) {
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
        window.alert(
          `Nope! Correct answer was "${letter.answer[randomIndex]}"`
        );
        wrongAnswers++;
      }
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

function showScore() {
  console.log(`Thank you for playing!
    You have guessed correctly a total of ${rightAnswers} questions and failed ${wrongAnswers} questions. See you soon!`);
}

function showRanking() {
  let ranking = [];
  const user = new Player('You', rightAnswers);
  ranking.push(user, player1, player2, player3, player4);
  ranking.sort(function (a, b) {
    return b.score - a.score;
  });
  console.log('Final ranking is:');
  ranking.forEach((player) => player.showScore());
}

function reset() {
  continueGame = true;
  rightAnswers = 0;
  wrongAnswers = 0;
  roscoQuestions = [];
  roscoAnswers = [];
  pasapalabraQuestions = [];
}

start(rosco);
nextRounds(pasapalabraQuestions);
if (continueGame) {
  showScore();
  showRanking();
}

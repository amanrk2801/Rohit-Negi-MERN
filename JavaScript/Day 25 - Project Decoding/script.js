const quizQuestionsBank = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "London"],
    answer: "Paris"
  },
  {
    question: "Who is the CEO of SpaceX?",
    options: ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Tim Cook"],
    answer: "Elon Musk"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: "Jupiter"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Caravaggio"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Blue whale", "Fin whale", "Humpback whale", "Sperm whale"],
    answer: "Blue whale"
  },
  {
    question: "What is the highest mountain peak in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest"
  },
  {
    question: "What is the deepest ocean trench?",
    options: ["Mariana Trench", "Tonga Trench", "Kermadec Trench", "Philippine Trench"],
    answer: "Mariana Trench"
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
    answer: "Nile River"
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Mojave Desert", "Atacama Desert"],
    answer: "Sahara Desert"
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "Iceland", "Great Britain", "Borneo"],
    answer: "Greenland"
  },
  {
    question: "What is the world's largest waterfall?",
    options: ["Victoria Falls", "Iguazu Falls", "Niagara Falls", "Angel Falls"],
    answer: "Victoria Falls"
  },
  {
    question: "What is the world's largest rainforest?",
    options: ["Amazon Rainforest", "Congo Basin", "Valdivian Rainforests", "Daintree Rainforest"],
    answer: "Amazon Rainforest"
  },
  {
    question: "What is the world's largest coral reef system?",
    options: ["Great Barrier Reef", "Red Sea Coral Reef", "New Caledonia Barrier Reef", "Belize Barrier Reef"],
    answer: "Great Barrier Reef"
  },
  {
    question: "What is the world's largest mountain range?",
    options: ["Himalayan mountain range", "Andes mountain range", "Rocky Mountains", "Appalachian Mountains"],
    answer: "Himalayan mountain range"
  },
  {
    question: "What is the world's largest delta?",
    options: ["Ganges Delta", "Nile Delta", "Yellow River Delta", "Mississippi River Delta"],
    answer: "Ganges Delta"
  },
  {
    question: "What is the world's largest canyon?",
    options: ["Grand Canyon", "Fish River Canyon", "Colca Canyon", "Cotahuasi Canyon"],
    answer: "Grand Canyon"
  },
  {
    question: "What is the world's largest impact crater?",
    options: ["Vredefort Crater", "Chicxulub Crater", "Popigai Crater", "Manicouagan Crater"],
    answer: "Vredefort Crater"
  },
  {
    question: "What is the world's largest volcano?",
    options: ["Mauna Loa", "Mount Etna", "Mount St. Helens", "Mount Fuji"],
    answer: "Mauna Loa"
  },
  {
    question: "What is the world's largest lake?",
    options: ["Caspian Sea", "Lake Superior", "Lake Michigan", "Lake Tanganyika"],
    answer: "Caspian Sea"
  },
  {
    question: "What is the world's largest island nation?",
    options: ["Indonesia", "Philippines", "Madagascar", "Papua New Guinea"],
    answer: "Indonesia"
  }
];

// sort -> O(nlogn)
// function getRandomQuestions(questions, count) {
//     const shuffled = questions.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
// }

// Fisher-Yates shuffle algorithm : sort -> O(n)
function getRandomQuestions(questions, count) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions.slice(0, count);
}

const form = document.querySelector("#quizForm");
const resultDiv = document.querySelector("#result");
const randomQuestions = getRandomQuestions(quizQuestionsBank, 5);

randomQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = `<p>Question ${index + 1}: ${question.question}</p>`;
    question.options.forEach(option => {
        questionElement.innerHTML += `<input type="radio" id="${option}" name="q${index + 1}" value="${option}"><label for="${option}">${option}</label><br>`;
    });
    form.appendChild(questionElement);
});

// Add event listener to submit button
document.querySelector("#submit").addEventListener("click", () => {
    let score = 0;
    randomQuestions.forEach((question, index) => {
        const userAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (userAnswer && userAnswer.value === question.answer) {
            score++;
            userAnswer.parentElement.style.backgroundColor = "green";
        } else {
            question.options.forEach(option => {
                if (option === question.answer) {
                    document.querySelector(`label[for="${option}"]`).style.backgroundColor = "green";
                } else if (userAnswer && option === userAnswer.value) {
                    userAnswer.parentElement.style.backgroundColor = "red";
                }
            });
        }
    });
    resultDiv.innerHTML = `You scored ${score} out of ${randomQuestions.length}`;
});




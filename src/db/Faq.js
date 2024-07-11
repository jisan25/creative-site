function getRandomQuestion() {
  const questions = [
    "What is JavaScript?",
    "How do you declare a variable in JavaScript?",
    "What is a loop in programming?",
    "What is JSON in JavaScript?",
    "Explain what 'hoisting' means in JavaScript.",
    "How can you prevent variable name conflicts in JavaScript?",
    "How do you handle errors in JavaScript?",
    "What is a JavaScript constructor function?",
    "What is an event handler in JavaScript?",
    "What is the DOM in JavaScript?",
    "What is asynchronous programming in JavaScript?",
    "What is a Promise in JavaScript?",
    // Add more random questions here
  ];

  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomCategory() {
  const categories = [
    "Digital Marketing",
    "Website Development",
    "IT Outsourcing",
    "Software Development",
    "Android Development",
  ];
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

function getRandomAnswer() {
  const answers = [
    "JavaScript is a programming language commonly used for web development.",
    "You can declare a variable in JavaScript using the var, let, or const keyword.",
    "A loop is a control structure that allows you to execute a block of code repeatedly.",
    // Add more random answers here
  ];

  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

const faqs = [];

for (let i = 1; i <= 20; i++) {
  const id = i; // Random ID between 1 and 20
  const title = getRandomQuestion();
  const answer = getRandomAnswer();
  const category = getRandomCategory();
  const featured = Math.random() < 0.5; // Randomly set featured to true or false

  faqs.push({
    id: id,
    title: title,
    answer: answer,
    featured: featured,
    category: category,
  });
}

export default faqs;

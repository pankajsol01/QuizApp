const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "Which language runs in a web browser?",
      choices: ["Java", "C", "Python", "JavaScript"],
      answer: 3
    },
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Mark Language"
      ],
      answer: 0
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionEl = document.getElementById('question');
  const choicesEl = document.getElementById('choices');
  const nextBtn = document.getElementById('next');
  const resultEl = document.getElementById('result');

  function loadQuestion() {
    resultEl.textContent = '';
    nextBtn.disabled = true;
   
    questionEl.textContent = questions[currentQuestionIndex].question;
    
    choicesEl.innerHTML = '';
  
   
    const choices = questions[currentQuestionIndex].choices;
   
    for (let i = 0; i < choices.length; i++) {
      const choice = choices[i];
      const li = document.createElement('li');
      li.textContent = choice;
     
      li.addEventListener('click', function() {
        selectChoice(i, li);
      });
     
      choicesEl.appendChild(li);
    }
  }
  

  function selectChoice(index, element) {
    const correct = questions[currentQuestionIndex].answer;
    if(index === correct){
      score++;
      element.style.backgroundColor = '#27ae60';
    } else {
      element.style.backgroundColor = '#c0392b';
    }
    Array.from(choicesEl.children).forEach(li => li.style.pointerEvents = 'none');
    nextBtn.disabled = false;
  }

  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      loadQuestion();
    } else {
      showResult();
    }
  });

  function showResult(){
    questionEl.textContent = 'Quiz Completed!';
    choicesEl.innerHTML = '';
    nextBtn.style.display = 'none';
    resultEl.textContent = `Your score: ${score} / ${questions.length}`;
  }

  loadQuestion();
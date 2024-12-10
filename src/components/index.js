fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => {
    // Log the trivia questions
    console.log(data.results);
    // Example: Display the questions
    data.results.forEach((question, index) => {
      console.log(`${index + 1}. ${question.question}`);
      console.log(`A. ${question.incorrect_answers[0]}`);
      console.log(`B. ${question.incorrect_answers[1]}`);
      console.log(`C. ${question.incorrect_answers[2]}`);
      console.log(`D. ${question.correct_answer}`);
      console.log('--------------------------');
    });
  })
  .catch(error => console.error('Error fetching data:', error));

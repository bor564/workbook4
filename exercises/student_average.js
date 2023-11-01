let students = [
    {name: "zephaniah",scores:[100, 96,99,92]},
    {name:"pursalane",scores:[92,89,96,100,94]},
    {name: "Ian", scores:[98,84,89,100,100,76]},
    {name:"Elisha",scores:[89,100]},
    {name: "Ezra",scores:[100,99,100,87]}
];


  
  // Function to calculate the average score for a student
  function calculateAverage(scores) {
    if (scores.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum / scores.length;
  }
  
  // Loop through the array of students and calculate and print their average scores
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.scores);
    console.log(`${student.name}'s average score is: ${average.toFixed(2)}`);
  }
  
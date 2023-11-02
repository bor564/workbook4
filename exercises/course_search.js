let academyMembers = [
    {
      memID: 101,
      name: "Bob Brown",
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
      memID: 142,
      name: "Sallie Smith",
      films: ["A Good Day", "A Better Day"]
    },
    {
      memID: 187,
      name: "Fred Flanders",
      films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
      memID: 203,
      name: "Bobbie Boots",
      films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    }
  ];
  
  // Find the Academy Member with memID 187
  const memberWithID187 = academyMembers.find((member) => member.memID === 187);
  
  // Find Academy Members who have been in at least 3 films
  const membersWithAtLeastThreeFilms = academyMembers.filter((member) => member.films.length >= 3);
  
  // Find Academy Members with names starting with "Bob"
  const membersWithNameStartingWithBob = academyMembers.filter((member) => member.name.toLowerCase().startsWith("bob"));
  
  // Find Academy Members who have been in a film starting with "A"
  const membersWithFilmStartingWithA = academyMembers.filter((member) => {
    return member.films.some((film) => film.toLowerCase().startsWith("a"));
  });
  
  console.log("The Academy Member with memID 187:", memberWithID187);
  console.log("Academy Members with at least 3 films:", membersWithAtLeastThreeFilms);
  console.log("Academy Members with names starting with 'Bob':", membersWithNameStartingWithBob);
  console.log("Academy Members with films starting with 'A':", membersWithFilmStartingWithA);
  
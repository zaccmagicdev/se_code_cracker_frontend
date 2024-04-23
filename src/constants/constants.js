const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "pink",
  ];
  const MAX_ATTEMPTS = 8;
  const PEG_SLOTS = 5;
  
  //filtering out less thatn desirable jokes from the API
  const JOKE_URL = `https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
  
  const generateNonDuplicateArray = (arr) => {
    let nums = [];
    let copy = [...arr];
  
    //making sure colors can't repeat in the pattern
    for (let i = 0; i < PEG_SLOTS; i++) {
      let generatedNum = Math.floor(Math.random() * copy.length);
      let snippet = copy.splice(generatedNum, 1)[0];
      nums.push(snippet);
    }
    return nums;
  };
  
  const startingState = () => ({
    currentAttempt: 0,
    currentColor: COLORS[0],
    currentGameState: "",
    attempts: new Array(MAX_ATTEMPTS).fill().map((_) => ["", "", "", "", ""]),
    results: new Array(MAX_ATTEMPTS).fill().map((_) => ["", "", "", "", ""]),
    answer: generateNonDuplicateArray(COLORS),
    playerScore: 0,
  });
  
  export { COLORS, MAX_ATTEMPTS, PEG_SLOTS, JOKE_URL, startingState };
  
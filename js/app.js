let designCaret = document.querySelector("#designCaret"),
    javascriptCaret = document.querySelector("#javascriptCaret"),
    navCaret = document.querySelector("#navCaret"),
    portfolio = document.querySelector("#portfolio"),
    accordianNav = document.querySelector("#accordionNav"),
    accordianContent = document.querySelector("#collapseNav"),
    designWork = document.querySelector("#designWork"),
    javascriptProjects = document.querySelector("#javascriptProjects"),
    navDesign = document.querySelector("#navDesignWork"),
    navJavascript = document.querySelector("#navJavascriptProjects");

let rotateCaret = (x) => {
    x.classList.toggle("fa-angle-down");
    x.classList.toggle("fa-angle-up");
};

designWork.addEventListener("click", function() {
  rotateCaret(designCaret);
});
navDesign.addEventListener("click", function() {
  rotateCaret(designCaret);
});

javascriptProjects.addEventListener("click", function() {
  rotateCaret(javascriptCaret);
});
navJavascript.addEventListener("click", function() {
  rotateCaret(javascriptCaret);
});

accordianNav.addEventListener("mouseenter", function() {
  accordianContent.classList.toggle("show");
  rotateCaret(navCaret);
});

accordianNav.addEventListener("mouseleave", function() {
  accordianContent.classList.toggle("show");
  rotateCaret(navCaret);
});

//Calculator ---------------------------
(function(){
  let display = document.getElementById("display"),
  answer = document.getElementById("answer"),
  displayNum = display.innerHTML,
  answerNum = null,
  num2 = null,
  num1 = null,
  num = document.querySelectorAll(".num"),
  clear = document.getElementById("clear"),     
  divide = document.getElementById("divide"),
  multiply = document.getElementById("multiply"),
  subtract = document.getElementById("subtract"),
  add = document.getElementById("add"),
  equals = document.getElementById("equals"),
  period = document.getElementById("period"),
  colorBtn = document.querySelectorAll("#color"),
  sideRow = document.querySelectorAll(".side-row"),
  sideBar = document.getElementById("color-buttons"),
  operator;

//Changes calculator color 
colorBtn.forEach((i) => {
let allColors = i.classList.value;
i.addEventListener("click", () => {
  sideRow.forEach((e) => {
    let arrClass = Array.from(e.classList);
    arrClass.pop();
    e.classList = arrClass.join(" ");
    e.classList.add(allColors);  
    answer.style.color = `var(--${e.classList[2]})` 
  }); 
}); 
});

//Show/hide color button side bar
sideBar.addEventListener("click", () => {
sideBar.classList.toggle("move");
});

//Changes display from 0 to number selected.
num.forEach((i) => {
i.addEventListener("click", () => {
  if (displayNum == 0) {
    display.innerHTML = "";   
  } 
  if (display.innerHTML.includes(".")) {
      period.disabled= true;
  }
  display.innerHTML += i.innerHTML;
  displayNum = parseFloat(display.innerHTML); 
  answer.classList.add("hide");
  display.classList.remove("hide");
}); 
});

//Addition function
let addition = function() {
calculate(null, subtract, multiply, divide);
if (num1 === null) {
    num1 = displayNum;       
  } else if (num1 !== null && answerNum !== null) {
    num2 = displayNum;    
    answerNum += num2;
  } else if (num1 !== null) { 
    num2 = displayNum;      
    answerNum = num1 + num2;  
  }
displayAnswer(add);
};


//Subtraction function
let subtraction = function() {
calculate(add, null, multiply, divide);
  if (num1 === null) {
    num1 = displayNum;
  } else if (num1 !== null && answerNum !== null) {
    num2 = displayNum;  
    answerNum -= displayNum;
  } else if (num1 !== null) {
    num2 = displayNum;      
    answerNum = num1 - num2;  
  }
displayAnswer(subtract);
};

//Multiplication function
let multiplication = function() {
calculate(add, subtract, null, divide);
if (num1 === null) {
    num1 = displayNum;
} else if (num1 !== null && answerNum !== null && displayNum !== 0) {
    num2 = displayNum;  
    answerNum *= num2;
} else if (num1 !== null && displayNum !== 0) {   
    num2 = displayNum;   
    answerNum = num1 * num2;  
} 
displayAnswer(multiply);
};

//Division function
let division = function() {
calculate(add, subtract, multiply, null);
if (num1 === null) {
    num1 = displayNum;
  } else if (num1 !== null && answerNum !== null && displayNum !== 0) {
    num2 = displayNum;  
    answerNum /= displayNum;
  } else if (num1 !== null && displayNum !== 0) {
    num2 = displayNum;  
    answerNum = num1 / num2;  
  }
displayAnswer(divide);
};

//Display answer
let displayAnswer = (oper) => {
if (answerNum !== null) {
  answer.innerHTML = answerNum;
  answer.classList.remove("hide");
  display.classList.add("hide");
}
operator = oper;
displayNum = 0;
};

//Addition button
add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);

//Clears the display
clear.addEventListener("click", function(){
displayNum = 0;
answerNum = null;
num1 = null;
answer.innerHTML = answerNum;
display.innerHTML = displayNum;
if (!answer.classList.contains("hide")) {
  answer.classList.add("hide");
  display.classList.remove("hide");
}  
});

//Equals button
equals.addEventListener("click", function(){
calculate(add, subtract, multiply, divide);
num1 = null;
num2 = null;
}); 


//Equals function - ensures that the last equation is solved as soon as the next operator button is clicked
let calculate = (add, subtract, multiply, divide) => {
switch (operator) {
  case add:
    addition();
    break;
  case subtract:
    subtraction();
    break;
  case multiply:
    multiplication();
    break;
  case divide:
    division();
    break;
  default:
    return answerNum;
}
};
})();


// Converter ---------------------
(function() {
  let convertHex = document.querySelector("#convertHex"),
      convertRGB = document.querySelector("#convertRGB"),
      hexInput = document.querySelector("#hexInput"),
      rgbInput = document.querySelector("#rgbInput"),
      convertHexBtn = document.querySelector("#convertHexBtn"),
      convertRGBBtn = document.querySelector("#convertRGBBtn"),
      result = document.querySelector("#result"),
      bodyBG = document.querySelector("#converter-body"),
      rgbResult = [],
      hexResult = [],
      R,
      G,
      B,
      restrictHexInput = new RegExp(/[/\d/a-fA-F(?<=v)meta(?<=c)meta]/),
      restrictRGBInput = new RegExp(/[\d/0-9(?<=v)meta(?<=c)meta]/),
      navBar = document.querySelector("#nav");

  rgbInput.children[0].value = null;
  rgbInput.children[1].value = null;
  rgbInput.children[2].value = null;


  // Hex to RGB menu item, display Hex input
  convertHex.addEventListener("click", function() {
    if (!this.classList.contains("opacity")) {
      togglePages();
   }
    rgbInput.children[0].value = null;
    rgbInput.children[1].value = null;
    rgbInput.children[2].value = null;
  });

  // RGB to RGB menu item, display RGB input
  convertRGB.addEventListener("click", function() {
    if (!this.classList.contains("opacity")) {
      togglePages();
   }
  });

  // Toggle classes for buttons etc between pages
  let togglePages = () => {
    rgbInput.classList.toggle("hide");
   hexInput.classList.toggle("hide");
     convertHexBtn.classList.toggle("hide");
    convertRGBBtn.classList.toggle("hide");
    convertHex.classList.toggle("opacity");
    convertRGB.classList.toggle("opacity");
    hexInput.value = null;
    result.innerHTML = "";

  };

  // Loads random colour on load
  window.addEventListener("load", function() {
    let randomNum = (x) => {
      let num = Math.floor(Math.random() * 255);
      return num;
    }; 
    rgbInput.children[0].value = randomNum();
    rgbInput.children[1].value = randomNum();
    rgbInput.children[2].value = randomNum();
    calculateRGBToHex();
    hexInput.value = hexResult.join("");
    changeBGColor();
    hexResult = [];  
  });


  // Loops through Hex input, runs below function for each input
  let convertHextoRGB = () => {
    let hexInputArr = Array.from(hexInput.value.toUpperCase());
    ifThreeChar(hexInputArr);
    threeOrSixChar(hexInputArr);
    changeBGColor();
    rgbResult = [];    
    darkLightBG(R, G, B);
  };

  // Assign Hex number to RGB number and calculates 
  let checkHexInput = (i) => {
    switch(i) {
      case "0":
        rgbResult.push(0);
        break;
      case "1":
        rgbResult.push(1);
        break;
      case "2":
        rgbResult.push(2);
        break;
      case "3":
        rgbResult.push(3);
        break;
      case "4":
        rgbResult.push(4);
        break;
      case "5":
        rgbResult.push(5);
        break;
      case "6":
        rgbResult.push(6);
        break;
      case "7":
        rgbResult.push(7);
        break;
      case "8":
        rgbResult.push(8);
        break;
      case "9":
        rgbResult.push(9);
        break;
      case "A":
        rgbResult.push(10);
        break;
      case "B":
        rgbResult.push(11);
        break;
      case "C":
        rgbResult.push(12);
        break;
      case "D":
        rgbResult.push(13);
        break;
      case "E":
        rgbResult.push(14);
        break;
      case "F":
        rgbResult.push(15);
        break;
    }
    R = rgbResult[0] * 16 + rgbResult[1];
    G = rgbResult[2] * 16 + rgbResult[3];
    B = rgbResult[4] * 16 + rgbResult[5];
    result.innerHTML = `RGB(${R}, ${G}, ${B})`;
  };

  // Loops through RGB input, runs below function for each input
  let convertRGBtoHex = () => {
    calculateRGBToHex()
    result.innerHTML = `#${hexResult.join("")}`;
  };

  // Calculates RGB number into Hex number
  let calculateRGBToHex = () => {
    let R = rgbInput.children[0].value,
    G = rgbInput.children[1].value,
    B = rgbInput.children[2].value;
    darkLightBG(R, G, B);
    R /= 16;
    G /= 16;
    B /= 16;
    hexResult[0] = parseInt(R);
    hexResult[1] = (parseFloat(R) - hexResult[0]) * 16;
    hexResult[2] = parseInt(G);
    hexResult[3] = (parseFloat(G) - hexResult[2]) * 16;
    hexResult[4] = parseInt(B);
    hexResult[5] = (parseFloat(B) - hexResult[4]) * 16;
    hexResult.forEach(function(i) {
      checkRGBInput(i);
    });
    hexResult.splice(0,6);
  };

  // Assigns RGB number to Hex number
  let checkRGBInput = (i) => {
    switch(i) {
      case 0:
        hexResult.push(0);
        break;
      case 1:
        hexResult.push(1);
        break;
      case 2:
        hexResult.push(2);
        break;
      case 3:
        hexResult.push(3);
        break;
      case 4:
        hexResult.push(4);
        break;
      case 5:
        hexResult.push(5);
        break;
      case 6:
        hexResult.push(6);
        break;
      case 7:
        hexResult.push(7);
        break;
      case 8:
        hexResult.push(8);
        break;
      case 9:
        hexResult.push(9);
        break;
      case 10:
        hexResult.push("A");
        break;
      case 11:
        hexResult.push("B");
        break;
      case 12:
        hexResult.push("C");
        break;
      case 13:
        hexResult.push("D");
        break;
      case 14:
        hexResult.push("E");
        break;
      case 15:
        hexResult.push("F");
        break;
    }
  };

  // Changes background colour to match Hex code
  let changeBGColor = () => {
    bodyBG.style.backgroundColor = `#${hexInput.value}`;
  };

  // Restricts RGB input to only numbers
  rgbInput.addEventListener("keydown", function(e) {
    if (!restrictRGBInput.test(e.key)) {
      e.preventDefault();
    }
  });

  // Restricts Hex input to only Hex characters
  hexInput.addEventListener("keydown", function(e) {
    if (!restrictHexInput.test(e.key)) {
      e.preventDefault();
    }
  });

  // Function for if there are only 3 characters
  let ifThreeChar = (arr) => {
    if ((arr[0] === arr[1] && arr[0] === arr[2]) && arr.length === 3) 
      { arr[3] = arr[1];
      arr[4] = arr[1];
      arr[5] = arr[1];
      } else if ((arr[0] !== arr[1] || arr[0] !== arr[2]) && arr.length === 3)
      { arr[5] = arr[2];
        arr[4] = arr[2];
        arr[3] = arr[1];
        arr[2] = arr[1];
        arr[1] = arr[0];
      } 
    hexInput.value = arr.join(""); 
  };

  // Changes text color depending on background lightness / darkness
  let darkLightBG = (r, g, b) => {
    if (r > 143 && g > 143 & b > 143 ) {
      document.documentElement.style.setProperty('--white', '#000000');
      document.documentElement.style.setProperty('--black', '#ffffff');
      document.documentElement.style.setProperty('--opacityBG', '#00000080');
    } else {
      document.documentElement.style.setProperty('--white', '#ffffff');
      document.documentElement.style.setProperty('--black', '#000000');
      document.documentElement.style.setProperty('--opacityBG', '#ffffffB3');
    }
  };

  // Prevents entering anything other than 3 or 6 characters
  let threeOrSixChar = (arr) => {
    if (arr.length === 3 || arr.length === 6) {
      arr.forEach(function(i) {
        checkHexInput(i);
      });
    }
    else {
      result.innerHTML = `Please enter 3 or 6 characters`;
    }
  };

  // Convert Hex to RGB button
  convertHexBtn.addEventListener("click", convertHextoRGB);

  // Convert RGB to Hex button
  convertRGBBtn.addEventListener("click", convertRGBtoHex);

  // Convert button using Enter key
  window.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && convertHex.classList.contains("opacity")) {
      convertHextoRGB();
    } else if(e.key === "Enter" && convertRGB.classList.contains("opacity")) {
      convertRGBtoHex();
    }
  });

})();



// Hangman ----------------

(function() {
  let categories = {
    0: "countries",
    1: "animals"
  };
  
  let answers = {
    "countries" : {
      0 : "South Africa",
      1 : "America",
      2 : "New Zealand",
      3 : "Australia",
      4 : "Spain"
    },
    "animals" : {
      0 : "Giraffe",
      1 : "Elephant",
      2 : "Gorilla",
      3 : "Chimpanzee",
      4 : "Snake"
    }, 
  };
  
  let hints = {
    "South Africa" : {
      0 : "Hosted the 2010 world cup",
      1 : "Is bordered with Namabia",
      2 : "Has one of the 7 wonders of the world",
      3 : "There are 11 official languages",
      4 : "The national anthem contains 5 languages"
    }, 
    "America" : {
      0 : "Has The 4th Longest River System In The World",
      1 : "There are 27 versions of this countries flag",
      2 : "There is no official language",
      3 : "In some places, there are more cows than people",
      4 : "The people who live here eat about 100 acres of pizza each day"
    }, 
    "New Zealand" : {
      0 : "In 1893 this became the first country to give women the right to vote",
      1 : "The first person to climb Mount Everest was from here",
      2 : "The first person in the world to split the atom was from here",
      3 : "This country has the worlds only flightless parrot",
      4 : "There are 9 sheep per person here"
    }, 
    "Australia" : {
      0 : "If you visit one new beach here every day, it would take over 27 years to see them all",
      1 : "This is the only continent in the world without an active volcano",
      2 : "There are 3 times more sheep than people",
      3 : "You will find more kangaroos than you will humans",
      4 : "Saudi Arabia imports camels from here"
    }, 
    "Spain" : {
      0 : "This is the EU's second largest country",
      1 : "Home of the world’s second most widely-spoken language",
      2 : "Has the fifth largest population in Europe",
      3 : "150,000 tomatoes are thrown every year",
      4 : "One of the world’s most popular tourist destinations"
    },
    "Giraffe" : {
      0 : "They only need to drink once every few days",
      1 : "They can run as fast as 35 miles an hour over short distances",
      2 : "They only need 5 to 30 minutes of sleep in a 24-hour period",
      3 : "They only eat plants",
      4 : "They eat up to 45kg of leaves and twigs a day!"
    },
    "Elephant" : {
      0 : "They've got thick skin",
      1 : "They need up to 150kg of food per day ",
      2 : "They communicate through vibrations",
      3 : "There are 3 different species",
      4 : "They are the largest mammals on Earth"
    },
    "Gorilla" : {
      0 : "There are an estimated 1,063 in the wild",
      1 : "We share about 98% of our DNA with them",
      2 : "They can eat all day long",
      3 : "They have 16 different types of call",
      4 : "They live in family groups"
    },
    "Chimpanzee" : {
      0 : "For a long time, scientists thought human beings were the only ones who made tools",
      1 : "In captive they can be taught human sign language",
      2 : "In the wild they rarely live longer than 50 years",
      3 : "They can walk on two legs if they want",
      4 : "Mothers and young are always together"
    },
    "Snake" : {
      0 : "They're carnivores",
      1 : "They don't have eyelids",
      2 : "They can’t bite food so have to swallow it whole",
      3 : "They have internal ears but not external ones",
      4 : "There are around 3000 different species"
    }
  };
  
  let category = document.querySelector("#category"),
      hangmanAnswer = document.querySelector("#hangman-answer"),
      letterBtns = document.querySelectorAll(".letter"),
      hangman = document.querySelectorAll(".hangman-parts"),
      hangmanArr = Array.from(hangman),
      livesText = document.querySelector("#lives"),
      playAgainBtn = document.querySelector("#play-again-btn"),
      hintText = document.querySelector("#hint"),
      hintBtn = document.querySelector("#hint-btn"),
      pushedBtn,
      livesCount = 9,
      answerLetters;
  
  let playGame = () => {
    //Random number generator
     let randomNum = (x) => {
      let num = Math.floor(Math.random() * x.length);
      return num;
    };
  
    //Random categories number
    let randomCategory = () => {
      let catNum = randomNum(Object.keys(categories));
      category.innerHTML = categories[catNum];
    };
    randomCategory();
  
  
     //Random answer number
    let randomAnswer = () => {
      Object.keys(answers).forEach(function(x) {
        if (x === category.innerHTML) {
          let ansNum = randomNum(Object.keys(answers[x])),
              ansArr = Array.from(answers[x][ansNum]);
    
          hintBtn.addEventListener("click", function() {
            Object.keys(hints).forEach(function(x) {
              let hintNum = randomNum(Object.values(hints[x]));
              hintText.innerHTML = `Hint: ${hints[answers[category.innerHTML][ansNum]][hintNum]}`;
            });
          });
        
          //Wraps each letter in p tag
          for (let i = 0; i < answers[x][ansNum].length; i++) {
            ansArr[i] = `<p>${ansArr[i]}</p>`;
          }
          hangmanAnswer.innerHTML = ansArr.join(" ");
        }
      });  
    };
  randomAnswer();
  
   //Array through answer letters
  answerLetters = Array.from(hangmanAnswer.children);
  
  // Adds the space back to the word if needed and hides letters
  let hideLetter = () => {
    answerLetters.forEach(function(i) {
      if (i.textContent === " ") {
        i.classList.add("space");
      }
      i.classList.add("transparent"); 
    });
  };
  hideLetter();
  
  };
  playGame();
  
  //Defines the pushed button
  let checkBtn = (e) => {
    answerLetters.forEach(function(i) {
    if (pushedBtn === i.innerHTML.toLowerCase()) {
      i.classList.remove("transparent"); 
      e.classList.add("correct");
      } 
    });
  };
    
  //Checks to see if letters match the pushed button
  letterBtns.forEach(function(e) {
    e.addEventListener("click", function() {
      pushedBtn = e.innerHTML;
      checkBtn(e);    
      e.disabled = true;
      e.classList.add("disabled");  
      livesText.innerHTML = `You win`;
      for (let i = 0; i < answerLetters.length; i++) {
        if (answerLetters[i].className === "transparent") {
          livesText.innerHTML = `You have ${livesCount + 1} lives`;
          break;
        }
      }
      if (livesText.innerHTML === `You win`) {
        letterBtns.forEach(function(e) {
          e.classList.add("disabled");   
          hintBtn.classList.add("disabled");
          hintBtn.disabled = true;    
        });
      }
      if (!e.classList.contains("correct")) {
        hangmanArr[livesCount].classList.add("reveal");
        livesCount--;
        livesText.innerHTML = `You have ${livesCount + 1} lives`;
      }
      if (livesCount < 0) {
        hangmanAnswer.style.color = "rgb(41, 40, 40)";
        letterBtns.forEach(function(e) {
          e.classList.add("disabled");
          livesText.innerHTML = `You lose, try again`;
          hintBtn.classList.add("disabled");
          hintBtn.disabled = true;  
        });
      }  
    });
  });
  
  //Play again button
   playAgainBtn.addEventListener("click", function() { 
    playGame();
    hangmanArr.forEach(function(e) {
    e.classList.remove("reveal");
    });
    letterBtns.forEach(function(e) {
      e.classList.remove("disabled");
      e.classList.remove("correct");
      e.disabled = false;
    });
    hintBtn.classList.remove("disabled");
    hintBtn.disabled = false;  
    livesText.innerHTML = `You have 10 lives`;
    hintText.innerHTML = "";
    livesCount = 9;
  });  
  
})();



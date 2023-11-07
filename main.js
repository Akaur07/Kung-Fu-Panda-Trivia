// Kung Fu Panda Trivia

// Button Event Listener
document.getElementById("btn-in").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("ans-1").value.toLowerCase();
  let answer2 = document.getElementById("ans-2").value.toLowerCase();
  let answer3 = document.getElementById("ans-3").value.toLowerCase();
  let answer4 = document.getElementById("ans-4").value.toLowerCase();
  let numCorrect = 0;

  // Answers
  if (answer1 === "master shifu") {
    document.getElementById("input1").innerHTML = "Correct";
    document.getElementById("input1").style.color = "green";
    document.getElementById("ans-1").style.borderColor = "green";
    numCorrect++;
  } else {
    document.getElementById("input1").innerHTML = "Incorrect";
    document.getElementById("input1").style.color = "red";
    document.getElementById("ans-1").style.borderColor = "red";
  }

  if (
    answer2 === "monkey" ||
    answer2 === "mantis" ||
    answer2 === "viper" ||
    answer2 === "crane" ||
    answer2 === "tigress"
  ) {
    document.getElementById("input2").innerHTML = " Correct";
    document.getElementById("input2").style.color = "green";
    document.getElementById("ans-2").style.borderColor = "green";
    numCorrect++;
  } else {
    document.getElementById("input2").innerHTML = " Incorrect";
    document.getElementById("input2").style.color = "red";
    document.getElementById("ans-2").style.borderColor = "red";
  }

  if (answer3 === "nothing") {
    document.getElementById("input3").innerHTML = " Correct";
    document.getElementById("input3").style.color = "green";
    document.getElementById("ans-3").style.borderColor = "green";
    numCorrect++;
  } else {
    document.getElementById("input3").innerHTML = " Incorrect";
    document.getElementById("input3").style.color = "red";
    document.getElementById("ans-3").style.borderColor = "red";
  }

  if (answer4 === "po") {
    document.getElementById("input4").innerHTML = " Correct";
    document.getElementById("input4").style.color = "green";
    document.getElementById("ans-4").style.borderColor = "green";
    numCorrect++;
  } else {
    document.getElementById("input4").innerHTML = " Incorrect";
    document.getElementById("input4").style.color = "red";
    document.getElementById("ans-4").style.borderColor = "red";
  }

  // Feedback
  document.getElementById("total").innerHTML = numCorrect;

  if (numCorrect === 4) {
    document.getElementById("feedback-in").innerHTML =
      "WOW, you're a kung-fu master!!";
    document.getElementById("percent-in").innerHTML = "(100%)";
  } else if (numCorrect === 3) {
    document.getElementById("feedback-in").innerHTML = "Great job!";
    document.getElementById("percent-in").innerHTML = "(75%)";
  } else if (numCorrect === 2) {
    document.getElementById("feedback-in").innerHTML = "Almost there!";
    document.getElementById("percent-in").innerHTML = "(50%)";
  } else if (numCorrect === 1) {
    document.getElementById("feedback-in").innerHTML = "Want to try again?";
    document.getElementById("percent-in").innerHTML = "(25%)";
  } else {
    document.getElementById("feedback-in").innerHTML =
      "Did you watch the movies?";
    document.getElementById("percent-in").innerHTML = "(0%)";
  }
}

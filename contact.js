function contactBioChange() {
  document.querySelector("#degree-tab-id").style.display = "none";
  document.querySelector("#bio-tab-id").style.display = "inline-block";
  document.querySelector("#personal-tab-id").style.display = "none";
  document.querySelector("#bioButton").style.color = "#3a96cf";
  document.querySelector("#degreeButton").style.color = "#4e4459";
  document.querySelector("#personalButton").style.color = "#4e4459";
}
let biographyButton = document.querySelector("#bioButton");
biographyButton.addEventListener("click", contactBioChange);

function contactDegreeChange() {
  document.querySelector("#degree-tab-id").style.display = "inline-block";
  document.querySelector("#bio-tab-id").style.display = "none";
  document.querySelector("#personal-tab-id").style.display = "none";
  document.querySelector("#bioButton").style.color = "#4e4459";
  document.querySelector("#degreeButton").style.color = "#3a96cf";
  document.querySelector("#personalButton").style.color = "#4e4459";
}
let degreeCertButton = document.querySelector("#degreeButton");
degreeCertButton.addEventListener("click", contactDegreeChange);

function contactPersonalChange() {
  document.querySelector("#degree-tab-id").style.display = "none";
  document.querySelector("#bio-tab-id").style.display = "none";
  document.querySelector("#personal-tab-id").style.display = "inline-block";
  document.querySelector("#bioButton").style.color = "#4e4459";
  document.querySelector("#degreeButton").style.color = "#4e4459";
  document.querySelector("#personalButton").style.color = "#3a96cf";
}
let personalButton = document.querySelector("#personalButton");
personalButton.addEventListener("click", contactPersonalChange);

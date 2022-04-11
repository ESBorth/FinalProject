function showKnowledge() {
  document.querySelector("#projects-tab").style.display = "none";
  document.querySelector("#projects-id").style.opacity = "50%";
  document.querySelector("#knowledge-tab").style.display = "flex";
  document.querySelector("#knowledge-id").style.opacity = "100%";
}
let knowledgeButton = document.querySelector("#knowledge-id");
knowledgeButton.addEventListener("click", showKnowledge);

function showProjects() {
  document.querySelector("#projects-tab").style.display = "flex";
  document.querySelector("#projects-id").style.opacity = "100%";
  document.querySelector("#knowledge-tab").style.display = "none";
  document.querySelector("#knowledge-id").style.opacity = "50%";
}
let projectsButton = document.querySelector("#projects-id");
projectsButton.addEventListener("click", showProjects);

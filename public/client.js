document.addEventListener("DOMContentLoaded", function() {
  console.log("ready!");

  function findAncestor(el, sel) {
    while ((el = el.parentElement) && !el.classList.contains(sel));
    return el;
  }

  const projects = document.getElementsByClassName("project");
  for (let i = 0; i < projects.length; i++) {
    document.addEventListener("click", function(e) {
      let clickedProject = e.target;
      if (!e.target.classList.contains("project")) {
        let foundAncestor = findAncestor(clickedProject, "project");
        clickedProject = foundAncestor;
      }
      clickedProject && clickedProject.classList.toggle("open");
    });
  }
});

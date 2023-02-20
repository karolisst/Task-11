const BASE_URL = "https://melon-potent-period.glitch.me";

fetch(BASE_URL + "/skills")
  .then((response) => response.json())
  .then((result) => {
    showSkills(result);
  })
  .catch((error) => console.error(error));

function showSkills(data) {
  const table = document.getElementById("skills-list");
  table.innerHTML = "";

  data.forEach((skill) => {
    const skilltr = document.createElement("tr");
    skilltr.classList.add("skill-row");

    const idtd = document.createElement("td");
    idtd.textContent = skill.id;

    skilltr.appendChild(idtd);

    const nametd = document.createElement("td");
    nametd.textContent = skill.skill;

    skilltr.appendChild(nametd);

    const actionstd = document.createElement("td");

    const deleteButton = document.createElement("a");
    deleteButton.classList.add("delete-button");

    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => deleteSkill(skill.id));

    actionstd.appendChild(deleteButton);

    skilltr.appendChild(actionstd);
    table.appendChild(skilltr);
  });
}

function deleteSkill(id) {
  fetch(BASE_URL + "/skill/" + id, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        alert("Įgūdis ištrintas");
        location.reload();
      }
    })
    .catch((error) => console.error(error));
}

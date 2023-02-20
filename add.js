function addSkill(event) {
  event.preventDefault();

  const addskill = document.getElementById("add-skill-input");
  const skill = addskill.value;

  const data = {
    skill: skill,
  };

  const add = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("https://melon-potent-period.glitch.me/skills", add)
    .then((response) => {
      if (response) {
        alert("Įgūdis pridėtas");
        window.location.replace("index.html");
      }
    })
    .catch((error) => console.error(error));
}

const form = document.getElementById("add-skill-form");

form.addEventListener("submit", addSkill);

//---------------------------------------------
// Initialisation et récupération des éléments
//---------------------------------------------

const employeeForm = document.getElementById("employee-form");
const employeeListContainer = document.getElementById("employee-list");

// Récupération des employés depuis le localStorage ou tableau vide
let employeeList = JSON.parse(localStorage.getItem("employees")) || [];

// Affichage initial à l’ouverture de la page
displayEmployeeList();

//---------------------------------------------
// Gestion de la soumission du formulaire
//---------------------------------------------

employeeForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs des champs du formulaire
  const lastName = document.getElementById("nom").value.trim();
  const firstName = document.getElementById("prenom").value.trim();
  const email = document.getElementById("email").value.trim();
  const position = document.getElementById("fonction").value.trim();

  // Vérification que tous les champs sont remplis
  if (!lastName || !firstName || !email || !position) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  // Vérification que l’email est bien formaté
  if (!isValidEmail(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  // Création de l'objet représentant l’employé
  const newEmployee = {
    id: Date.now(), // ID unique basé sur le timestamp
    lastName,
    firstName,
    email,
    position
  };

  // Ajout à la liste
  employeeList.push(newEmployee);
  updateLocalStorage();
  displayEmployeeList();
  employeeForm.reset(); // Réinitialise le formulaire
}


// Validation de l’email

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//---------------------------------------------
// Affichage de la liste des employés
//---------------------------------------------

function displayEmployeeList() {
  // Vide le conteneur avant de re-générer
  employeeListContainer.innerHTML = "";

  // Création de chaque carte employé
  employeeList.forEach(employee => {
    const card = document.createElement("div");
    card.className = "employee-card";

    const employeeInfo = document.createElement("div");
    employeeInfo.className = "employee-info";
    employeeInfo.innerHTML = `
      <p><strong>Nom :</strong> ${employee.lastName} ${employee.firstName}</p>
      <p><strong>Email :</strong> ${employee.email}</p>
      <p><strong>Fonction :</strong> ${employee.position}</p>
    `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
      removeEmployee(employee.id);
    });

    card.appendChild(employeeInfo);
    card.appendChild(deleteButton);
    employeeListContainer.appendChild(card);
  });
}

//---------------------------------------------
// Suppression d’un employé
//---------------------------------------------

function removeEmployee(employeeId) {
  employeeList = employeeList.filter(e => e.id !== employeeId);
  updateLocalStorage();
  displayEmployeeList();
}

//---------------------------------------------
// Mise à jour du localStorage
//---------------------------------------------

function updateLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(employeeList));
}

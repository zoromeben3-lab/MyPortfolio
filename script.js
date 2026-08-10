// ========================================
// 1. NAVIGATION ENTRE LES PAGES
// ========================================

const menuButtons = document.querySelectorAll(".menu button");

menuButtons.forEach(function(button) {

    // Navigation vers une autre page
    button.addEventListener("click", function() {

        const page = button.dataset.page;

        window.location.href = page;

    });


    // Vérifier quelle page est actuellement ouverte
    const currentPage = window.location.pathname.split("/").pop();


    // Vérifier si le bouton correspond à la page actuelle
    if (button.dataset.page === currentPage) {

        button.classList.add("active");

    } else {

        button.classList.remove("active");

    }

});


// ========================================
// 2. RÉCUPÉRER LE FORMULAIRE
// ========================================

const form = document.getElementById("contactForm");

if(form)
{
    
// ========================================
// 3. RÉCUPÉRER LES CHAMPS
// ========================================

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const subjectInput = document.getElementById("subject");

const messageInput = document.getElementById("message");


// ========================================
// 4. RÉCUPÉRER LES MESSAGES D'ERREUR
// ========================================

const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");

const subjectError = document.getElementById("subjectError");

const messageError = document.getElementById("messageError");


// ========================================
// 5. RÉCUPÉRER LE MESSAGE GÉNÉRAL
// ========================================

const result = document.getElementById("result");


// ========================================
// 6. FONCTION POUR AFFICHER UNE ERREUR
// ========================================

function showError(el, message) {

    el.innerHTML = message;

    el.className = "error";

}


// ========================================
// 7. FONCTION POUR AFFICHER UN SUCCÈS
// ========================================

function showSuccess(el, message) {

    el.innerHTML = message;

    el.className = "ok";

}


// ========================================
// 8. FONCTION POUR EFFACER UNE ERREUR
// ========================================

function clearError(el) {

    el.innerHTML = "";

}


// ========================================
// 9. VALIDATION DU NOM
// ========================================

function validateName() {

    let value = nameInput.value.trim();


    if (value.length < 2) {

        showError(
            nameError,
            "Le nom doit contenir au moins 2 caractères."
        );

        return false;

    }


   clearError(nameError);

    return true;

}


// ========================================
// 10. VALIDATION DE L'EMAIL
// ========================================

function validateEmail() {

    let value = emailInput.value.trim();


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

        showError(
            emailError,
            "Veuillez entrer une adresse email valide."
        );

        return false;

    }


   clearError(emailError)

    return true;

}


// ========================================
// 11. VALIDATION DU SUJET
// ========================================

function validateSubject() {

    let value = subjectInput.value.trim();


    if (value.length < 3) {

        showError(
            subjectError,
            "Le sujet doit contenir au moins 3 caractères."
        );

        return false;

    }


   clearError(subjectError);
    return true;

}


// ========================================
// 12. VALIDATION DU MESSAGE
// ========================================

function validateMessage() {

    let value = messageInput.value.trim();


    if (value.length < 10) {

        showError(
            messageError,
            "Le message doit contenir au moins 10 caractères."
        );

        return false;

    }


   clearError(messageError);
    return true;

}


// ========================================
// 13. VALIDATION DE TOUS LES CHAMPS
// ========================================

function validateForm() {

    let okName = validateName();

    let okEmail = validateEmail();

    let okSubject = validateSubject();

    let okMessage = validateMessage();


    return okName && okEmail && okSubject && okMessage;

}


// ========================================
// 14. VALIDATION DU NOM PENDANT LA SAISIE
// ========================================

nameInput.addEventListener("input", function() {

    validateName();

});


// ========================================
// 15. VALIDATION DE L'EMAIL PENDANT LA SAISIE
// ========================================

emailInput.addEventListener("input", function() {

    validateEmail();

});


// ========================================
// 16. VALIDATION DU SUJET PENDANT LA SAISIE
// ========================================

subjectInput.addEventListener("input", function() {

    validateSubject();

});


// ========================================
// 17. VALIDATION DU MESSAGE PENDANT LA SAISIE
// ========================================

messageInput.addEventListener("input", function() {

    validateMessage();

});


// ========================================
// 18. SOUMISSION DU FORMULAIRE
// ========================================

form.addEventListener("submit", function(event) {

    // Empêcher la page de se recharger
    event.preventDefault();


    // Effacer l'ancien résultat
    result.innerHTML = "";


    // Vérifier tous les champs
    if (validateForm()) {

        result.innerHTML = "Votre message est valide !";

        result.className = "ok";

        form.reset();
        clearError(nameError);
        clearError(emailError);
        clearError(subjectError);
        clearError(messageError);

    } else {

        result.innerHTML = "Veuillez corriger les erreurs.";

        result.className = "error";

    }

});
}
const profileToggle = document.getElementById("profileToggle");
const profileInfo = document.getElementById("profileInfo");

profileToggle.addEventListener("click", function() {

    // Afficher / cacher les informations
    profileInfo.classList.toggle("show");

    // Faire tourner la flèche
    profileToggle.classList.toggle("open");

});
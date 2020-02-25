var validation = document.getElementById('envoie');
var prenom = document.getElementById('prenom');
var prenom_m = document.getElementById('prenom_manquant');
var email = document.getElementById('email');
var email_m = document.getElementById('email_manquant');
validation.addEventListener('click', f_valide);

function  f_valide(e){
    if(prenom.validity.valueMissing){
       e.preventDefault();
       prenom_m.textContent ='Remplir votre prenom et nom svp !';
       prenom_m.style.color ='red';
    }
    else {
       e.preventDefault();
       email_m.textContent ='Mettez l\'email c\'est obligatoire !';
       email_m.style.color ='red';
        
    }

}
 
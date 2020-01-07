function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function (){
        return "Nom : "+this.nom+", prénom : "+this.prenom+", pseudo : "+this.pseudo;
    }
}
var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

console.log("Nom : "+jules.nom);
console.log("Prénom : "+jules.prenom);
console.log("Pseudo : "+jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(Personne){
    console.log("Nom : "+ Personne.nom);
    console.log("Prénom : "+Personne.prenom);
    console.log("Pseudo : "+Personne.pseudo);
    console.log(Personne.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

jules.age;
console.log("Age : "+jules.age);

Personne.prototype.age = "NON RENSEIGNE";
console.log("Age : "+jules.age);

jules.age = 30;
console.log("Age : "+jules.age);

Personne.prototype.getInitiales = function(){
    return this.nom.charAt(0)+"."+this.prenom.charAt(0)+".";
}

console.log(jules.getInitiales());

var robert = {nom: "Robert",
            prenom: "LEPREFET",
            pseudo: "robert77",
            getNomComplet: function(){
                return "Nom : "+this.nom+", prénom : "+this.prenom+", pseudo : "+this.pseudo;
            }
        };

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return "Numéro client : "+this.numeroClient+", nom : "+this.nom+", prénom : "+this.prenom;
    }
}

var steve = new Client("LUCAS", "Steve","steve44", "A01");
afficherPersonne(steve);

console.log("Numéro client : "+steve.numeroClient);
console.log(steve.getInfos());
export default class Employe{
    constructor(){

    }
    ajout(employe){
        this.id = employe.id,
        this.nom = employe.nom,
        this.prenom = employe.prenom,
        this.email = employe.email,
        this.poste = employe.poste,
        this.dateEmbauche = employe.dateEmbauche,
        this.statut = employe.statut
        console.log(`l'employe ${this.nom} a été enregistrer avec succes`)
    }
    mettreAjour(newEmploye){
        this.nom = newEmploye.nom,
        this.prenom = newEmploye.prenom,
        this.email = newEmploye.email,
        this.poste = newEmploye.poste,
        this.dateEmbauche = newEmploye.dateEmbauche,
        this.statut = newEmploye.statut
        console.log(`l'employe ${this.nom} a été modifier avec succes`)
    }
    supprime(){
        console.log(`l'employe ${this.nom} dans le poste ${this.poste} a ete supprimer`)
    }
    getEmploye() {
        console.log(`Employer: ${this.name}, ${this.email}`);
        return { name: this.name };
      }
}
//

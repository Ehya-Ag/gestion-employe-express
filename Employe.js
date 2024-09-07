export default class Employe{
    constructor(){

    }
    add(employe){
        this.id = employe.id,
        this.nom = employe.nom,
        this.prenom = employe.prenom,
        this.email = employe.email,
        this.poste = employe.poste,
        this.dateEmbauche = employe.dateEmbauche,
        this.statut = employe.statut
        console.log(`l'employe ${this.nom} a été enregistrer avec succes`)
    }
    update(newEmploye){
        this.nom = newEmploye.nom,
        this.prenom = newEmploye.prenom,
        this.email = newEmploye.email,
        this.poste = newEmploye.poste,
        this.dateEmbauche = newEmploye.dateEmbauche,
        this.statut = newEmploye.statut
        console.log(`l'employe ${this.nom} a été modifier avec succes`)
    }
    destroy(){
            this.name= "",            
            this.prenom = "",
            this.email = "",
            this.poste = "",
            this.dateEmbauche = "",
            this.statut = "",
        console.log(`l'employe ${this.nom} a ete supprimer`)
    }
    getEmploye() {
        return { 
            name: this.name,
            prenom : this.prenom,
            email : this.email,
            poste : this.poste,
            dateEmbauche : this.dateEmbauche,
            statut : this.statut,
        };
      }
}

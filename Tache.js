export default class Tache{
    constructor(){};
    ajoutTache(tache){
        this.id = tache.id, 
        this.nom = tache.nom, 
        this.description = tache.description, 
        this.dateDebut = tache.dateDebut, 
        this.dateFin = tache.dateFin,
        this.statut = tache.statut,
        this.priorite = tache.priorite
        console.log(`tache ${this.nom} ajouter avec succes`)
    }
    modifierTache(newTache){
        this.id = newTache.id, 
        this.nom = newTache.nom, 
        this.description = newTache.description, 
        this.dateDebut = newTache.dateDebut, 
        this.dateFin = newTache.dateFin,
        this.statut = newTache.statut,
        this.priorite = newTache.priorite
        console.log(`tache ${this.nom} modifier avec succes`)
    }
    supprimer(){
        console.log(`la taches a ete supprimme avec  succes`)
    }
}
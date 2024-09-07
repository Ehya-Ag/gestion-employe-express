export default class Task{
    constructor(){};
    addTask(task){
        this.id = task.id, 
        this.nom = task.nom, 
        this.description = task.description, 
        this.dateDebut = task.dateDebut, 
        this.dateFin = task.dateFin,
        this.statut = task.statut,
        this.priorite = task.priorite
        console.log(`Task ${this.nom} ajouter avec succes`)
    }
    updateTask(newTask){
        this.id = newTask.id, 
        this.nom = newTask.nom, 
        this.description = newTask.description, 
        this.dateDebut = newTask.dateDebut, 
        this.dateFin = newTask.dateFin,
        this.statut = newTask.statut,
        this.priorite = newTask.priorite
        console.log(`Task ${this.nom} modifier avec succes`)
    }
    destroy(){
        this.id = null,
        this.nom = null,
        this.description = null,
        this.dateDebut = null,
        this.dateFin = null,
        this.priorite = null
    }
    getTask(){
        return {
            nom: this.nom,
            description: this.description,
            dateDebut: this.dateDebut,
            dateFin: this.dateFin,
            statut: this.statut,
            priorite: this.priorite,
          };
    }
}
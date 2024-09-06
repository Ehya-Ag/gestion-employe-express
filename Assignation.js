export default class Assignation {
    // constructor(employe, tache, dateAssignation) {
    //         this.employe = employe;
    //         this.tache = tache;
    //         this.dateAssignation = dateAssignation;
    //       }
    assignerTache(newTache) {
            this.employe = newTache.employe;
            this.tache = newTache.tache;
            this.dateAssignation = newTache.dateAssignation
            console.log('la tache a ete affecté cree avec succes')
    }

    // retirerTache(employe, tache) {
    //     this.assignations = this.assignations.filter(a => !(a.employe === employe && a.tache === tache));
    // }

    listerTachesParEmploye(employe) {
        return this.assignation
            .filter(a => a.employe === employe)
            .map((assignation) => {
                return {
                    tache: assignation.tache
                }
            });
    }

    // listerEmployesParTache(tache) {
    //     return this.assignations
    //         .filter(a => a.tache === tache)
    //         .map(a => a.employe);
    // }
}

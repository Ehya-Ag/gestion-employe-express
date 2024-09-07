export default class Assignation {
    static tabAssignations = []
    static getTab(){
        return Assignation.tabAssignations;
    }
   static assign({employe, tache, dateAssignation}) {
            Assignation.tabAssignations.push({employe, tache, dateAssignation})
            console.log('la tache a ete affecté cree avec succes')
    }
    static dropAssign(employe) {
        if (employe) {
          Assignation.tabAssignations = Assignation.tabAssignations.filter(
            (emp) => {
              return emp.employe.nom !== employe.nom
            }
          );
        }
      }
      static getEmpAssign(employe) {
        console.log(`${employe} existe`)
        if (employe) {
          return Assignation.tabAssignations
            .filter(emp => emp.employe.nom === employe.nom)
            .map(ass => {
              return {
                tache: ass.tache,
                dateAssignation: ass.dateAssignation,
              };
            });
        }
      }
      static getTacheAssign(tache) {
        console.log("on est dans tache assigner")
        if (tache) {
          return Assignation.tabAssignations = Assignation.tabAssignations
            .filter(tsk => tsk.tache.nom === tache.nom)
            .map(ass => {
              return {
                employe: ass.employe,
                dateAssignation: ass.dateAssignation,
              };
            });
        }
       
      }
}

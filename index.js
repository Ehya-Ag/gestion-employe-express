import express from "express";
import bodyparser from "body-parser";
import  Employe from "./Employe.js"
import Tache from "./Tache.js"
import Assignation from "./Assignation.js"
const app = express()
app.use(express.json())
app.use(bodyparser.json())
const port = 3000;
app.post('/employe',(req, res) =>{
    const employe = new Employe()
    employe.add({
        id: 1,
        nom : 'Samba',
        prenom : 'Diallo',
        email : 'samba@gmail.com',
        poste : 'Chargé de finance',
        dateEmbauche : new Date(),
        statut : 'en exercice'
    })
    const employe1 = new Employe()
    employe1.add({
        id: 2,
        nom : 'Cheikh',
        prenom : 'bah',
        email : 'bah@gmail.com',
        poste : 'Chargé de Rh',
        dateEmbauche : new Date(),
        statut : 'debut'
    })
    const employe2 = new Employe()
    employe2.add({
        id: 3,
        nom : 'Maiga',
        prenom : 'Amina',
        email : 'amina@gmail.com',
        poste : 'Chargé de suivis',
        dateEmbauche : new Date(),
        statut : 'debut'
    })
        employe.update({
            id: 3,
            nom : 'Bah',
            prenom : 'Taher',
            email : 'taher@gmail.com',
            poste : 'Chargé de finance',
            dateEmbauche : new Date(),
            statut : 'en exercice'
        })
    employe.destroy({})
            
    //Pour les taches
    const tache = new Tache()
    const tache1 = new Tache()
    const tache2 = new Tache()
    tache.addTask(
        {
            id : 1, 
            nom : "Testeur", 
            description : "Tester les application", 
            dateDebut : "2024-02-12", 
            dateFin : "2024-03-10",
            statut : "actif",
            priorite : "moyenne"
        },
    )
    tache1.addTask(
        {
            id : 2, 
            nom : "Dev web", 
            description : "Developpeur web", 
            dateDebut : "2024-01-12", 
            dateFin : "2024-02-10",
            statut : "actif",
            priorite : "importante"
        }
    )
    tache2.addTask({
        id : 3, 
        nom : "Deployer", 
        description : "Deployer les applications", 
        dateDebut : "2024-05-12", 
        dateFin : "2024-07-10",
        statut : "actif",
        priorite : "importante"
})
    tache.updateTask({
            id : 1, 
            nom : "Designer", 
            description : "Designer les application", 
            dateDebut : "2024-01-12", 
            dateFin : "2024-02-10",
            statut : "actif",
            priorite : "importante"
    })
    tache.destroy({

    })

    //Assignement
    console.log('****************************************************************************************************************************')
    Assignation.assign({employe: employe1.getEmploye(), tache: tache1.getTask(), dateAssignation: new Date()})
  Assignation.assign({employe: employe2.getEmploye(), tache: tache2.getTask(), dateAssignation: new Date()})
  Assignation.assign({employe: employe.getEmploye(), tache: tache2.getTask(), dateAssignation: new Date()})
  const assignation = Assignation.getTab()
  const resulFiltreEmploye = Assignation.getEmpAssign(employe.getEmploye());
  const newAssignationE = Assignation.getTab()
    
  const resulFiltreTask = Assignation.getTacheAssign(tache.getTask());
    
  Assignation.assign({employe: employe1.getEmploye(), tache: tache1.getTask(), dateAssignation: new Date()})
  Assignation.assign({employe: employe2.getEmploye(), tache: tache1.getTask(), dateAssignation: new Date()})
  const newAssignationT = Assignation.getTab()
  
  res.status(200).json({newAssignationE, newAssignationT});
});
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
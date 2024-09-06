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
    employe.ajout({
        id: 1,
        nom : 'Samba',
        prenom : 'Diallo',
        email : 'samba@gmail.com',
        poste : 'Chargé de finance',
        dateEmbauche : new Date(),
        statut : 'en exercice'
    })
    const employe1 = new Employe()
    employe1.ajout({
        id: 2,
        nom : 'Cheikh',
        prenom : 'bah',
        email : 'bah@gmail.com',
        poste : 'Chargé de Rh',
        dateEmbauche : new Date(),
        statut : 'debut'
    })
  //  res.json(employe)
        employe.mettreAjour({
            id: 1,
            nom : 'Bah',
            prenom : 'Taher',
            email : 'taher@gmail.com',
            poste : 'Chargé de finance',
            dateEmbauche : new Date(),
            statut : 'en exercice'
        })
        //res.json(employe)
    employe.supprime({})
        //res.json(`L'employe a ete supprimer`)
            
    //Pour les taches
    const tache = new Tache()
    const tache1 = new Tache()
    tache.ajoutTache(
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
    tache1.ajoutTache(
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
    tache.modifierTache({
            id : 1, 
            nom : "Designer", 
            description : "Designer les application", 
            dateDebut : "2024-01-12", 
            dateFin : "2024-02-10",
            statut : "actif",
            priorite : "importante"
    })
    tache.supprimer({

    })

    //Assignement
    const assignation = new Assignation();
    const assignation1 = new Assignation();
    assignation.assignerTache({
      employe: [employe],
      tache: [tache],
      dateAssignation : new Date()
    });
    assignation1.assignerTache({
        employe: [employe],
        tache: [tache1],
        dateAssignation : new Date()
      });
     res.json([assignation, assignation1])
    // const assignations = [assignation, assignation1]
    // assignation.listerTachesParEmploye(assignations)
    // res.json(assignation)
});
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
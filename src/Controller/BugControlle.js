import AnneeService from "../Services/AnneeService";
import BugService from "../Services/BugService";
export const traitement = (id_projet, id_annee, description, duree) => {
    return new Promise((resolve, reject) => {
    const bug = {
        duree_maintenance_bug: duree,
        annee: {
            id_annee: id_annee
        },
        description_bug: description,
    };
    JSON.stringify(bug);
    laNotif(id_annee, duree)
        .then(updatedAnnee => {
            if (upa(id_annee, updatedAnnee)) {
                BugService.createBug(bug).then(() => {
                    console.log('Bug bien inserer');
                    resolve(); // Résoudre la promesse ici
                });
            }
        })
        .catch(error => {
            console.error(error);
            reject();
        });
    });
};

const laNotif = (id_annee, duree) => {
    return AnneeService.getAnneeById(id_annee)
        .then(res => {
            const annee = res.data;
            duree = parseInt(duree);
            annee.duree_to_annee = parseInt(annee.duree_to_annee);
            annee.duree_to_annee += duree;
            if(annee.duree_to_annee === parseInt(annee.projet.quotas)){
                annee.notif = "Le projet " + annee.projet.nom_projet + " égale quotas";
            }
            if (annee.duree_to_annee >= (parseInt(annee.projet.quotas) - 5) && annee.duree_to_annee < parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " arrive presque à la fin du quotas.";
            }
            if (annee.duree_to_annee > parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " dépasse le quota de " + (annee.duree_to_annee - annee.projet.quotas)+" jours";
            }
            return annee; // Renvoyer la valeur mise à jour
        });
};
const upa = (id_annee, anneetoup) => {
    return AnneeService.updateAnnee(id_annee, anneetoup)
        .then(() => true);
};

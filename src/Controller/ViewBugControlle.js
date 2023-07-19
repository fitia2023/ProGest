import BugService from '../Services/BugService';
import AnneeService from '../Services/AnneeService';
export function supprimer(bug) {
    return new Promise((resolve, reject) => {
        laNotif(bug.annee.id_annee, bug.duree_maintenance_bug)
            .then(updatedAnnee => {
                if (upa(bug.annee.id_annee, updatedAnnee)) {
                    BugService.deleteBug(bug.id_bug).then(() => {
                        console.log('Bug bien supprimer');
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
            annee.duree_to_annee -= duree;
            if (annee.duree_to_annee === parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " égale quotas";
            }
            if (annee.duree_to_annee >= (parseInt(annee.projet.quotas) - 5) && annee.duree_to_annee < parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " arrive presque à la fin du quotas.";
            }else{
                if (annee.duree_to_annee < parseInt(annee.projet.quotas)) {
                    annee.notif = null;
                }
            }
            if (annee.duree_to_annee > parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " dépasse le quota de " + (annee.duree_to_annee - annee.projet.quotas) + " jours";
            }
            return annee; // Renvoyer la valeur mise à jour
        });
};
const upa = (id_annee, anneetoup) => {
    return AnneeService.updateAnnee(id_annee, anneetoup)
        .then(() => true);
};

function id_annee_et_duree_ancienne(id_bug) {
    return new Promise((resolve, reject) => {
        BugService.getBugById(id_bug).then((res) => {
            const duree_ancienne = res.data.duree_maintenance_bug;
            const id_annee = res.data.annee.id_annee;
            resolve([id_annee, duree_ancienne]);
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function metreajour(id_bug, duree, description) {
    try {
      const [id_annee, duree_ancienne] = await id_annee_et_duree_ancienne(id_bug);
      const bug = {
        duree_maintenance_bug: duree,
        annee: {
          id_annee: id_annee
        },
        description_bug: description,
      };
  
      const updatedAnnee = await laNotif2(id_annee, duree, duree_ancienne);
      if (await upa(id_annee, updatedAnnee)) {
        await BugService.updateBug(id_bug, bug);
        console.log('Bug bien mis à jour');
        return true;
      } else {
        console.error('Erreur lors de la mise à jour de la durée de l\'année.');
        return false;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  

const laNotif2 = (id_annee, duree, duree_ancienne) => {
    return AnneeService.getAnneeById(id_annee)
        .then(res => {
            const annee = res.data;
            duree = parseInt(duree);
            annee.duree_to_annee = parseInt(annee.duree_to_annee);
            annee.duree_to_annee -= parseInt(duree_ancienne);
            annee.duree_to_annee += duree;
            if (annee.duree_to_annee === parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " égale quotas";
            }
            if (annee.duree_to_annee >= (parseInt(annee.projet.quotas) - 5) && annee.duree_to_annee < parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " arrive presque à la fin du quotas.";
            }else{
                if (annee.duree_to_annee < parseInt(annee.projet.quotas)) {
                    annee.notif = null;
                }
            }
            if (annee.duree_to_annee > parseInt(annee.projet.quotas)) {
                annee.notif = "Le projet " + annee.projet.nom_projet + " dépasse le quota de " + (annee.duree_to_annee - annee.projet.quotas) + " jours";
            }
            
            return annee; // Renvoyer la valeur mise à jour
        });
};
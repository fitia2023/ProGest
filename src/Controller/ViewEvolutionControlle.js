import EvolutionService from '../Services/EvolutionService';
import AnneeService from '../Services/AnneeService';
export function supprimer(evolution) {
    return new Promise((resolve, reject) => {
        laNotif(evolution.annee.id_annee, evolution.duree_maintenance_evolution)
            .then(updatedAnnee => {
                if (upa(evolution.annee.id_annee, updatedAnnee)) {
                    EvolutionService.deleteEvolution(evolution.id_evolution).then(() => {
                        console.log('evolution bien supprimer');
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

function id_annee_et_duree_ancienne(id_evolution) {
    return new Promise((resolve, reject) => {
        EvolutionService.getEvolutionById(id_evolution).then((res) => {
            const duree_ancienne = res.data.duree_maintenance_evolution;
            const id_annee = res.data.annee.id_annee;
            resolve([id_annee, duree_ancienne]);
        }).catch((error) => {
            reject(error);
        });
    });
}

export async function metreajour(id_evolution, duree, description) {
    try {
      const [id_annee, duree_ancienne] = await id_annee_et_duree_ancienne(id_evolution);
      const evolution = {
        duree_maintenance_evolution: duree,
        annee: {
          id_annee: id_annee
        },
        description_evolution: description,
      };
  
      const updatedAnnee = await laNotif2(id_annee, duree, duree_ancienne);
      if (await upa(id_annee, updatedAnnee)) {
        await EvolutionService.updateEvolution(id_evolution, evolution);
        console.log('evolution bien mis à jour');
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
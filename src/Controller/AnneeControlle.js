import AnneeService from "../Services/AnneeService";
class anneeControlle {
    traitementannee(Projet, annee) {
        return new Promise((resolve, reject) => {
            this.existanceanne(annee, Projet.id_projet)
                .then((id_annee) => {
                    if (id_annee) {
                        this.AnneeExist(id_annee);
                        resolve(id_annee);
                    } else {
                        const Annee = {
                            ans: annee,
                            prix_annee: Projet.prix,
                            projet: Projet,
                            duree_to_annee: 0
                        };
                        JSON.stringify(Annee);
                        this.creationannee(Annee, Projet.id_projet)
                            .then((newId) => resolve(newId))
                            .catch(reject);
                    }
                })
                .catch(reject);
        });
    }


    existanceanne(annee, idProjet) {
        return AnneeService.lookexist(annee, idProjet)
            .then((res) => {
                return res.data === '' ? null : res.data.id_annee;
            });
    }

    creationannee(lannee, id_projet) {
        return AnneeService.createAnnee(lannee).then(() => {
            return this.existanceanne(lannee.ans, id_projet).then((id_annee) => {
                return id_annee;
            });
        });
    }


    AnneeExist(id_annee) {
        return id_annee;
    }


}
const AnneeControlle = new anneeControlle();
export default AnneeControlle;

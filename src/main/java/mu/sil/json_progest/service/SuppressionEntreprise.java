package mu.sil.json_progest.service;

import mu.sil.json_progest.modele.Annee;
import mu.sil.json_progest.modele.Bug;
import mu.sil.json_progest.modele.Entreprise;
import mu.sil.json_progest.modele.Projet;
import mu.sil.json_progest.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuppressionEntreprise {

    @Autowired
    private EntrepriseRepo entrepriseRepo;

    @Autowired
    private ProjetRepo projetRepo;

    @Autowired
    private AnneeRepo anneeRepo;

    @Autowired
    private BugRepo bugRepo;

    @Autowired
    private EvolutionRepo evolutionRepo;

    public Boolean byid_entreprise(Long id_entreprise){

        Entreprise entreprise = entrepriseRepo.findById(id_entreprise).orElseThrow(null);

        if (entreprise != null){
            for (Projet projet: projetRepo.findAll()){
                if (projet.getEntreprise().equals(entreprise)){
                    projet.setEntreprise(entrepriseRepo.findById(0L).orElseThrow(null));
                }
            }
            entrepriseRepo.deleteById(entreprise.getId_entreprise());
            return true;
        }else {
            return null;
        }

    }

    public Boolean suppressionprojet(Long id_projet){

        Projet projet = projetRepo.findById(id_projet).orElseThrow(null);

        if (projet != null){
            for (Annee annee : anneeRepo.findByProjetId(projet.getId_projet()) ){
                bugRepo.deleteAllInBatch(bugRepo.listbutId_annee(annee.getId_annee()));
                evolutionRepo.deleteAllInBatch(evolutionRepo.listEvolutionId_annee(annee.getId_annee()));
                anneeRepo.deleteById(annee.getId_annee());
            }
            projetRepo.deleteById(projet.getId_projet());
            return true;
        }else {
            return null;
        }

    }

}

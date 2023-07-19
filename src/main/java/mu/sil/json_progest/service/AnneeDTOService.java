package mu.sil.json_progest.service;

import mu.sil.json_progest.DTO.AnneeDTO;
import mu.sil.json_progest.exception.NotFound;
import mu.sil.json_progest.modele.Annee;
import mu.sil.json_progest.repository.AnneeRepo;
import mu.sil.json_progest.repository.BugRepo;
import mu.sil.json_progest.repository.EvolutionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnneeDTOService {

    @Autowired
    private AnneeRepo anneeRepo;

    @Autowired
    private BugRepo bugRepo;

    @Autowired
    private EvolutionRepo evolutionRepo;

    public AnneeDTO obtenirlistIdannee(Long id_annee){

        Annee anneelook = anneeRepo.findById(id_annee)
                .orElseThrow(()->new NotFound("annee pas trouve"));
        AnneeDTO anneeDTO = new AnneeDTO();

        anneeDTO.setAnnee(anneelook);

        anneeDTO.setBugList(bugRepo.listbutId_annee(anneelook.getId_annee()));
        anneeDTO.setEvolutionList(evolutionRepo.listEvolutionId_annee(anneelook.getId_annee()));

        return anneeDTO;

    }

}

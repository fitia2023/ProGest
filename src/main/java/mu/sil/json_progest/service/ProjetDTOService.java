package mu.sil.json_progest.service;

import mu.sil.json_progest.DTO.AnneeDTO;
import mu.sil.json_progest.DTO.ProjetDTO;
import mu.sil.json_progest.exception.NotFound;
import mu.sil.json_progest.modele.Annee;
import mu.sil.json_progest.modele.Projet;
import mu.sil.json_progest.repository.ProjetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjetDTOService {

    @Autowired
    private ProjetRepo projetRepo;

    @Autowired
    private AnneeDTOService anneeDTOService;

    public ProjetDTO listanneselonid_projet(Long id_projet){
        Projet p = projetRepo.findById(id_projet)
                .orElseThrow(()->new NotFound("Projet nom trouve"));

        List<Annee> anneeList = projetRepo.listanneid_projet(p.getId_projet());
        List<AnneeDTO> anneeDTOList = new ArrayList<>();
        for (Annee a:anneeList){
            anneeDTOList.add(anneeDTOService.obtenirlistIdannee(a.getId_annee()));
        }
        ProjetDTO t= new ProjetDTO();
        t.setProjet(p);
        t.setAnneeDTOList(anneeDTOList);

        return t;
    }

}

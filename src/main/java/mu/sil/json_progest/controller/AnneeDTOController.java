package mu.sil.json_progest.controller;


import mu.sil.json_progest.DTO.AnneeDTO;
import mu.sil.json_progest.service.AnneeDTOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AnneeDTOController {

    @Autowired
    private AnneeDTOService anneeDTOService;


    @GetMapping("/listannee/{id_annee}")
    public AnneeDTO listbugevId_anne(@PathVariable Long id_annee){
        return anneeDTOService.obtenirlistIdannee(id_annee);
    }

}

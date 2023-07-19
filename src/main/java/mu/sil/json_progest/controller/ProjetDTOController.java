package mu.sil.json_progest.controller;

import mu.sil.json_progest.DTO.ProjetDTO;
import mu.sil.json_progest.service.ProjetDTOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProjetDTOController {

    @Autowired
    private ProjetDTOService projetDTOService;

    @GetMapping("/listviewprojet/{id_projet}")
    public ProjetDTO voir(@PathVariable Long id_projet){
        return projetDTOService.listanneselonid_projet(id_projet);
    }

}

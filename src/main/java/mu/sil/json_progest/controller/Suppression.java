package mu.sil.json_progest.controller;

import mu.sil.json_progest.service.SuppressionEntreprise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/suppression")
public class Suppression {

    @Autowired
    private SuppressionEntreprise suppressionEntreprise;

    @DeleteMapping("/entreprise/{id_entreprise}")
    public Boolean del(@PathVariable Long id_entreprise){
        return suppressionEntreprise.byid_entreprise(id_entreprise);
    }
    @DeleteMapping("/projet/{id_projet}")
    public Boolean delp(@PathVariable Long id_projet){
        return suppressionEntreprise.suppressionprojet(id_projet);
    }
}

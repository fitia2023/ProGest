package mu.sil.json_progest.controller;

import mu.sil.json_progest.exception.NotFound;
import mu.sil.json_progest.modele.Entreprise;
import mu.sil.json_progest.repository.EntrepriseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/entreprise")
public class EntrepriseController {
    @Autowired
    private EntrepriseRepo entrepriseRepo;

    @GetMapping("/")
    private List<Entreprise> listentreprise(){
        return entrepriseRepo.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Entreprise> identreprise(@PathVariable Long id){
        Entreprise entreprise = entrepriseRepo.findById(id)
                .orElseThrow(()-> new NotFound("Entreprise n'existe pas ou pas trouvé"));

        return ResponseEntity.ok(entreprise);
    }

    @PostMapping("/save")
    public Entreprise saveE(@RequestBody Entreprise entreprise){
        return entrepriseRepo.save(entreprise);
    }

    @PutMapping("/up/{id}")
    public ResponseEntity<Entreprise> upid(@PathVariable Long id,@RequestBody Entreprise entreprise){
        Entreprise entrepriseup = entrepriseRepo.findById(id)
                .orElseThrow(()->new NotFound("Entreprise n'existe pas encore"));

        entrepriseup.setNom_entreprise(entreprise.getNom_entreprise());
        entrepriseup.setAdresse_entreprise(entreprise.getAdresse_entreprise());
        entrepriseup.setTel_entreprise(entreprise.getTel_entreprise());

        Entreprise upentreprise = entrepriseRepo.save(entrepriseup);
        return ResponseEntity.ok(upentreprise);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Map<String,Boolean>> delis(@PathVariable Long id){
        Entreprise entreprise = entrepriseRepo.findById(id)
                .orElseThrow(()->new NotFound("Entreptise n'exoiste pas"));
        entrepriseRepo.delete(entreprise);
        Map<String,Boolean> reponse = new HashMap<>();
        reponse.put("efface reussi",Boolean.TRUE);
        return ResponseEntity.ok(reponse);
    }
}


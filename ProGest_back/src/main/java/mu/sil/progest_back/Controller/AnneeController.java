package mu.sil.progest_back.Controller;

import mu.sil.progest_back.Exception.AnneeNotFound;
import mu.sil.progest_back.Repository.AnneeRepo;
import mu.sil.progest_back.modele.Annee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/annee")
public class AnneeController {
    @Autowired
    private AnneeRepo anneeRepo;

    @GetMapping("/all")
    public List<Annee> listannee() {
        return anneeRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Annee> idannee(@PathVariable Long id) {
        Annee annee = anneeRepo.findById(id)
                .orElseThrow(() -> new AnneeNotFound("Annee n'existe pas ou pas trouvé"));

        return ResponseEntity.ok(annee);
    }

    @PostMapping("/save")
    public Annee saveA(@RequestBody Annee annee) {
        return anneeRepo.save(annee);
    }

    @PutMapping("/up/{id}")
    public ResponseEntity<Annee> upid(@PathVariable Long id, @RequestBody Annee annee) {
        Annee anneeup = anneeRepo.findById(id)
                .orElseThrow(() -> new AnneeNotFound("annee n'existe pas encore"));
        anneeup.setAns(annee.getAns());
        anneeup.setDuree_to_annee(annee.getDuree_to_annee());
        anneeup.setPrix_annee(annee.getPrix_annee());
        anneeup.setNotif(annee.getNotif());
        anneeup.setProjet(annee.getProjet());

        Annee upannee = anneeRepo.save(anneeup);
        return ResponseEntity.ok(upannee);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Map<String, Boolean>> delis(@PathVariable Long id) {
        Annee annee = anneeRepo.findById(id)
                .orElseThrow(() -> new AnneeNotFound("Annee n'exoiste pas"));
        anneeRepo.delete(annee);
        Map<String, Boolean> reponse = new HashMap<>();
        reponse.put("efface reussi", Boolean.TRUE);
        return ResponseEntity.ok(reponse);
    }
}

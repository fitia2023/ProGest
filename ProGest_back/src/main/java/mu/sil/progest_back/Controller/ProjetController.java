package mu.sil.progest_back.Controller;

import mu.sil.progest_back.Exception.ProjetNotFound;
import mu.sil.progest_back.Repository.ProjetRepo;
import mu.sil.progest_back.modele.Projet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/projet")
public class ProjetController {
    @Autowired
    private ProjetRepo projetRepo;

    @GetMapping("/all")
    public List<Projet> listporjet() {
        return projetRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Projet> idprojet(@PathVariable Long id) {
        Projet projet = projetRepo.findById(id)
                .orElseThrow(() -> new ProjetNotFound("Projet n'existe pas ou pas trouvé"));

        return ResponseEntity.ok(projet);
    }

    @PostMapping("/save")
    public Projet saveP(@RequestBody Projet projet) {
        return projetRepo.save(projet);
    }

    @PutMapping("/up/{id}")
    public ResponseEntity<Projet> upid(@PathVariable Long id, @RequestBody Projet projet) {
        Projet projetup = projetRepo.findById(id)
                .orElseThrow(() -> new ProjetNotFound("Projet n'existe pas encore"));
        projetup.setNom_projet(projet.getNom_projet());
        projetup.setPrix(projet.getPrix());
        projetup.setDate_debut(projet.getDate_debut());
        projetup.setDure_contrat(projet.getDure_contrat());
        projetup.setQuotas(projet.getQuotas());
        projetup.setEntreprise(projet.getEntreprise());

        Projet upprojet = projetRepo.save(projetup);
        return ResponseEntity.ok(upprojet);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Map<String, Boolean>> delis(@PathVariable Long id) {
        Projet projet = projetRepo.findById(id)
                .orElseThrow(() -> new ProjetNotFound("Projet n'exoiste pas"));
        projetRepo.delete(projet);
        Map<String, Boolean> reponse = new HashMap<>();
        reponse.put("efface reussi", Boolean.TRUE);
        return ResponseEntity.ok(reponse);
    }
}

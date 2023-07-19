package mu.sil.json_progest.controller;

import mu.sil.json_progest.exception.NotFound;
import mu.sil.json_progest.modele.Evolution;
import mu.sil.json_progest.repository.EvolutionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/evolution")
public class EvolutionController {

    @Autowired
    private EvolutionRepo evolutionRepo;

    @GetMapping("/")
    public List<Evolution> listevolution() {
        return evolutionRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evolution> idevolution(@PathVariable Long id) {
        Evolution evolution = evolutionRepo.findById(id)
                .orElseThrow(() -> new NotFound("Evolution n'existe pas ou pas trouvé"));

        return ResponseEntity.ok(evolution);
    }

    @PostMapping("/save")
    public Evolution saveE(@RequestBody Evolution evolution) {
        return evolutionRepo.save(evolution);
    }

    @PutMapping("/up/{id}")
    public ResponseEntity<Evolution> upid(@PathVariable Long id, @RequestBody Evolution evolution) {
        Evolution evolutionup = evolutionRepo.findById(id)
                .orElseThrow(() -> new NotFound("Evolution n'existe pas encore"));
        evolutionup.setDescription_evolution(evolution.getDescription_evolution());
        evolutionup.setDuree_maintenance_evolution(evolution.getDuree_maintenance_evolution());
        evolutionup.setAnnee(evolution.getAnnee());

        Evolution upEvolution =evolutionRepo.save(evolutionup);
        return ResponseEntity.ok(upEvolution);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Map<String, Boolean>> delis(@PathVariable Long id) {
        Evolution evolution = evolutionRepo.findById(id)
                .orElseThrow(() -> new NotFound("Evolution n'exoiste pas"));
        evolutionRepo.delete(evolution);
        Map<String, Boolean> reponse = new HashMap<>();
        reponse.put("efface reussi", Boolean.TRUE);
        return ResponseEntity.ok(reponse);
    }
}

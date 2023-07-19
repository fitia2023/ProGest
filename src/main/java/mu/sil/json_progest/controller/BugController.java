package mu.sil.json_progest.controller;

import mu.sil.json_progest.exception.NotFound;
import mu.sil.json_progest.modele.Bug;
import mu.sil.json_progest.repository.BugRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bug")
public class BugController {
    @Autowired
    private BugRepo bugRepo;

    @GetMapping("/")
    public List<Bug> listbug() {
        return bugRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bug> idbug(@PathVariable Long id) {
        Bug bug = bugRepo.findById(id)
                .orElseThrow(() -> new NotFound("Bug n'existe pas ou pas trouvé"));

        return ResponseEntity.ok(bug);
    }

    @PostMapping("/save")
    public Bug saveB(@RequestBody Bug bug) {
        return bugRepo.save(bug);
    }

    @PutMapping("/up/{id}")
    public ResponseEntity<Bug> upid(@PathVariable Long id, @RequestBody Bug bug ) {
        Bug bugup = bugRepo.findById(id)
                .orElseThrow(() -> new NotFound("bug n'existe pas encore"));
        bugup.setDescription_bug(bug.getDescription_bug());
        bugup.setDuree_maintenance_bug(bug.getDuree_maintenance_bug());
        bugup.setAnnee(bug.getAnnee());
        Bug upbug = bugRepo.save(bugup);
        return ResponseEntity.ok(upbug);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<Map<String, Boolean>> delis(@PathVariable Long id) {
        Bug bug = bugRepo.findById(id)
                .orElseThrow(() -> new NotFound("Bug n'exoiste pas"));
        bugRepo.delete(bug);
        Map<String, Boolean> reponse = new HashMap<>();
        reponse.put("efface reussi", Boolean.TRUE);
        return ResponseEntity.ok(reponse);
    }
}

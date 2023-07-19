package mu.sil.json_progest.repository;

import mu.sil.json_progest.modele.Entreprise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntrepriseRepo extends JpaRepository<Entreprise,Long> {
}

package mu.sil.progest_back.Repository;

import mu.sil.progest_back.modele.Evolution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvolutionRepo extends JpaRepository<Evolution,Long> {
}

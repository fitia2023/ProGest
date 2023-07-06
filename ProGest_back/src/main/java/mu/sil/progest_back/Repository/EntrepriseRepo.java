package mu.sil.progest_back.Repository;

import mu.sil.progest_back.modele.Entreprise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntrepriseRepo extends JpaRepository<Entreprise,Long> {

}

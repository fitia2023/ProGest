package mu.sil.progest_back.Repository;

import mu.sil.progest_back.modele.Annee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnneeRepo extends JpaRepository<Annee,Long> {

}

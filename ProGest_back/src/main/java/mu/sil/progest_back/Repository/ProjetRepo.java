package mu.sil.progest_back.Repository;

import mu.sil.progest_back.modele.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjetRepo extends JpaRepository<Projet,Long> {

}

package mu.sil.progest_back.Repository;

import mu.sil.progest_back.modele.Bug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BugRepo extends JpaRepository<Bug,Long> {

}

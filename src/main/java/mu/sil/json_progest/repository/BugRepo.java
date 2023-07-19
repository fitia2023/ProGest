package mu.sil.json_progest.repository;

import mu.sil.json_progest.modele.Bug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BugRepo extends JpaRepository<Bug,Long> {

    @Query("SELECT b FROM Bug b INNER JOIN b.annee a WHERE a.id_annee = :id_an")
    List<Bug> listbutId_annee(@Param("id_an")Long id_an );

}

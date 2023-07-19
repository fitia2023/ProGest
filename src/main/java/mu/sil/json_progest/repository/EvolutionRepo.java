package mu.sil.json_progest.repository;

import mu.sil.json_progest.modele.Evolution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EvolutionRepo extends JpaRepository<Evolution,Long> {

    @Query("SELECT e FROM Evolution e INNER JOIN e.annee a WHERE a.id_annee = :id_an")
    List<Evolution> listEvolutionId_annee(@Param("id_an")Long id_an );
}

package mu.sil.json_progest.repository;

import mu.sil.json_progest.modele.Annee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface AnneeRepo extends JpaRepository<Annee, Long> {
    @Query("SELECT a FROM Annee a INNER JOIN a.projet p WHERE a.ans = :ans AND p.id_projet = :idProjet")
    Annee findByAnsAndIdProjet(@Param("ans") Integer ans, @Param("idProjet") Long idProjet);

    @Query("SELECT a FROM Annee a INNER JOIN a.projet p WHERE p.id_projet = :projetId")
    List<Annee> findByProjetId(@Param("projetId") Long projetId);

}



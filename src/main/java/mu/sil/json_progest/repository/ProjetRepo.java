package mu.sil.json_progest.repository;

import mu.sil.json_progest.modele.Annee;
import mu.sil.json_progest.modele.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjetRepo extends JpaRepository<Projet,Long> {

    @Query("SELECT a FROM Annee a INNER JOIN a.projet p WHERE p.id_projet = :id_pro")
    List<Annee> listanneid_projet(@Param("id_pro")Long id_pro);

}

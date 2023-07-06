package mu.sil.progest_back.modele;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Evolution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_evolution;

    private String description_evolution;

    private Integer duree_maintenance_evolution;

    @ManyToOne
    @JoinColumn(name = "annee_id")
    private Annee annee;

}

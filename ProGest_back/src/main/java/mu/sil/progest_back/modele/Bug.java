package mu.sil.progest_back.modele;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Bug {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_bug;

    private String Description_bug;

    private Integer duree_maintenance_bug;

    @ManyToOne
    @JoinColumn(name = "annee_id")
    private Annee annee;
}

package mu.sil.json_progest.modele;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Annee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_annee;

    private Integer ans;

    private Integer Duree_to_annee;

    private Double prix_annee;

    private String notif;

    @ManyToOne
    @JoinColumn(name = "projet_id")
    private Projet projet;

}
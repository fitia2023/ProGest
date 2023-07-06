package mu.sil.progest_back.modele;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

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
    @JsonBackReference
    private Projet projet;

    @OneToMany(cascade = CascadeType.PERSIST , mappedBy = "annee")
    private List<Bug> bugList;

    @OneToMany(cascade = CascadeType.PERSIST, mappedBy = "annee")
    private List<Evolution> evolutionList;

}

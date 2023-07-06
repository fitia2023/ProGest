package mu.sil.progest_back.modele;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Projet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_projet;

    @Column(length = 30)
    private String nom_projet;

    private Double prix;

    private Integer dure_contrat;

    private Date date_debut;

    private Integer quotas;

    @ManyToOne
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;

    @OneToMany(mappedBy = "projet")
    @JsonIgnore
    private List<Annee> anneeList;


}

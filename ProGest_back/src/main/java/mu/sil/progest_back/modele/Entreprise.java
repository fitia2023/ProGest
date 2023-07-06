package mu.sil.progest_back.modele;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Entreprise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_entreprise;

    @Column(length = 30)
    private String nom_entreprise;

    @Column(length = 100)
    private String adresse_entreprise;

    @Column(length = 30)
    private String tel_entreprise;
    /*

    @OneToMany(mappedBy = "entreprise", cascade = CascadeType.PERSIST)
    private List<Projet> projetList;
*/
}

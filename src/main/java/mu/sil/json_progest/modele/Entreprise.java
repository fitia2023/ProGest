package mu.sil.json_progest.modele;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Entreprise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_entreprise;

    @Column(length = 40)
    private String nom_entreprise;

    @Column(length = 100)
    private String adresse_entreprise;

    @Column(length = 30)
    private String tel_entreprise;


}

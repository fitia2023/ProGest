package mu.sil.json_progest.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mu.sil.json_progest.modele.Annee;
import mu.sil.json_progest.modele.Bug;
import mu.sil.json_progest.modele.Evolution;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class AnneeDTO {

    private Annee annee;

    private List<Bug> bugList;

    private List<Evolution> evolutionList;

}

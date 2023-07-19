package mu.sil.json_progest.DTO;

import lombok.Getter;
import lombok.Setter;
import mu.sil.json_progest.modele.Projet;

import java.util.List;
@Getter
@Setter
public class ProjetDTO {

    private Projet projet;

    private List<AnneeDTO> anneeDTOList;

}

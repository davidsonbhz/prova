package br.com.solides.blog.dto;

import br.com.solides.blog.model.Comentario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.BeanUtils;

import java.util.Date;

@Data
public class ComentarioDTO {

    private Long id;
    private String autornome;
    private String autoremail;
    private String texto;
    private Date datapostagem;
    private Boolean podeExcluir;

    public static ComentarioDTO fromModel(Comentario model) {
        var target = new ComentarioDTO();
        BeanUtils.copyProperties(model, target);
        return target;
    }

}

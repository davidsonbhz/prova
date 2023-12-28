package br.com.solides.blog.dto;

import br.com.solides.blog.model.Postagem;
import br.com.solides.blog.model.Usuario;
import lombok.Data;
import org.springframework.beans.BeanUtils;

import java.util.Date;

@Data
public class PostagemDTO {

    private Long id;
    private Long autorId;
    private String autor;
    private String autoremail;
    private String titulo;
    private String texto;
    private Date datapostagem;
    private Boolean podeExcluir;

    public static PostagemDTO fromModel(Postagem model) {
        var target = new PostagemDTO();
        BeanUtils.copyProperties(model, target);
        target.autor = model.getAutor().getNome();
        target.autorId = model.getAutor().getId();
        target.autoremail = model.getAutor().getEmail();
        return target;
    }

}

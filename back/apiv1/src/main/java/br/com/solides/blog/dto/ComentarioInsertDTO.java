package br.com.solides.blog.dto;

import lombok.Data;

@Data
public class ComentarioInsertDTO {
    private Long postagemId;
    private String texto;
}

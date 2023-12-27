package br.com.solides.blog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UsuarioAuthResponse {

    private String id;
    private String email;
    private String nome;
    private String token;

}

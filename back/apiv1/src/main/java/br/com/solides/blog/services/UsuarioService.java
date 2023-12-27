package br.com.solides.blog.services;

import br.com.solides.blog.dto.UsuarioInsertRequest;

public interface UsuarioService {

    Long criarUsuario(UsuarioInsertRequest dto);

}

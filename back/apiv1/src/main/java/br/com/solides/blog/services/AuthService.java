package br.com.solides.blog.services;

import br.com.solides.blog.dto.UsuarioAuthResponse;

public interface AuthService {

    public UsuarioAuthResponse authenticateUser(String email, String password);

}

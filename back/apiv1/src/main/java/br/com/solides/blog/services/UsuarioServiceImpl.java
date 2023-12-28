package br.com.solides.blog.services;


import br.com.solides.blog.config.JwtUtil;
import br.com.solides.blog.config.LoggedUser;
import br.com.solides.blog.dto.UsuarioAuthResponse;
import br.com.solides.blog.dto.UsuarioBlog;
import br.com.solides.blog.dto.UsuarioInsertRequest;
import br.com.solides.blog.exceptions.DuplicatedRecordException;
import br.com.solides.blog.exceptions.UserAuthenticationException;
import br.com.solides.blog.model.Usuario;
import br.com.solides.blog.repositories.UsuarioRepositorio;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioServiceImpl extends BaseService implements UsuarioService, AuthService, UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;
    @Autowired
    private JwtUtil jwtUtil;

    public Long criarUsuario(UsuarioInsertRequest request) {
        if(usuarioRepositorio.countUsuarioByEmail(request.email) > 0) {
            throw new DuplicatedRecordException();
        }

        var novousuario = new Usuario();
        BeanUtils.copyProperties(request, novousuario);
        novousuario.setPassword(passwordEncoder.encode(request.senha));
        novousuario = usuarioRepositorio.save(novousuario);
        return novousuario.getId();

    }

    @Override
    public UsuarioAuthResponse authenticateUser(String email, String password) {
        var usuario = usuarioRepositorio.findUsuarioByEmail(email);
        if(usuario.isEmpty()) {
            return null;
        }

        var encryptpass = usuario.get().getPassword();
        if(passwordEncoder.matches(password, encryptpass)) {
            var token = jwtUtil.generateToken(usuario.get());
            return UsuarioAuthResponse.builder()
                    .token(token)
                    .nome(usuario.get().getNome())
                    .email(email)
                    .build();
        }

        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var usuario = usuarioRepositorio.findUsuarioByEmail(username);
        if(usuario.isEmpty()) {
            throw new UsernameNotFoundException("USER_NOT_FOUND");
        }
        return new org.springframework.security.core.userdetails.User(
                usuario.get().getEmail(),
                usuario.get().getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("USER")));
    }

    private boolean isAuthenticated() {
        var auth = SecurityContextHolder.getContext().getAuthentication();
        return auth != null;
    }

    public List<UsuarioBlog> getListaUsuarios() {
        var list = usuarioRepositorio.findAllByOrderByNome();
        return list.stream().map(x -> new UsuarioBlog(x.getId(), x.getNome())).collect(Collectors.toList());
    }



}

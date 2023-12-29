package br.com.solides.blog.services;


import br.com.solides.blog.config.JwtUtil;
import br.com.solides.blog.dto.ComentarioInsertDTO;
import br.com.solides.blog.dto.UsuarioAuthResponse;
import br.com.solides.blog.dto.UsuarioBlog;
import br.com.solides.blog.dto.UsuarioInsertRequest;
import br.com.solides.blog.exceptions.DuplicatedRecordException;
import br.com.solides.blog.model.Comentario;
import br.com.solides.blog.model.Postagem;
import br.com.solides.blog.model.Usuario;
import br.com.solides.blog.repositories.ComentariosRepository;
import br.com.solides.blog.repositories.UsuarioRepositorio;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ComentarioServiceImpl extends BaseService implements ComentariosService {

    @Autowired
    private ComentariosRepository repository;
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Override
    public Long registrarComentario(ComentarioInsertDTO dto) {
        var user = usuarioRepositorio.findUsuarioByEmail(getLoggedUser()).get();
        var comentario = Comentario.builder()
                .autorid(user.getId())
                .autornome(user.getNome())
                .texto(dto.getTexto())
                .datapostagem(new Date())
                .build();

        comentario = repository.save(comentario);
        return comentario.getId();
    }

    @Override
    public void excluirComentario(Long comentId) {

    }

    @Override
    public List<Comentario> obterComentarios(Long comentId) {
        return null;
    }
}

package br.com.solides.blog.services;

import br.com.solides.blog.dto.PostagemDTO;
import br.com.solides.blog.dto.UsuarioBlog;
import br.com.solides.blog.repositories.PostagensRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostagensServiceImpl implements PostagensService {

    @Autowired
    private PostagensRepository repository;

    @Override
    public List<PostagemDTO> getPostagens() {
        var list = repository.findAllByOrderByDataPostagemDesc();
        return list.stream().map(x -> PostagemDTO.fromModel(x)).collect(Collectors.toList());
    }


}

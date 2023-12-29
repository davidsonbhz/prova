package br.com.solides.blog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "comentarios")
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "postid")
    private Long postid;

    @Column(name = "autorid")
    private Long autorid;
    @Column(name = "autornome")
    private String autornome;

    @Lob
    @Column(length = 128)
    private String texto;

    @Column(name = "datapostagem")
    private Date datapostagem;

}

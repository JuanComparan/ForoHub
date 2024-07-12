package com.monchito.forohub.domain.topico;

import com.monchito.forohub.domain.autor.Autor;
import com.monchito.forohub.domain.respuesta.Respuesta;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Table(name = "topicos")
@Entity(name = "Topico")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Topico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String mensaje;
    private LocalDateTime fechaCreacion;
    private boolean activo;

    @OneToOne(mappedBy = "topico", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Autor autor;


    private Curso curso;
    @OneToMany(mappedBy = "topico", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Respuesta> respuestas;

    public Topico(String titulo, String mensaje, Autor autor, LocalDateTime fechaCreacion, Curso curso) {
        this.activo = true;
        this.titulo = titulo;
        this.mensaje = mensaje;
        this.autor = autor;
        this.fechaCreacion = fechaCreacion;
        this.curso = curso;
    }
}

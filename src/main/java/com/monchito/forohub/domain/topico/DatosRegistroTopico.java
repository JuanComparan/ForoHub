package com.monchito.forohub.domain.topico;

import com.monchito.forohub.domain.curso.Curso;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DatosRegistroTopico(
        @NotBlank(message = "{titulo obligatorio}")
        String titulo,
        @NotBlank(message = "{mensaje obligatorio}")
        String mensaje,
        @NotNull(message = "{usuario obligatorio}")
        Long IdAutor,
        @NotNull(message = "{curso obligatorio}")
        Long IdCurso
) {
}
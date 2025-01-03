import { ip } from "./IP";

export const iniciarSesion = async (
    navigation: any,
    correoElectronico: string,
    contrasena: string,
    onSuccess?: () => void,
    setError?: React.Dispatch<React.SetStateAction<{ title: string; errorMessages: string[]; time: string } | null>>
) => {
    // DTO de iniciar Sesion
    const LoginDTO = {
        correo_electronico: correoElectronico,
        contrasena
    }

    // URL
    const url = `http://${ip}:8080/login`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(LoginDTO),
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorTitle = errorData.error || "Error";
            const errorTime = errorData.timestamp || new Date().toISOString();

            // Procesar los errores 
            let errorMessages = Array.isArray(errorData.mensaje) ? errorData.mensaje : ["Error desconocido"];

            // Pasar el error con la estructura consistente
            if (setError) {
                setError({
                    title: errorTitle,
                    errorMessages,
                    time: errorTime
                });
            }

            console.error("Error al crear el usuario:", errorData);
            return;
        }

        const data = await response.json();
        console.log("Sesion Iniciada!!", data);

        if (onSuccess) {
            onSuccess();
        }

        navigation.navigate("Home");
    } catch (error) {
        console.error("Error de red:", error);
        if (setError) {
            setError({
                title: "Error de red",
                errorMessages: ["No se pudo conectar al servidor"],
                time: new Date().toISOString()
            });
        }
    }

}

export const crearAutor = async (
    navigation: any,
    nombre: string,
    correoElectronico: string,
    contrasena: string,
    ocupacion: string,
    onSuccess?: () => void,
    setError?: React.Dispatch<React.SetStateAction<{ title: string; errorMessages: string[]; time: string } | null>>
) => {
    // DTO de autor
    const AutorDTO = {
        nombre,
        correoElectronico,
        contrasena,
        ocupacion
    };

    // URL
    const url = `http://${ip}:8080/usuario`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(AutorDTO),
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorTitle = errorData.error || "Error";
            const errorTime = errorData.timestamp || new Date().toISOString();

            // Procesar los errores 
            let errorMessages = Array.isArray(errorData.mensaje) ? errorData.mensaje : ["Error desconocido"];

            // Pasar el error con la estructura consistente
            if (setError) {
                setError({
                    title: errorTitle,
                    errorMessages,
                    time: errorTime
                });
            }

            console.error("Error al crear el usuario:", errorData);
            return;
        }

        const data = await response.json();
        console.log("Usuario creado!!", data);

        if (onSuccess) {
            onSuccess();
        }

        navigation.navigate("Welcome");
    } catch (error) {
        console.error("Error de red:", error);
        if (setError) {
            setError({
                title: "Error de red",
                errorMessages: ["No se pudo conectar al servidor"],
                time: new Date().toISOString()
            });
        }
    }
}
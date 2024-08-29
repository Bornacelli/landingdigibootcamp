import "./Informacion.css"
import InformacionData from "./InformacionData"



const Informacion = () => {
    return (
        <div className="informacion">
            <h1>CONSULTA NUESTROS BOOTCAMPS DISPONIBLES</h1>
            <p>Explora nuestras opciones de formación intensiva para potenciar tu carrera en tecnología.</p>

            <InformacionData
                className ="first-des"
                heading = "ÚNETE A ESTA REVOLUCIÓN"
                text = "Acompáñanos en esta gran aventura de conocimiento y sumérgete en las tecnologías 4.0."
                img1 = "https://images.unsplash.com/photo-1598550487031-0898b4852123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img2 = "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <InformacionData
                className = "first-des-reverse"
                heading = "CAMPAMENTOS INTERACTIVOS"
                text = "Recibe capacitación para desarrollar una solución completa de software y transforma tus ideas en realidad en el emocionante mundo del desarrollo tecnológico."
                img1 = "https://plus.unsplash.com/premium_photo-1679177184059-2028a0f21073?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img2 = "https://images.unsplash.com/photo-1713464054229-4bc468a5e62a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
        </div>
    )
}

export default Informacion
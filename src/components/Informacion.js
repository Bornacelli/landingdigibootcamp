import "./Informacion.css"
import InformacionData from "./InformacionData"



const Informacion = () => {
    return (
        <div className="informacion">
            <h1>CONSULTA NUESTROS BOOTCAMPS DISPONIBLES</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <InformacionData
                className ="first-des"
                heading = "ÚNETE A ESTA REVOLUCIÓN"
                text = "Acompáñanos en esta gran aventura de conocimiento y sumérgete en las tecnologías 4.0, un mundo fascinante donde la innovación y el aprendizaje constante son la clave para el éxito. Desde la inteligencia artificial hasta el Internet de las cosas, las tecnologías 4.0 están transformando nuestra forma de vivir, trabajar y comunicarnos. Únete a nosotros para explorar las últimas tendencias y herramientas que están moldeando el futuro. Ya sea que seas un apasionado del desarrollo de software, un entusiasta de la automatización o simplemente alguien que busca mantenerse al día con los avances tecnológicos, esta es tu oportunidad para crecer y destacar en un entorno cada vez más digital y conectado. ¡No te lo pierdas!"
                img1 = "https://images.unsplash.com/photo-1598550487031-0898b4852123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img2 = "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <InformacionData
                className = "first-des-reverse"
                heading = "CAMPAMENTOS INTERACTIVOS"
                text = "Recibe capacitación para desarrollar una solución completa de software y transforma tus ideas en realidad en el emocionante mundo del desarrollo tecnológico. En este programa, aprenderás desde los fundamentos de la programación hasta la implementación de sistemas avanzados, abarcando todo el ciclo de vida del software. Con un enfoque práctico y orientado a proyectos, te brindaremos las herramientas y el conocimiento necesario para diseñar, construir y desplegar aplicaciones que respondan a las necesidades actuales del mercado. Ya sea que estés comenzando tu viaje en el desarrollo de software o busques perfeccionar tus habilidades, esta capacitación te permitirá adquirir una comprensión profunda de las metodologías ágiles, la integración de tecnologías emergentes y las mejores prácticas de la industria. ¡Da el siguiente paso en tu carrera y conviértete en un desarrollador capaz de crear soluciones innovadoras que marquen la diferencia!"
                img1 = "https://plus.unsplash.com/premium_photo-1679177184059-2028a0f21073?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img2 = "https://images.unsplash.com/photo-1713464054229-4bc468a5e62a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
        </div>
    )
}

export default Informacion
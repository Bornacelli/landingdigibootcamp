import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>DigiBootcamp</h1>
                    <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div>
                    <a href="">
                        <i className="fa-brands fa-discord"/>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-instagram"/>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-youtube"/>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-facebook"/>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div className="">
                    <h4>Redes Sociales </h4>
                    <a href="/">Discord</a>
                    <a href="/">Instagram</a>
                    <a href="/">Youtube</a>
                    <a href="/">Facebook</a>
                </div>

                <div>
                    <h4>Explora</h4>
                    <a href="/">Acceso a Discord</a>
                    <a href="/">Trabaja de Desarrollador </a>
                </div>

                <div>
                    <h4>Políticas </h4>
                    <a href="/">Políticas de cookies</a>
                    <a href="/">Políticas de privacidad</a>
                    <a href="/">Términos y condiciones</a>
                </div>

        
            </div>
        </div>
    )
}

export default Footer
import "./Modelo.css"
import ModeloData from "./ModeloData"

function Modelo(){
    return (
        <div className="modelo">
            <h1>CONOCE NUESTRO MODELO DE ENSEÑANZA</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="modelocard">
                <ModeloData
                    image= "https://images.unsplash.com/photo-1713464064578-e1cb2c1abdb2?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    heading = "DIRIGIDO A"
                    text = "Programadores, ingenieros y cualquier profesional o entusiasta, que le interese conocer los conceptos de las tecnologías 4.0"
                />

                <ModeloData
                    image= "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    heading = "PRE-REQUISITOS"
                    text = "Conocimientos del S.O. Windows e Internet. Mente abierta para aprender los conceptos básicos y claves sobre tecnologías 4.0 aplicadas a las empresas"
                />

                <ModeloData
                    image= "https://images.unsplash.com/photo-1636487658616-51efdf038588?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    heading = "METODOLOGÍA"
                    text = "Nuestros Bootcamps serán orientados 100% virtuales y 80% practicos"
                />
            </div>
        </div>
    )
}

export default Modelo
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Informacion from "../components/Informacion";
import Modelo from "../components/Modelo";


function Home (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "ÚNETE A NUESTROS BOOTCAMPS NO ESPERES MAS.."
        buttonText ="Ver Más"
        url = "/"
        btnClass = "show"
        />
        <Informacion/>
        <Modelo/>
        </>
    )
}

export default Home;
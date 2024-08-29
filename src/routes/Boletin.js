import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BoletinForm from "../components/BoletinForm";

function Boletin (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1636036766419-4e0e3e628acc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "Boletin"
        btnClass = "hide"
        />
        <BoletinForm/>
        </>
    )
}

export default Boletin;
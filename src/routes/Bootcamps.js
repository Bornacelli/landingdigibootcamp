import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Bootcamp (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1713464050974-9245669e7c05?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "Bootcamps"
        btnClass = "hide"
        />
        </>
    )
}

export default Bootcamp;
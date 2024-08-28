import "./Modelo.css"

function ModeloData(props){
    return(
        <div className="m-card">
            
            <h2>{props.heading}</h2>
            <div className="m-image">
                <img src={props.image} alt="image"/>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default ModeloData
import React, {useContext} from "react";
import { ApiContext } from "../contexts/ApiContext";

const Esemeny = ({esemeny}) => {
    return (
        <div className="card">
        <img src={esemeny.kepURL} className="card-img-top" alt={esemeny.leiras}/>
            <div className="card-body">
                <h5 className="card-title">{esemeny.esemeny_nev}</h5>
                <p className="card-text">{esemeny.kategoria_id.kategoria_nev}</p>
                <p className="card-text">{esemeny.datum}</p>
                <p className="card-text">{esemeny.leiras}</p>
                <p className="card-text">Ár: {esemeny.ar} Ft</p>
                <a href="#" className="btn btn-primary">Én is részt veszek</a>
            </div>
        </div>


    )
}

export default Esemeny
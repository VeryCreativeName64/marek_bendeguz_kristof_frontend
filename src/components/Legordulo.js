import React, {useContext} from "react";
import { ApiContext } from "../contexts/ApiContext";

const Legordulo = ({kategoria}) => {
return (
    <>
        <option value={kategoria.id}>{kategoria.kategoria_nev}</option>
    </>
)

}

export default Legordulo;
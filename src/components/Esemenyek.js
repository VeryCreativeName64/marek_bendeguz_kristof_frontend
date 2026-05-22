import React, {useContext} from "react";
import { ApiContext } from "../contexts/ApiContext";
import Esemeny from "./Esemeny";
import Legordulo from "./Legordulo";

const Esemenyek = () =>{
    const {esemenyLista} = useContext(ApiContext);
    const {kategoriaLista} = useContext(ApiContext);

    return (
 <>      
<select className="form-select" aria-label="Default select example">
  <option defaultValue>Válassz kategóriát!</option>
  {kategoriaLista.map((item)=>(
    <Legordulo
    key={item.id}
    kategoria={item}
    />
  ))}
</select>

<div className="container text-center">
  <div className="row">
    <div className="col">
      {esemenyLista.map((item)=>(
        <Esemeny
        key={item.id}
        esemeny={item}
        />
      ))}
    </div>
  </div>
</div>
</> 

    )
}

export default Esemenyek
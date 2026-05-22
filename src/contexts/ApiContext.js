import {createContext, useState, useEffect} from "react";
import { axiosInstance } from "./axiosInstance";

export const ApiContext = createContext();

export const ApiProvider = ({children})=>{
    const [kategoriaLista, setKategoriaLista] = useState([]);
    const [esemenyLista, setEsemenyLista] = useState([]);

    const getKategoriaAdat = async () => {
        try{
            const response = await axiosInstance.get("/kategoriak");
            setKategoriaLista(response.data)
        }catch (error){
            console.error("Hiba a lekérésnél: ",error);
        }
    }

    const getEsemenyAdat = async () => {
        try{
            const response = await axiosInstance.get("/esemenyek");
            setEsemenyLista(response.data)
        }catch (error){
            console.error("Hiba a lekérésnél: ",error);
        }
    }

    const esemenyModosit = async (id, adat) => {
        try{
            await axiosInstance.put(`/esemeny/${id}`, adat);
            getEsemenyAdat();
        }catch(error){
            console.error("Hiba a módosításnál: ",error);
        }
    }

    const esemenyTorol = async (id) => {
        try{
            await axiosInstance.delete(`/esemenyek/${id}`);
            getEsemenyAdat();
        }catch(error){
            console.error("Hiba a törlésnél: ",error);
        }
    }

    useEffect(()=>{
        getKategoriaAdat();
        getEsemenyAdat();
    })

    return(
        <ApiContext.Provider value={{kategoriaLista, esemenyLista, esemenyModosit, esemenyTorol}}>
            {children}
        </ApiContext.Provider>
    )
}
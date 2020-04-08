import useLocalStorage from "./useLocalStorage";
import {useEffect} from "react";

const useDarkMode =(key, initialValue) =>{
//Call useLocalStorage  and pass in key
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    
    const toggleDarkMode= event =>{
        event.preventDefault();
        return darkMode ? setDarkMode(false): setDarkMode(true);
    }

    return [toggleDarkMode];
}
import useLocalStorage from "./useLocalStorage";
import {useEffect} from "react";

const useDarkMode =(key, initialValue) =>{
//Call useLocalStorage  and pass in key and initial value
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    
    //useEffect to add or remove dark-mode to body element with use of DOM 
    useEffect(()=>{
        if (darkMode === true){
            document.body.classList.add("dark-mode")
        }
        else{
            document.body.classList.remove("dark-mode")
        }
    },[darkMode]);

    return [darkMode, setDarkMode];
};

export default useDarkMode; 
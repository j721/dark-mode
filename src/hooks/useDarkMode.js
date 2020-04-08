import useLocalStorage from "./useLocalStorage";
import {useEffect} from "react";

const useDarkMode =(key, initialValue) =>{
//Call useLocalStorage  and pass in key and initial value
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    
    const toggleDarkMode= event =>{
        event.preventDefault();
        //switch between DarkMode state true or false
        return darkMode ? setDarkMode(false): setDarkMode(true);
    };

    //useEffect to add or remove dark-mode class and DOM maniuplation
    useEffect(()=>{
        if (darkMode){
            document.body.classList.add("dark-mode")
        }
        else{
            document.body.classList.remove("dark-mode")
        }
    },[darkMode]);

    return [toggleDarkMode, darkMode, setDarkMode];
};

export default useDarkMode; 
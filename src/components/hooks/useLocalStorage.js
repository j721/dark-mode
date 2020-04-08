import {useState} from "react";

export const useLocalStorage (key, intialValue) = key =>{
    
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue;
    })

    const setValue=(value)=>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON(value));
    }


    return [storedValue, setValue];
}
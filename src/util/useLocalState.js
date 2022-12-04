import { useEffect, useState } from "react";

function useLocalState(defaultValue, key) { 

    // If value in local storage its returned, if not default value is returned (get)
    const [value, setValue] = useState(()=> {
        const localStorageValue = localStorage.getItem(key);

        return localStorageValue != null ? JSON.parse(localStorageValue) : defaultValue;
    });

    // If key/value changes update local storage (set)
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value]);

    return [value, setValue];
} 

export {useLocalState};
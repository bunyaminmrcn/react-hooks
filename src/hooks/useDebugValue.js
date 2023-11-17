import { useDebugValue, useEffect, useState } from "react";

function useDisplayName() {
    const [displayName, setDisplayName] = useState('')
    useEffect(() => {
        setDisplayName('matrax')
    }, [])

    useDebugValue(displayName ?? 'loading')
    return displayName;

}


export default function UseDebugValueComponent() {
    const displayName = useDisplayName();
    return <><button>{displayName}</button></>
}
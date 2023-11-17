import { useEffect, useState } from "react";

export default function useEffectComponent() {


    const [count, setCount] = useState(0)
    useEffect(() => {
        alert('Some hooks run')
        return () => alert('Goodbye component')
    }, [count])
    return (<div style={{flex: 1}}><button onClick={()=> { setCount(count + 1 )}}>{count}</button></div>)
}
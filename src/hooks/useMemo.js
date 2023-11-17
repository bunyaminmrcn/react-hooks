import { useMemo, useState } from "react";

export default function useMemoComponent(){
    const [count, setCount] = useState(60);
    const expensiveCount = useMemo(()=> {
        return count ** 2
    }, [ count ])

    return <p> {expensiveCount }</p>
}
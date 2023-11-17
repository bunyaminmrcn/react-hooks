import { useState } from "react";

export default function useStateComponent() {
    const [count, setCount] = useState(0)

    return (<div style={{flex: 1}}><button onClick={()=> { setCount(count + 1 )}}>{count}</button></div>)
}
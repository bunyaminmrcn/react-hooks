import { useCallback, useState } from "react"

export default function UseCallbackComponent() {
    const  [count,setCount] = useState(60)
    const showCount = useCallback(() => {
        alert('Count', count)
    }, [count])
    return <></>
}
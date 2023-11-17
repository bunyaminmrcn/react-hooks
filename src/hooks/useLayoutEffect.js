import { useLayoutEffect, useRef } from "react"

export default function UseLayoutEffectComponent() {
    const myBtn = useRef(null)
    useLayoutEffect(() => {
        const rect = myBtn.current.getBoundingClientRect()

    })
    return <><button ref={myBtn}></button></>
}
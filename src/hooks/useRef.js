import { useState, useRef } from "react";

export default function useRefComponent() {
    const  ref = useRef(0)

    return (<div style={{flex: 1}}><button onClick={()=> { ref.current++}}>{ref.current}</button></div>)
}
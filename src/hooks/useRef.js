import { useState, useRef } from "react";

function useRefComponentv1() {
    const  ref = useRef(0)

    return (<div style={{flex: 1}}><button onClick={()=> { ref.current++}}>{ref.current}</button></div>)
}

function useRefComponentv2() {
    const myBtn = useState(null)
    const clickIt = () => myBtn.current.click();
    return (<button ref={myBtn}></button>)
}


export default useRefComponentv2;

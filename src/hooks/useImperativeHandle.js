import { forwardRef, useImperativeHandle, useRef } from "react";

function CoolButtonComponent(props, ref) {
    const myBtn = useRef(null)

    useImperativeHandle(ref, ({
        click: () => {
            console.log("Clicking the button")
            myBtn.current.click();
        }
    }))
    return <button ref={myBtn}>Click</button>
}


let CoolButton = forwardRef(() => {}, CoolButtonComponent);

export default function UseImperativeHandleComponent() {
    const ref = useRef(null)
    return <CoolButton ref={ref}></CoolButton>
}
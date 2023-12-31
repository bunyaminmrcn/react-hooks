import { createContext, useContext } from "react";


const moods =  {
    happy: '😀',
    sad: '😥'
}
const MoodContext = createContext(moods)
export default function useContextComponent() {
    
    return (<MoodContext.Provider value={moods.happy} >
        <ChildComponent></ChildComponent>
    </MoodContext.Provider>)
}


function EmojiComponent () {
    const mood = useContext(MoodContext)
    return <p>{mood}</p>
}
function ChildComponent(props) {
    return <MoodContext.Consumer>
        {
            ({mood}) => <p>{mood}</p>
        }
    </MoodContext.Consumer>
}
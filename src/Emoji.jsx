import { useState } from "react";
import { v4 as uuid } from "uuid";

// One Important thing here how to pass parameters to the functions in the Function call in onCLick{} types
// just use arrow function onClick={()=> deleteEmoji(e.id)} 
// Like this keep it in mind.

// To dlete use Filter Method.
// [1,2,3,4,5].filter(i%2==0) make a copy of array with only satisfya the condition.

// Keep above two points in your mind.....

export default function EmojiClicker(){
    const [emojis,setEmoji] = useState([{id:uuid(),emoji:"🔥"}]);
    const InsEmoji = () =>{
        setEmoji((oldEmoji)=>[...oldEmoji,{id:uuid(),emoji:"💧"}]);
    }
    const deleteEmoji=(id)=>{
        setEmoji((prevEmojis)=>{
            return prevEmojis.filter(e=> e.id!=id);
        })
    }
    return (
        <div>
            {emojis.map((i)=>(
                <span  key={i.id}
                style={{fontSize:"60px"}} onClick={()=> deleteEmoji(i.id)}>{i.emoji}</span>
            ))}
            <button onClick={InsEmoji}>Add Emoji</button>
        </div>
    )
}
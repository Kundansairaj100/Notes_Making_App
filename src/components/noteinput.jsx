import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { NoteAtom } from "../atoms/note";
//import  Note  from "../db/data";
export function NoteInput()
{
    const setNotes = useSetRecoilState(NoteAtom);
    const [Title,setTitle] = useState('');
    const [Description,setDescription] = useState('');

    function entryTitle(value)
    {
        setTitle(value);
    }
    function entryDescription(value)
    {
        setDescription(value);
    }
    async function buttonClicked()
    {
        let new_todo = {title:Title,description:Description}
        setNotes((oldlist) => [...oldlist,new_todo]);
    }
    return <div className="w-full h-3/6 flex text-white gap-y-1 justify-center items-center">
        <div className="flex flex-col justify-center content-center gap-y-2 border-2 rounded-md border-white p-2 h-3/5">
        Title: <input id="titleinput" placeholder="Title" className="w-full p-1 text-black"  onChange={e => entryTitle(e.target.value)}></input>
        Description: <input id="descriptioninput" placeholder="Description" className="w-full p-1 text-black" onChange={e => entryDescription(e.target.value)}></input>
        <button onClick={buttonClicked}>Add Todo</button>
        </div>
    </div>
}
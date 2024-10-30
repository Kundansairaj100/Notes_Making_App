import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { NoteAtom } from '../atoms/note';
export function Noteslist() {
    const notes = useRecoilValue(NoteAtom);
    return <div className='h-full w-full'>
        <div className='flex flex-row flex-wrap bg-grey-800 gap-2 justify-items-center p-2'>
            {notes.map((note) => (
                <div className='text-white border-2 rounded-md border-white p-2 w-fit h-fit'>
                    <p>Title: {note.title}</p>
                    <p>Description: {note.description}</p>
                </div>))}</div></div>
}
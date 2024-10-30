import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { NoteInput } from './components/noteinput'
import { Noteslist } from './components/notes'

function App() {

  return (
    <RecoilRoot>
      <body className="w-full h-screen bg-gray-800">
        <Navbar />
        <NoteInput />
        <Noteslist />
      </body>
    </RecoilRoot>
  )
}

export default App

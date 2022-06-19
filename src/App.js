import { useState } from 'react';
import uuid from "react-uuid"
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';

function App() {
    const [notes, setNotes] = useState([])
    const [activeNote, setActiveNote] = useState(false)
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        }

        setNotes([newNote, ...notes])
    }

    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !== idToDelete))
    }

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote) {
                return updatedNote
            }

            return note
        })

        setNotes(updatedNotesArray)
    }

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <Navbar
                    toggleTheme={toggleTheme}
                    theme={theme}
                />
                <div className="App">
                    <Sidebar
                        notes={notes}
                        onAddNote={onAddNote}
                        onDeleteNote={onDeleteNote}
                        activeNote={activeNote}
                        setActiveNote={setActiveNote}
                    />
                    <Main
                        activeNote={getActiveNote()}
                        onUpdateNote={onUpdateNote}
                    />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;

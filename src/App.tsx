import React, {useEffect, useState} from 'react'
import './App.css'
import List from './components/List/List'
import ViewNote from './components/ViewNote/ViewNote'
import Header from './components/TopBar/Header.js'
import BlockNote from './components/BlockNotes/BlockNotes'
import {getItemsFromLocalStorage} from "./utils/getItemsFromLocalStorage";
import {IItem} from './types/types'

const App = () => {
    const [currentNote, setCurrentNote] = useState<IItem>({} as IItem)
    const [isList, setIsList] = useState(true)
    const [edit, setEdit] = useState(false)
    const [findText, setFindText] = useState('')
    const [items, setItems] = useState<IItem[]>([])
    const [flag, setFlag] = useState(true)
    useEffect(() => {
        if (localStorage.length) {
            const listOfNotes = getItemsFromLocalStorage()
            setItems((prev) => [...listOfNotes, ...prev])
        }
    }, [])
    const emptyOrder = !Object.keys(currentNote).length;
    useEffect(() => {
        localStorage.setItem('savedItems', JSON.stringify(items))
    }, [items.length, flag])

    return (
        <>
            <Header
                setItems={setItems}
                setFindText={setFindText}
                findText={findText}
                currentNoteId={currentNote.id}
                isList={isList}
                setIsList={setIsList}
                setEdit={setEdit}
            />
            <div className='wrapper'>
                <List
                    items={items}
                    findText={findText}
                    setCurrentNote={setCurrentNote}
                    currentNoteId={currentNote?.id}
                    isList={isList}
                />
                <BlockNote
                    items={items}
                    setItems={setItems}
                    findText={findText}
                    setCurrentNote={setCurrentNote}
                    currentNote={currentNote}
                    isList={isList}
                    edit={edit}
                    setEdit={setEdit}
                    flag={flag}
                    setFlag={setFlag}
                />
                {
                    isList && !emptyOrder &&
                    <ViewNote
                        setItems={setItems}
                        currentNote={currentNote}
                        flag={flag}
                        setFlag={setFlag}
                        setCurrentNote={setCurrentNote}
                    />
                }
            </div>
        </>
    )
}

export default App

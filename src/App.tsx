import React, {useState} from 'react';
import './App.css';
import List from "./components/List/List";
import ViewNote from "./components/ViewNote/ViewNote";
import Header from "./components/Header/Header.js";

export interface IItem {
    id: number,
    title: string,
    time: string;
    text: {
        text: string,
        font_style: string,
        font_size: number
    }
};

const App = () => {
    const [currentNoteId, setCurrentNote] = useState<number>(0)

    const [items, setItems] = useState<IItem[]>([
        {
            id: 0,
            title: "Title_1",
            time: "17:30",
            text: {
                text: "Text about first note",
                font_style: "bold",
                font_size: 16
            }
        },
        {
            id: 1,
            title: "Title_2",
            time: "17:30",
            text: {
                text: "Text about second note",
                font_style: "bold",
                font_size: 16
            }
        },
        {
            id: 2,
            title: "Title_3",
            time: "17:30",
            text: {
                text: "Text about third note",
                font_style: "bold",
                font_size: 16
            }
        },
    ])
    const getCurrentNote = (items: IItem[], itemId: number): IItem | undefined => {
        return items?.find((el) => el.id === itemId)
    }
    return (
        <>
            <Header setItems={setItems} currentNoteId={currentNoteId}/>
            <div className="wrapper">
                <List items={items} setItems={setItems} setCurrentNote={setCurrentNote} currentNoteId={currentNoteId}/>
                <ViewNote setItems={setItems} currentNote={getCurrentNote(items, currentNoteId)}/>
            </div>
        </>
    )
};

export default App;

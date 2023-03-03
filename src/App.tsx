import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from "./components/List/List";
import ViewNote from "./components/ViewNote/ViewNote";

export interface IItem {
    id: number,
    title: string,
    time: string;
    text: {
        text: string,
        font_style: string,
        font_size: number
    }
}

const App =() => {
    const [currentNoteId, setCurrentNote] = useState<number>(0)

    const items: IItem[] = [{
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
    ]
    const getCurrentNote = (items: IItem[], itemId: number): IItem | undefined => {
        return items?.find((el,id) => id == itemId)
    }

  return (
    <div className="wrapper">
        <List items={items} setCurrentNote={setCurrentNote} currentNoteId={currentNoteId}/>
        <ViewNote currentNote={getCurrentNote(items,currentNoteId)}/>
    </div>
  )
}

export default App

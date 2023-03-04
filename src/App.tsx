import React, {useState} from 'react';
import './App.css';
import List from "./components/List/List";
import ViewNote from "./components/ViewNote/ViewNote";
import Header from "./components/TopBar/Header.js";
import BlockNote from "./components/List/BlockNotes/BlockNotes"
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
    const [isList, setIsList] = useState(true)
    const [edit, setEdit] = useState(false)

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
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis justo eget metus faucibus, placerat vestibulum ligula sodales. Ut pretium nulla ipsum, ut feugiat mi blandit at. Cras at tortor non mauris pellentesque mattis. Integer efficitur sapien vel neque auctor, dictum cursus dolor lobortis. Suspendisse viverra, orci consectetur semper volutpat, erat dolor mattis metus, vitae tristique sapien ligula eu urna. Proin fermentum, est mollis venenatis euismod, arcu tortor gravida lorem, eu elementum urna erat placerat orci. Nulla quis ipsum in enim ultricies lobortis ut ac mauris. In at nunc vel mi placerat malesuada sed eget nulla. Vestibulum consectetur ligula non consectetur dapibus. Ut dignissim ultrices orci, at commodo tellus. Sed id sagittis nibh.",
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
            <Header setItems={setItems} currentNoteId={currentNoteId} isList={isList} setIsList={setIsList} setEdit={setEdit}/>
            <div className="wrapper">
                <List items={items} setItems={setItems} setCurrentNote={setCurrentNote} currentNoteId={currentNoteId} isList={isList} setIsList={setIsList}/>
                <BlockNote items={items} setItems={setItems} setCurrentNote={setCurrentNote} currentNoteId={currentNoteId} isList={isList} setIsList={setIsList} edit={edit} setEdit={setEdit}/>
                {isList && <ViewNote setItems={setItems} currentNote={getCurrentNote(items, currentNoteId)}/>}
            </div>
        </>
    )
};

export default App;

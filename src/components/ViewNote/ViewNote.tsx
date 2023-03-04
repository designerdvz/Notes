import React, {useEffect, useState} from 'react';
import s from "./ViewNote.module.css"
import addImg from "../../assets/edit.png"
import registerImg from "../../assets/register.png"
import finderImg from "../../assets/finder.png"
import {IItem} from "../../App";

interface Props {
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>
}

const ViewNote: React.FC<Props> = ({currentNote, setItems}) => {
    const [isEditing, setEditing] = useState(false);
    const [wasEdited, setWasEdited] = useState(false);
    const [note, setNote] = useState<IItem | {}>({});

    useEffect(() => {
        setNote(currentNote)
        setEditing(false)
    }, [currentNote.id]);

    useEffect(() => {
        return () => {
            setItems((prev) => {
                if (wasEdited) {
                    return [
                        {
                            ...note
                        },
                        ...prev.filter((el) => el.id !== currentNote?.id)
                    ]
                }
                return prev
            })
            setWasEdited(false)
        }
    })

    const onHandleChange = (event) => {
        setNote((prevState) => {
            return {
                ...prevState,
                text: {
                    ...prevState?.text,
                    text: event.target.value
                }
            }
        });
    }

    const addNewNote = () => {
        const newNote = {
            id: Math.random,
            title: "New Title",
            time: "17:30",
            text: {
                text: "New text about note",
                font_style: "bold",
                font_size: 16
            }
        }
        setItems((prevArr) => {
            return [(...prevArr, newNote
        )]
        })
    }


    return (
        <>
            <div className={s.wrapper}>
                <div className={s.bar}>
                    <img className={s.addImg} onClick={addNewNote} src={addImg}/>
                    <img className={s.registerImg} src={registerImg}/>
                    <div className={s.finder}>
                        <img className={s.finderImg} src={finderImg}/>
                        <input className={s.finderInput} placeholder="Поиск"/>
                    </div>
                </div>
                <div onDoubleClick={() => {
                    setEditing(!isEditing)
                    setWasEdited(true);
                }}>
                    {isEditing ?
                        <>
                            <textarea value={note?.title} onChange={onHandleChange}
                                      className={s.title}></textarea>
                            <textarea value={note?.text?.text} onChange={onHandleChange} className={s.text}></textarea>
                        </>
                        :
                        <>
                            <div className={s.content}>
                                {note?.title}
                                <br/>
                                {note?.text?.text}
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
};
export default ViewNote
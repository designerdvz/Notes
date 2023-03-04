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
    }, [currentNote?.id]);

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

    return (
        <>
            <div className={s.wrapper}>
                <div onClick={() => {
                    setEditing(true)
                }} onKeyDown={() => {
                    setWasEdited(true)
                }}>
                    {isEditing ?
                        <>
                            <div className={s.content}>
                                <textarea value={note?.title}
                                          onChange={onHandleChange}
                                          className={s.title}
                                ></textarea>
                                <textarea
                                    cols={500}
                                    rows={30}
                                    value={note?.text?.text}
                                    onChange={onHandleChange}
                                    className={s.text}
                                ></textarea>
                            </div>
                        </>
                        :
                        <>
                            <div className={s.content}>
                                <div className={s.title}>{note?.title}</div>
                                <div className={s.text}>{note?.text?.text}</div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
};
export default ViewNote
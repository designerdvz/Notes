import s from "./blockNotes.module.css"
import React, {useState} from "react";
import {IItem} from "../../../App";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ViewNote from "../../ViewNote/ViewNote";

interface IProps {
    items: IItem[],
    setCurrentNote: React.Dispatch<React.SetStateAction<IItem>>,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
    findText: string
    currentNoteId: number,
    isList: boolean,
    edit: boolean,
}

const BlockNotes: React.FC<IProps> = (
    {
        items,
        setCurrentNote,
        setItems,
        isList,
        edit,
        setEdit,
        findText,
        flag,
        setFlag,
        currentNote
    }) => {
    const onChooseNote = (note: IItem) => {
        setCurrentNote(note);
    }

    const getCurrentNote = (items: IItem[], itemId: number): IItem | undefined => {
        return items?.find((el) => el.id === itemId)
    }

    return (
        <>
            {!isList && !edit &&
                <div className={s.wrapper}>
                    {findText === "" ? items?.map((item) => {
                        return (
                            <div className={currentNote.id === item?.id ? s.selected : s.item}
                                 onClick={() => onChooseNote(item)} onDoubleClick={() => setEdit(true)}
                                 key={item?.id}>
                                <div className={s.title}>{item?.title}</div>
                                <div className={s.text}>{item?.text?.text.substr(0, 15)}
                                    <span>{item?.text?.text.length > 15 ? '...' : ''}</span>
                                </div>
                            </div>
                        )
                    }) : items?.filter((el) => el.text.text.toLowerCase().indexOf(findText.toLowerCase()) >= 0).map((item) => {
                        return (
                            <div
                                className={currentNote.id === item?.id ? s.selected : s.item}
                                onClick={() => onChooseNote(item?.id)}
                                onDoubleClick={() => setEdit(true)}
                                key={item?.id}
                            >
                                <div className={s.title}>{item?.title}</div>
                                <div className={s.text}>{item?.text?.text.substr(0, 15)}
                                    <span>{item?.text?.text.length > 15 ? '...' : ''}</span>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            }
            {
                edit &&
                <>
                    <div className={s.backToList} onClick={() => setEdit(false)}><ArrowBackIcon/></div>
                    <ViewNote
                        setItems={setItems}
                        currentNote={currentNote}
                        setCurrentNote={setCurrentNote}
                        flag={flag}
                        setFlag={setFlag}
                    />
                </>
            }
        </>
    )
}

export default BlockNotes
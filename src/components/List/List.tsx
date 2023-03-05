import s from "./List.module.css"
import basketImg from "../../assets/basket.png"
import listImg from "../../assets/list.png"
import squaresImg from "../../assets/squares.png"
import React, {useState} from "react";
import {IItem} from "../../App";
import ModalDelete from "../Modal/Modal"

interface IProps {
    items: IItem[],
    setCurrentNote: React.Dispatch<React.SetStateAction<number>>,
    currentNoteId: number,
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>
}

const List: React.FC<IProps> = ({
                                    items,
                                    setCurrentNote,
                                    currentNoteId,
                                    setItems,
                                    isList,
                                    setIsList,
                                    setFindText,
                                    findText
                                }) => {
    const onChooseNote = (note): void => {
        setCurrentNote(note)
    }
    return (
        <>
            {isList &&
                <div className={s.wrapper}>
                    {findText === "" ? items?.map((item) => {
                        return (
                            <div className={currentNoteId === item?.id ? s.selected : s.item}
                                 onClick={() => onChooseNote(item)} key={item?.id}>
                                <div className={s.title}>{item?.title}</div>
                                <div className={s.text}>{item?.text?.text?.substr(0, 15)}
                                    <span>{item?.text?.text.length > 15 ? '...' : ''}</span>
                                </div>
                            </div>
                        )
                    }) : items?.filter((el) => el.text.text.toLowerCase().indexOf(findText.toLowerCase()) >= 0).map((item) => {
                        return (
                            <div className={currentNoteId === item?.id ? s.selectedFound : s.itemFound}
                                 onClick={() => onChooseNote(item?.id)}
                                 key={item?.id}>
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
        </>
    )
}

export default List
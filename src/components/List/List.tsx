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
const List: React.FC<IProps> = ({items, setCurrentNote, currentNoteId,setItems}) => {
    const onChooseNote = (id: number): void => {
        setCurrentNote(id)
    }

    return (
        <>
            <div className={s.wrapper}>

                {items?.map((item) => {
                    return (
                        <div className={currentNoteId === item?.id ? s.selected : s.item} onClick={() => onChooseNote(item?.id)} key={item?.id}>
                            <div className={s.title}>{item?.title}</div>
                            <div className={s.text}>{item?.text?.text}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default List
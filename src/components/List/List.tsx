import s from "./List.module.css"
import basketImg from "../../assets/basket.png"
import listImg from "../../assets/list.png"
import squaresImg from "../../assets/squares.png"
import {useState} from "react";
import {IItem} from "../../App";

interface IProps {
    items: IItem[],
    setCurrentNote: React.Dispatch<React.SetStateAction<number>>,
    currentNoteId: number
}
const List: React.FC<IProps> = ({items, setCurrentNote, currentNoteId}) => {

    const onChooseNote = (id:number): void => {
        setCurrentNote(id)
    }
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.images}>
                    <img className={s.listImg} src={listImg}/>
                    <img className={s.squareImg} src={squaresImg}/>
                    <img className={s.basketImg} src={basketImg}/>
                </div>
                {items?.map((item) => {
                    return (
                        <div className={currentNoteId == item.id ? s.selected : s.item} onClick={() => onChooseNote(item.id)}>
                            <div className={s.title}>{item.title}</div>
                            <div>{item.text.text}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default List
import s from "./ViewNote.module.css"
import editImg from "../../assets/edit.png"
import registerImg from "../../assets/register.png"
import finderImg from "../../assets/finder.png"
import {useState} from "react";
import {IItem} from "../../App";
interface Props {
    currentNote: IItem | undefined;
}
const ViewNote: React.FC<Props> = ({currentNote}) => {

    return (
        <>
                <div className={s.wrapper}>
                    <div className={s.bar}>
                        <img className={s.editImg} src={editImg}/>
                        <img className={s.registerImg} src={registerImg}/>
                    <div className={s.finder}>
                        <img className={s.finderImg} src={finderImg}/>
                        <input className={s.finderInput} placeholder="Поиск"/>
                    </div>
                    </div>
                    <div className={s.content}>
                    <div className={s.title}>{currentNote?.title}</div>
                    <div className={s.text}>{currentNote?.text.text}</div>
                    </div>
                    </div>
    </>
    )
}
export default ViewNote
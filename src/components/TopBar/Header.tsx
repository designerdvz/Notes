import s from ".//header.module.css";

import React, {useEffect, useState} from "react";
import {IItem} from "../../App";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ModalDelete from "../Modal/Modal";

interface Props {
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>
    currentNoteId: number,
    isList: boolean,
    setIsList: React.Dispatch<React.SetStateAction<boolean>>,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    setFindText: React.Dispatch<React.SetStateAction<string>>,
    findText: string
}


const Header: React.FC<Props> = ({setItems, currentNoteId, isList, setIsList, setEdit,setFindText, findText}) => {
    const addNewNote = () => {
        const newNote = {
            id: Math.random(),
            title: "New Title",
            time: "17:30",
            text: {
                text: "New text about note",
                font_style: "bold",
                font_size: 16
            }
        }
        setItems((prevArr) => {
                return [newNote, ...prevArr]
        })

    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        bgcolor: '#dadada',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const [open, setOpen] = useState(false);
    const [sizeValue, setSizeValue]
        = useState('16');
    const [alignValue, setAlignValue]
        = useState('left');

    function handleSizeChange(event) {
        setSizeValue(event.target.value);
    }
    function handleAlignChange(event) {
        setAlignValue(event.target.value);
    }
    document.documentElement.style.setProperty('--my-size', `${sizeValue}px`);
    document.documentElement.style.setProperty('--my-align', `${alignValue}`);

    const handleChangeFindText = (event: React.FormEvent<HTMLInputElement>) => {
        setFindText(event.currentTarget.value)
    }

    return (
        <>
        <div className={s.wrapper}>
            <div className={s.leftBar}>
                <span className={isList? s.listSelect : s.listImg} onClick={() => {
                    setIsList(true)
                    setEdit(false)
                }}><FormatListBulletedOutlinedIcon /></span>
                <span className={isList? s.squareImg : s.squareSelect} onClick={()=> {setIsList(false)
                    setEdit(false)
                }}><GridViewOutlinedIcon /></span>
                <span className={s.basketImg} onClick={() => {
                    setOpen(true)
                }}><DeleteOutlinedIcon/></span>
                <ModalDelete open={open} setOpen={setOpen} setItems={setItems} currentNoteId={currentNoteId}/>
            </div>
            <div className={s.rightBar}>
                <span className={s.addImg} onClick={addNewNote}><PostAddOutlinedIcon/></span>
                <span className={s.registerImg}><FormatSizeOutlinedIcon/></span>
                <select value={sizeValue}
                        onChange={handleSizeChange}>
                    <option value="16">16</option>
                    <option value="20">20</option>
                    <option selected value="24">24</option>
                    <option value="28">28</option>
                </select>
                <select value={alignValue}
                        onChange={handleAlignChange}>
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option selected value="center">center</option>
                </select>
                <div className={s.finder}>
                      <span className={s.finderImg}><SearchOutlinedIcon fontSize="small"/></span>
                    <input value={findText} onChange={handleChangeFindText} className={s.finderInput} placeholder="Поиск"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header
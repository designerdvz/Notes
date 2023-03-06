import s from './/header.module.css'
import React, {useState} from 'react'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined'
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ModalDelete from '../Modal/Modal'
import {getData} from '../../utils/getData'
import {IPropsHeader} from '../../types/types'

const Header: React.FC<IPropsHeader> = ({
                                            setItems,
                                            currentNoteId,
                                            isList,
                                            setIsList,
                                            setEdit,
                                            setFindText,
                                            findText
                                        }) => {
    const addNewNote = () => {
        const newNote = {
            id: Math.random(),
            title: 'New Title',
            time: getData(),
            text: 'New text about note'
        }
        setItems((prevArr) => {
            return [newNote, ...prevArr]
        })
    }

    const [open, setOpen] = useState(false);
    const [sizeValue, setSizeValue] = useState('16')
    const [alignValue, setAlignValue] = useState('left')

    function handleSizeChange(event: React.FormEvent<HTMLSelectElement>) {
        setSizeValue(event.currentTarget.value)
    }

    function handleAlignChange(event: React.FormEvent<HTMLSelectElement>) {
        setAlignValue(event.currentTarget.value)
    }

    document.documentElement.style.setProperty('--my-size', `${sizeValue}px`)
    document.documentElement.style.setProperty('--my-align', `${alignValue}`)

    const handleChangeFindText = (event: React.FormEvent<HTMLInputElement>) => {
        setFindText(event.currentTarget.value)
    }

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.leftBar}>
                <span
                    className={isList ? s.listSelect : s.listImg}
                    onClick={() => {
                        setIsList(true)
                        setEdit(false)
                    }}
                >
                    <FormatListBulletedOutlinedIcon/>
                </span>
                    <span
                        className={isList ? s.squareImg : s.squareSelect}
                        onClick={() => {
                            setIsList(false)
                            setEdit(false)
                        }}
                    >
                    <GridViewOutlinedIcon/>
                </span>
                    <span
                        className={s.basketImg}
                        onClick={() => {
                            setOpen(true)
                        }}
                    >
                    <DeleteOutlinedIcon/>
                </span>
                    <ModalDelete
                        open={open}
                        setOpen={setOpen}
                        setItems={setItems}
                        currentNoteId={currentNoteId}
                    />
                </div>
                <div className={s.rightBar}>
                <span className={s.addImg} onClick={addNewNote}>
                    <PostAddOutlinedIcon/>
                </span>
                    <span className={s.registerImg}>
                    <FormatSizeOutlinedIcon/>
                </span>
                    <select
                        value={sizeValue}
                        onChange={handleSizeChange}
                    >
                        <option value='16'>16</option>
                        <option value='20'>20</option>
                        <option value='24'>24</option>
                        <option value='28'>28</option>
                    </select>
                    <select
                        value={alignValue}
                        onChange={handleAlignChange}
                    >
                        <option value='left'>left</option>
                        <option value='right'>right</option>
                        <option value='center'>center</option>
                    </select>
                    <div className={s.finder}>
                    <span className={s.finderImg}>
                        <SearchOutlinedIcon fontSize='small'/>
                    </span>
                        <input
                            value={findText}
                            onChange={handleChangeFindText}
                            className={s.finderInput}
                            placeholder='Поиск'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
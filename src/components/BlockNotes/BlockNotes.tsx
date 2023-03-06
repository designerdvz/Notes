import React from 'react'
import s from './blockNotes.module.css'
import {IItem} from '../../types/types'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ViewNote from '../ViewNote/ViewNote'
import FilterItem from '../FilterItem/FilterItem'
import {IPropsBlockNote} from "../../types/types"

const BlockNotes: React.FC<IPropsBlockNote> = (
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
        setCurrentNote(note)
    }

    return (
        <>
            {!isList && !edit &&
                <div className={s.wrapper}>
                    {findText === '' ? items?.map(item => {
                        return <FilterItem currentNote={currentNote} item={item} onChooseNote={onChooseNote}
                                           setEdit={setEdit}/>
                    }) : items?.filter((el) => el?.text!.toLowerCase()?.indexOf(findText.toLowerCase()) >= 0)
                        .map((item) => {
                            return <FilterItem currentNote={currentNote} item={item} onChooseNote={onChooseNote}
                                               setEdit={setEdit}/>
                        })
                    }
                </div>
            }
            {
                edit &&
                <>
                    <div className={s.backToList} onClick={() => setEdit(false)}>
                        <ArrowBackIcon/>
                    </div>
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
import s from '../BlockNotes/blockNotes.module.css'
import React from 'react'
import {IPropsFilterItem} from '../../types/types'

const FilterItem: React.FC<IPropsFilterItem> = ({currentNote, item, onChooseNote, setEdit}) => {
    return (
        <div
            className={currentNote.id === item?.id ? s.selected : s.item}
            onClick={() => onChooseNote(item)}
            onDoubleClick={() => setEdit(true)}
            key={item?.id}
        >
            <span className={s.time}>{item?.time}</span>
            <div className={s.title}>{item?.text?.substr(0, 9)}</div>
            <div className={s.text}>{item?.text?.substr(0, 15)}
                <span>{item?.text!?.length > 15 ? '...' : ''}</span>
            </div>
        </div>
    )
}
export default FilterItem
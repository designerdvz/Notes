import s from '../List/List.module.css'
import React from 'react'
import {IPropsFilterItemList} from '../../types/types'

const FilterItemList: React.FC<IPropsFilterItemList> = ({currentNoteId, item, onChooseNote}) => {
    return (
        <div
            className={currentNoteId === item?.id ? s.selected : s.item}
            onClick={() => onChooseNote(item)}
            key={item?.id}
        >
            <div className={s.title}>{item?.text?.substr(0, 9)}</div>
            <div className={s.text}>
                <span className={s.time}>{item?.time}</span>
                {item?.text?.substr(0, 15)}
                <span>{item?.text!?.length > 15 ? '...' : ''}</span>
            </div>
        </div>
    )
}
export default FilterItemList
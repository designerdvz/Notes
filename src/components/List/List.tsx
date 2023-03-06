import React from 'react'
import s from './List.module.css'
import {IItem} from '../../types/types'
import {IPropsList} from '../../types/types'
import FilterItemList from '../FilterItem/FilterItemList'

const List: React.FC<IPropsList> =
    ({
         items,
         setCurrentNote,
         currentNoteId,
         isList,
         findText
     }) => {

        const onChooseNote = (note: IItem): void => {
            setCurrentNote(note)
        }

        return (
            <>
                {isList &&
                    <div className={s.wrapper}>
                        {findText === '' ? items?.map((item) => {
                            return <FilterItemList currentNoteId={currentNoteId} item={item}
                                                   onChooseNote={onChooseNote}/>
                        }) : items?.filter((el) => el?.text!.toLowerCase().indexOf(findText.toLowerCase()) >= 0)
                            .map((item) => {
                                return <FilterItemList currentNoteId={currentNoteId} item={item}
                                                       onChooseNote={onChooseNote}/>
                            })
                        }
                    </div>
                }
            </>
        )
    }

export default List
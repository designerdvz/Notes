import React, {useEffect, useState} from 'react'
import s from './ViewNote.module.css'
import MDEditor from '@uiw/react-md-editor'
import {getData} from '../../utils/getData'
import {IPropsViewNote} from '../../types/types'

const ViewNote: React.FC<IPropsViewNote> = ({currentNote, setItems, setCurrentNote, flag, setFlag}) => {
    const [isEditing, setEditing] = useState(false)
    const [wasEdited, setWasEdited] = useState(false)

    useEffect(() => {
        setEditing(false)
    }, [currentNote?.id])

    useEffect(() => {
        return () => {
            setItems((prev) => {
                if (wasEdited) {
                    return [
                        {
                            ...currentNote,
                        },
                        ...prev.filter((el) => el.id !== currentNote?.id)
                    ]
                }
                return prev
            })
            setFlag(!flag)
            setWasEdited(false)
        }
    })

    const onHandleChange = (value: string | undefined) => {
        setCurrentNote((prevState) => {
            return {
                ...prevState,
                time: getData(),
                text: value
            }
        })
    }

    return (
        <>
            <div className={s.wrapper} onClick={() => setWasEdited(true)}>
                <div onClick={() => {
                    setEditing(true)
                    setWasEdited(true)
                }} onKeyDown={() => {
                    setWasEdited(true)
                }}>
                    {isEditing ?
                        <MDEditor
                            value={currentNote?.text}
                            autoFocus={false}
                            onChange={(_, event) => onHandleChange(event?.target.value)}
                            previewOptions={{skipHtml: true, transformLinkUri: null, linkTarget: '_blank'}}
                        />
                        :
                        <>
                            <MDEditor.Markdown source={currentNote?.text} skipHtml={true} transformLinkUri={null}/>
                        </>
                    }
                </div>
            </div>
        </>
    )
};

export default ViewNote
import React, {useEffect, useRef, useState} from 'react';
import s from "./ViewNote.module.css"
import {IItem} from "../../App";
import MDEditor from "@uiw/react-md-editor"

interface Props {
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
    currentNote: IItem,
    setCurrentNote: React.Dispatch<React.SetStateAction<IItem>>,
    flag: boolean,
    setFlag: React.Dispatch<React.SetStateAction<boolean>>
}

const ViewNote: React.FC<Props> = ({currentNote, setItems, setCurrentNote, flag, setFlag}) => {

    const [isEditing, setEditing] = useState(false);
    const [wasEdited, setWasEdited] = useState(false);

    useEffect(() => {
        // setNote(currentNote)
        setEditing(false)
    }, [currentNote?.id]);

    useEffect(() => {
        return () => {
            setItems((prev) => {
                if (wasEdited) {
                    return [
                        {
                            ...currentNote
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

    const onHandleChange = (value:string | undefined) => {
        setCurrentNote((prevState) => {
            return {
                ...prevState,
                text: {
                    ...prevState?.text,
                    text: value
                }
            }
        });

    }

    return (
        <>
            <div className={s.wrapper} onClick={() => setWasEdited(true)}>
                <div onClick={() => {
                    setEditing(true)
                    setWasEdited(true)
                }} onKeyDown={() => {
                    setWasEdited(true)
                }}   >
                    {isEditing ?
                        <MDEditor
                            value={currentNote?.text?.text}
                            autoFocus={false}
                            onChange={(_, event) => onHandleChange(event?.target.value)}
                            previewOptions={{ skipHtml: true, transformLinkUri: null, linkTarget: '_blank' }}
                        />
                        :
                        <>
                        <MDEditor.Markdown source={currentNote?.text?.text} skipHtml={true} transformLinkUri={null} />
                        </>
                    }
                </div>
            </div>
        </>
    )
};

export default ViewNote
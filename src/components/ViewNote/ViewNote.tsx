import React, {useEffect, useState} from 'react';
import s from "./ViewNote.module.css"
import {IItem} from "../../App";
import MDEditor from "@uiw/react-md-editor"

interface Props {
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
    currentNote: IItem,
}

const ViewNote: React.FC<Props> = ({currentNote, setItems, setCurrentNote,flag,setFlag}) => {
    const [isEditing, setEditing] = useState(false);
    const [wasEdited, setWasEdited] = useState(false);
    // const [note, setNote] = useState<IItem | {}>({});

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

    const onHandleChange = (value) => {
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
            <div className={s.wrapper}>
                <div onClick={() => {
                    setEditing(true)
                }} onKeyDown={() => {
                    setWasEdited(true)
                }}>
                    {isEditing ?
                        // <>
                        //     <div className={s.content}>
                        //         <textarea value={note?.title}
                        //                   onChange={onHandleChange}
                        //                   className={s.title}
                        //         ></textarea>
                        //         <textarea
                        //             cols={500}
                        //             rows={30}
                        //             value={note?.text?.text}
                        //             onChange={onHandleChange}
                        //             className={s.text}
                        //         ></textarea>
                        //     </div>
                        // </>
                        <MDEditor
                            value={currentNote?.text?.text}
                            autoFocus={false}
                            onChange={(_, event) => onHandleChange(event?.target.value)}
                            previewOptions={{ skipHtml: true, escapeHtml: true, transformLinkUri: null, linkTarget: '_blank' }}
                        />
                        :
                        <>

                        <MDEditor.Markdown source={currentNote?.text?.text} escapeHtml={true} skipHtml={true} transformLinkUri={null} />

                        </>
                    }
                </div>
            </div>
        </>
    )
};
export default ViewNote
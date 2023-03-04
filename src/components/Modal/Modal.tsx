import s from "../Modal/modal.module.css";

import React, {useEffect, useState} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const ModalDelete = ({setItems, currentNoteId, open, setOpen}) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 160,
        borderRadius: 3,
        bgcolor: '#464646',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteNote = (currentNoteId) => {

        {
           setItems((prev) => {
                return [
                    ...prev.filter((el) => el.id !== currentNoteId)
                ]
            })

     }
        }

    return (
        <Modal open={open} onClose={handleClose}>
                    <Box sx={{ ...style}}>
                        <h2 className={s.moduleText}>Удалить заметку?</h2>
                        <span className={s.moduleDelete} onClick={() => {
                            deleteNote(currentNoteId)
                            setOpen(false)
                        }
                        }>Да</span>
                        <span className={s.moduleNotDelete} onClick={() => {setOpen(false)
                        } }>Нет</span>
                    </Box>
        </Modal>
    )
}

export default ModalDelete
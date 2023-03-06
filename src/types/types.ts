import React from "react";

export interface IItem {
    id: number,
    time: string,
    text: string | undefined,
}

export interface IPropsFilterItem {
    currentNote: IItem,
    item: IItem,
    onChooseNote: (note: IItem) => void,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IPropsFilterItemList {
    currentNoteId: number,
    item: IItem,
    onChooseNote: (note: IItem) => void
}

export interface IPropsViewNote {
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
    currentNote: IItem,
    setCurrentNote: React.Dispatch<React.SetStateAction<IItem>>,
    flag: boolean,
    setFlag: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IPropsHeader {
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>
    currentNoteId: number,
    isList: boolean,
    setIsList: React.Dispatch<React.SetStateAction<boolean>>,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    setFindText: React.Dispatch<React.SetStateAction<string>>,
    findText: string
}

export interface IPropsModal {
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
    currentNoteId: number,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IPropsList {
    items: IItem[],
    setCurrentNote: React.Dispatch<React.SetStateAction<IItem>>,
    currentNoteId: number,
    isList: boolean,
    findText: string
}

export interface IPropsBlockNote {
    items: IItem[],
    setCurrentNote: React.Dispatch<React.SetStateAction<IItem>>,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
    findText: string,
    isList: boolean,
    edit: boolean,
    flag: boolean,
    setFlag: React.Dispatch<React.SetStateAction<boolean>>,
    currentNote: IItem
}
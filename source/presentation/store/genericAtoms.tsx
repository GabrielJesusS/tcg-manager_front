import { atom } from "recoil";


interface IUserDataAtomProps{
    publicId: string;
    name: string;
    email: string;
    picture: string;
    level: number;
}

export const userDataAtom = atom<IUserDataAtomProps | null>({
    key: "UserDataAtom",
    default: null
})
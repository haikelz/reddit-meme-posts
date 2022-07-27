import { atom } from "jotai";

export const currentPageAtom = atom(1);
export const postsPerPageAtom = atom(9);
export const searchAtom = atom("unixporn");
export const isLoadingAtom = atom(false);
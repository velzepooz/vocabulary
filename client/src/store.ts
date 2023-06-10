import { create } from 'zustand';

import type { Word } from './modules/word/types';

export interface Store {
  words: Word[];
  setWords: (words: Word[]) => void;
  deleteWord: (id: number) => void;
  addWord: (words: Word) => void;
  clearWords: () => void;
}

export const useStore = create<Store>()((set) => ({
  words: [],
  clearWords: () => set({ words: [] }),
  setWords: (words) => set((state) => ({ words: [...state.words, ...words] })),
  deleteWord: (id: number) =>
    set((state) => ({ words: state.words.filter((word) => word.id !== id) })),
  addWord: (word) => set((state) => ({words: [word, ...state.words]}))
}));

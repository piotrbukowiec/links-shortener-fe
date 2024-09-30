import { create } from 'zustand';

interface ILongUrlStore {
	longUrl: string;
	setLongUrl: (newUrl: string) => void;
}

export const useLongUrlStore = create<ILongUrlStore>(set => ({
	longUrl: '',
	setLongUrl: (newUrl: string) => set({ longUrl: newUrl }),
}));

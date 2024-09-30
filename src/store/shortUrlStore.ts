import { create } from 'zustand';

interface IShortUrlStore {
	shortUrl: string;
	setShortUrl: (newUrl: string) => void;
}

export const useShortUrlStore = create<IShortUrlStore>(set => ({
	shortUrl: '',
	setShortUrl: (newUrl: string) => set({ shortUrl: newUrl }),
}));

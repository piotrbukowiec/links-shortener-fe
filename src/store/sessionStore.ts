import { create } from 'zustand';

interface ISessionStore {
	authorized: boolean;
	setAuthorized: (auth: boolean) => void;
}

export const useSessionStore = create<ISessionStore>(set => ({
	authorized: false, // Domyślnie brak autoryzacji
	setAuthorized: (auth: boolean) => set({ authorized: auth }),
}));

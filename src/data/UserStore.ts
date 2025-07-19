// store/userStore.ts
import { create } from 'zustand';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  company: { title: string };
  bank?: { cardNumber?: string };
}

interface UserStore {
  selectedUser: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  selectedUser: null,
  setUser: (user) => set({ selectedUser: user }),
}));

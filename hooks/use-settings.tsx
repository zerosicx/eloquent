import { create } from "zustand";

// The various features of the search modal state.
type SettingsStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// Manages the state of the search modal.
export const useSettings = create<SettingsStore>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

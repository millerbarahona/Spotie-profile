import  create  from "zustand";
import { getUserLocal } from "../utilities";

interface UiState {
  navbar: boolean,
  setNavVisible: () => void
}

export const uiStore = create<UiState>((set) => ({
  navbar: getUserLocal() ? true : false,
  setNavVisible: () => {
    set((state) => ({
      navbar: !state.navbar
    }))
  }
}))

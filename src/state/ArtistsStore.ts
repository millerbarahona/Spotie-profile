import create from "zustand";
import { Artists } from "../models";

interface ArtistState {
  artists: Artists[],
  addArtists: (newArtists: Artists[]) => void,
  updateArtists: (newArtists: Artists[]) => void,
  removeArtists: () => void
}

export const artistsStore = create<ArtistState>((set) => ({
  artists: [],
  addArtists: (newArtists) => {
    set((state) => {
      return {
        artists: newArtists
      }
    })
  },
  updateArtists: (newArtists) => {
    set((state) => {
      const result = { ...state.artists, ...newArtists }
      return {
        artists: result
      }
    })
  },
  removeArtists: () => {
    set((state) => {
      return {
        artists: []
      }
    })
  }
}))
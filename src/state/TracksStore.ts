import create from "zustand";
import { Tracks } from "../models";

interface TracksState {
  tracks: Tracks[],
  addTracks: (newTracks: Tracks[]) => void,
  updateTracks: (newTracks: Tracks[]) => void,
  removeTracks: () => void
}

export const tracksStore = create<TracksState>((set) => ({
  tracks: [],
  addTracks: (newTracks) => {
    set((state) => {
      return {
        tracks: newTracks
      }
    })
  },
  updateTracks: (newTracks) => {
    set((state) => {
      const result = { ...state.tracks, ...state }
      return {
        tracks: result
      }
    })
  },
  removeTracks: () => {
    set((state) => {
      return {
        tracks: []
      }
    })
  }
}))
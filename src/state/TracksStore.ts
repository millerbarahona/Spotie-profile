import create from 'zustand'
import { Track } from '../models'

interface TracksState {
  tracks: Track[],
  addTracks: (newTracks: Track[]) => void
  updateTracks: (newTracks: Track[]) => void,
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
      const result = { ...state.tracks, ...newTracks }
      return {
        tracks: result
      }
    })
  },
  removeTracks: () => {
    set((state) => ({
      tracks: []
    }))
  },
}))
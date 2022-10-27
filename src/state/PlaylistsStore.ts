import create from 'zustand'
import { Playlist } from '../models'

interface PlaylistsState {
  playlists: Playlist[],
  addPlaylists: (newPlaylists: Playlist[]) => void,
  removePlaylists: () => void,
  updatePlaylists: (newPlaylists: Playlist[]) => void
}

export const playlistsStore = create<PlaylistsState>((set) => ({
  playlists: [],
  addPlaylists: (newPlaylists) => {
    set((state) => ({
      playlists: newPlaylists
    }))
  },
  removePlaylists: () => {
    set((state) => ({
      playlists: []
    }))
  },
  updatePlaylists: (newPlaylists) => {
    set((state) => {
      const result = {...state.playlists, ...newPlaylists}
      return {
        playlists: result
      }
    })
  }
}))  
import create from 'zustand'
import { EmptyUserState, UserInfo } from '../models'
import { getUserLocal, removeUserLocal, saveUsarLocal } from '../utilities'

interface UserState {
  actualUser: UserInfo,
  addUser: (newUser: UserInfo) => void,
  setUser: (newUser: UserInfo) => void,
  removeUser: () => void
}

export const userStore = create<UserState>((set) => ({
  actualUser: getUserLocal() != null ? getUserLocal()! : EmptyUserState,
  addUser: (newUser) => {
    console.log(newUser)
    set((state) => {
      saveUsarLocal(newUser)
      return {
        actualUser: newUser
      }
    })
  },
  setUser: (newUser) => {
    set((state) => {
      const result = { ...state.actualUser, ...newUser }
      saveUsarLocal(result)
      return {
        actualUser: result
      }
    })
  },
  removeUser: () => {
    set((state) => {
      removeUserLocal()
      console.log('asdasd')
      return {
        actualUser: EmptyUserState
      }
    })
  }
}))
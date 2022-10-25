import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { getUserLocal, saveUsarLocal, updateUserLocal,  } from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: '0',
  name: '',
  image: '', 
  time: 0,
  refresh_token: '',
  access_token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserLocal() != null ? getUserLocal()! : EmptyUserState,
  reducers: {
    logIn: (state, action) => {
      saveUsarLocal(action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const result = {...state, ...action.payload}
      updateUserLocal(result)
      return result
    },
    logOut: (state, action) => {
      return EmptyUserState
    }
  }
})

export const {logIn, logOut, updateUser} = userSlice.actions

export default userSlice.reducer
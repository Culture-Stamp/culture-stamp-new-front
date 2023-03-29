import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState: {
    name : 'name',
    email : 'mmailamilamil',
  },
  reducers: {
    loginUser(state, action){
      let user = {
        name : action.payload.name,
        email : action.payload.email,
      }
      state.push(user);
    },
    logoutUser(state){
      let user = {
        name : '',
        email : '',
      }
      state.push(user);
    },
  }
})

export let {loginUser, logoutUser} = user.actions;

export default configureStore({
  reducer: {
    //여기에 등록해야 사용 가능
    user : user.reducer
  }
}) 
import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  }
})

export let { setName, setEmail } = user.actions;

export default configureStore({
  reducer: {
    //여기에 등록해야 사용 가능
    user: user.reducer
  }
}) 
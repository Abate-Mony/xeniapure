import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/store/store.js";
import { userRole } from "@/types";
// import { reducer } from "../components/ui/use-toast.js";
export interface IUserState {
  user: null | {
    _id: string | null;
    lastName: string | null;
    firstName: string | null;
    email: string;
    userId: number;
    role: userRole;
    phoneNumber: number;
  };
}
const initialState: IUserState = {
  user: null,
};
export const userrSlice = createSlice({
  name: "currentloginuser",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userrSlice.actions;
export const getUserState = (state: RootState) => state.user;
export default userrSlice.reducer;

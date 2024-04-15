import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { User } from "@/types/user";

// Define a type for the slice state
export interface UserProfileState {
  profile: User | null;
}

// Define the initial state using that type
const initialState: UserProfileState = {
  profile: null,
};

export const UserSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProfile: (state, { payload }: PayloadAction<User>) => {
      state.profile = payload;
    },
  },
});

export const { setProfile } = UserSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state.user.profile;

export default UserSlice.reducer;

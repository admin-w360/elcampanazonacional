import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserDefaultData} from "@/pages/landing/register/type";



interface UserState {
    user: User
}

const initialState: UserState = {
    user: UserDefaultData
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        initUser: (state: UserState) => {
            state.user = initialState.user
        },

        setUser: (state: UserState, action: PayloadAction<User>) => {
            state.user = action.payload
        },

        setCouponCode: (state: UserState, action: PayloadAction<string>) => {
            state.user.coupon_code = action.payload
        },

        setCouponExpire: (state: UserState, action: PayloadAction<string>) => {
            state.user.coupon_expire_at = action.payload
        }
    }
})

export const {initUser, setUser, setCouponCode, setCouponExpire} = userSlice.actions
export default userSlice.reducer

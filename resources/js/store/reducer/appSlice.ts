import {createSlice, PayloadAction} from "@reduxjs/toolkit";



interface AppState {
    modalStatus: boolean
    selectedKeys: string[]
    openKeys: string[]
}

const initialState: AppState = {
    modalStatus: false,
    selectedKeys: [],
    openKeys: []
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

        initApp: (state: AppState) => {
            state.modalStatus = initialState.modalStatus
            state.selectedKeys = []
            state.openKeys = []
        },


        setModalStatus: (state: AppState, action: PayloadAction<boolean>) => {
            state.modalStatus = action.payload
        },


        setSelectedKeys: (state: AppState, action: PayloadAction<string[]>) => {
            state.selectedKeys = action.payload
        },


        setOpenKeys: (state: AppState, action: PayloadAction<string[]>) => {
            state.openKeys = action.payload
        }
    }
})

export const {initApp, setSelectedKeys, setOpenKeys, setModalStatus} = appSlice.actions
export default appSlice.reducer

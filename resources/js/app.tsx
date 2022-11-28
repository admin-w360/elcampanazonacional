import React, {FC, Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import Route from "./route";
import {SessionTimer} from "@/hooks/sessionHook";
import {logout} from "@/shared/session";
import {initApp} from "@/store/reducer/appSlice";
import {initUser} from "@/store/reducer/userSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import '@/config/time-ago';
import {Spinner} from "react-bootstrap";
import TagManager from "react-gtm-module";


declare global {
    interface Window {
        dataLayer:any;
    }
}

const tagManagerArgs = {
    gtmId: 'GTM-KJSWX8V'
}

TagManager.initialize(tagManagerArgs)

const App: FC = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user);

   SessionTimer(async () => {
        if (user.user !== undefined) {
            await logout().then(function (response) {
                if (response?.status === "success") {
                    dispatch(initApp())
                    dispatch(initUser())
                    window.location.reload();
                }
            }).catch(function (error) {
                dispatch(initApp())
                dispatch(initUser())
                window.location.reload();
            });
        }
    });

    const spin = (<Spinner animation="border" variant="primary" />)
    return (
        <Suspense fallback={spin}>
           <BrowserRouter>
               <Route/>
           </BrowserRouter>
        </Suspense>
    )
}
export default App;

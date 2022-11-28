import React, {FC} from "react";
import {Outlet} from "react-router-dom";

/**
 * 布局
 */
const Content: FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Content

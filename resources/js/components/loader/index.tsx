import React, {FC} from 'react';
import {Spinner} from "react-bootstrap";



interface IProps {
    size?: number
}

const Loader: FC<IProps> = (props: IProps) => {
    const { size = 25 } = props;
    return (
        <div style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: "center", justifyContent: "center" }}>
            <Spinner animation="border" variant="success" />
        </div>
    );
}

export default Loader;

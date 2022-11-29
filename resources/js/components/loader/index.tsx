import React, {FC} from 'react';


interface IProps {
    size?: number
}

const Loader: FC<IProps> = (props: IProps) => {
    const { size = 25 } = props;
    return (
        <div className="backdrop">
            <div style={{   width: '100%',  position: "relative",  height: '100%'}}>
                    <div className="loader16" />
            </div>
        </div>
    );
}

export default Loader;

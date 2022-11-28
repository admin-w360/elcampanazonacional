import React from 'react';
import {Card, CardContent, CardHeader, Divider, Typography, useTheme} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";


interface IProps {
    children: JSX.Element | JSX.Element[]
    content?: boolean
    contentClass?: string,
    darkTitle?: boolean,
    secondary?: JSX.Element | JSX.Element[] | string | object,
    sx?: SxProps<Theme>,
    headerSX?: SxProps<Theme>,
    contentSX?: SxProps<Theme>,
    title?: JSX.Element | JSX.Element[] | string | object,
    elevation?: number
    border?: boolean,
    boxShadow?: boolean,
    shadow?: string,
}

export const PageContainer = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {

    let {children, content=false, contentClass, darkTitle, secondary, sx, contentSX, headerSX, title, elevation=0, border=false, shadow, boxShadow = false, ...others} = props;

    const theme = useTheme();

    return (
        <Card
            ref={ref}
            {...others}
            sx={{
                borderRadius: '14px',
                ...sx
            }}
            elevation={elevation}
        >
            {/* card header and action */}
            <CardHeader  sx={{
                ...headerSX,
                p:3
            }} title={<Typography sx={{fontWeight:400, fontSize: '15px', textTransform:'uppercase'}} variant="h4">{title}</Typography>} action={secondary} />

            {/* content & header divider */}
            {title && <Divider />}

            {/* card content */}
            {content && (
                <CardContent sx={contentSX} className={contentClass}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
});

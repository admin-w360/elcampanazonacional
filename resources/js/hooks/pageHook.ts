import { useRef, useEffect } from 'react'


/** Hook for changing title */
export const useTitle = (title:string,  prevailOnUnmount:boolean = false) => {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        title && (document.title = title)
    }, [title]);

    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [])
};

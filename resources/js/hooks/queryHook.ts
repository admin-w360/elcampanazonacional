import http from "../utils/request";
import {useEffect, useState} from "react";

export default function useQueryIntValue(url:string, key:string) {
    const match = url.match('[?&]' + key + '=([^&]+)');
    return match ? (!isNaN(parseInt(match[1])) ? parseInt(match[1]) : 1) : 1;
}

export type TResponse = {
    error: any;
    data: any;
    status: number
    statusText: string
    loading: boolean
};

export const useQuery = (url: string, post:boolean = true, params?:{} ): TResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async () => {
        setLoading(true);
        try {
            let response = undefined;
            if(post){
                response = await http.post(url, params);
            }else{
                response = await http.get(url);
            }
            setStatus(response?.code);
            setStatusText(response?.results);
            if(response?.error){
                setError(response?.message);
            }else{
                setData(response?.message);
            }
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return { status, statusText, data, error, loading };
};

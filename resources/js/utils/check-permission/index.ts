import {useAppSelector} from "@/hooks/reduxHook";


/**
 * 异常处理程序
 */
export const hasPermission = (permission: string): boolean => {
    const userInfo = useAppSelector(state => state.user);
    return (userInfo.user?.email !== '') && (userInfo.user?.email !== undefined);
}

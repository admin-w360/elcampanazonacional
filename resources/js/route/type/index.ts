
export interface RouteItem {
    path?: string           //  路由路径
    index?: boolean         //  索引路由
    element?: any           //  路由组件
    meta?: RouteMeta        //  路由元数据
    children?: RouteItem[]  //  子路由
}

export interface RouteMeta {
    name: string                    //  路由名称
    authority?: string | string[]   //  路由准入权限
}

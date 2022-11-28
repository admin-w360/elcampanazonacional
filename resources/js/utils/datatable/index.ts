import {TableColumn} from "react-data-table-component";



export function filterColumn<T>(row: T, columnsDef:TableColumn<T>[], filterText:string) {
    let result = false;

    columnsDef.map((column: TableColumn<T>) => {
        let typeIsString: string = typeof column?.selector?.(row);
        if(!result && typeIsString=='string') {
            result = column?.selector?.(row).toString().toLowerCase().includes(filterText.toLowerCase()) ?? false;
            if (result) {
                result = true;
            }
        }
    });
    return result;
}

export interface LinksEntity {
    url?: string | null
    label: string | number
    active: boolean
}

export interface PaginateData<T> {
    current_page: number
    data?: T[] | null
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links?: LinksEntity[] | null
    next_page_url: string
    path: string
    per_page: number
    prev_page_url?: null
    to: number
    total: number
}

type Sort  = 'asc' | 'desc'
type Search = string | null | ''
type Page = number | string
type Limit = string | number
type Show = Limit
type PerPage = Limit

export type THeadColumns = Array<{
    key?: string | number
    column?: string | number | DataRows | {
        th: string
        td: void | ((data: DataRows) => string)
    }
    sort?: boolean
    className?: string
}>

export type DataRows = {
    [key: string]: string;
}

export type StaticOptions = {
    columns?: THeadColumns
    data?: DataType
    option?: {
        paginations?: {
            limit?: number
            page?: number
            prevous?: {
                label?: string
                className?: string
            }
            next?: {
                label?: string
                className?: string
            }
        }
        type?: 'sticky' | 'normal'
        [key: string]: any
    }
}

export type TableOptionParams = {
    columns?: THeadColumns
    staticData?: boolean
    data?: DataType
    api?: {
        url?: string
        params?: {
            page?: Page
            limit?: Limit
            sort?: Sort
            search?: Search
        }
    }
    option?: {
        [key: string]: any
        type?: 'sticky' | 'normal'
    }
}

export type DataType = Array<DataRows>


export type StaticPaginationReponse = {
    result?: Array<any>;
    total?: number;
    success?: boolean;
    status?: number;
    pagination?: {
        total?: number;
        totalPages: number;
        currentPage: string | number;
        query?: {
            page?: Page
            limit?: Limit
            sort?: Sort
            search?: Search
            [key: string]: any
        };
        buttons?: {
            prev: {
                status: boolean;
                url: string;
            };
            items: Array<{
                label: string;
                url: string;
                active: boolean;
            }>;
            next: {
                status: boolean;
                url: string;
            };
        };
    }
}

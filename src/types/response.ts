
export type Query = {
    limit?: string | number
    perPage?: string
    page?: number | string
    search?: string | null | ''
    sortBy?: string
    sort?: 'asc' | 'desc'
    isStatic?: boolean
    totalPages?: number
}

export interface PaginationResponse {
    totalPages: number
    currentPage: number
    query: Query
    buttons: {
        prev: {
            status: boolean
            url: string
        }
        items: PaginationButton[]
        next: {
            status: boolean
            url: string
        }
    }
}

export interface PaginationButton {
    label: string;
    url: string;
    active: boolean;
}

export interface Pagination {
    totalPages: number;
    currentPage: number;
}

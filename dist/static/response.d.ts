type Query = {
    limit?: string;
    perPage?: string;
    page?: number;
    search?: string;
    sortBy?: string;
    sort?: 'asc' | 'desc';
    isStatic?: boolean;
    totalPages?: number;
};
interface PaginationResponse {
    totalPages: number;
    currentPage: number;
    query: Query;
    buttons: {
        prev: {
            status: boolean;
            url: string;
        };
        items: PaginationButton[];
        next: {
            status: boolean;
            url: string;
        };
    };
}
interface PaginationButton {
    label: string;
    url: string;
    active: boolean;
}
interface Pagination {
    totalPages: number;
    currentPage: number;
}
declare class Response {
    static success: (data: any[], total?: number, request?: Query) => {
        status: number;
        success: boolean;
        total: number;
        result: any[];
        pagination: {
            totalPages: number;
            currentPage: number;
            query: {
                page: number;
                limit: string;
                search: string;
                sortBy: string;
                sort: "desc" | "asc";
            };
            buttons: {
                /**
                 *  Check Previous button
                */
                prev: {
                    status: boolean;
                    url: string;
                };
                /**
                 *  Generate page list items
                */
                items: PaginationButton[];
                /**
                 *  Check Next button
                */
                next: {
                    status: boolean;
                    url: string;
                };
            };
        };
    };
    static filterPaginationButtons: (pagination: Pagination) => PaginationButton[];
}

export { type PaginationResponse, type Query, Response };

interface PaginationOptions {
    result?: any[];
    total?: number;
    query: {
        perPage?: number;
        page?: number;
        sort?: string;
        search?: string;
    };
}
interface Paginations {
    show: {
        from: number;
        to: number;
        total: number;
    };
    prev: {
        status: boolean;
        url: string;
    };
    items: PaginationButton[];
    next: {
        status: boolean;
        url: string;
    };
}
interface PaginationButton {
    label: string;
    url: string;
    active: boolean;
}
declare class PaginationResponse {
    private readonly data;
    private readonly total;
    private readonly limit;
    private readonly page;
    private readonly sort;
    private readonly search;
    private readonly totalPages;
    private readonly params;
    constructor(options: PaginationOptions);
    private filterPaginationButtons;
    private createButton;
    private createEllipsis;
    generated(): {
        result: any[];
        query: {
            page: number;
            limit: number;
            search: string;
            sort: string;
        };
        totalPages: number;
        currentPage: number;
        pagination: {
            show: {
                from: number;
                to: number;
                total: number;
            };
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
    };
}

export { type PaginationButton, type PaginationOptions, PaginationResponse, type Paginations };

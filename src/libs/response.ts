import { Pagination, PaginationButton, Query } from "../types/response.ts";
import { StaticPaginationReponse } from "../types/table.ts"

export class Response {

    static success = (data: any[], total?: number , request?: Query): StaticPaginationReponse =>
    {
        const { page, limit, search, sort, sortBy, isStatic = true } = request || {}
        /**
         *  Merge search params
        */
        const currentURL = new URLSearchParams(window.location.search);
        const options = {
            ...request,
            ...Object.fromEntries(currentURL)
        }

        Object.keys(options).forEach((key) => {
            if (typeof options[key] !== "object") {
                currentURL.set(key, options[key]);
            }
        });
        // history.pushState({}, "", `${window.location.pathname}?${currentURL.toString()}`);

        /**
         * Calulate total pages
        */
        const totalPages    = Math.ceil(Number(total) / Number(limit || 10) )
        const offset = (Number(page) - 1) * Number(limit || 10)

        return {
            status: 200,
            success: true,
            total: total,
            result: isStatic ? data.slice(offset, offset + Number(limit || 10)) : data,
            pagination: {
                total: total,
                totalPages: totalPages,
                currentPage: page,
                query: {
                    page:page,
                    limit:limit,
                    search:search,
                    sortBy:sortBy,
                    sort:sort,
                },
                buttons: {
                    /**
                     *  Check Previous button
                    */
                    prev: {
                        status: Number(page) > 1 ? true : false,
                        url: (()=> {
                            if (Number(page) > 1)
                                currentURL.set('page', (Number(page) - 1).toString())
                            else
                                currentURL.set('page', page.toString())
                            return currentURL.toString()
                        })(),
                    },

                    /**
                     *  Generate page list items
                    */
                    items: this.filterPaginationButtons({totalPages: totalPages, currentPage: Number(page)}),
                    /**
                     *  Check Next button
                    */
                    next: {
                        status: Number(page) < totalPages  ? true : false,
                        url: (()=> {
                            if (Number(page) < totalPages)
                                currentURL.set('page', (Number(page) + 1).toString())
                            else
                                currentURL.set('page', page.toString())
                            return currentURL.toString()
                        })()
                    }
                }
            },
        }
    }

    static filterPaginationButtons = (pagination: Pagination): PaginationButton[] => {
        const currentURL = new URLSearchParams(window.location.search);
        const buttons: PaginationButton[] = [];
        const range = 1; // number of buttons to show before and after the current page

        if (pagination.totalPages <= range * 2 + 1) {
            // if total pages is less than or equal to 7, show all buttons
            for (let i = 1; i <= pagination.totalPages; i++) {
                buttons.push({
                    label: `${i}`,
                    url: (()=>{
                        currentURL.set('page', i.toString())
                        return currentURL.toString()
                    })(),
                    active: i === pagination.currentPage,
                });
            }
        } else {
            // if total pages is greater than 7, show only a subset of buttons
            const start = Math.max(1, pagination.currentPage - range);
            const end = Math.min(pagination.totalPages, pagination.currentPage + range);

            if (start > 2) {
                buttons.push({
                    label: `1`,
                    url: (()=>{
                        currentURL.set('page', '1')
                        return currentURL.toString()
                    })(),
                    active: false,
                });
                if (start > 3) {
                    buttons.push({
                        label: `...`,
                        url: `#`,
                        active: false,
                    });
                }
            }

            for (let i = start; i <= end; i++) {

                buttons.push({
                    label: `${i}`,
                    url: (()=>{
                        currentURL.set('page', i.toString())
                        return currentURL.toString()
                    })(),
                    active: i === pagination.currentPage,
                });
            }

            if (end < pagination.totalPages - 1) {
                if (end < pagination.totalPages - 2) {
                    buttons.push({
                        label: `...`,
                        url: `#`,
                        active: false,
                    });
                }
                buttons.push({
                    label: `${pagination.totalPages}`,
                    url: (()=>{
                        currentURL.set('page', pagination.totalPages.toString())
                        return currentURL.toString()
                    })(),
                    active: false,
                });
            }
        }
        return buttons;
    }

}
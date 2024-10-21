interface Options {
    items: any;
    buttons?: {
        prev: {
            status: boolean;
            url: string;
        };
        next: {
            status: boolean;
            url: string;
        };
        items: {
            [key: string]: string;
        };
    };
    query?: {
        [key: string]: string;
    };
    currentPage?: number | string;
    totalPages?: number | string;
}
interface Button {
    label?: string;
    active?: boolean;
}
interface XButton {
    url?: string;
    label?: string;
    status?: boolean;
}
declare class PageNavigation {
    buttons: Options;
    element: HTMLElement;
    static buttons: Options;
    constructor(element: HTMLElement, options: {
        buttons: Options;
    });
    static variants: (active: boolean) => string;
    /**
     * ?Create Data and Page information
     *
     * @param currentPage {number}
     * @param totalPages {number}
     * @param limit {number}
     *
     * @example
     * <pagination-group-order data-table-id="info-data-table" class="flex items-center gap-1">
     *      <span class="text-sm"> Showing </span>
     *      <span class="p-1 text-sm">
     *          <span data-show-from="1">1</span>
     *          <span>to</span>
     *          <span data-show-to="10">10</span>
     *      </span>
     *      <span class="text-sm"> of <span data-show-total>0</span> entries </span>
     * </pagination-group-order>
    */
    showDataInfo: (currentPage: string, totalPages: number, limit: string) => HTMLElement;
    /***
     * ?Create Button Numbers
     *
     * @param item {Button}
     *
     * @example
     * <button data-setpage="1" class="..." disabled="" type="button">{label}</button>
    */
    private static itemButton;
    /***
     * ?Create Previous and Next buttons
     *
     * @param item {XButton}
     * @param label {Previous, Next}
     *
     * @example
     * <button type="button" data-setpage="1" class="...">1</button>
    */
    private static xButton;
    /***
     * ?Create Link Navigation Button
     *
     * @example
     * <pagination-group-link data-table-id="data-table" class="...">
     *     <button data-setpage="1" class="..." disabled="" type="button">Previous</button>
     *     ...
     *     <button type="button" data-setpage="1" class="...">1</button>
     *     ...
     *     <button data-setpage="2" class="..." type="button">Next</button>
     * </pagination-group-link>
    */
    LinkNavigation: (buttons: {
        prev: XButton;
        items: Button[];
        next: XButton;
    }) => void;
    init: () => void;
}

export { PageNavigation };

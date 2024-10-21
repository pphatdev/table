import { PaginationOptions } from '../libs/response.js';

type THeadColumns = Array<{
    key?: string | number;
    column?: string | number | DataRows | {
        th: string;
        td: void | ((data: DataRows) => string);
    };
    className?: string;
}>;
type DataType = Array<DataRows>;
type DataRows = {
    [key: string]: string;
};
type TableOptionParams = {
    columns?: THeadColumns;
    staticData: boolean;
    data?: DataType;
    option?: {
        type: 'sticky' | 'normal';
    };
};
declare class Table {
    static data: DataType;
    static theadColumns: THeadColumns;
    element: HTMLElement;
    theadColumns: THeadColumns;
    data: DataType;
    options: TableOptionParams;
    pagination: PaginationOptions;
    defaultOptions: TableOptionParams;
    static element: any;
    static options: any;
    static useStaticData: any;
    searched: Array<{
        [key: string]: string;
    }>;
    constructor(element: HTMLElement, params: TableOptionParams);
    useStaticData: (params: DataType) => void;
    getThead: () => HTMLElement;
    getTheadChildrenLenth: () => number;
    getTBody: () => HTMLElement;
    static thCells: () => HTMLTableCellElement[];
    static cells: (data?: DataRows) => HTMLTableCellElement[];
    renderThead: () => HTMLElement;
    renderTBody: () => HTMLElement;
    searchItems: () => any;
    setPage: () => void;
    init: () => void;
}
declare global {
    interface Window {
        Table: typeof Table;
    }
}

type index_Table = Table;
declare const index_Table: typeof Table;
declare namespace index {
  export { index_Table as Table };
}

export { Table, index as i };

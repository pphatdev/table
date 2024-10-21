import { PaginationOptions } from '../libs/response.js';
import { DataType, THeadColumns, TableOptionParams, DataRows } from '../types/table.js';
import { Table } from '../libs/table.js';

declare class StaticTable extends Table {
    static data: DataType;
    static theadColumns: THeadColumns;
    static element: any;
    static options: any;
    static useStaticData: any;
    element: HTMLElement;
    theadColumns: THeadColumns;
    data: DataType;
    options: TableOptionParams;
    pagination: PaginationOptions;
    defaultOptions: TableOptionParams;
    searched: Array<{
        [key: string]: string;
    }>;
    constructor(element: HTMLElement, params: TableOptionParams);
    useStaticData: (params: DataType) => void;
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
        StaticTable: typeof StaticTable;
    }
}

export { StaticTable };

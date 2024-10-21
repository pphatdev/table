type THeadColumns = Array<{
    key?: string | number;
    column?: string | number | DataRows | {
        th: string;
        td: void | ((data: DataRows) => string);
    };
    className?: string;
}>;
type DataRows = {
    [key: string]: string;
};
type TableOptionParams = {
    columns?: THeadColumns;
    staticData?: boolean;
    data?: DataType;
    api?: {
        url: string;
        params?: {
            page?: number;
            limit?: number;
            perPage?: number;
        };
    };
    option?: {
        type: 'sticky' | 'normal';
    };
};
type DataType = Array<DataRows>;

export type { DataRows, DataType, THeadColumns, TableOptionParams };

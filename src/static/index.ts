import { Response } from "../libs/response.ts";
import { twMerge as cn } from 'tailwind-merge';
import { PageNavigation } from "../libs/pagination.ts";
import { DataRows, DataType, StaticOptions, StaticPaginationReponse, THeadColumns } from "../types/table.ts";
import { Table } from "../libs/table.ts";
import { Query } from "../types/response.ts";

const defaultOptionsClass = {
    thead: {
        tr: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        th: "h-10 px-2 text-sm text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    },
    tbody: {
        tr: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        td: "p-2 text-sm align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    }
}

export class StaticTable extends Table {

    static data: DataType;
    static theadColumns: THeadColumns = [];
    static options: StaticOptions;
    static element: HTMLElement;
    element: HTMLElement;
    theadColumns: THeadColumns;
    data: DataType;
    options: StaticOptions;
    pagination: StaticPaginationReponse['pagination'];
    searched: Array<{ [key: string]: string }>;
    classNames: {
        thead?: {
            tr?: string;
            th?: string;
        };
        tbody?: {
            tr?: string;
            td?: string;
        };
    };

    constructor( element: HTMLElement, params: StaticOptions )
    {
        super(element);
        StaticTable.options =
        this.options = params
        this.theadColumns = this.options.columns || []
        this.element = this.get()
        this.classNames = defaultOptionsClass

        // Todo: Get Data
        this.useStaticData(this.options.data)
        this.searchItems()
    }


    useStaticData = (params: DataType): void =>
    {
        // TODO: Apply Table Header
        this.loadingUI()

        /** Generate Pagination from data */
        const searchParams = new URLSearchParams(window.location.search)

        //? case: Searched Data
        let items = searchParams.has('search')
            ? Array.from(params).filter((data: DataRows) => {
                return Object.keys(data).some(key => {
                    return data[key].toString().toLowerCase().includes(searchParams.get('search')?.toLowerCase() || '')
                })
            })
            : params

        const options: Query = {
            //? Case: Default Params
            limit: '10',
            page: "1",
            sort: "asc",
            search: "",

            //? Case: Pass Params from Options
            ...this.options?.option?.paginations,

            //? Case: Last Updated URL Search Params
            ...Object.fromEntries(searchParams)
        }

        const data = Response.success(
            items,
            items.length,
            options
        ) as StaticPaginationReponse

        /**
         * Set Data to Global
         */
        this.data = data.result
        this.pagination = data.pagination
        this.init()

    }


    loadingUI = () => {
        // TODO: Apply Table Header
        this.renderThead()

        //? Generate Loading Rows
        const rows = Array.from( {length: 10} ).map( (_, index) => {
            return (
                `<tr class="${defaultOptionsClass.tbody.tr}">
                    ${Array.from({ length: this.theadColumns.length }).map( (_, i) => {
                        return(`
                            <td colspan="" class="p-2.5 py-4 text-xs text-center">
                                <div class="${i === 0 ? 'bg-primary/20': 'bg-foreground/10'} animate-pulse h-3 rounded-md" style="width: ${Math.floor(Math.random() * 50) + 40}%"> </div>
                            </td>`
                        )
                    }).join('')}
                </tr>`
            )
        }).join('')

        // TODO: Render Loading UI
        return this.getTbody().innerHTML = rows
    }


    static thCells = (): HTMLTableCellElement[] => StaticTable.theadColumns.map((column, i) => {
        const th = document.createElement('th');
        th.className = cn(defaultOptionsClass.thead.th, column.className );

        // TODO: Display the column name
        if (typeof column.column === 'object' && 'th' in column.column)
        {
            // Case: Column is an object with a 'th' property
            th.innerHTML = (column.column.th || '').toString()
        }
        else
        {
            if (column.sort) {

                // const sortByASC = (`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`)
                // const sortByDESC = (`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`)

                th.innerHTML = (`
                    <div class="flex items-center space-x-2">
                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-sm -ml-3 h-8 data-[state=open]:bg-accent" type="button" id="radix-:rc5:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                            <span>${(column.column || '').toString()}</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4">
                                <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>`
                )
            }
            else
                // Case: Column is a string or number
                th.innerHTML = (column.column || '').toString()
        }
        return th;
    });


    static cells = (data?: DataRows): HTMLTableCellElement[] => StaticTable.theadColumns.map((column, i) => {
        const td = document.createElement('td');
        td.className = cn(defaultOptionsClass.tbody.td, column.className );

        // TODO: Display the cells name
        if (typeof column.column === 'object' && typeof column.column.td === 'function')
            // Case: Column is an object with a 'td' or 'td' function property
            td.innerHTML = column.column.td(data) || ''
        else
            // Case: Column is a string or number
            td.innerHTML = data[column.key] || ''
        return td;
    });


    renderThead = () : HTMLElement => {
        const tHead = this.getThead();
        StaticTable.theadColumns = this.theadColumns as THeadColumns;

        // TODO: Create Table Rows
        const row = document.createElement('tr');
        tHead.innerHTML = '';
        row.className = cn(defaultOptionsClass.thead.tr, (this.options.option?.type === 'sticky' ? 'sticky' : 'normal'));

        // TODO: Create Header Cells inside the Header Rows
        const cells = StaticTable.thCells();
        Array.from(cells).forEach(cell => row.appendChild(cell));
        return tHead.appendChild(row);
    }


    renderTBody = () : HTMLElement => {
        const tBody = this.getTbody();
        tBody.innerHTML = '';
        StaticTable.theadColumns = this.theadColumns as THeadColumns;
        this.data.forEach(data => {

            // TODO: Create New Rows
            const row = document.createElement('tr');
            row.className = defaultOptionsClass.tbody.tr;
            row.dataset.state = "unchecked";

            // TODO: Create New Cells inside the Rows
            const cells = StaticTable.cells(data);
            Array.from(cells).forEach(cell => row.appendChild(cell));
            tBody.appendChild(row);
        });
        return tBody;
    }


    public searchItems = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const selector =`[data-table-id="search-${this.element.id}"]`
        const searches = document.querySelectorAll(selector)

        searches.forEach((search: HTMLInputElement) => {
            // Case: No Search Input Element
            if (!search) return null
            search.value = searchParams.get('search') || ''

            search.addEventListener('input', (e: Event) => {
                e.preventDefault()
                const element = e.target as HTMLInputElement
                searchParams.set('search', element.value);

                //? Case: Input Reset page to 1
                searchParams.set('page', '1');

                // Push New URL than call useStaticData
                history.pushState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
                this.useStaticData(this.options.data)
            });
        });
    }


    init = () => {
        // TODO: Render New Table Header
        this.renderThead()

        // TODO: Render Table Cells
        this.renderTBody()


        // TODO: Render Table page navigation
        const buttonGroups = document.querySelectorAll(`[data-table-id="group-${this.element.id}"]`)
        buttonGroups.forEach( (buttonGroup:HTMLElement) => {
            new PageNavigation(
                buttonGroup,{
                    buttons: {
                        items: this.pagination || [],
                        paginations: this.options.option.paginations
                    },

                    //? after click pages will apply new data
                    callback: () => this.useStaticData(this.options.data)
                }
            )
        })

        // this.setPage()
        StaticTable.element = this.element
    }
}

declare global {
    interface Window {
        StaticTable: typeof StaticTable;
    }
}
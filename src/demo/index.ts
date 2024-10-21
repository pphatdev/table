import { StaticTable } from "../static/index.ts"
import { data } from './static/data.ts'
const element = document.querySelector('#data-table')

new StaticTable(
    element as HTMLElement,
    {
        option: {
            paginations: {
                limit: 15,
                page: 1,
                // prevous: {
                //     label: "Prevous",
                // },
                // next: {
                //     label: "Next",
                // },
            },
        },
        columns: [
            { column: '#', key: 'id', className: 'w-12 text-center', },
            { column: 'Name', key: 'name', className: 'w-1/2', sort: true },
            { column: 'Departement', key: 'departement', sort: true },
            {
                column: {
                    th: 'custom',
                    td: (data) => {
                        return (`custom`)
                    }
                },
                className: 'w-fit py-1',
                sort: true
            },
        ],
        data: data,
    }
)
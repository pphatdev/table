<p align="center">
<img src="https://github.com/user-attachments/assets/4681f152-c7a3-4f8f-9bb8-7568f5607a02" alt="@sophat/table" width="100%"/>

# About `@sophat/table` 📚

`@sophat/table` creates a table with the specified data. used with Tailwind CSS.

# Installation
Install the package using npm:

```bash
npm install @sophat/table --save
```

Via Git:
```bash
git clone https://github.com/pphatdev/table.git
```
# Usage
### 📂 Importing package from npm repository

Two ways to import:

```js
import { StaticTable } from '@sophat/table';

// or specify the path to the file
import { StaticTable } from '@sophat/table/table-static';
```

### Static Table

#### html initalisation

-   Table
```html
<table id="data-table" class="w-full divide-y table-fixed min-w-[40rem] divide-table-header/10">
    <thead class="[&_tr]:border-b"></thead>
    <tbody></tbody>
</table>
```


-   Showing Data Information:

> Based on the `data-table-id`
> Makee sure to add the `data-table-id` attribute with `table` id and prefix `info-` to the pagination group link.

```html
<pagination-group-order data-table-id="info-data-table" class="flex items-center gap-1 shrink-0"></pagination-group-order>
```

-   Pagination Group Link
> Based on the `data-table-id`
> Makee sure to add the `data-table-id` attribute with `table` id and prefix `group-` to the pagination group link.

```html
<pagination-group-link data-table-id="group-data-table" class="flex items-center justify-center gap-3 text-sm md:justify-end"></pagination-group-link>
```

#### JS/TS initalisation

- Example Data
```js
export const data = [
    { id: '1', name: 'Logan Lawrence', departement: 'ITD', img: 'https://github.com/taylorotwell.png' },
    { id: '2', name: 'Danny Ballard', departement: 'ITD', img: 'https://github.com/taylorotwell.png' },
    ...
]
```

-  Options APIs

```js
const options = {
    paginations: {
        limit: 15, // Data per page
        page: 1,    // Page number
        prevous: {
            label: "Prevous", // Prevous label HTML Inner
        },
        next: {
            label: "Next",  // Next label HTML Inner
        },
    },
}
```

-  Columns APIs

```js
const columns = [
    {
        column: '#', // Column label
        key: 'id', // Data key (based on the data)
        className: 'w-12 text-center', // optional
    },
    { column: 'Name', key: 'name', className: 'w-1/2', sort: true },
    { column: 'Departement', key: 'departement', sort: true },
    {
        column: { // special column
            th: 'custom',
            td: (data) => {
                return (`anything you want to return`)
            }
        },
        className: 'w-fit py-1',
        sort: true // sorting
    },
]
```

- Import and init

```js
import { StaticTable } from "@sophat/table";
import { data } from './static/data.ts'
```

-   Call the StaticTable

```ts
const element = document.querySelector('#data-table')
new StaticTable(
    element as HTMLElement,
    {
        option: options,
        columns: columns,
        data: data,
    }
)
```

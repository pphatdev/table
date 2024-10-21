import { twMerge as cn, twMerge } from 'tailwind-merge';
interface Options {
    buttons?: {
        prev: {
            status: boolean
            url: string
        }
        next: {
            status: boolean
            url: string
        }
        items: {
            [key: string]: string
        }
    }
    query?: { [key: string]: string }
    currentPage?: number | string
    totalPages?: number| string
    paginations?: {
        prevous?: {
            label?: string
            className?: string
        }
        next?: {
            label?: string
            className?: string
        }
    }
    [key: string]: any
}

interface Button {
    label?: string
    active?: boolean
}

interface XButton {
    url?: string
    label?: string
    status?: boolean
}

export class PageNavigation {
    buttons: Options
    element: HTMLElement
    static buttons: Options
    static callback: Function
    callback: Function
    paginations: Options['paginations']

    constructor(element: HTMLElement, options: { buttons: Options, callback?: Function }) {
        this.element = element;
        PageNavigation.callback = this.callback = options.callback
        this.buttons = options.buttons;
        this.paginations = {
            prevous: {
                label: (`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`),
            },
            next: {
                label: (`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`),
            },
            ...this.buttons.paginations
        }

        this.init()
    }

    static variants = (className?: string) : string => {
        return twMerge('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0', className)
    }


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
    public showDataInfo = (currentPage: string, totalPages: number, limit: string): HTMLElement => {

        const selector =`[data-table-id="${this.element.dataset.tableId.replace('group', 'info')}"]`
        const informationElement: HTMLInputElement = document.querySelector(selector)

        const fromItem = Number(currentPage) * Number(limit || 10) - Number(limit || 10) + 1
        const toItem = Number(currentPage) * Number(limit || 10) <= totalPages
            ? Number(currentPage) * Number(limit || 10)
            : totalPages

        if (!informationElement) {
            return null
        }
        informationElement.innerHTML = ''

        // TODO: Create 'showing' <span>
        const showing = document.createElement('span');
        showing.className = 'text-sm';
        showing.innerHTML = 'Showing ';
        informationElement.appendChild(showing);

        // TODO: Create 'showing group' <span>
        const showingGroup = document.createElement('span');

        // TODO: Create 'current page' <span>
        const from = document.createElement('span');
        from.dataset.showFrom = fromItem.toString();
        from.innerHTML = fromItem.toString();
        showingGroup.appendChild(from)



        // TODO: Create 'to' <span>
        const to = document.createElement('span');
        to.innerHTML = ' to ';
        showingGroup.appendChild(to)

        // TODO: Create 'total page' <span>
        const total = document.createElement('span');
        total.dataset.showTo = toItem.toString();
        total.innerHTML = toItem.toString();
        showingGroup.appendChild(total)

        showingGroup.className = 'text-sm';

        // TODO: Create 'showing' <span>
        const info = document.createElement('span');
        info.className = 'text-sm';
        info.innerHTML = (`
            <span class="text-sm"> of <span data-show-total>${totalPages}</span> entries </span>
        `);
        informationElement.appendChild(showingGroup);
        return informationElement.appendChild(info)
    }


    /***
     * ?Create Button Numbers
     *
     * @param item {Button}
     *
     * @example
     * <button data-setpage="1" class="..." disabled="" type="button">{label}</button>
    */
    private static itemButton = (item: Button): HTMLElement => {
        const searchParams = new URLSearchParams(window.location.search);
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.setpage = item.label;
        button.disabled = item.label === '...';
        button.className = this.variants(item.active ? 'text-primary border-primary' : '');
        button.textContent = item.label;
        button.addEventListener('click', (e: Event) => {
            e.preventDefault()
            searchParams.set('page', item.label);
            history.pushState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
            this.callback()
        });
        return button;
    }

    /***
     * ?Create Previous and Next buttons
     *
     * @param item {XButton}
     * @param label {Previous, Next}
     *
     * @example
     * <button type="button" data-setpage="1" class="...">1</button>
    */
    private static xButton = (item: XButton, options: { label: string; className?: string } ): HTMLElement => {
        const searchParams = new URLSearchParams(item.url);
        const button = document.createElement('button');
        button.dataset.setpage = searchParams.get('page');
        button.className = this.variants();
        button.disabled = !item.status
        button.innerHTML = options.label
        // button.className = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
        button.type = 'button';
        button.addEventListener('click', (e: Event) => {
            e.preventDefault()
            history.pushState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
            this.callback()
        });
        return button
    }

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
    public LinkNavigation = (buttons: { prev: XButton; items: Button[]; next: XButton }): void => {
        this.element.innerHTML = ''

        // TODO: Create Previous button
        this.element.appendChild(PageNavigation.xButton(buttons.prev, {
            label: this.paginations.prevous.label,
            className: this.paginations.prevous.className
        }))

        // TODO: Create number list of buttons
        buttons.items.forEach((item: Button) => this.element.appendChild(PageNavigation.itemButton(item)));

        // TODO: Create Next button
        this.element.appendChild(PageNavigation.xButton(buttons.next, {
            label: this.paginations.next.label,
            className: this.paginations.next.className
        }))
    }
    init = (): void => {

        const { buttons, currentPage,  query } = this.buttons.items

        // Create Link Navigation Button
        this.LinkNavigation(buttons)

        // Create Showing Data information
        this.showDataInfo(currentPage, this.buttons.items.total, query.limit)
    }
}
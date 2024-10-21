export class Table {
    private static _element: HTMLElement;
    private _element: HTMLElement;

    constructor(element?: HTMLElement) {
        if (element) {
            Table._element = this._element = element;
        }

        return
    }

    static get(): HTMLElement {
        return this._element;
    }

    get(): HTMLElement {
        return this._element || Table._element;
    }

    static getThead(): HTMLElement {
        return this.get().querySelector('thead');
    }

    getThead(): HTMLElement {
        return this.get().querySelector('thead');
    }

    static getTheadRowItems(): NodeListOf<HTMLElement> {
        return this.getThead().querySelectorAll<HTMLElement>('tr > *');
    }

    getTheadRowItems(): NodeListOf<HTMLElement> {
        return this.getThead().querySelectorAll<HTMLElement>('tr > *');
    }

    static getTbody(): HTMLElement {
        return this.get().querySelector('tbody');
    }

    getTbody(): HTMLElement {
        return this.get().querySelector('tbody');
    }

    static getTbodyRows(): NodeListOf<HTMLElement> {
        return this.getTbody().querySelectorAll<HTMLElement>('tr');
    }

    getTbodyRows(): NodeListOf<HTMLElement> {
        return this.getTbody().querySelectorAll<HTMLElement>('tr');
    }
}

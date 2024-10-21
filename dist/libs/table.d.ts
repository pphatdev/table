declare class Table {
    private static _element;
    private _element;
    constructor(element?: HTMLElement);
    static get(): HTMLElement;
    get(): HTMLElement;
    static getThead(): HTMLElement;
    getThead(): HTMLElement;
    static getTheadRowItems(): NodeListOf<HTMLElement>;
    getTheadRowItems(): NodeListOf<HTMLElement>;
    static getTbody(): HTMLElement;
    getTbody(): HTMLElement;
    static getTbodyRows(): NodeListOf<HTMLElement>;
    getTbodyRows(): NodeListOf<HTMLElement>;
}

export { Table };

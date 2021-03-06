class DOMUtils {

    /**
    * DOM Traversal (Sizzle)
    *
    * @param {string} selector Selector to find
    * @return {Element} return the finded DOM element
    */
    public findBySelector(selector: string): Element {
        return document.querySelector(selector);
    }

    /**
     * DOM Traversal (Sizzle)
     *
     * @param {string} selector Selector to find
     * @return {NodeListOf<Element>} return the collection of DOM elements
     */
    public findAllBySelector(selector: string): NodeListOf<Element> {
        return document.querySelectorAll(selector);
    }

    /**
     * DOM Traversal (Sizzle)
     *
     * @param elm Element to search in his parent's
     * @param selector Selector to find
     * @return return the finded DOM element
     */
    public findParent(elm: HTMLElement, selector: string): Element {
        return elm.closest(selector);
    }

    /**
     * DOM Traversal (Sizzle)
     *
     * @param {string} id id element to find
     * @return {HTMLElement} return the finded DOM element
     */
    public findById(id: string): HTMLElement {
        return document.getElementById(id);
    }

    /**
     * Add class to an element
     *
     * @param {HTMLElement} elm Element to add the classname
     * @param {string} classNameToAdd Class Name to Add
     */
    public addClass(elm: HTMLElement, classNameToAdd: string): void {
        elm.className += ' ' + classNameToAdd;
    }

    /**
     * Remove class to an element
     *
     * @param {HTMLElement} elm Element to remove the classname
     * @param {string} classNameToAdd Class Name to Remove
     */
    public removeClass(elm: HTMLElement, classNameToRemove: string): void {
        let elClass = ' ' + elm.className + ' ';
        while (elClass.indexOf(' ' + classNameToRemove + ' ') !== -1) {
            elClass = elClass.replace(' ' + classNameToRemove + ' ', '');
        }
        elm.className = elClass;
    }

}

const dom = new DOMUtils();
export { dom };
export function getQueryParam(param: string): string {
    return (new URLSearchParams(window.location.search)).get(param);
}

export function hashCode(input: string): number {
    let hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export function recreateNode(el: Element): Element {
    var newEl = el.cloneNode(false) as Element;
    while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
    el.parentNode.replaceChild(newEl, el);

    return newEl;
}

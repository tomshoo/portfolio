const fade_step = 0.01;
const fade_interval_ms = 2;
/**
 * @type {Map<HTMLElement, number>}
 */
let __un_faded = new Map();

/**
 * @type {Map<HTMLElement, number>}
 */
let __faded = new Map();

export function unfade(element) {
    let opacity = element.style.opacity ? +element.style.opacity : fade_step;
    if (__un_faded.has(element)) return;
    if (+element.style.opacity >= 1) return;

    {
        let timer = __faded.get(element);
        if (__faded.delete(element)) clearInterval(timer);
    }

    let timer = setInterval(() => {
        if (opacity >= 1) clearInterval(timer);

        element.style.opacity = `${opacity}`;
        element.style.filter = `alpha(opacity=${opacity * 100})`;
        opacity += opacity * fade_step;
    }, fade_interval_ms);
    __un_faded.set(element, timer);
}

export function fade(element) {
    let opacity = element.style.opacity ? +element.style.opacity : 1;
    if (__faded.has(element)) return;
    if (+element.style.opacity <= fade_step) return;

    {
        let timer = __un_faded.get(element);
        if (__un_faded.delete(element)) clearInterval(timer);
    }

    let timer = setInterval(() => {
        if (opacity <= 0.01) {
            clearInterval(timer);
        }

        element.style.opacity = `${opacity}`;
        element.style.filter = `alpha(opacity=${opacity * 100})`;
        opacity -= opacity * fade_step;
    }, fade_interval_ms);
    __faded.set(element, timer);
}

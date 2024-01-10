/**
 * @brief check if an element is in viewport
 * @param {Element} element to check for in viewport
 * @return {boolean}
 */
export function isInViewport(element) {
    const rectangle = element.getBoundingClientRect();
    const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;

    return (
        rectangle.top >= 0 &&
        rectangle.left >= 0 &&
        rectangle.bottom <= viewportHeight &&
        rectangle.right <= viewportWidth
    );
}

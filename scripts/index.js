import { fade, unfade } from "./fader.js";
import { isInViewport } from "./utils.js";

window.onload = () => {
    if (window.innerWidth < 1920)
        alert(
            "This site is not responsive, forgive me if everything looks out of place",
        );

    for (const fader of document.getElementsByClassName("fader"))
        if (isInViewport(fader)) unfade(fader);

    window.onscroll = () => {
        for (const fader of document.getElementsByClassName("fader")) {
            if (isInViewport(fader)) unfade(fader);
            else fade(fader);
        }
    };

    {
        let src_link = document
            .getElementsByClassName("note-footer")[0]
            .getElementsByTagName("a")[0];

        src_link.onmouseenter = (_ev) => {
            let actual_link = src_link.getAttribute("href");
            src_link.innerHTML = `<a href="${actual_link}" target="_blank">Source Code</a>`;
        };

        src_link.onmouseleave = () => {
            let actual_link = src_link.getAttribute("href");
            src_link.innerHTML = `<a href="${actual_link}" target="_blank">SRC</a>`;
        };
    }
};

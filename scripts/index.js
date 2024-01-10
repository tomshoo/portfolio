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
};

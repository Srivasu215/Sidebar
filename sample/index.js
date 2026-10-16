import spec from "./spec.json" with { type: "json" };
import buildSpecElement from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const startFunc = () => {

    try {
        const createDomElement = buildSpecElement(spec);
        const cont1 = document.getElementById("form-container");
        cont1.append(createDomElement);
    } catch (err) {
        console.error("Failed to render v10 table sample:", err);
    }
};

startFunc();

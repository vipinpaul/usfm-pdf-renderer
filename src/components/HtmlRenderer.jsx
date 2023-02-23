import React from "react";
import usfmData from "../data/titus.json"
import { usfm2perf } from "../hooks/useUsmf2Perf"
import { perf2html } from "../core/renderer";
const HtmlRenderer = () => {
    const {htmlString} = perf2html(usfmData)
return <div dangerouslySetInnerHTML= {{__html: htmlString}} />
}

export default HtmlRenderer;
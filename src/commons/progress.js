import React from "react";
import pace from "../vendors/pace/pace";

export class Progress extends React.Component {
    componentDidMount() {
        pace.start();
        let section = document.createElement("div");
        let text = document.createTextNode("Please do not refresh page or make changes until page has fully loaded");
        section.appendChild(text);
        section.style.color = "black";
        section.setAttribute("class", "no-refresh");
        let progressbar = document.getElementsByClassName("pace-active");
        progressbar[0].appendChild(section);

        //document.getElementsByClassName("pax")
    }

    render() {
        return (null);
    }
}
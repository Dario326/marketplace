import React from "react";

export class IboxTools extends React.Component {

    collapsePanel(e) {
        e.preventDefault();
        // TODO- Remove $
        // eslint-disable-next-line
        const element = $(e.target);
        const ibox = element.closest("div.ibox");
        const button = element.closest("i");
        const content = ibox.find("div.ibox-content");
        content.slideToggle(200);
        button.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
        ibox.toggleClass("").toggleClass("border-bottom");
        setTimeout(function () {
            ibox.resize();
            ibox.find("[id^=map-]").resize();
        }, 50);
    }

    closePanel(e) {
        e.preventDefault();
        // TODO- Remove $
        // eslint-disable-next-line
        const element = $(e.target);
        const content = element.closest("div.ibox");
        content.remove();
    }

    render() {
        return (
            <div className="ibox-tools">
                <a className="collapse-link" onClick={this.collapsePanel}>
                    <fa name="chevron-up"/>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <fa name="wrench"/>
                </a>
                <ul className="dropdown-menu dropdown-user">
                    <li><a href="#">Config option 1</a>
                    </li>
                    <li><a href="#">Config option 2</a>
                    </li>
                </ul>
                <a className="close-link" onClick={this.closePanel}>
                    <fa name="times"/>
                </a>
            </div>
        );
    }
}
import React from "react";
import { SortableContainer, SortableElement, SortableHandle } from "react-sortable-hoc";

// TODO - Add proptypes validation
const DragHandle = SortableHandle(() => <i class="fa fa-bars" />); // This can be any component you want
const Tab = SortableElement(({ value, isDraggable = true, activeTab = false, onClickHandler, renderPostElements }) =>
    <li id={value.id} className={activeTab ? "active" : ""}>
        <a class="btn btn-primary" onClick={(e) => value.clickHandler ? value.clickHandler(e, value) : onClickHandler(e, value) }>
            {isDraggable ? <DragHandle /> : null}
            {value.title}
            {renderPostElements(value)}
        </a>
    </li>
);

// TODO - Add proptypes validation
export const Tabs = SortableContainer(({ tabs, clickHandler, activeTab, renderPostElements }) => {
    return (
        <ul class="nav nav-pills nav-stacked">
            {tabs.map((value, index) => (
                <Tab
                    key={`item-${index}`}
                    index={index}
                    value={value}
                    isDraggable={value.isDraggable}
                    onClickHandler={clickHandler}
                    activeTab={value.id === activeTab}
                    renderPostElements={renderPostElements}
                />
            ))}
        </ul>
    );
});
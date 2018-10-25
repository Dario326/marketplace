import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import { Login } from "./login";

describe("<Login />", () => {
    describe("Rendering...", () => {
        it("Should match <Login /> snapshot", () => {
            const component = renderer.create(
                <MemoryRouter>
                    <Login />
                </MemoryRouter>,
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });

        it("Renders No username error message", () => {
            // Write a test to check if error message
        });

        it("Renders No password error message", () => {
            // Write a test to check if error message
        });

        it("Renders No username and password error message", () => {
            // Write a test to check if error message
        });
    });

    describe("User login", () => {
        it("Stores token to the localstorage for caching post successful login", () => {
            // Write a test to check if localstorage is initialized
        });
    });
});

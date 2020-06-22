
import {expect, it} from "@jest/globals";
import renderer from 'react-test-renderer';
import React from "react";
import ReviewInput from "../src/component/review/ReviewInput";

/**
 * @jest-environment jsdom
 */

window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

it('Reviewinput renders correctly', () => {
    const component = renderer.create(<ReviewInput   movieName={"Cool movie"}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


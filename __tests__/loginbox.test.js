import {shallow, EnzymeAdapter, configure} from 'enzyme';
import ReviewInput from "../src/component/review/ReviewInput";
import React from "react";
import {describe, expect, it} from "@jest/globals";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('BaseButton', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<ReviewInput movieName={"Sharknado 3"} />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});
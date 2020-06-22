import {expect, it} from "@jest/globals";
import Axios from "axios";
import ReviewCalculator from "../src/logic/ReviewCalculator";

it('Get average reviews works correctly', () => {
    let calc = new ReviewCalculator();
    let firstReview= {score:1}
    let secondReview= {score:4}
    let arr = [];
    arr.push(firstReview,secondReview)
    let result =calc.getAverage(arr);
    expect(result).toEqual(2.5)

});


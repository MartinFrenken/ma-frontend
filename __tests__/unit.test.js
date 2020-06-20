import Axios from "axios";
import {expect, it} from "@jest/globals";

it('Token is not set serverside', () => {
    expect.assertions(1);
    expect(localStorage.getItem("accessToken")).toBeNull();
});


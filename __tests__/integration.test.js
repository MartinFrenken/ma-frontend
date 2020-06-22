import Axios from "axios";
import {expect, it} from "@jest/globals";
/**
 * @jest-environment jsdom
 */
it('Backend API works correctly', () => {
    expect.assertions(1);
    return Axios.get("http://34.120.173.114/gateway/movie/api/movies").then(response=>expect(response.data).toBeTruthy());

});


import Axios from "axios";
import {expect, it} from "@jest/globals";
import ApiGateway from "../src/logic/ApiGateway";
import LocalStorageMock from "../src/logic/LocalStorageMock";

global.localStorage = new LocalStorageMock;
it('Token is not set on gateway creation', () => {
    expect.assertions(1);
    expect(localStorage.getItem("accessToken")).toBeNull();
});


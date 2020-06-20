import Axios from "axios";
import {expect, it} from "@jest/globals";
import ApiGateway from "../src/logic/ApiGateway";
class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
};

global.localStorage = new LocalStorageMock;
it('Token is not set on gateway creation', () => {
    let apiGateway = new ApiGateway();
    expect.assertions(1);
    expect(localStorage.getItem("accessToken")).toBeNull();
});


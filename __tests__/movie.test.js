import {expect, it} from "@jest/globals";
import Movie from "../src/model/Movie";
import ApiGateway from "../src/logic/ApiGateway";

it('Base url is set properly', () => {
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
    let apigw= new ApiGateway();
    console.log(apigw.baseUrl);
    expect(apigw.baseUrl).toEqual("http://localhost/gateway");
});


import {expect, it} from "@jest/globals";
import Movie from "../src/model/Movie";
import LocalStorageMock from "../src/logic/LocalStorageMock";
import ApiGatewayMock from "../src/logic/ApiGatewayMock";
/**
 * @jest-environment jsdom
 */
it('Base url is set properly', () => {
    let apigw= new ApiGatewayMock();
    console.log(apigw.baseUrl);
    expect(apigw.baseUrl).toEqual("http://localhost/gateway");
});


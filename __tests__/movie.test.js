import {expect, it} from "@jest/globals";
import Movie from "../src/model/Movie";
import ApiGateway from "../src/logic/ApiGateway";

it('Base url is set properly', () => {
    expect.assertions(1);
    let apigw= new ApiGateway();
    console.log(apigw.baseUrl)
    expect(apigw.baseUrl).toEqual("http://localhost/gateway");
});


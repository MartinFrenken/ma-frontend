import {expect, it} from "@jest/globals";
import Movie from "../src/model/Movie";
import ApiGateway from "../src/logic/ApiGateway";
import LocalStorageMock from "../src/logic/LocalStorageMock";
it('Base url is set properly', () => {


    global.localStorage = new LocalStorageMock;
  //  let apigw= new ApiGateway();
    console.log(apigw.baseUrl);
    expect(apigw.baseUrl).toEqual("http://localhost/gateway");
});


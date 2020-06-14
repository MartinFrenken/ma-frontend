import Axios from "axios";

export default class ApiGateway {
    config = {
        headers: {
            authorization: "Bearer "+localStorage.getItem("accessToken"),
            'content-type':'application/json'
        }
    };
    async postReview(text,rating,movieName) {
        const review={
            text:text,
            rating:rating,
            movieName:movieName,
            userToken:""
        };

        Axios.post("http://localhost:1232/review-api/post/review",review, this.config).then(function (response) {
         return response
        });
    }
    async getReviews(movie){
       return Axios.get("http://localhost:1232/review-api/get/reviews/"+movie, this.config)
    }
}
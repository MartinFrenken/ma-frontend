import Axios from "axios";

export default class ApiGateway {
    config = {
        headers: {
            authorization: "Bearer "+localStorage.getItem("accessToken"),
            'content-type':'application/json'
        }
    };
    baseUrl = window.location.origin;
    async postReview(text,rating,movieName) {
        const review={
            text:text,
            rating:rating,
            movieName:movieName,
            userToken:""
        };

        Axios.post(this.baseUrl+"/review-api/post/review",review, this.config).then(function (response) {
         return response
        });
    }
    async getReviews(movie){
       return Axios.get(this.baseUrl +"/review-api/get/reviews/"+movie, this.config)
    }
    async deleteData(){
        return Axios.get(this.baseUrl +"/review-api/delete", this.config)
    }
}
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

        Axios.post("http://34.78.187.133/review-api/post/review",review, this.config).then(function (response) {
         return response
        });
    }
    async getReviews(movie){
       return Axios.get("http://34.78.187.133/review-api/get/reviews/"+movie, this.config)
    }
    async deleteData(){
        return Axios.get("http://34.78.187.133/review-api/delete", this.config)
    }
}
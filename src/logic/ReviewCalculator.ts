import Review from "../model/Review";

export default class ReviewCalculator {
    getAverage(reviews:Review[]):number{
        let tot=0;
        for (let rev in reviews){
            tot+=reviews[rev].score
        }

        return tot/reviews.length;
    }
}


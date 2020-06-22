import { useRouter } from 'next/router'
import {any, func} from "prop-types";
import ApiGateway from "../../src/logic/ApiGateway";
import React, {useEffect, useState} from "react";
import {Card, Rate} from "antd";
import ReviewInput from "../../src/component/review/ReviewInput";
import { Client } from '@stomp/stompjs';

const Post = () => {

    const [reviewState,setReviews] = useState({
        reviews: [],
    });
    const [movieState,setMovie] = useState({
        movie: null,
    });

    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { movie } = router.query;

    useEffect(()=>
    {

        getReviews(movie);

    },[router]);

    function getReviews(movie){

        let apigw = new ApiGateway();
        apigw.getReviews(movie).then(function (response) {
            setReviews({reviews: response.data});
            setMovie({movie:movie});
            setLoading(true);
        });


    }
    const listItems = reviewState.reviews.map((review) =>
        <Card title={"User " + review.userName} bordered={true} style={{width: 300}}>
            <p>{review.text}</p>
            <Rate disabled defaultValue={review.rating}/>

        </Card>);


    return <>
        <ReviewInput movieName={movie.toString()}/>
        <ul>
        {listItems}
        </ul>
    </>

};

export default Post
import React, {Component, useState,useEffect} from "react";
import Axios from "axios";
import { Client } from '@stomp/stompjs';
import {Button, Card, Rate} from 'antd';
import { useAuth } from "react-use-auth";
import Navbar from "../src/component/NavBar";
import MovieFeatured from "../src/component/MovieFeatured";
import Movie from "../src/model/Movie";





export default () => {
   const [state, setState] = useState( {
        loggedIn: false,
        user:null
    });
   const [reviewState,setReviews] = useState({
       reviews: [],
   });
   const [movieState,setMovies] = useState({
        movies:[],
   });
    const{login,logout,isAuthenticated,user,authResult} =useAuth();

    useEffect(()=>
    {

        let loggedIn=false;
        if(!(Object.keys(user).length === 0 && user.constructor === Object)){

            loggedIn=true;
        }
        console.log(user);
        setState({loggedIn:loggedIn,user: user});

        let client = new Client();

        client.configure({
            brokerURL: 'ws://localhost:9000/websocket',
            onConnect: () => {
                console.log('onConnect');
                client.subscribe('/topic/review', message => {
                    let review = JSON.parse(message.body);
                    let currentReviews = reviewState.reviews;
                    setReviews({reviews: currentReviews.concat(review)})
                });
            },
        });
        client.activate();
        if(!!authResult) {
            localStorage.setItem("accessToken", authResult.accessToken)
        }
        let config = {
            headers: {
                authorization: "Bearer "+localStorage.getItem("accessToken"),
                'content-type':'application/json'
            }
        };

        Axios.get("http://localhost:1232/movie/api/movies",config).then(function (response) {
            console.log(response.data);
            setMovies({movies:response.data});
        })
    },[]);


        const listItems = reviewState.reviews.map((review) =>
            <Card title={"User " + review.userID} bordered={true} style={{width: 300}}>
                <p>{review.text}</p>
                <Rate disabled defaultValue={review.rating}/>

            </Card>
        );
        const CompleteNavbar = () => {
            return (
                <Navbar LoginHandler={login} LogoutHandler={logout} user={state.user} loggedIn={state.loggedIn}/>
            )
        };

        const movieRenders = movieState.movies.map((movie) =>
            <MovieFeatured movie={movie}/>
            );
        return (
            <div>
                <CompleteNavbar/>
                {movieRenders}
                <ul>
                    {listItems}
                </ul>
                <ul>
                </ul>
            </div>
        );
};

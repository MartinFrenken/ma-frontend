import React,{Component} from "react";
import Axios from "axios";
import LoginBox from "../src/component/LoginBox";
import { Client } from '@stomp/stompjs';
import {Button, Card, Rate} from 'antd';
import { useAuth } from "react-use-auth";

export default class Account extends Component{
    render(){
        return <p>User is now logged in </p>
    }
}

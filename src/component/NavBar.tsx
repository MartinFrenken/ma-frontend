import React, { Component } from 'react';
import {Drawer, Button, Row, Col, Avatar, Modal} from 'antd';
import Grid from "antd/es/card/Grid";
interface ToggleProps {
    LoginHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
    LogoutHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
    user:any
    loggedIn:boolean
}
class Navbar extends Component<ToggleProps> {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };

    showModal = () => {
        if(this.props.loggedIn) {
            this.setState({
                visible: true,
            });
        }
    };

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    render(){
        const { visible, confirmLoading, ModalText } = this.state;
        return <div style={{backgroundColor:"#4A5859",padding:20}}>
            <Row style={{color:"#FFFFFF",fontSize:30}} >
                <Col xs={6} md={4}  >
                    MovieAnalyst
                </Col>
                <Col xs={10} lg={16 }  >

                </Col>
                <Col xs={4}  lg={2} >
                    <Button onClick={this.getLogFunction()} type="primary" shape="round" style={{backgroundColor:"#4A5859",borderColor:"#FFFFFF"}}  >
                        {this.getLoginText()}
                    </Button>
                </Col>
                <Col xs={4}  lg={2} >
                    <Button  onClick={this.showModal} ghost={true} style={{border:0}}>
                     <Avatar src={this.getPicture()}>
                     </Avatar>
                    </Button>
                <Modal
                    title={this.props.user?this.props.user.name:"User not logged in"}
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>{"Would you like to delete all your personal data? This includes all your reviews and comments."}</p>
                </Modal>
                </Col>

            </Row>
        </div>
    }
    getLoginText():string {
        if(this.props.loggedIn){
            return "Log Out"
        }
        else {
            return "Log In"
        }
    }
    getLogFunction():any{
        if(this.props.loggedIn){
            return this.props.LogoutHandler;
        }
        else {
            return this.props.LoginHandler;
        }
    }
    getPicture():string{
        if(this.props.loggedIn){
            return this.props.user.picture;
        }
        else {
            return "https://vectorified.com/images/no-profile-picture-icon-8.jpg";
        }
    }

}
export default Navbar;
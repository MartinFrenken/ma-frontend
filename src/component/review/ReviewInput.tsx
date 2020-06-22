import { Rate, Card, Button,Row,Col} from 'antd';
import React,{  MouseEvent } from "react"
import { Input } from 'antd';
import ApiGateway from "../../logic/ApiGateway";
import Router from "next/router";

const { TextArea } = Input;
const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

export default class ReviewInput extends React.Component<{movieName:string}> {
    state = {
        value: 3,
        text: "",
        succesText:""
    };
    constructor(props) {
        super(props);
        this.postReview.bind(this);
    }
    handleChange = value => {
        this.setState({ value });
    };

    handleTextChange = ({ target: { value } }) => {
        this.setState({text: value });
    };
    render() {
        const { value } = this.state;
        const { text } = this.state;
        return (
            <Card title={"Write your own review!"} bordered={true} style={{width: 300}}>
                <TextArea
                    value={text}
                    onChange={this.handleTextChange}
                    placeholder="Controlled autosize"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
                <Row style={{marginTop:20}} >
                    <Col  span={16}>
                        <Rate tooltips={desc} onChange={this.handleChange} value={value} />

                    </Col>
                    <Col  span={8}>
                        <Button type="primary" onClick={this.postReview.bind(this)}>Post</Button>
                    </Col>

                </Row>
          </Card>
        );
    }

    postReview(event: MouseEvent<HTMLButtonElement>){
       let gateWay= new ApiGateway();
       gateWay.postReview(this.state.text,this.state.value,this.props.movieName).then(()=>      Router.reload());

    }
}
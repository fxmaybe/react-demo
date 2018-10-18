import React from 'react';
import { Row, Col, Button } from "antd";
import './index.less';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }
    componentWillMount() {
        this.setState({
            userName: 'Maybe'
        })
    }

    render() {
        return <div className="header"> 
            <Row className="header-top">
                <Col span="24">
                    欢迎，{this.state.userName} <a type="danger" className="logout">注销</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">
                    首页
                </Col>
                <Col span="20" className="weather">
                    <span className="date">2018-09-27 16:22:08</span>
                    <span className="weather-symbol">
                        <img src="http://api.map.baidu.com/images/weather/day/xiaoyu.png" />
                    </span>
                     <span className="weather-detail">小雨</span>
                </Col>
            </Row>
        </div>;
    }
}
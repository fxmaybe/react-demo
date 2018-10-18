import React from 'react';
import {Row, Col} from "antd";
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import './assets/css/common.less';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <Row className="container">
            <Col span="4" className="side-nav"><SideNav /></Col>
            <Col span="20" className="main">
                <Header></Header>
                <Row className="content">
                    {this.props.children}
                </Row>
                <Footer></Footer>
            </Col> 
        </Row>;
    }
}
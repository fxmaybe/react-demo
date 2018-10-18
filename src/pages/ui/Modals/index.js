import React from 'react';
import { Card, Button, Modal } from "antd";
import './index.less';

export default class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v1: false,
            v2: false
        }
    }
    handleOpen = (type) => {
        this.setState({
            [type]: true
        });
    }
    handleClose = (type) => {
        this.setState({
            [type]: false
        });
    }

    render() {
        return (
            <div className="modals-wrap">
                <Card title="基础弹框" className="card-wrap">
                    <Button type="primary" onClick= {() => {this.handleOpen('v1')}}>基础</Button>
                    <Button type="primary" onClick= {() => {this.handleOpen('v2')}}>自定义页脚</Button> 
                </Card>
                 <Modal 
                    title="基础弹框" 
                    visible={this.state.v1} 
                    onOk={() => {this.handleClose('v1')}} 
                    onCancel={() => {this.handleClose('v1')}}
                >
                    <p>
                        最基础的弹出框
                    </p>
                </Modal>
                <Modal 
                    title="自定义Footer" 
                    visible={this.state.v2} 
                    onOk={() => {this.handleClose('v2');}} 
                    onCancel={() => {this.handleClose('v2');}}
                    footer = {[
                        <Button key="cancel" onClick={() => {this.handleClose('v2');}} >取消</Button>,
                        <Button key="ok" type="primary" onClick={() => {this.handleClose('v2')}}>确认</Button>
                    ]}
                >
                    <p>
                        自定义footer的弹出框
                    </p>
                </Modal>
                <Card title="信息确认弹框" className="card-wrap">
                    xxx
                </Card>
            </div>
        );
    }
}
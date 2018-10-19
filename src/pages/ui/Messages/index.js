import React from 'react';
import { Card, Button, message } from "antd";
import './index.less';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
    }
    handleOpen = (type) => {
        message[type](`This is a ${type} message. `);
    }
    render() {
        return (
            <div className="messages-wrap">
                <Card title="信息弹出框" className="card-wrap">
                    <Button type="primary" onClick={() => {this.handleOpen('info')}}>信息</Button>
                    <Button type="primary" onClick={() => {this.handleOpen('success')}}>成功</Button>
                    <Button type="dashed" onClick={() => {this.handleOpen('warning')}}>警告</Button>
                    <Button type="danger" onClick={() => {this.handleOpen('error')}}>错误</Button>
                </Card>
            </div>
        );
    }
}
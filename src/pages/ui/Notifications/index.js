import React from 'react';
import { Card, Icon, Button, notification } from "antd";
import './index.less';

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
    }
    handleOpen = (opts) => {
        notification[opts.type]({
			message: 'Notification Title',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
		});
    }
    handlePos = (opts) => {
        notification[opts.type]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: opts.pos
        });
    }
    handleOpenIcon = () => {
        notification.error({
            message: 'Notification Title',
            icon: <Icon type="loading" style={{color: 'red'}} />,
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        });
    }
    handleOpenWithBtn = () => {
        let key = `open${Date.now()}`;

        notification.info({
			message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            key,
            btn: <Button type="primary" size="small" onClick={() => notification.close(key)}>Confirm</Button>
		});
        
    }
    render() {
        return (
            <div className="notifications-wrap">
                <Card title="信息弹出框" className="card-wrap">
                    <Button type="primary" onClick={() => {this.handleOpen({type: 'open'})}}>普通</Button>
                    <Button type="primary" onClick={() => {this.handleOpen({type: 'info'})}}>信息</Button>
                    <Button type="primary" onClick={() => {this.handleOpen({type: 'success'})}}>成功</Button>
                    <Button type="dashed" onClick={() => {this.handleOpen({type: 'warning'})}}>警告</Button>
                    <Button type="danger" onClick={() => {this.handleOpen({type: 'error'})}}>错误</Button>
                    <Button type="primary" onClick={this.handleOpenIcon}>自定义图标</Button>
                    <Button type="primary" onClick={this.handleOpenWithBtn}>带有自定义按钮</Button>
                </Card>
                <Card title="不同位置的信息弹出框" className="card-wrap">
                    <Button type="primary" onClick={() => {this.handlePos({type: 'info', pos: 'topLeft' })}}>消息topLeft</Button>
                    <Button type="primary" onClick={() => {this.handlePos({type: 'success', pos: 'topRight' })}}>成功topRight</Button>
                    <Button type="dashed" onClick={() => {this.handlePos({type: 'warning', pos: 'bottomLeft' })}}>警告bottomLeft</Button>
                    <Button type="danger" onClick={() => {this.handlePos({type: 'error', pos: 'bottomRight' })}}>错误bottomRight</Button>
                </Card>
            </div>
        );
    }
}
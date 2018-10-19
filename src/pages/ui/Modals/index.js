import React from 'react';
import { Card, Button, Modal } from "antd";
import './index.less';

export default class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v1: false,
            v2: false,
            v3: false,
            v4: false,
            interval: null
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
    handleInfo = () => {
        Modal.info({
            title: '信息弹框',
            content: '这是一个信息弹框！'
        });
    }
    handleComfirm = () => {
        Modal.confirm({
            title: '确认弹框',
            content: '这是一个确认弹框！'
        });
    }
    handleWarining = () => {
        Modal.warning({
            title: '警告弹框',
            content: '这是一个警告弹框！'
        });
    }
    handleSuccess = () => {
        Modal.success({
            title: '成功弹框',
            content: '这是一个成功弹框！'
        });
    }
    handleError = () => {
        Modal.error({
            title: '错误弹框',
            content: '这是一个错误弹框！'
        });
    }
    countDown = () => {
        let ti = 2;

        clearInterval(this.interval);
        let md = Modal.error({
            title: '错误弹框',
            content: `这是一个错误弹框！${ti}秒后关闭！`
        });
        this.interval = setInterval(() => {
            ti -= 1;
            if(ti === 0) {
                clearInterval(this.interval);
                md.destroy();
            }
            md.update({
                content: `这是一个错误弹框！${ti}秒后关闭！`
            });
        }, 1000);
    }
    render() {
        return (
            <div className="modals-wrap">
                <Card title="基础弹框" className="card-wrap">
                    <Button type="primary" onClick={() => {this.handleOpen('v1')}}>基础</Button>
                    <Button type="primary" onClick={() => {this.handleOpen('v2')}}>自定义页脚</Button>
                    <Button type="primary" onClick={() => {this.handleOpen('v3')}}>自定义按钮文案&顶部20px</Button>
                    <Button type="primary" onClick={() => {this.handleOpen('v4')}}>垂直居中</Button>
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
                <Modal 
                    title="自定义按钮文案&顶部20px"
                    style={{top: 20}}
                    visible={this.state.v3} 
                    onOk={() => {this.handleClose('v3')}} 
                    onCancel={() => {this.handleClose('v3')}}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>
                        自定义按钮文案 & 顶部20px
                    </p>
                </Modal>
                <Modal 
                    title="垂直居中"
                    centered
                    visible={this.state.v4} 
                    onOk={() => {this.handleClose('v4')}} 
                    onCancel={() => {this.handleClose('v4')}}
                >
                    <p>
                       垂直居中
                    </p>
                </Modal>
                <Card title="信息弹出弹框" className="card-wrap"> 
                    <Button onClick={this.handleInfo}>信息弹框</Button>
                    <Button onClick={this.handleComfirm}>确认弹框</Button>
                    <Button onClick={this.handleSuccess}>成功弹框</Button>
                    <Button type="dashed" onClick={this.handleWarining}>警告弹框</Button>
                    <Button type="danger" onClick={this.handleError}>错误弹框</Button>
                    <Button onClick={this.countDown}>2秒后关闭</Button>
                </Card>
            </div>
        );
    }
}
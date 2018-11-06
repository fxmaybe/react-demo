import React from 'react';
import { Row, Col, Form, Input, Button } from "antd";
import './index.less';

const FormItem = Form.Item;

export default class Login extends React.Component {
    render() {
        return (
            <div className="login-wrap">
                <div className="login-header">
                    <div className="logo">
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                        登录管理系统
                    </div>
                </div>
                <div className="login-content">
                    <div className="login-content-inner">
                        <Row>
                            <Col span="14">
                                <div className="word">
                                    <span>
                                        智能系统
                                        <br />
                                        引领技术先锋
                                    </span>
                                </div>
                            </Col>
                            <Col span="10">
                                <div className="login-form">
                                    <div className="title">
                                        YY欢聚时代
                                    </div>
                                    <Form style={{padding: '0 30px'}}>
                                        <FormItem>
                                            <Input placeholder="请输入帐号" />
                                        </FormItem>
                                        <FormItem>
                                            <Input placeholder="请输入密码" />
                                        </FormItem>
                                        <FormItem>
                                            <Button type="primary" block>
                                                登录
                                            </Button>
                                        </FormItem>
                                    </Form>
                                </div>
                            </Col>   
                        </Row>
                        
                    </div>
                </div>
                <div className="login-footer">
                    <p>
                        版权所有：慕课网&amp;河畔一角（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：河畔一角
                    </p>
                </div>
            </div>
        );
    }
}
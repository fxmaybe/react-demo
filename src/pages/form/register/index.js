import React from 'react';
import { Card, Icon, Button, message, Form, Input, Checkbox} from "antd";
import './index.less';

const FormItem = Form.Item;

class FormRegister extends React.Component {
	constructor(props) {
		super(props)
	}
	handleSubmit = () => {
		let userInfo = this.props.form.getFieldsValue();
		console.log(userInfo);
        this.props.form.validateFields((err,values) => {
            if(err){
                return;
			}

			message.success(`${userInfo.acct} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.pwd}`)
        })
	}

    render() {
		const {getFieldDecorator} = this.props.form;
        return (
            <div className="form-register-wrap">
				<Card className="card-wrap" title="注册表单">
					<Form style={{width: 300}}>
						<FormItem>
							{
								getFieldDecorator('acct', {
									initialValue: '123',
									rules: [
										{
											required: true,
											message: '请输入帐号'
										}
									]
								})(
									<Input prefix={<Icon type="user" />} placeholder="请输入帐号" />
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('pwd', {
									initialValue: '',
									rules: [
										{
											required: true,
											message: '请输入密码'
										}
									]
								})(<Input prefix={<Icon type="lock" />} placeholder="请输入密码" />)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('rem', {
									valuePropName: 'checked',
									initialValue: true
								})(<Checkbox>记住密码</Checkbox>)
								
							}
							<a className="fr" href="#">忘记密码</a>
							<Button type="primary" block onClick={this.handleSubmit}>
								注册
							</Button>
						</FormItem>
					</Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormRegister);
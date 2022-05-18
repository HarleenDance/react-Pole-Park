import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    // 获取跳转实例对象
    const navigate = useNavigate()
    const { loginStore } = useStore()
    async function onFinish(values) {
        console.log("success", values)
        // values：放置的是所有表单项中用户输入的内容
        // todo:登录
        // const { mobile, code } = values
        await loginStore.getToken({
            mobile: values.username,
            code: values.password,
        })
        // 跳转首页
        navigate('/', { replace: true })
        // 提示用户
        message.success('登录成功')
    }
    function onFinishFailed(values) {
        console.log("failed", values)
    }
    return (
        <div className="login">
            {/* <Button type="primary">Button</Button> */}
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
                <Form
                    onFinishFailed={
                        onFinishFailed
                    }
                    onFinish={onFinish} validateTrigger={['onBlur', 'onChange']} initialValues={{
                        remember: true,
                        username: '13811111111',
                        password: '246810'
                    }}>
                    <Form.Item name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号',
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的手机号',
                                validateTrigger: 'onBlur'
                            }
                        ]}>
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                            {
                                len: 6,
                                message: '请输入6位密码',
                                validateTrigger: 'onBlur'
                            }
                        ]}>
                        <Input size="large" placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox className="login-checkbox-label">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        {/* <!-- 渲染Button组件为submit按钮 --> */}
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

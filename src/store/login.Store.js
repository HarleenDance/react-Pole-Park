// login module
import { makeAutoObservable } from 'mobx'
import { http, setToken, getToken, removeToken } from '@/utils'
class LoginStore {
    //   token = getToken() || ''
    token = ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // // 登录
    // login = async ({ mobile, code }) => {
    //     const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
    //         mobile,
    //         code
    //     })
    //     console.log("res.data", res.data)
    //     this.token = res.data.token
    // }
    getToken = async ({ mobile, code }) => {
        // 调用登录接口
        const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
            mobile, code
        })
        // 存入token
        this.token = res.data.token
        // 存入ls
        setToken(this.token)
    }
    // 退出登录
    loginOut = () => {
        this.token = ''
        removeToken()
    }
}

export default LoginStore
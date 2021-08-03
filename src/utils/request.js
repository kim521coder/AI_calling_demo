import axios from 'axios';

//创建axios实例
const instance = axios.create({
    baseURL: 'https://api.cat-shop.penkuoer.com',
    timeout:5000
})

export function post(url, data) {
    return instance.post(url, data)
}

export function get(url, params) {
    return instance.get(url, {
        params
    })
}
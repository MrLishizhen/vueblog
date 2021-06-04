import Axios from 'axios'

import qs from 'qs'

import { Loading, Message } from "element-ui";

import {createTimestamp} from '../api'


let loadingInstance = null; // loading实例
let needLoadingRequestCount = 0; //当前正在请求的数量
//路由请求拦截
Axios.interceptors.request.use(config=>{
    //如果为0则重新创建loading
    //get请求添加时间戳
    if(config.method=='get'){
        config.url = config.url+"?"+createTimestamp();
    }

    if(config.loading){
        if(needLoadingRequestCount==0){
            loadingInstance=Loading.service({
                text:"",
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.1)'
            });
        }
        //计数
        needLoadingRequestCount++;
    }

    return config

},error=>{
    loadingInstance && loadingInstance.close();
    return Promise.reject(error.response);
})

//响应拦截
Axios.interceptors.response.use(response=>{
    // console.log(response);
    // console.log(loadingInstance,123);

        //计数减少
    if(response.config.loading){
        needLoadingRequestCount--;
        //判断needLoadingRequestCount的数值
        needLoadingRequestCount = needLoadingRequestCount<0?0:needLoadingRequestCount;
        //计数等于0并且有值则关闭loading
        needLoadingRequestCount == 0 && loadingInstance && loadingInstance.close();
    }

        return response.data;


},
    error=>{

        if (loadingInstance) {
            needLoadingRequestCount--;
            needLoadingRequestCount = needLoadingRequestCount < 0 ? 0 : needLoadingRequestCount;
            needLoadingRequestCount == 0 && loadingInstance && loadingInstance.close(); //关闭加载动画
        }

        Message({
            message: "请求数据失败",
            type: "error",
            duration: 3 * 1000
        });
        return Promise.reject(error.response);
})

export default  Axios;
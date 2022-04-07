//当前模块，API进行统一管理，即对请求接口统一管理
import requests from "@/api/request";
import mockRequest from "./mockAjax"
//首页三级分类接口
export const reqCateGoryList = () => {
    return  requests({
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}
// 获取banner接口
export const requestBannerList =() => mockRequest.get('/banner');
//获取floor接口
export const requestFloorList =() => mockRequest.get('/floor');

export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params});
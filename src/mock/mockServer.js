//引入mock
import Mock from "mockjs";
//引入JSON文件
import Banner from './Banner.json'
import floor from './floor.json'
//拦截请求
Mock.mock('/mock/Banner', { code: 200, data: Banner })
Mock.mock('/mock/floor',{code:200,data:floor})
import { v4 as uuidv4 } from 'uuid';
export const getUserId = () => {
    //查看本地存储有没有
    let uuid_token = localStorage.getItem('USERUUID');
    if (!uuid_token) {
        //没有的话就获取
        uuid_token = uuidv4();
        localStorage.setItem('USERUUID', uuid_token);
    }
    return uuid_token;
}
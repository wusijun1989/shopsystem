import axios from 'axios';

let base = '';

export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
};
//发送验证码
export const SendCode = params => {
    return axios.post(`${base}/sendcode`, params).then(res => res.data);
};
//商会商品详情
export const getShGoodsDetail = params => {
    return axios.post(`${base}/shgoods/detail`, params).then(res => res.data);
};


export const getUserList = params => {
    return axios.get(`${base}/user/list`, {
        params: params
    });
};

export const getMoneyListPage = params => {
    return axios.get(`${base}/money/listpage`, {
        params: params
    });
};

export const getShMoneyListPage = params => {
    return axios.get(`${base}/shmoney/listpage`, {
        params: params
    });
};

//商会商品管理
export const getShGoodsPage = params => {
    return axios.get(`${base}/shgoods/listpage`, {
        params: params
    });
};
//商会商品审核shgoods
export const editShGoods = params => {
    return axios.get(`${base}/shgoods/edit`, {
        params: params
    });
};



//商会企业管理列表
export const getShCompanyListPage = params => {
    return axios.get(`${base}/shcompanylist/listpage`, {
        params: params
    });
};



export const getShMoneyMain = params => {
    return axios.get(`${base}/shmoney/main`, {});
};

export const getRecordListPage = params => {
    return axios.get(`${base}/record/listpage`, {
        params: params
    });
};
export const getShRecordListPage = params => {
    return axios.get(`${base}/shrecord/listpage`, {
        params: params
    });
};




export const getQyGoodsListPage = params => {
    return axios.get(`${base}/qygoods/listpage`, {
        params: params
    });
};

export const removeUser = params => {
    return axios.get(`${base}/user/remove`, {
        params: params
    });
};

export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`, {
        params: params
    });
};

export const editUser = params => {
    return axios.get(`${base}/user/edit`, {
        params: params
    });
};

export const addUser = params => {
    return axios.get(`${base}/user/add`, {
        params: params
    });
};
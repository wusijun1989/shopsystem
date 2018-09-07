import axios from 'axios';

let base = '';

export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
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
export const getShGoodsPage = params => {
    return axios.get(`${base}/shgoods/listpage`, {
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




export const getUserListPage = params => {
    return axios.get(`${base}/user/listpage`, {
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
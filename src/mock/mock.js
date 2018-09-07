import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  LoginUsers,
  Users
} from './data/user';
import {
  Records,
  ShRecordsList,
  MoneyList,
  ShMoneyList,
  ShMoneyMain
} from './data/record';
import {
  ShGoodsList,
} from './data/goods';
import {
  ShCompanyList,
} from './data/company';

let _Users = Users;
let _Records = Records;
let _MoneyList = MoneyList;
let _ShMoneyList = ShMoneyList;
let _ShGoodsList = ShGoodsList;
let _ShRecordsList = ShRecordsList;
let _ShCompanyList = ShCompanyList;
let _ShMoneyMain = ShMoneyMain;


export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let {
        username,
        password
      } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, {
              code: 200,
              msg: '请求成功',
              user
            }]);
          } else {
            resolve([200, {
              code: 500,
              msg: '账号或密码错误'
            }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {
        name
      } = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {
        page,
        name
      } = config.params;
      let mockUsers = _Users.filter(user => {

        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });


    //获取交易记录列表（分页）
    mock.onGet('/record/listpage').reply(config => {
      let {
        page,
        time,
        state,
        type
      } = config.params;
      let mockRecords = _Records.filter(record => {
        if (state && record.state != parseInt(state) || type && record.type != parseInt(type) || time && record.time.indexOf(time) == -1) return false;
        return true;
      });
      let total = mockRecords.length;
      mockRecords = mockRecords.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            Records: mockRecords
          }]);
        }, 1000);
      });
    });


    //商会交易记录列表
    mock.onGet('/shrecord/listpage').reply(config => {
      let {
        page,
        time,
        state,
        type
      } = config.params;
      let mockShRecordsList = _ShRecordsList.filter(record => {
        if (state && record.state != parseInt(state) || type && record.type != parseInt(type) || time && record.time.indexOf(time) == -1) return false;
        return true;
      });
      let total = mockShRecordsList.length;
      mockShRecordsList = mockShRecordsList.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            ShRecordsList: mockShRecordsList
          }]);
        }, 1000);
      });
    });
    //商会企业管理列表
    mock.onGet('/shcompanylist/listpage').reply(config => {
      let {
        page,
        accounts,
        companyname,
        province
      } = config.params;
      let mockShCompanyList = _ShCompanyList.filter(record => {
        if (accounts && record.accounts != accounts || companyname && record.companyname != companyname || province && record.province != province) return false;
        return true;
      });
      let total = mockShCompanyList.length;
      mockShCompanyList = mockShCompanyList.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            ShCompanyList: mockShCompanyList
          }]);
        }, 1000);
      });
    });



    mock.onGet('/money/listpage').reply(config => {
      let {
        page
      } = config.params;
      let mockMoneyList = _MoneyList.filter(record => {
        return true;
      });
      let total = mockMoneyList.length;
      mockMoneyList = mockMoneyList.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            MoneyList: mockMoneyList
          }]);
        }, 1000);
      });
    });





    //商会余额列表
    mock.onGet('/shmoney/listpage').reply(config => {
      let {
        page
      } = config.params;
      let mockShMoneyList = _ShMoneyList.filter(record => {
        return true;
      });
      let total = mockShMoneyList.length;
      mockShMoneyList = mockShMoneyList.filter((u, index) => index < 10 * page && index >= 10 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            ShMoneyList: mockShMoneyList
          }]);
        }, 1000);
      });
    });

    //商会商品管理列表
    mock.onGet('/shgoods/listpage').reply(config => {
      let {
        page
      } = config.params;
      let mockShGoodsList = _ShGoodsList.filter(record => {
        return true;
      });
      let total = mockShGoodsList.length;
      mockShGoodsList = mockShGoodsList.filter((u, index) => index < 10 * page && index >= 10 * (page - 1));

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            ShGoodsList: mockShGoodsList
          }]);
        }, 1000);
      });
    });


    //商会概览
    mock.onGet('/shmoney/main').reply(config => {
      let mockShMoneyMain = _ShMoneyMain;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            ShMoneyMain: mockShMoneyMain
          }]);
        }, 1000);
      });
    });


    //删除用户
    mock.onGet('/user/remove').reply(config => {
      let {
        id
      } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let {
        ids
      } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let {
        id,
        name,
        addr,
        age,
        birth,
        sex
      } = config.params;
      _Users.some(u => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(config => {
      let {
        name,
        addr,
        age,
        birth,
        sex
      } = config.params;
      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

  }
};
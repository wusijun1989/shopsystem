import Mock from 'mockjs';

const ShCompanyList = [];

for (let i = 0; i < 86; i++) {
  ShCompanyList.push(Mock.mock({
    id: Mock.Random.guid(),
    accounts: Mock.Random.ctitle(2, 8),
    name: Mock.Random.ctitle(2, 8),
    province: Mock.Random.ctitle(2, 8),
    city: Mock.Random.ctitle(2, 8),
    img: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    address: Mock.Random.ctitle(2, 8),
    time: Mock.Random.datetime(),
    login_time: Mock.Random.datetime(),
    state: Mock.Random.integer(0, 1)
  }));
}


export {
  ShCompanyList
};
import Mock from 'mockjs';
const LoginUsers = [{
    id: 1,
    username: 'admin',
    password: '123456',
    type: "qiye",
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '企业-张某某'
  },
  {
    id: 2,
    username: 'shadmin',
    password: '123456',
    type: "shanghui",
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '商会-张某某'
  },
  {
    id: 3,
    username: 'ptadmin',
    password: '123456',
    type: "pingtai",
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '平台-张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    goods: Mock.Random.image(),
    name: Mock.Random.ctitle(2, 8),
    'price|18-60': 2,
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    'sales|18-500': 1,
    time: Mock.Random.datetime(),
    state: Mock.Random.integer(0, 2)
  }));
}


export {
  LoginUsers,
  Users
};
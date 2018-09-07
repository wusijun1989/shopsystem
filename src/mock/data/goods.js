import Mock from 'mockjs';

const ShGoodsList = [];

for (let i = 0; i < 86; i++) {
  ShGoodsList.push(Mock.mock({
    id: Mock.Random.guid(),
    goods: Mock.Random.image(),
    name: Mock.Random.ctitle(2, 8),
    'percent|1-100': 1,
    'fee|10-200.2-2': 1,
    Supplier: "企业名称",
    time: Mock.Random.datetime(),
    state: Mock.Random.integer(0, 1)
  }));
}


export {
  ShGoodsList
};
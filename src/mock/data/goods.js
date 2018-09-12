import Mock from 'mockjs';

const ShGoodsList = [];

for (let i = 0; i < 10; i++) {
  ShGoodsList.push(Mock.mock({
    id: i,
    goods: Mock.Random.image('200x200'),
    runpic: [{
        pic: Mock.Random.image('126x126')
      },
      {
        pic: Mock.Random.image('126x126')
      },
      {
        pic: Mock.Random.image('126x126')
      },
    ],
    name: Mock.Random.ctitle(2, 8),
    'percent|1-100': 1,
    'fee|10-200.2-2': 1,
    'price|10-200.2-2': 1,
    'price2|10-200.2-2': 1,
    Supplier: "企业名称",
    start_time: Mock.Random.datetime(),
    apply_time: Mock.Random.datetime(),
    state: Mock.Random.integer(0, 2),
    buystate: Mock.Random.integer(0, 1),
    describe: Mock.Random.ctitle(2, 8),
    details: Mock.Random.ctitle(10, 50),
  }));
}

const QyGoodsList = [];

for (let i = 0; i < 86; i++) {
  QyGoodsList.push(Mock.mock({
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
  ShGoodsList,
  QyGoodsList
};
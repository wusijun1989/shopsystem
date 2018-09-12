import Mock from 'mockjs';


const Records = [];
const ShRecordsList = [];
const MoneyList = [];
const ShMoneyList = [];


const ShMoneyMain = Mock.mock({
  'yesterday_income|100-9999.2-2': 1,
  'yesterday_order|100-9999.2-2': 1,
  'can_use_money|100-9999.2-2': 1,
  yesterday_order_num: Mock.Random.natural(0, 9999),
  total_order_num: Mock.Random.natural(0, 9999),
  send_order_num: Mock.Random.natural(0, 9999),
  collect_order_num: Mock.Random.natural(0, 9999),
  over_order: Mock.Random.natural(0, 9999),
});


for (let i = 0; i < 40; i++) {
  Records.push(Mock.mock({
    id: Mock.Random.guid(),
    order_number: Mock.Random.natural(),
    type: Mock.Random.integer(0, 1),
    time: Mock.Random.datetime(),
    updata_time: Mock.Random.datetime(),
    'pay_number|18-60': 2,
    'money|18-60': 1,
    state: Mock.Random.integer(0, 4)
  }));
}


for (let i = 0; i < 40; i++) {
  ShRecordsList.push(Mock.mock({
    id: Mock.Random.guid(),
    username: Mock.Random.natural(),
    type: Mock.Random.integer(0, 1),
    order_number: Mock.Random.natural(),
    pay_number: Mock.Random.natural(),
    'money|50-999.2-2': 1,
    paytype: Mock.Random.integer(0, 1),
    state: Mock.Random.integer(0, 4),
    time: Mock.Random.datetime(),
    updata_time: Mock.Random.datetime(),
    remarks: Mock.Random.ctitle(2, 8),

  }));
}

for (let i = 0; i < 86; i++) {
  MoneyList.push(Mock.mock({
    id: Mock.Random.guid(),
    date: Mock.Random.datetime(),
    'expend|18-60': 1,
    'income|18-60': 1,
    'balance|18-60': 1,
  }));
}
for (let i = 0; i < 42; i++) {
  ShMoneyList.push(Mock.mock({
    id: Mock.Random.guid(),
    date: Mock.Random.datetime(),
    'expend|18-60': 1,
    'income|18-60': 1,
    'balance|18-60': 1,
    remarks: Mock.Random.ctitle(2, 8)
  }));
}

export {
  Records,
  ShRecordsList,
  MoneyList,
  ShMoneyList,
  ShMoneyMain
};
export default {
  columns: [
    {
      title: '租赁提成标准',
      dataIndex: 'standards',
    },
    {
      title: '行业内/行业外',
      dataIndex: 'industry',
    },
    {
      title: '签约类型',
      dataIndex: 'types',
    },
    {
      title: '签约时长',
      dataIndex: 'times',
    },
    {
      title: '查看',
      dataIndex: 'look',
      slots: { customRender: 'look' },
    },
    {
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  ],
};

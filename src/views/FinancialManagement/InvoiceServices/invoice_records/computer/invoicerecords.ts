export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'id',
    },
    {
      title: '状态',
      dataIndex: 'status',
      slots: {
        customRender: 'status',
      },
    },
    {
      title: '申请入口',
      dataIndex: 'ApplicationEntryPoin',
    },
    {
      title: '购买方类型',
      dataIndex: 'BuyerType',
    },
    {
      title: '购买方名称',
      dataIndex: 'BuyerName',
    },
    {
      title: '购买方税号',
      dataIndex: 'TaxIDNumber',
    },
    {
      title: '主商品名称',
      dataIndex: 'MainProductName',
    },
    {
      title: '主商品税率',
      dataIndex: 'MainProductTaxRate',
    },
    {
      title: '开票金额(不含税)',
      dataIndex: 'InvoiceAmount(Excluding Tax)',
    },
    {
      title: '开票税额',
      dataIndex: 'TaxAmountonInvoice',
    },
    {
      title: '价税合计',
      dataIndex: 'TotalAmountIncludingTax',
    },
    {
      title: '开票张数',
      dataIndex: 'NumberofInvoices',
    },
    {
      title: '申请方',
      dataIndex: 'Applicant',
    },
    {
      title: '申请时间',
      dataIndex: 'Application Date',
    },
    {
      title: '关联账单',
      dataIndex: 'RelatedInvoice',
    },
    {
      title: '操作',
      dataIndex: 'Operation',
      slots: {
        customRender: 'Operation',
      },
    },
  ],
};

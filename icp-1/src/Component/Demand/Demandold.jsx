import React, { useState } from 'react';
import { Button, Flex, Table } from 'antd';

const columns = [
  {
    title: 'Serial No.',
    dataIndex: 'key',
  },
  {
    title: 'Item code',
    dataIndex: 'item_code',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
  },
  {
    title: 'Demanded Qty',
    dataIndex: 'demanded_Qty',
  },
  {
    title: 'In-transit Qty',
    dataIndex: 'in_transit Qty',
  },
  {
    title: 'Delivered Qty.',
    dataIndex: 'delivered_Qty.',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const dataSource = Array.from({
  length: 46,
}).map((_, i) => ({
  key: i,
  item_code: ` Lorem`,
  unit: 'Kg',
  address: `London, Park Lane no. ${i}`,
}));
const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
    </Flex>
  );
};
export default App;
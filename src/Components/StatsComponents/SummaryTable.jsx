import React from 'react';
import { Card, Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

// TODO: get data from 
const data = [
  {
    key: '1',
    url: "/blog/highest-order-bit/",
    pvs: 67,
    secs: 259,
    affidx: 70,
    newusers: 62
  },
  {
    key: '2',
    url: "/blog/cash-flow-games/",
    pvs: 60,
    secs: 281,
    affidx: 51,
    newusers: 56
  },
  {
    key: '3',
    url: "/blog/",
    pvs: 22,
    secs: 23,
    affidx: 82,
    newusers: 36
  },
  {
    key: '4',
    url: "/blog/so-good-they-cant-ignore-you/",
    pvs: 20,
    secs: 110,
    affidx: 26,
    newusers: 75
  },
  {
    key: '5',
    url: "/blog/working-backwards/",
    pvs: 14,
    secs: 153,
    affidx: 89,
    newusers: 64
  }
];

class SummaryTable extends React.Component {
  state = {
    searchText: '',
    searchedColumn: ''
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    }
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
        render: text => <Link to={'/url/' + text}>{text}</Link>,
        ...this.getColumnSearchProps('url')
      },
      {
        title: 'PVs',
        dataIndex: 'pvs',
        key: 'pvs',
        sorter: (a, b) => a.pvs - b.pvs
      },
      {
        title: 'Avg Secs',
        dataIndex: 'secs',
        key: 'secs',
        sorter: (a, b) => a.secs - b.secs
      },
      {
        title: 'Aff Idx',
        dataIndex: 'affidx',
        key: 'affidx',
        sorter: (a, b) => a.affidx - b.affidx
      },
      {
        title: 'New Users %',
        dataIndex: 'newusers',
        key: 'newusers',
        sorter: (a, b) => a.newusers - b.newusers
      },
    ];
    return (
      <Card title="Top URLs">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20']}}
        />
      </Card>
    );
  }
}

export default SummaryTable

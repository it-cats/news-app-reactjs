import React from 'react';
import { List, Avatar } from 'antd';

const NewsList = ({ data }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            // title={<a href="https://ant.design">{item.title}</a>}
            title={item.title}
            description={item.id}
          />
        </List.Item>
      )}
    />
  )
};
export default NewsList;

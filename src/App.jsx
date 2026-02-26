import * as React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Flex } from "antd";

import banner from "./assets/INT250-Banner.png";

function App() {
  return (
    <Flex justify="center" align="center">
      <Card
        style={{ width: 400 }}
        cover={<img draggable={false} src={banner} alt="example" />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Card.Meta
          avatar={
            <Avatar
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              size="large"
            />
          }
          title="I'm really very love INT250"
          description="This is my favorite subject in my life."
        />
      </Card>
    </Flex>
  );
}

export default App;

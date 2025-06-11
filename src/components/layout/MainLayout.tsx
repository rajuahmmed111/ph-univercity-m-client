

import { Layout, Menu, type MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
    children: [
      {
        key: "1-1",
        label: "Overview",
      },
      {
        key: "1-2",
        label: "Statistics",
      },
      {
        key: "1-3",
        label: "Reports",
      },
    ],
  },
  {
    key: "2",
    label: "Profile",
  },
  {
    key: "3",
    label: "User Management",
    children: [
      {
        key: "3-1",
        label: "Add User",
      },
      {
        key: "3-2",
        label: "Edit User",
      },
      {
        key: "3-3",
        label: "Delete User",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" ><div style={{ color: "white", padding: "16px" }}>Logo</div></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            The main content goes here. You can add your components or pages.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

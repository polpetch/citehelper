import { Button, Grid, Menu, Text, Title } from '@mantine/core';

export default function NavBar() {
  return (
    <>
      <Grid p={32}>
        <Grid.Col span={9}>
          <Title>citehelper</Title>
        </Grid.Col>
        <Grid.Col span={1} ml={50} mr={35}>
          <Button variant="white" color="dark" size="lg">
            🔍 ค้นหา
          </Button>
        </Grid.Col>

        <Grid.Col span={1}>
          <Menu width={300}>
            <Menu.Target>
              <Button variant="white" color="dark" size="lg">
                เข้าสู่ระบบ
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Text fz="lg">ล็อกอิน</Text>
              <Text fz="lg">/</Text>
              <Text fz="lg">สมัครสมาชิก</Text>
              <Menu.Item>Settings</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Grid.Col>
      </Grid>
    </>
  );
}

import { Button, Grid, Title } from '@mantine/core';

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
          <Button variant="white" color="dark" size="lg">
            เข้าสู่ระบบ
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
}

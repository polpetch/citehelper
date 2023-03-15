import {
  Button,
  Card,
  CardSection,
  Checkbox,
  Chip,
  Group,
  Input,
  Select,
  Space,
} from '@mantine/core';

export function MainCard() {
  return (
    <>
      <Card ml={200} mr={200} shadow="sm" radius="md" withBorder w="lg">
        <Select
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={[
            { value: 'react', label: 'APA' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'vue', label: 'Vue' },
          ]}
        />
        <CardSection ml={10} mt={20} display="flex">
          <Chip>📔 หนังสือ</Chip>
          <Space w="sm" />
          <Chip>📝 วารสาร</Chip>
          <Space w="sm" />
          <Chip>📓 วิทยานิพนธ์</Chip>
          <Space w="sm" />
        </CardSection>

        <CardSection ml={10} pr={80}>
          <Space mt={20} />
          <Input placeholder="ชื่อเรื่อง" />
          <Space mt={10} />
          <Input placeholder="ผู้แต่ง" />
          <Space mt={10} />
          <Input placeholder="สำนักพิมพ์" />
          <Space mt={10} />
          <Input placeholder="ปีที่พิมพ์" />
          <Space mt={10} />
          <Input placeholder="URL" />
          <Space mt={10} />
          <Input placeholder="เลขที่หน้า" />
          <Space mt={10} />
        </CardSection>

        <Group position="right" mt={20} mb={20} mr={60}>
          <Button variant="white" color="dimmed" size="sm">
            ใส่ข้อมูลเพิ่มเติม
          </Button>
          <Checkbox label="เสนอรายการอ้างอิงเข้าสู่ระบบ" radius="xs" />
          <Button size="sm">บันทึก</Button>
        </Group>
      </Card>
    </>
  );
}

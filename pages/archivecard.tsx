import { Card, Center, Space, Text } from '@mantine/core';

export function ArchiveCard() {
  return (
    <>
      <Card ml={100} mr={100} shadow="sm" radius="md" withBorder w="lg">
        <Text fz="xl" fw={700}>
          📚 รายการบรรณานุกรม
        </Text>
        <Space mt={40} />
        <Center>
          <Text fz={40} c="dimmed">
            ว่าง
          </Text>
        </Center>
        <Space mt={40} />
      </Card>
    </>
  );
}

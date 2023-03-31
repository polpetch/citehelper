import ArchiveCard from '@components/archivecard';
import MainCard from '@components/maincard';
import NavBar from '@components/navbar';
import { AppShell, Space } from '@mantine/core';

export default function IndexPage() {
  return (
    <AppShell padding={32} header={<NavBar />}>
      <MainCard />
      <Space mt={40} />
      <ArchiveCard />
    </AppShell>
  );
}

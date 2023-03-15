import { AppShell, Space } from '@mantine/core';
import ArchiveCard from './archivecard';
import MainCard from './maincard';
import NavBar from './navbar';

export default function IndexPage() {
  return (
    <AppShell padding={32} header={<NavBar />}>
      <MainCard />
      <Space mt={40} />
      <ArchiveCard />
    </AppShell>
  );
}

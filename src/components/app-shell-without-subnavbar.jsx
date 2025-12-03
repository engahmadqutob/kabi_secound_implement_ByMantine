"use client";

import { AppShell, Box } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Header from "@/components/top-header";
import Navbar from "@/components/navbar";

export default function AppShellWithoutSubnavbar({ children }) {
  const [opened, { toggle }] = useDisclosure(false);
  const isAboveSm = useMediaQuery("(min-width: 48em)"); // 768px
  const navbarCollapsed = isAboveSm ? false : !opened;

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{
        width: { base: 80, sm: 80, md: 80, lg: 80, xl: 80 },
        breakpoint: 0,
        collapsed: { desktop: navbarCollapsed },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header toggle={toggle} opened={opened} />
      </AppShell.Header>

      <AppShell.Navbar mt={2} p={0} bg="transparent" withBorder={false}>
        <Box h="100%">
          <Navbar />
        </Box>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}


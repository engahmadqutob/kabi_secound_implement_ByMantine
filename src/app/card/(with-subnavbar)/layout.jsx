"use client";

import { AppShell, Box, Flex } from "@mantine/core";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import SubNavbar from "@/components/supnavbar/supnavbar";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function CardLayout({ children }) {
  const [opened, { toggle }] = useDisclosure(false);
  const isAboveSm = useMediaQuery("(min-width: 48em)"); //768px
  const navbarCollapsed = isAboveSm ? false : !opened;
  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{
        width: { base: 80, sm: 310, md: 310, lg: 310, xl: 310 },
        breakpoint: 0,
        collapsed: { desktop: navbarCollapsed },
      }}
      padding="md"
    >
      {/* Header */}
      <AppShell.Header>
        <Header toggle={toggle} opened={opened} />
      </AppShell.Header>

      <AppShell.Navbar mt={2} p={0} bg="transparent" withBorder={false}>
        <Flex direction="row" h="100%">
          <Box style={{ width: "80px", height: "100%" }}>
            <Navbar />
          </Box>
          <Box ml={10} w={230} h="100%" hiddenFrom="base" visibleFrom="sm">
            <SubNavbar />
          </Box>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

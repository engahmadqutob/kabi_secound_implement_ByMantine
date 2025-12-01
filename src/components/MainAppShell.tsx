"use client";

import { AppShell, ScrollArea, Flex, Box, Card } from "@mantine/core";
import HeaderTop from "@/components/headerTop";
import Navbar from "@/components/navbar";
import SubNavbar from "@/components/SubNavbar";
import { ReactNode } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SerchSection from "@/components/serch";
import CardComponent from "@/components/card";
import Vacancies from "./vacancies";

export default function MainAppShell({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false);
  const isAboveSm = useMediaQuery("(min-width: 48em)"); 

  // Above sm: always visible 
  const navbarCollapsed = isAboveSm ? false : !opened;

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{
        width: { base: 80, sm: 310, md: 310, lg: 310, xl: 310 },
        breakpoint: 0,
        collapsed: { desktop: navbarCollapsed },
      }}
    >
       
      <AppShell.Header>
        <HeaderTop toggle={toggle} opened={opened} />
      </AppShell.Header>
      <AppShell.Navbar mt={2} bg="#eaebf9ff" withBorder={false}>
        <Flex h="100%" direction="row">
          <Navbar />
          <Box visibleFrom="sm" ml="sm" >
            <SubNavbar  />
          </Box>
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main  mt={2} bg="#eaebf9ff">
        <ScrollArea h="100%" px={{ base: 16, xs: 10 }}>
          <Box w="100%">
            <SerchSection />
          </Box>
          <Vacancies />
          <CardComponent />
          <CardComponent />
          <CardComponent />
                    <CardComponent />

          {children}
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
}

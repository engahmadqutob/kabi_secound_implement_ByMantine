"use client";
import { Box, Group, Flex, Text, Burger, Button } from "@mantine/core";
import Image from "next/image";
import { headerConfig } from "@/data/header.config";
export default function TopHeader({ toggle, opened }) {
  const { user, language } = headerConfig;
  return (
    <Box component="header" bg="white" bd="1px solid gray.3">
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        wrap="nowrap"
        px="md"
        h={56}
      >
        <Group gap="md">
          {/* Burger - visible only on xs screens */}
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />

          {/* Logo */}
          <Box>
            <Image
              src="/img/header-img/kabi-logo.png"
              width={55}
              height={40}
              alt="logo"
            />
          </Box>
        </Group>

        <Group>
          {/* Language Button - visible on sm and up */}
          <Button
            visibleFrom="sm"
            variant="outline"
            color="gray"
            size="xs"
            fw={600}
          >
            {language.text}
          </Button>

          {/* Bell Icon */}
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </Box>

          {/* Help Icon */}
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </Box>

          {/* User Info */}
          <Box w={90} visibleFrom="sm">
            <Text fw={800} fz="sm" truncate="end" c="dark">
              {user?.name}
            </Text>
            <Text fw={800} fz="xs" truncate="end" c="dimmed">
              {user?.role}
            </Text>
          </Box>

          {/* User Avatar */}
          <Box>
            <Image
              src="/img/header-img/user1.png"
              width={39}
              height={35}
              alt="user avatar"
            />
          </Box>

          {/* Dropdown Arrow */}
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Box>
        </Group>
      </Flex>
    </Box>
  );
}

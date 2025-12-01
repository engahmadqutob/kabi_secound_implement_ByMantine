"use client";

import { Flex, Input, ActionIcon, Text ,Box} from "@mantine/core";
import {
  IconAlertCircle,
  IconFilter,
  IconSearch,
  IconRotateClockwise,
} from "@tabler/icons-react";

export default function SearchSection() {
  return (
    <Flex direction="row" align="center" mt={8} gap="xs" p={0} h={40} 
    w={{base: "100%", sm: "80%", md: "60%", lg: "40%", xl: "40%"}}
    >
      {/* Search Input - flex grow to fill remaining space */}
      <Input
        type="search"
        placeholder="Search"
        flex={1}
        size="xs"
        radius="sm"
        rightSection={<IconAlertCircle size={15} stroke={2} />}
      />

      {/* Search button */}
      <ActionIcon
        variant="filled"
        radius="sm"
        size={{base: 23, sm: 23}} 
        
        color="#063799"
      >
        <IconSearch size={10} />
      </ActionIcon>

      {/* Refresh button */}
      <ActionIcon
        variant="filled"
        radius="sm"
        size={28}
        color="#DAE0F0"
      >
        <IconRotateClockwise size={10} color="#063799" />
      </ActionIcon>

      {/* Filter button with text */}
      <ActionIcon
        variant="filled"
        radius="sm"
        size={27}
        w={{base: 23, sm: 60}}       // wider for text
        color="#DAE0F0"
      >
        <IconFilter size={10} color="#063799" stroke={2} />
         
        <Text visibleFrom="sm"  transform="uppercase" color="#063799" size="xs">
          Filter
        </Text>
        
      </ActionIcon>
    </Flex>
  );
}

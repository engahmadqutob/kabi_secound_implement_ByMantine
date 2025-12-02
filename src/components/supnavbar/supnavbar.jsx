"use client";
import { useState } from "react";
import { Box, Text, Stack, Group, UnstyledButton } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { supnavbarConfig } from "@/data/supnavbar";

export default function SubNavbar() {
  const [active, setActive] = useState(1);

  return (
    <Box
      w={220}
      h="100%"
      bg="white"
      mt={11}
      bd="1px solid var(--mantine-color-gray-3)"
      bdrs={10}
    >
      <Stack gap={0} w="100%">
        {supnavbarConfig.links.map((link, index) => (
          <UnstyledButton
            key={link?.label}
            onClick={() => setActive(index)}
            px="sm"
            py="xs"
            w="100%"
            style={{
              backgroundColor: active === index ? "#063799" : "transparent",
              borderBottom: "1px solid var(--mantine-color-gray-3)",
              borderTopLeftRadius: index === 0 ? 5 : 0,
              borderTopRightRadius: index === 0 ? 5 : 0,
            }}
          >
            <Group justify="space-between" wrap="nowrap">
              <Text
                fz="sm"
                c={active === index ? "white" : "dark"}
                tt="capitalize"
              >
                {link?.label}
              </Text>
              {link?.hasPlus && (
                <IconPlus
                  size={16}
                  color={active === index ? "#fff" : "#878282"}
                />
              )}
            </Group>
          </UnstyledButton>
        ))}
      </Stack>
    </Box>
  );
}

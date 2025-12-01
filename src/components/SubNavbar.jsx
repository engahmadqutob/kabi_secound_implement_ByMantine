"use client";
import { useState } from "react";
import { Box, Text, Stack, Group, UnstyledButton } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const links = [
  { label: "Budget Vacancies", hasPlus: false },
  { label: "Budget Vacancy Approval", hasPlus: false },
  { label: "Job Requisitions", hasPlus: false },
  { label: "Published Jobs", hasPlus: false },
  { label: "Interviews", hasPlus: true },
  { label: "Shared Profiles", hasPlus: false },
  { label: "Shared Offers", hasPlus: true },
  { label: "Shared Applicants", hasPlus: true },
];

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
        {links.map((link, index) => (
          <UnstyledButton
            key={link.label}
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
                radius={index === 0 ? "md" : 0}
              >
                {link.label}
              </Text>
              {link.hasPlus && (
                <IconPlus
                  size={16}
                  color={active === index ? "white" : "#878282"}
                />
              )}
            </Group>
          </UnstyledButton>
        ))}
      </Stack>
    </Box>
  );
}

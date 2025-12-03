"use client";
import { useState } from "react";
import { Stack, Tooltip, UnstyledButton } from "@mantine/core";
import { navbarConfig } from "@/data/navbar.config";

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right"  >
      <UnstyledButton
        onClick={onClick}
        w={50}
        h={50}
        bd="md"
        display="flex"
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--mantine-radius-md)",
          color: active ? "#063799" : "#878282",
          backgroundColor: active ? "#B4C3E0" : "transparent",
          boxShadow: active ? "var(--mantine-shadow-sm)" : "none",
        }}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export default function Navbar() {
  const [active, setActive] = useState(0);
  
  const links = navbarConfig.map((link, index) => (
    <NavbarLink
      {...link}
      key={link?.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));
  return (
    <Stack
      gap="md"
      align="center"
      justify="space-between"
      w={80}
      h="100%"
      p="md"
      bg="white"
      style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
    >
      <Stack justify="center" gap={0} mt={0}>
        {links}
      </Stack>
    </Stack>
  );
}

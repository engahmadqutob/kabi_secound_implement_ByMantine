"use client";

import { useState } from "react";
import {
  IconFolder,
  IconBrandRedhat,
  IconGauge,
  IconHome2,
  IconBriefcase,
  IconSettings,
  IconUser,
  IconBuilding,
} from "@tabler/icons-react";
import { Stack, Tooltip, UnstyledButton } from "@mantine/core";

interface NavbarLinkProps {
  icon: typeof IconHome2; //“This prop must be a component, not a string or number.
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
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

const mockdata = [
  { icon: IconGauge, label: "IconGauge" },
  { icon: IconBriefcase, label: "IconBriefcase" },
  { icon: IconFolder, label: "IconFolder" },
  { icon: IconBuilding, label: "IconBuilding" },
  { icon: IconUser, label: "IconUser" },
  { icon: IconBrandRedhat, label: "IconBrandRedhat" },
  { icon: IconSettings, label: "Settings" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
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
     >
      <Stack justify="center" gap={0} mt={0}>
        {links}
      </Stack>
    </Stack>
  );
}

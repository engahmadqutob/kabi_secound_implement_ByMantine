import { Box, Badge, Text, Flex } from "@mantine/core";

export default function RecruitersSection({section}){

    const { label, items } = section;
       
  return (
    <>
      <Box mb="sm">
        <Text fw={800} fz={{ base: "xs", sm: "sm" }} c="dark" tt="capitalize">
          {label}
        </Text>
        <Flex gap="xs" wrap="wrap">
          {items?.map((item, index) => (
            <Badge
              key={index}
              color={item.color}
              bg={item.bgColor}
              c={item.c}
              variant={item.variant}
              size="sm"
              radius="lg"
              tt="capitalize"
            >
              {item.name}
            </Badge>
          ))}
        </Flex>
      </Box>
    </>
  );
}

"use client";
import {
  Card,
  Text,
  Group,
  Stack,
  Badge,
  Button,
  Progress,
  Grid,
  ActionIcon,
  Box,
  Divider,
  Flex,
} from "@mantine/core";
 import { IconTrash, IconPencil } from "@tabler/icons-react";

export default function CardComponent() {
  return (
    <Card shadow="sm" radius="md" mt={10} >
      {/*start header*/}
      <Group justify="space-between" align="center" mb="md">
        <Text fw={500} fz={{ base: "sm", sm: "md" }}>
          <Text
            span
            bg="#F2F3F9"
            px={8}
            py={4}
            mr={8}
            fz="xs"
            c="gray"
            bdrs={6}
            bd={"1px solid var(--mantine-color-gray-4)"}
           >
            #6791
          </Text>
          Test Ratio
        </Text>

        <Group gap="xs">
          <Button
            variant="filled"
            radius="md"
            bg="#063799"
            size="xs"
            px={{ base: 8, sm: 12 }}
          >
            Request Job
          </Button>
          <ActionIcon variant="outline" radius="sm" size="md" color="#fd6c6e" >
            <IconTrash size={16} />
          </ActionIcon>
          <ActionIcon variant="outline" radius="sm" size="md" color="gray">
            <IconPencil size={16} color="black"  />
          </ActionIcon>
        </Group>
      </Group>

<Divider w={"100%"}  size={1} color="gray.4" mb="md"/>

      {/* Body Section */}
      <Grid>
        {/* Left Column - Requisition Type - flexible width */}
        <Grid.Col span={{ base: 12, sm: 12 ,md: 'auto', lg: 'auto' }} miw={{ sm: 150, md: 180 }}  >
          <Stack gap="sm" >
            <Box>
              <Text fw={600} fz={{ base: "xs", sm: "sm" }} c="dark" tt="capitalize">requisition Type</Text>
              <Text fz={{ base: "xs", sm: "sm" }} c="black">New vacancy</Text>
            </Box>

            <Box>
              <Text fw={600} fz={{ base: "xs", sm: "sm" }} c="blue" tt="capitalize">org Structure</Text>
              <Text fz={{ base: "xs", sm: "sm" }} c="black">fatima sh</Text>
            </Box>

            <Box>
              <Text fw={600} fz={{ base: "xs", sm: "sm" }} c="dark" tt="capitalize">units</Text>
              <Text fz={{ base: "xs", sm: "sm" }} c="black" lineClamp={2}>fatima11, fatima21, fatima31, fatima41, fatima51</Text>
            </Box>

            <Divider w={{ base: "100%", sm: "50%" }} size={1} color="gray.4" />
            <Box>
              <Text fw={600} fz={{ base: "xs", sm: "sm" }} c="dark" tt="capitalize">recruiters</Text>
              <Badge color="blue" variant="light" size="sm" radius="lg" tt="capitalize">
                khitam hm22
              </Badge>
            </Box>

            <Box>
              <Text fw={600} fz={{ base: "xs", sm: "sm" }} c="dark" tt="capitalize">hiring managers</Text>
              <Badge bg="green.1" c="black" size="sm" radius="lg" tt="capitalize">
                fatima hiring
              </Badge>
            </Box>
          </Stack>
        </Grid.Col>

        {/*  Current Requisition Status - fixed width */}
        <Grid.Col span={{ base: 12, sm: "content" }} w={{base:'100%', sm: "100%", md: "60%", lg: "68%" }} >
          <Stack align={{ base: "flex-start", sm: "flex-start",md: "flex-end", lg: "flex-end", xl: "flex-end" }}>
            <Box ta={{ base: "left", sm: "right" }} w="100%">
              <Text fz="xs" tt="capitalize" c="dimmed" mb={4} mr={{ base: 0, sm: 50 }}>current requisition status</Text>
              <Flex gap={4} justify={{ base: "flex-start", sm: "flex-end" ,md: "flex-end", lg: "flex-end", xl: "flex-end"}}>
                <Progress value={100} size={6} w={60} color="green" radius="xl" />
                <Progress value={100} size={6} w={60} color="green" radius="xl" />
                <Progress value={100} size={6} w={60} color="green" radius="xl" />
              </Flex>
            </Box>

            <Box ta={{ base: "left", sm: "right" }} w="100%">
              <Text fz="xs" fs="italic">
                <Text span c="green" fw={500} fs="italic">Approved</Text>
                <Text span c="dimmed" fs="italic"> by Admin Admin Admin1 on 9 November, 2025 at 11:12 AM</Text>
              </Text>
              <Text fz="xs" c="blue" fw={500} component="a" href="#">View Details</Text>
            </Box>

            {/* Status Cards - wrap when not enough space */}
            <Flex gap="sm" mt="sm" wrap="wrap" justify={{ base: "flex-start", sm: "flex-end" }}>
              <Box
                p="lg"
                bg="linear-gradient(90deg, #E7ECF5 60%, #FFF)"
                bdrs={5}
                w={{base: 180,sm: 200,md: 'auto',lg: 210, xl: 210,}}
              >
                <Text fw={700} fz="md" c="black">18</Text>
                <Text fz="xs" c="var(--mantine-color-gray-5)" truncate>Total Budgeted Vacancies</Text>
              </Box>
              <Box
                p="lg"
                bg="linear-gradient(90deg, #E7ECF5 60%, #FFF)"
                bdrs={5}
                w={{base: 180,sm: 200,md: 'auto',lg: 210, xl: 210,}}
              >
                <Text fw={700} fz="md" c="green">18</Text>
                <Text fz="xs" c="var(--mantine-color-gray-5)" truncate>Vacancies Still Open</Text>
              </Box>
              <Box
                p="lg"
                bg="linear-gradient(90deg, #E7ECF5 60%, #FFF)"
                bdrs={5}
                w={{base:180,sm: 200,md: 'auto',lg: 210, xl: 210,}}
              >
                <Text fw={700} fz="md" c="red">0</Text>
                <Text fz="xs" c="var(--mantine-color-gray-5)" truncate>Closed Vacancies</Text>
              </Box>
            </Flex>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

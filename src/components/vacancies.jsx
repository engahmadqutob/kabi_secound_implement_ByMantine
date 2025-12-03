import { Box, Text } from "@mantine/core";
import { vacanciesConfig } from "@/data/vacancies.config";
export default function Vacancies() {
  const vacancies = vacanciesConfig.map((vacancy, index) => (
    <Box mt={15} mb={15} key={index}>
      <Text c={"#999595"} tt="capitalize">
        
        <Text fw={700} c={"black"} span>
          {vacancy.count}
        </Text> 
        {vacancy.text}
      </Text>
    </Box>
  ));
  return <>{vacancies}</>;
}

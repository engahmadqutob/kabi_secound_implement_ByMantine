import CardSection from "@/components/card/card";
import SearchSection from "@/components/search/search";
import Vacancies from "@/components/vacancies/vacancies";
export default function Card() {
  return (
    <>
      <SearchSection />
      <Vacancies />
      <CardSection />
    </>
  );
}

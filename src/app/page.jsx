import SearchSection from '@/components/search'
import Vacancies from '@/components/vacancies'
import JobRequestionCard from '@/components/job-requestion-card'
import AppShellLayout from '@/components/app-shell-layout'

export default function Home() {
  return (
    <AppShellLayout>
      <SearchSection />
      <Vacancies />
      <JobRequestionCard />
    </AppShellLayout>
  )
}

import AddMangaForm from '@/components/AddMangaForm'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddMangaForm />
    </main>
  )
}

import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"


const page = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jonathan!</h2>
        <h3>Sexta, 2 de Fevereiro</h3>
      </div>

      <div className="p-5 flex items-center gap-2">
        <Input placeholder="Buscar" />
        <Button >
          <SearchIcon />
        </Button>
      </div>

      <div className="relative h-[150px] mt-5 m-5 ">
        <Image
          alt="Agende com os melhores"
          src="/Banner01.png"
          fill
          className="object-fill rounded-xl"
        />
      </div>
    </div >
  )
}

export default page
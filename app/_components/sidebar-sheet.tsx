import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { quickSearchOptions } from "@/app/_constants/searchIcons";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const SidebarSheet = () => {
  return (
    <SheetContent className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center border-b border-solid gap-3 py-5 justify-between">
        <h2 className="font-bold">Olá, faça seu login!</h2>
        <Dialog>

          <DialogTrigger asChild>

            <Button size='icon'>
              <LogInIcon />
            </Button>

          </DialogTrigger>

          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google.
              </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="gap-1 font-bold">
              <Image
                alt="Login com o google"
                src='/Google.svg'
                width={16}
                height={16}
              />
              Google
            </Button>

          </DialogContent>
        </Dialog>



        {/* <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" />
        </Avatar>

        <div>
          <p className="font-bold">Jonathan Costa</p>
          <p className="text-xs">jddatsoc@gmail.com</p>
        </div> */}
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href='/'>
              <HomeIcon size={18} />
              Ínicio
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant='ghost'                >
            <Image
              src={option.imageUrl}
              alt={option.title}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className=" flex flex-col py-5">
        <Button
          className="justify-start gap-2"
          variant='ghost'
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>

    </SheetContent>
  );
}

export default SidebarSheet;
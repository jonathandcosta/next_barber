import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { quickSearchOptions } from "@/app/_constants/searchIcons";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";

const SidebarSheet = () => {
  return (
    <SheetContent className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center border-b border-solid gap-3 py-5">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" />
        </Avatar>

        <div>
          <p className="font-bold">Jonathan Costa</p>
          <p className="text-xs">jddatsoc@gmail.com</p>
        </div>
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
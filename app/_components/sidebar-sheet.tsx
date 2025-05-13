"use client"

import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { quickSearchOptions } from "@/app/_constants/searchIcons";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import SignInDialog from "./sign-in-dialog";

const SidebarSheet = () => {

  const { data } = useSession()
  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center border-b border-solid gap-3 py-5 justify-between">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ''} />
            </Avatar>
            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size='icon'>
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
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
          <SheetClose key={option.title} asChild>
            <Button
              className="justify-start gap-2"
              variant='ghost'
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  height={18}
                  width={18}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      {data?.user && (
        <div className=" flex flex-col py-5">
          <Button
            className="justify-start gap-2"
            variant='ghost'
            onClick={handleLogoutClick}
          >
            <LogOutIcon
              size={18}
            />
            Sair da conta
          </Button>
        </div>
      )}
    </SheetContent>
  );
}

export default SidebarSheet;
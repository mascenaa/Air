"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
     NavigationMenu,
     NavigationMenuContent,
     NavigationMenuItem,
     NavigationMenuLink,
     NavigationMenuList,
     NavigationMenuTrigger,
     navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { createContext } from "react";
import { Plane } from "lucide-react";


const components: { title: string; href: string; description: string }[] = [
     {
          title: "Sobre nós",
          href: "/about",
          description:
               "Curioso sobre quem somos? Saiba mais sobre a nossa história e missão.",
     },
     {
          title: "Termos de uso",
          href: "/uses",
          description:
               "Saiba mais sobre os termos de uso da nossa plataforma e como eles se aplicam a você.",
     },
     {
          title: "Status",
          href: "/status",
          description:
               "Enfrentando problemas com a plataforma? Confira o status atual dos nossos serviços.",
     },
]

export default function LandingHeader() {
     return (
          <section className="flex items-center justify-between p-10 text-white">
               <div>
                    <Link href='/'>
                         <h1 className="text-3xl font-bold">Air</h1>
                         <p className="text-stone-600">
                              The best flight for you
                         </p>
                    </Link>
               </div>
               <div>
                    <NavigationMenu>
                         <NavigationMenuList>
                              <NavigationMenuItem>
                                   <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                                   <NavigationMenuContent className="border-none">
                                        <ul className="grid p-4 w-[400px] lg:grid-cols-[.75fr_1fr] bg-stone-950">
                                             <ListItem href="/catalog" title="Tickets" className="hover:bg-stone-900 p-2 rounded-lg">
                                                  Procurando os melhores preços para as viagens.
                                             </ListItem>
                                             <ListItem href="/milhas" title="Milhas" className="hover:bg-stone-900 p-2 rounded-lg">
                                                  Confira a cotação atual das suas milhas.
                                             </ListItem>
                                             <span className="col-span-3">
                                                  <ListItem href="/docs/primitives/typography" title="Chat" className="hover:bg-stone-900 p-2 rounded-lg w-full">
                                                       Nosso chatbot para dicas, dúvidas e etc.
                                                  </ListItem>
                                             </span>
                                        </ul>
                                   </NavigationMenuContent>
                              </NavigationMenuItem>
                              <NavigationMenuItem>
                                   <NavigationMenuTrigger>
                                        Páginas
                                   </NavigationMenuTrigger>
                                   <NavigationMenuContent>
                                        <ul className="grid p-4 w-[400px] lg:grid-cols-[.75fr_1fr] bg-stone-950">
                                             {components.map((component) => (
                                                  <span key={component.href} className="col-span-3">
                                                       <ListItem
                                                            key={component.title}
                                                            title={component.title}
                                                            href={component.href}
                                                       >
                                                            {component.description}
                                                       </ListItem>
                                                  </span>
                                             ))}
                                        </ul>
                                   </NavigationMenuContent>
                              </NavigationMenuItem>
                              <NavigationMenuItem>
                                   <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                             Contato
                                        </NavigationMenuLink>
                                   </Link>
                              </NavigationMenuItem>
                              <NavigationMenuItem>
                                   <li>
                                        <Link href="/login" className="bg-amber-400 p-2 font-bold hover:bg-amber-500 transition-all rounded-md">
                                             Dashboard
                                        </Link>
                                   </li>
                              </NavigationMenuItem>
                         </NavigationMenuList>
                    </NavigationMenu>
                    {/* <ul className="flex gap-5 font-bold text-sm items-center">
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">SERVIÇOS</li>
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">VOOS</li>
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">SOBRE NÓS</li>
                         <li className="hover:scale-[1.05] transition-all ease-in hover:cursor-pointer hover:border-b-[1.5px]">CONTATO</li>
                         <li>
                              <Link href="/login" className="bg-amber-400 p-3 font-bold hover:bg-amber-500 transition-all rounded-md">
                                   Dashboard
                              </Link>
                         </li>
                    </ul> */}
               </div>
          </section>
     )
}



const ListItem = React.forwardRef<
     React.ElementRef<"a">,
     React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
     return (
          <li>
               <NavigationMenuLink asChild>
                    <a
                         ref={ref}
                         className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              className
                         )}
                         {...props}
                    >
                         <div className="text-md font-bold leading-none ">{title}</div>
                         <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {children}
                         </p>
                    </a>
               </NavigationMenuLink>
          </li>
     )
})
ListItem.displayName = "ListItem"
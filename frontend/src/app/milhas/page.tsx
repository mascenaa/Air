"use client"
import LandingHeader from "@/components/header/header";
import { useState } from "react";
import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select"



export default function MilhasPage() {
     const [real, setReal] = useState<Number>(0)


     function transformRealToMilhas(
          real: number
     ) {
          return real * 0.05
     }


     return (
          <div>
               <LandingHeader />
               <div>
                    <div className="text-center">
                         <h1 className="text-3xl font-bold">Pensando em usar suas milhas?</h1>
                         <p className="text-sm text-[#606060] w-1/2 mx-auto">Conheça nossa calculadora de calculo de milhas, converta em pontos para nossa plataforma e use para comprar suas passagens favoritas</p>
                    </div>
                    <div className="flex justify-center gap-10 mt-5 p-10">
                         <Card className="bg-stone-950 w-full border-2 border-stone-900 rounded-xl p-5">
                              <CardHeader>
                                   <CardTitle>Milhas</CardTitle>
                                   <CardDescription className="text-stone-400">
                                        <p className="text-xs">Selecione seu programa de fidelidade favorito</p>
                                        <Select>
                                             <SelectTrigger className=" border-none w-full">
                                                  <SelectValue placeholder="Programa de fidelidade" />
                                             </SelectTrigger>
                                             <SelectContent className="bg-stone-900 border-none">
                                                  <SelectItem className="bg-stone-950 focus:bg-stone-700" value="AirFrance">
                                                       Air France
                                                  </SelectItem>
                                                  <SelectItem className="bg-stone-950 focus:bg-stone-700" value="Azul">
                                                       Azul
                                                  </SelectItem>
                                                  <SelectItem className="bg-stone-950 focus:bg-stone-700" value="Gol">
                                                       Gol
                                                  </SelectItem>
                                                  <SelectItem className="bg-stone-950 focus:bg-stone-700" value="Latem">
                                                       Latam
                                                  </SelectItem>
                                                  <SelectItem className="bg-stone-950 focus:bg-stone-700" value="TAP">
                                                       TAP
                                                  </SelectItem>
                                                  <SelectItem className="bg-stone-950 focus:bg-stone-700" value="United">
                                                       United
                                                  </SelectItem>
                                             </SelectContent>
                                        </Select>
                                   </CardDescription>
                              </CardHeader>
                              <CardContent className="flex justify-center">
                                   <Input type='number' className="border-b-[1px] border-stone-800 focus:border-stone-400  transition-all ease-in outline-none" value={transformRealToMilhas(Number(real))} />
                              </CardContent>
                         </Card>
                         <Card className="bg-stone-950 w-full border-2 border-stone-900 rounded-xl p-5">
                              <CardHeader>
                                   <CardTitle>Real</CardTitle>
                                   <CardDescription className="text-stone-400">Selecione sua moeda</CardDescription>
                              </CardHeader>
                              <CardContent className="flex justify-center">
                                   <Input onChange={(e) => setReal(Number(e.target.value))} type='number' className="border-b-[1px] border-stone-800 focus:border-stone-400  transition-all ease-in outline-none" />
                              </CardContent>
                         </Card>

                    </div>
               </div>
          </div>
     )
}
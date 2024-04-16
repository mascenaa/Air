import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import { Bookmark, Plane } from "lucide-react"


export default function HomeDashboard() {
     return (
          <div>
               <h1 className="text-stone-500 text-xl font-extrabold">Análise de viagens</h1>
               <div className="flex gap-2 flex-wrap mt-2">
                    <Card className="w-full border-stone-900 bg-stone-950 border-[1px] p-1 rounded-[8px] hover:border-stone-100 transition-all ease-in">
                         <CardHeader>
                              <div className="flex gap-2 items-center justify-between mt-0">
                                   <CardTitle className="text-md text-stone-500">Suas viajens</CardTitle>
                                   <div className="bg-stone-900 p-2 rounded-[2px]">
                                        <Plane className="w-4 h-4 text-stone-500 " />
                                   </div>
                              </div>
                              <CardDescription>0</CardDescription>
                         </CardHeader>
                         <CardFooter className="text-xs text-stone-600">
                              Quantidade de viagens realizadas este ano
                         </CardFooter>
                    </Card>
                    <Card className="   w-full border-stone-900 bg-stone-950 border-[1px] p-1 rounded-[8px] hover:border-stone-100 transition-all ease-in">
                         <CardHeader>
                              <div className="flex gap-2 items-center justify-between mt-0">
                                   <CardTitle className="text-md text-stone-500">
                                        Favoritos
                                   </CardTitle>
                                   <div className="bg-stone-900 p-2 rounded-[2px]">
                                        <Bookmark className="w-4 h-4 text-stone-500 " />
                                   </div>
                              </div>
                              <CardDescription>0</CardDescription>
                         </CardHeader>
                         <CardFooter className="text-xs text-stone-600">
                              Seus lugares favoritos
                         </CardFooter>
                    </Card>
                    <Card className="   w-full border-stone-900 bg-stone-950 border-[1px] p-1 rounded-[8px] hover:border-stone-100 transition-all ease-in">
                         <CardHeader>
                              <div className="flex gap-2 items-center justify-between mt-0">
                                   <CardTitle className="text-md text-stone-500">
                                        Amigos de viagem
                                   </CardTitle>
                                   <div className="bg-stone-900 p-2 rounded-[2px]">
                                        <Bookmark className="w-4 h-4 text-stone-500 " />
                                   </div>
                              </div>
                              <CardDescription>0</CardDescription>
                         </CardHeader>
                         <CardFooter className="text-xs text-stone-600">
                              Seus lugares favoritos
                         </CardFooter>
                    </Card>
               </div>

          </div>
     )
}
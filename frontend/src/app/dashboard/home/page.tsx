import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"


export default function HomeDashboard() {
     return (
          <div>
               <h1 className="text-stone-500 text-xl font-extrabold">Análise de viagens</h1>
               <div className="flex gap-2 mt-2">
                    <Card className=" border-stone-900 border-[1px] p-2 rounded-[8px]">
                         <CardHeader>
                              <CardTitle className="text-md">Suas viajens desse ano</CardTitle>
                              <CardDescription>0</CardDescription>
                         </CardHeader>
                    </Card>
                    <Card className=" border-stone-900 border-[1px] p-2 rounded-[8px]">
                         <CardHeader>
                              <CardTitle>Card Title</CardTitle>
                              <CardDescription>Card Description</CardDescription>
                         </CardHeader>
                    </Card>
               </div>

          </div>
     )
}
"use client"
import FlightSelect from "@/components/flight_select/flightSelect";
import LandingHeader from "@/components/header/header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PlaneLanding, PlaneTakeoff } from "lucide-react";


export default function Catalog() {



    const data = JSON.parse(sessionStorage.getItem('searchFlights') ?? '')

    console.log(data.message)
    console.log(data.message.best_flights)
    console.log(data.message.other_flights)
    console.log(data.message.price_insights)


    function minuteToHour(minute: number) {
        const hours = Math.floor(minute / 60);
        const minutes = minute % 60;
        return `${hours}h ${minutes}m`;
    }

    function formatValor(valor: number) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }


    return (
        <div>
            <LandingHeader />

            <h1 className="text-4xl text-center">Flights Result</h1>

            <div className="p-20">
                <div>
                    <h1 className="text-xl font-bold text-stone-800">Melhores voos (0)</h1>
                    <div className="my-5">
                        <div>

                            {
                                data.message.best_flights.map((flight: any) => {
                                    return (
                                        <Card key={Math.random()} className="w-full bg-stone-950">
                                            <CardHeader>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-stone-900 rounded-2xl p-2 w-fit">
                                                            <img src={flight.airline_logo} className="w-10 h-10 rounded-full object-fill" alt="logo" />
                                                        </div>
                                                        <div>
                                                            <CardTitle>Detalhes do Voo</CardTitle>
                                                            <p className="text-sm text-stone-300"> Tempo total de voo: {minuteToHour(flight.total_duration)}</p>
                                                        </div>
                                                    </div>
                                                    <CardDescription className="font-bold">{formatValor(flight.price)}</CardDescription>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                {
                                                    flight.flights.map((f: any) => {
                                                        return (
                                                            <>
                                                                <div className="border-l-2 border-l-stone-900 my-2 p-4 ">
                                                                    <h1 className="text-xl font-bold">{f.airline}</h1>
                                                                    <p>{f.airplane} • {minuteToHour(f.duration)}</p>
                                                                    <div>
                                                                        <div className="text-sm ">
                                                                            <div>
                                                                                <p className="flex items-center gap-1 text-stone-300 my-2"><PlaneTakeoff className="w-5 h-5" /> {f.departure_airport.name}</p>
                                                                            </div>
                                                                            <p className="flex items-center gap-1 text-stone-300 my-2"><PlaneLanding className="w-5 h-5" /> {f.arrival_airport.name}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </CardContent>
                                            <CardFooter>
                                                <p>teste</p>
                                            </CardFooter>
                                        </Card>
                                    )
                                })
                            }
                            <Card className="w-full bg-stone-950">
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-stone-800">Outros voos (0)</h1>
                    <div className="my-5">
                        <Card className="w-full bg-stone-950">
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>


            </div>
        </div>
    )
}
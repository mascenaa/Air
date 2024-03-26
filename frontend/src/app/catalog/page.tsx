"use client"
import FlightSelect from "@/components/flight_select/flightSelect";
import LandingHeader from "@/components/header/header";

export default function Catalog() {
    return (
        <div>
            <LandingHeader />
            
            <h1 className="text-4xl text-center">Sourth your Tickets</h1>
            
            <div className="p-20">
                
                <FlightSelect />

            </div>
        </div>
    )
}
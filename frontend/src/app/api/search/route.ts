import { NextResponse } from "next/server";
import { config, getJson } from "serpapi";

export async function GET(request: any) {
     try {
          console.log("GET request");
     } catch (error) {
          console.error(error);
          return NextResponse.error();
     }
}

export async function POST(request: any) {
     const { departure_id, arrival_id, outbound, return: returnDate } = request.body;

     try {
          try {
               const response = await fetch(`https://serpapi.com/search.json?engine=google_flights&departure_id=GRU&arrival_id=AEP&gl=us&hl=en&currency=BRL&outbound_date=2024-04-26&return_date=2024-05-02&api_key=02ec2b819f34df615009e2d357faef77936048f34b873f00d6ae0d48454c9523`);
               const data = await response.json();

               console.log(data);

               return NextResponse.json({
                    message: data
               });
          } catch (error) {
               console.error(error);
               return NextResponse.error();
          }
     } catch (error) {
          console.error(error);
          return NextResponse.error();
     }
}
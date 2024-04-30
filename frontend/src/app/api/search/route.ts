import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


interface SearchRequest {
     departure_id: string;
     arrival_id: string;
     outbound: string;
     returnDate: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method === 'POST') {
          console.log(req.body)
     } else {
          // Handle any other HTTP method
     }
}

export async function POST(req: Request, res: NextApiResponse) {

     const data = await req.json()
     const passagemDetails = {
          departure_id: data.departure_id,
          arrival_id: data.arrival_id,
          outbound: data.outbound,
          returnDate: data.returnDate
     }


     try {
          try {
               const response = await fetch(`https://serpapi.com/search.json?engine=google_flights&departure_id=${passagemDetails.departure_id}&arrival_id=${passagemDetails.arrival_id}&gl=us&hl=en&currency=BRL&outbound_date=${passagemDetails.outbound}&return_date=${passagemDetails.returnDate}&api_key=02ec2b819f34df615009e2d357faef77936048f34b873f00d6ae0d48454c9523`);
               const air_data = await response.json();

               console.log(air_data);

               return NextResponse.json({
                    message: air_data
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
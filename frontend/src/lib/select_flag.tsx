import Image from "next/image";
import React from "react";
import flags from "./imports_flag"

interface ComponentSVGCountryProps {
     country: string;
}

function ComponentSVGCountry(props: ComponentSVGCountryProps): JSX.Element {
     const { country } = props;


     return (
          <div>
               <Image
                    src={flags[country]}
                    alt="Brazil"
                    width={20}
                    height={20}
               />
          </div>

     );

}

export default ComponentSVGCountry;
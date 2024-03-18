import Image from "next/image";
import React from "react";
import flags from "./imports_flag"

interface ComponentSVGCountryProps {
     country: string;
}

function ComponentSVGCountry(props: ComponentSVGCountryProps): JSX.Element {
     const { country } = props;

     switch (country) {
          case "BR":
               return (
                    <Image
                         src={flags[country]}
                         alt="Brazil"
                         width={5}
                         height={5}
                    />
               );
          default:
               return <></>;
     }
}

export default ComponentSVGCountry;
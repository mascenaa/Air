import Image from "next/image";
import React from "react";

interface ComponentSVGCountryProps {
     country: string;
}

function ComponentSVGCountry(props: ComponentSVGCountryProps): JSX.Element {
     const { country } = props;

     switch (country) {
          case "BR":
               return (
                    <img
                         src={ }
                         alt="Brazil"
                         width={30}
                         height={30}
                    />
               );
          default:
               return <></>;
     }
}

export default ComponentSVGCountry;
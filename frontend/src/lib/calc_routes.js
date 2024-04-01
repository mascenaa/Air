function calcularCoordenadas(lat1, lon1, lat2, lon2, numPontos) {
     const coordenadas = [];

     const Radiano = (angle) => angle * (Math.PI / 180);
     const Angulo = (angle) => angle * (180 / Math.PI);

     const pi1 = Radiano(lat1);
     const pi2 = Radiano(lat2);
     const lambda1 = Radiano(lon1);
     const lambda2 = Radiano(lon2);


     const deltaLambda = lambda2 - lambda1;


     const a = Math.pow(Math.cos(pi2) * Math.sin(deltaLambda), 2) +
          Math.pow(Math.cos(pi1) * Math.sin(pi2) - Math.sin(pi1) * Math.cos(pi2) * Math.cos(deltaLambda), 2);
     const b = Math.sin(pi1) * Math.sin(pi2) + Math.cos(pi1) * Math.cos(pi2) * Math.cos(deltaLambda);
     const distance = Math.atan2(Math.sqrt(a), b);


     for (let i = 0; i <= numPontos; i++) {
          const sigma = distance * (i / numPontos);

          const alpha1 = Math.atan2(Math.cos(pi2) * Math.sin(sigma),
               Math.cos(pi1) * Math.sin(pi2) - Math.sin(pi1) * Math.cos(pi2) * Math.cos(sigma));
          const lambda = lambda1 + Math.atan2(Math.sin(alpha1) * Math.sin(sigma),
               Math.cos(pi1) * Math.cos(sigma) - Math.sin(pi1) * Math.sin(pi2));

          const phi = Math.asin(Math.sin(pi1) * Math.cos(sigma) +
               Math.cos(pi1) * Math.sin(sigma) * Math.cos(alpha1));

          coordenadas.push([
               Angulo(phi),
               Angulo(lambda)
          ]);
     }

     return coordenadas;
}

export default calcularCoordenadas;
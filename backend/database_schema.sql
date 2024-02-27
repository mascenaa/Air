CREATE TABLE aeroportos (
    id SERIAL PRIMARY KEY, nome VARCHAR(255), cidade VARCHAR(255), pais VARCHAR(255), codigo_iata VARCHAR(3)
);

CREATE TABLE scrapping_passagens (
    uuid UUID PRIMARY KEY, companhia_aerea VARCHAR(255), hr_ida TIME, hr_chegada TIME, nr_paradas INT, hrs_parada TIME, tempo_voo TIME, valor DECIMAL(10, 2), aero_saida VARCHAR(255), aero_destino VARCHAR(255), classe VARCHAR(255), nr_pessoas INT, tipo_pessoas VARCHAR(255), ida_volta BOOLEAN
);
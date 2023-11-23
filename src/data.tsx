import React from 'react';

export interface Fine {
    guilty: string;
    attachment: number;
    number: string;
    description: string;
    fine: number;
    group: string | string[];
}

export const data = [

    {
       guilty: "kierowcy",
       attachment: 1,
       number: "1.1",
       description: "Nieokazanie wypisu z zezwolenia na wykonywanie zawodu przewoźnika drogowego",
       fine: 200,
       group: "brak"
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.2",
        description: "Nieokazanie wypisu z licencji",
        fine: 200,
        group: ["10.2 BPN", "11.2 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.3",
        description: "Nieokazanie świadectwa kierowcy",
        fine: 150,
        group: ["10.4 PN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4",
        description: "Nieokazanie zapisów odręcznych i wydruków za dni podlegające kontroli, karty kierowcy, jeżeli kierowca posiada taką kartę",
        fine: 200,
        group: ["2.22 BPN", "2.23 BPN", "2.24 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4a",
        description: "Nieokazanie zapisów odręcznych i wydruków za dni podlegające kontroli, karty kierowcy, jeżeli kierowca posiada taką kartę",
        fine: 500,
        group: ["2.21 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4b",
        description: "Nieokazanie od 2 do 15 wykresówek za dni podlegające kontroli",
        fine: 1000,
        group: ["2.21 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.4c",
        description: "Nieokazanie powyżej 15 wykresówek za dni podlegające kontroli",
        fine: 1500,
        group: ["2.21 BPN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.5",
        description: "Nieokazanie zezwolenia na wykonywanie regularnych przewozów osób w międzynarodowym transporcie drogowym lub zezwolenia na wykonywanie regularnych specjalnych przewozów osób w międzynarodowym transporcie drogowym lub wypisów z tych zezwoleń",
        fine: 150,
        group: ["11.4 PN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.6",
        description: "Nieokazanie dokumentów wymaganych przy przewozie zwierząt określonych w przepisach rozporządzenia Rady (WE) nr 1/20053)",
        fine: 150,
        group: ["12.5 PN"]
    },
    {
        guilty: "kierowcy",
        attachment: 1,
        number: "1.7",
        description: "Nieokazanie innego wymaganego w związku z wykonywanym przewozem drogowym dokumentu, o którym mowa w art. 87 ustawy o transporcie drogowym1)",
        fine: 150,
        group: ["12.5 PN"]
    },
    
    ];
    
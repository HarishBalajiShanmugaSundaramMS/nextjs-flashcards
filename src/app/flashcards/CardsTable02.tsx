"use client";

import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'tabulator-tables/dist/css/tabulator.min.css'; // Import Tabulator CSS
import { Tabulator } from 'tabulator-tables'; // Import Tabulator

function CardsTable02() {

    const columns = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Age', field: 'age' },
    ];

    var data =  [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Doe', age: 40 },
      ];

    return (
        <Tabulator
            data={data}
            columns={columns}
            layout={"fitDataStretch"}
        />);
}

export default CardsTable02;

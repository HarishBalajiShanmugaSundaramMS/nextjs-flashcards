"use client";

import React from "react";
import 'react-tabulator/lib/styles.css';

import { ReactTabulator } from 'react-tabulator'
import Data from "./Data.json";


function CardsTable01() {
    const columns = [
        { title: "english_singular", field: "english_singular",width: 150 },
        { title: "english_plural", field: "english_plural" },
        { title: "german_singular", field: "german_singular" },
        { title: "german_plural", field: "german_plural" },
        { title: "tamil_singular", field: "tamil_singular" },
        { title: "tamil_plural", field: "tamil_plural" },
        { title: "gender", field: "gender" },
    ];

    var data = Data;

    return (
        <ReactTabulator
            data={data}
            columns={columns}
            layout={"fitDataStretch"}
        />);
}

export default CardsTable01;

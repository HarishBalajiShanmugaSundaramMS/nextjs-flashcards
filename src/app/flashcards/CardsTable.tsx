"use client";

import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Data from "./Data.json";



function CardsTable() {

    return (
        <DataTable value={Data}>
            <Column field="english_singular" header="English Singular"></Column>
            {/* <Column field="english_plural" header="Code"></Column>
            <Column field="german_singular" header="Code"></Column>
            <Column field="german_singular" header="Code"></Column>
            <Column field="tamil_singular" header="Code"></Column>
            <Column field="tamil_plural" header="Code"></Column> */}
        </DataTable>
    );
}

export default CardsTable;

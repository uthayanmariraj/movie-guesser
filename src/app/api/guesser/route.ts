import { NextResponse } from "next/server";
import fs from "fs";
import { parse } from "csv-parse/sync";

type MovieRow = {
    TMDB_ID: string;
};

export async function GET(req: Request){
    const csv = fs.readFileSync("tamil_movies_cleaned.csv", "utf-8");

    const records = parse(csv, {
        columns: true,
        skip_empty_lines: true,
        bom: true,
    trim: true
    }) as MovieRow[];

    const ids: number[] = records.map(
        (row) => Number(row.TMDB_ID)
    );
    
    const randomID = () => {
        return ids[Math.floor(Math.random() * ids.length)];
    }
    const idx = randomID();

    return NextResponse.json({id: idx});



}
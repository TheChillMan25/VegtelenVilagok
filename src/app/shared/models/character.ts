import { Stat } from "./statok";

export interface Character{
    nev: string;
    faj: string;
    statok: Stat[];
    ut: string;
    felszereles: string[];
    targyak: string[]
}
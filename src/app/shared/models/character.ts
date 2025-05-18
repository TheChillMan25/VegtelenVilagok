import { MainStat } from './main_stat';
import { Stat } from './statok';

export interface Character {
  id: string;
  nev: string;
  faj: string;
  mainStatok: MainStat[];
  statok: Stat[];
  ut: string;
  utSzint: number;
  felszereles: string[];
  targyak: string[];
  keszitett: string;
}

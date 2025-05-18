import { Character } from './character';

export interface User {
  id: string | null | undefined;
  username: string | null | undefined;
  email: string | null | undefined;
  characters: string[];
}

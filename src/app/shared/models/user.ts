import { Character } from './character';

export interface User {
  username: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
  characters: Character[] | null | undefined;
}

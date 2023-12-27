
export class User {
    id: number = 0;
    username: string = '';
    password: string = '';
    token?: string = '';
  }
  
export class UserRegisterRequest {
  nome: string = '';
  senha: string = '';
  email: string = '';
}

export interface BlogUser {
  id: number;
  nome: string;
}
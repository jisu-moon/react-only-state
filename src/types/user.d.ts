export interface IUser {
  name: string;
  age: number | null;
}

export interface IUserReducer {
  type: string;
  value?: string;
}

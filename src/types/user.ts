export type User = {
  id: string;
  email: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
  phone: string;
}

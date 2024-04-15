export type User = {
  id: string;
  email: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

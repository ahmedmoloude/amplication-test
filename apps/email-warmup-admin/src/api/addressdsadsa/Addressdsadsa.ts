import { Customer } from "../customer/Customer";

export type Addressdsadsa = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  state: string | null;
  tets: string;
  updatedAt: Date;
  zip: number | null;
};

import { CustomerCreateNestedManyWithoutAddressdsadsasInput } from "./CustomerCreateNestedManyWithoutAddressdsadsasInput";

export type AddressdsadsaCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressdsadsasInput;
  state?: string | null;
  tets: string;
  zip?: number | null;
};

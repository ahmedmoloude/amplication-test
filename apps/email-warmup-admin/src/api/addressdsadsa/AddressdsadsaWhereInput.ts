import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressdsadsaWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  tets?: StringFilter;
  zip?: IntNullableFilter;
};

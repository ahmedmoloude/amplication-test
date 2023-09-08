import { Addressdsadsa as TAddressdsadsa } from "../api/addressdsadsa/Addressdsadsa";

export const ADDRESSDSADSA_TITLE_FIELD = "address_1";

export const AddressdsadsaTitle = (record: TAddressdsadsa): string => {
  return record.address_1 || String(record.id);
};

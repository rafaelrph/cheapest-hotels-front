import { Price } from "./price";
import { Contact } from "./contact";
import { Address } from "./address";

export class Hotel {

    public property_name: string;
    public total_price: Price;
    public contacts: Contact[];
    public address: Address;
    
}
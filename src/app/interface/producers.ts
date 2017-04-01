/**
 * Created by Aldrich on 01-Apr-17.
 */


export interface User {
  id: number;
  email: string;
  provider: string;
  uid: string;
  name?: any;
  nickname?: any;
  image?: any;
}

export interface ProducerLocation {
  id: number;
  fulladdress: string;
  state: string;
  pincode?: number;
}

export interface Product {
  id: number;
  name: string;
  products_type: string;
  description: string;
  cas_number: string;
  quantity: number;
  quantity_type: string;
}

export interface ProducersRootModel {
  id: number;
  name: string;
  producers_type: string;
  created_at: Date;
  user: User;
  producer_location?: ProducerLocation;
  products?: Product[];
}



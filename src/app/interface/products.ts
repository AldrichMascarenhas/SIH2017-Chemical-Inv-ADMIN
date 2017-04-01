/**
 * Created by Aldrich on 02-Apr-17.
 */


export interface Producer {
  id: number;
  name: string;
  producers_type?: any;
  created_at: Date;
}

export interface ProductRootObject {
  id: number;
  name: string;
  products_type: string;
  description: string;
  cas_number: string;
  quantity: number;
  quantity_type: string;
  producer: Producer;
}




export interface User {
  id: number;
  email: string;
  provider: string;
  uid: string;
  name?: any;
  nickname?: any;
  image?: any;
}

export interface Package {
  id: number;
  packages_type: string;
  quantity_type: string;
  quantity: string;
  shipment_id: number;
  warehouse_id: number;
}

export interface WarehouseLocation {
  id: number;
  fulladdress: string;
  state: string;
  pincode: number;
}

export interface WarehouseRootObject {
  id: number;
  name: string;
  warehouses_type: string;
  user: User;
  packages: Package[];
  warehouse_location: WarehouseLocation;
}



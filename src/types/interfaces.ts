export interface IProductData {
  id: number;
  name: string;
  price: number;
  available: number;
}
export interface IItems {
  name: string;
  id: number;
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}
export interface IProduct {
  available: number;
  description: string;
  name: string;
  code: string;
  manufacturer: string;
  price: string;
  id: number;
  brand: {
    name: string;
  };
  model: {
    name: string;
  };
  generation: {
    name: string;
  };
}
export interface ICommets {
  review: string;
  user: {
    firstName: string;
    lastName: string;
  };
}
export interface IBasketPageData {
  count: number;
  product: {
    name: string;
    price: number;
    code: string;
    id: number;
  };
}

export interface IContactsValue {
  name?: string;
  surname?: string;
  patronymic: string;
  tel: string;
  email?: string;
}

export interface IDeliveryValue {
  house: string;
  street: string;
  city: string;
  apartment: string;
  region: string;
}

interface IOrdersItems {
  count: number;
  product: {
    price: number;
    name: string;
  };
}
export interface IOrdersData {
  items: IOrdersItems[];
  product: {
    price: number;
    count: number;
  };
  id: number;
  created_at: number;
}

export interface IStages {
  name: string;
  component?: React.ReactNode;
}

export interface IRegisterBody {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
export interface ILoginBody {
  email: string;
  password: string;
}
export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
}

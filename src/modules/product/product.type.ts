export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};
export type TProductFilter = {
  name?: string;
  page?: number;
  size?: number;
};

export type TProductCount = {
  name?: string;
};
export type TProductCreate = {
  name: string;
  description: string;
  price: number;
};

export type TProductUpdate = TProductCreate & {
  id: string;
};

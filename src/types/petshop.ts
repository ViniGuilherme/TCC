export interface Petshop {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  services: string[];
  image: string;
  price: string;
  distance: string;
}

export interface Category {
  name: string;
  icon: string;
  count: number;
}

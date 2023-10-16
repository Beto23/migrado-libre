interface SellerReputation {
  level_id: string;
  power_seller_status: string;
  transactions: {
    canceled: number;
    completed: number;
    period: string;
    ratings: {
      negative: number;
      neutral: number;
      positive: number;
    };
    total: number;
  };
  metrics: {
    sales: {
      period: string;
      completed: number;
    };
    claims: {
      period: string;
      rate: number;
      value: number;
    };
    delayed_handling_time: {
      period: string;
      rate: number;
      value: number;
    };
    cancellations: {
      period: string;
      rate: number;
      value: number;
    };
  };
}

interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: string;
  tags: string[];
  permalink: string;
  seller_reputation: SellerReputation;
  eshop: {
    eshop_id: number;
    seller: number;
    nick_name: string;
    eshop_status_id: number;
    site_id: string;
    eshop_experience: number;
    eshop_rubro: string;
    eshop_locations: string[];
    eshop_logo_url: string;
  };
}

interface Address {
  comment: string;
  address_line: string;
  id: number | null;
  latitude: number | null;
  longitude: number | null;
  country: {
    id: string;
    name: string;
  };
  state: {
    id: string;
    name: string;
  };
  city: {
    id: number | null;
    name: string;
  };
}

interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: null; // Reemplaza 'any' con el tipo correcto si lo conoces.
  promise: null; // Reemplaza 'any' con el tipo correcto si lo conoces.
}

interface Attribute {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: null; // Reemplaza 'any' con el tipo correcto si lo conoces.
  values: {
    id: string | null;
    name: string;
    struct: null; // Reemplaza 'any' con el tipo correcto si lo conoces.
    source: number;
  }[];
  source: number;
  value_type: string;
}

interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface Result {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: number | null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  seller_address: Address;
  address: {
    state_id: string;
    state_name: string;
    city_id: number | null;
    city_name: string;
  };
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: string | null;
  catalog_listing: boolean;
  discounts: string[]; // Reemplaza 'string[]' con el tipo correcto si lo conoces.
  promotions: string[]; // Reemplaza 'string[]' con el tipo correcto si lo conoces.
  inventory_id: string;
}

interface Sort {
  id: string;
  name: string;
}

interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface PadsInfo {
  tracelog: string[];
}

export interface SellerData {
  site_id: string;
  seller: Seller;
  country_default_time_zone: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  filters: string[];
  pads_info: PadsInfo;
}

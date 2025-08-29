interface ConfigurableField {
  name: string;
  value: string;
  display_name?: string;
}

interface ProductOption {
  id: number;
  option_id: number;
  order_product_id: number;
  product_option_id: number;
  display_name: string;
  display_value: string;
  value: string;
  type: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  name_customer?: string;
  name_merchant?: string;
  sku?: string;
  price: number;
  quantity: number;
  weight?: number;
  product_id?: number;
  variant_id?: number;
  order_id?: number;
  price_ex_tax?: number;
  price_inc_tax?: number;
  price_tax?: number;
  total_ex_tax?: number;
  total_inc_tax?: number;
  total_tax?: number;
  base_price?: number;
  base_total?: number;
  is_refunded?: boolean;
  quantity_refunded?: number;
  refund_amount?: number;
  return_id?: number;
  type?: string;
  configurable_fields?: ConfigurableField[];
  product_options?: ProductOption[];
}

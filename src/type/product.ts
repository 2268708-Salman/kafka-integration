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
  configurable_fields?: any[];
  product_options?: any[];
}

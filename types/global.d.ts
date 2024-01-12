export type SizeType = 'xs' | 's' | 'M' | 'ML' | 'L' | 'XL' | 'XXL' | '3XL';
export interface ProductType {
  id: string;
  name: string;
  price: number;
  gender: 'Famale' | 'Male' | 'Unisex';
  thumbnailFront: string;
  thumbnailBack: string;
  size: SizeType[];
  freeship: boolean;
}

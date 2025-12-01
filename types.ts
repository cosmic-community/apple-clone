// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at?: string;
  modified_at?: string;
}

// Product type
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    tagline: string;
    hero_image: {
      url: string;
      imgix_url: string;
    };
    learn_more_link?: string;
    buy_link?: string;
    display_order?: number;
  };
}

// Entertainment category type
export type EntertainmentCategory = 'tv' | 'music' | 'arcade' | 'fitness';

// Entertainment type
export interface Entertainment extends CosmicObject {
  type: 'entertainment';
  metadata: {
    subtitle?: string;
    thumbnail_image: {
      url: string;
      imgix_url: string;
    };
    category: {
      key: EntertainmentCategory;
      value: string;
    };
    cta_text?: string;
    link?: string;
  };
}

// Promotion type
export interface Promotion extends CosmicObject {
  type: 'promotions';
  metadata: {
    description: string;
    cta_text?: string;
    cta_link?: string;
    active: boolean;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isEntertainment(obj: CosmicObject): obj is Entertainment {
  return obj.type === 'entertainment';
}

export function isPromotion(obj: CosmicObject): obj is Promotion {
  return obj.type === 'promotions';
}
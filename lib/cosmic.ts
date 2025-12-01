import { createBucketClient } from '@cosmicjs/sdk'
import { Product, Entertainment, Promotion } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all products sorted by display order
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const products = response.objects as Product[];
    
    // Sort by display_order (lower numbers first)
    return products.sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999;
      const orderB = b.metadata?.display_order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch products');
  }
}

// Fetch all entertainment content
export async function getEntertainment(): Promise<Entertainment[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'entertainment' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Entertainment[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch entertainment');
  }
}

// Fetch all active promotions
export async function getPromotions(): Promise<Promotion[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'promotions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const promotions = response.objects as Promotion[];
    
    // Filter only active promotions
    return promotions.filter(promo => promo.metadata?.active === true);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch promotions');
  }
}

// Get bucket slug for client components
export function getBucketSlug(): string {
  return process.env.COSMIC_BUCKET_SLUG as string;
}
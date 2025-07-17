'use server';

import { unstable_cache } from 'next/cache';
import { YelpBusinessResponse, YelpReview } from './types';
import { mockYelpBusinessData } from './data';

// Cache configuration
const CACHE_REVALIDATE_TIME = 3600; // 1 hour in seconds

// Simulate API delay for realism
async function simulateApiDelay(ms: number = 150): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Get business details and reviews from Yelp (Server Action)
 * Uses Next.js unstable_cache for server-side caching
 */
export const getYelpBusinessReviews = unstable_cache(
  async (businessId: string = 'east-bay-blinds-benicia'): Promise<YelpBusinessResponse> => {
    console.log(`[YelpService] Fetching reviews for ${businessId}`);
    
    // Simulate API call delay
    await simulateApiDelay();
    
    // In production, this would be:
    // const response = await fetch(`https://api.yelp.com/v3/businesses/${businessId}/reviews`, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    // });
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch Yelp data: ${response.statusText}`);
    // }
    // const data = await response.json();
    // return data;

    // For now, return mock data
    return { ...mockYelpBusinessData };
  },
  ['yelp-business-reviews'], // Cache key
  {
    revalidate: CACHE_REVALIDATE_TIME,
    tags: ['yelp-reviews']
  }
);

/**
 * Get featured reviews (subset of all reviews) - Server Action
 */
export const getFeaturedYelpReviews = unstable_cache(
  async (limit: number = 3): Promise<YelpReview[]> => {
    const businessData = await getYelpBusinessReviews();
    
    // Sort by rating (desc) and date (desc), then take the limit
    const featuredReviews = businessData.reviews
      .sort((a, b) => {
        // First sort by rating
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        // Then by date
        return new Date(b.time_created).getTime() - new Date(a.time_created).getTime();
      })
      .slice(0, limit);

    return featuredReviews;
  },
  ['yelp-featured-reviews'], // Cache key
  {
    revalidate: CACHE_REVALIDATE_TIME,
    tags: ['yelp-reviews']
  }
);

/**
 * Get business summary stats - Server Action
 */
export const getYelpBusinessStats = unstable_cache(
  async (): Promise<{ rating: number; reviewCount: number; url: string }> => {
    const businessData = await getYelpBusinessReviews();
    
    return {
      rating: businessData.rating,
      reviewCount: businessData.review_count,
      url: businessData.url
    };
  },
  ['yelp-business-stats'], // Cache key
  {
    revalidate: CACHE_REVALIDATE_TIME,
    tags: ['yelp-reviews']
  }
);

/**
 * Get all Yelp data for a page (Server Action)
 * Optimized for server-side rendering
 */
export const getYelpDataForPage = unstable_cache(
  async () => {
    try {
      const [businessData, featuredReviews, businessStats] = await Promise.all([
        getYelpBusinessReviews(),
        getFeaturedYelpReviews(3),
        getYelpBusinessStats()
      ]);

      return {
        businessData,
        featuredReviews,
        businessStats,
        timestamp: new Date().toISOString(),
        success: true
      };
    } catch (error) {
      console.error('[YelpService] Error fetching server-side data:', error);
      
      // Return fallback data
      return {
        businessData: mockYelpBusinessData,
        featuredReviews: mockYelpBusinessData.reviews.slice(0, 3),
        businessStats: {
          rating: mockYelpBusinessData.rating,
          reviewCount: mockYelpBusinessData.review_count,
          url: mockYelpBusinessData.url
        },
        timestamp: new Date().toISOString(),
        success: false,
        error: 'Failed to fetch live data, showing cached results'
      };
    }
  },
  ['yelp-page-data'], // Cache key
  {
    revalidate: CACHE_REVALIDATE_TIME,
    tags: ['yelp-reviews']
  }
);

/**
 * Revalidate Yelp cache manually (useful for webhooks or admin actions)
 */
export async function revalidateYelpCache() {
  const { revalidateTag } = await import('next/cache');
  revalidateTag('yelp-reviews');
}

// Type for the server action data return
export type YelpPageData = Awaited<ReturnType<typeof getYelpDataForPage>>; 
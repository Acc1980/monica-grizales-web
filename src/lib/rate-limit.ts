const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;

export function rateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 1000) {
    Array.from(rateLimitMap.entries()).forEach(([key, value]) => {
      if (now > value.resetTime) rateLimitMap.delete(key);
    });
  }

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  entry.count++;

  if (entry.count > MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}

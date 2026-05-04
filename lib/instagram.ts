export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  thumbnail_url?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
  permalink: string;
}

export async function getInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const fields = 'id,caption,media_url,thumbnail_url,media_type,timestamp,permalink';
  const url =
    `https://graph.instagram.com/me/media` +
    `?fields=${fields}&limit=${limit}&access_token=${token}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return (json.data ?? []) as InstagramPost[];
  } catch {
    return [];
  }
}

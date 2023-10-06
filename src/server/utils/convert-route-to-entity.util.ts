const mapping: Record<string, string> = {
  genres: 'genre',
  media: 'media',
  'media-genres': 'media_genre',
  organizations: 'organization',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

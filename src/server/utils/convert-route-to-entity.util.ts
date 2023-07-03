const mapping: Record<string, string> = {
  appointments: 'appointment',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

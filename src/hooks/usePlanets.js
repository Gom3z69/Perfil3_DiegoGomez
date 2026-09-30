import useFetch from './useFetch';

const API_URL = 'https://dragonball-api.com/api/planets?limit=50';

export default function usePlanets() {
  const { data, loading, error, reload } = useFetch(API_URL);
  const planets = (data?.items ?? []).map((p) => ({
    ...p,
    status: p.isDestroyed ? 'Destruido' : 'Intacto',
  }));
  const destroyed = planets.filter((p) => p.isDestroyed).length;

  return { planets, destroyed, loading, error, reload };
}

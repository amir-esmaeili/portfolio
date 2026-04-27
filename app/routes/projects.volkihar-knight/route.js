export const loader = () => {
  throw new Response('Not Found', { status: 404 });
};

export { VolkiharKnight as default, meta } from './volkihar-knight';

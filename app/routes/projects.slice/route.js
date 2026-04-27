export const loader = () => {
  throw new Response('Not Found', { status: 404 });
};

export { Slice as default, meta } from './slice';

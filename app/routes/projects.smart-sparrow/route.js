export const loader = () => {
  throw new Response('Not Found', { status: 404 });
};

export { SmartSparrow as default, meta } from './smart-sparrow';

export default async () => {
  return new Response('Hola Mundo desde get products', {
    headers: { 'content-type': 'text/plain' },
  });
};
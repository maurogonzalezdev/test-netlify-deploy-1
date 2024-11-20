export default async () => {
  return new Response('Hola Mundo', {
    headers: { 'content-type': 'text/plain' },
  });
};
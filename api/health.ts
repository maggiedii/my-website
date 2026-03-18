export const runtime = 'nodejs';

const jsonHeaders = {
  'content-type': 'application/json; charset=utf-8',
};

export default {
  fetch(_request: Request) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: jsonHeaders,
    });
  },
};

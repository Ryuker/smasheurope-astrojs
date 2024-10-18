import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, request }) => {
  console.log('Get event by slug request received');
  const eventId = params.eventId;

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/events';
  const uri = `${api_endpoint}/${eventId}`;
  const response = await fetch(uri);
  const eventData = await response.json();

  const data = eventData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr);
}
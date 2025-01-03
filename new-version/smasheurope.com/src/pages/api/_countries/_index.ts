import type { APIRoute } from "astro"


// Get all events handler, returns all events from the api_endpoint
export const GET: APIRoute = async ({ params, request }) => {
  console.log('Get request received');

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/api/countries';
  const uri = `${api_endpoint}`;
  const response = await fetch(uri);
  const countriesData = await response.json();

  const data = countriesData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr, {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

// Post new event, adds the new event to the api_endpoint and returns the new event that created
export const POST: APIRoute = async ({ params, request }) => {
  console.log('Post request received');

  const newEvent = await request.json();

  // Fetch the data from the external API
  const api_endpoint = 'http://localhost:5000/api/countries';
  const uri = `${api_endpoint}`;
  const response = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(newEvent)
  });

  const countryData = await response.json();

  const data = countryData;

  const dataStr = JSON.stringify(data);

  return new Response(dataStr, {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}


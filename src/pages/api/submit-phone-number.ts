import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const formData = await request.json();
  const mobilePhone = formData.mobilePhone;

  try {
    const response = await fetch(
      'https://api.project-broadcast.appmixer.cloud/flows/b4aaaceb-0caf-4fc3-83c4-9a004510a877/components/0ca506ec-145c-4c8c-bf75-33b266fb2da8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobilePhone }),
      }
    );

    if (!response.ok) {
      return new Response(null, {
        status: 500,
        statusText: 'Failed to submit phone number',
      });
    }

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error('Error submitting phone number:', error);
    return new Response(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
};

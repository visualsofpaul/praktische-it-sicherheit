import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
const axios = require("axios").default;

// Components
import Navbar from "@components/Navbar";

const getAccessToken = async () => {
  // Options for the POST request
  const options = {
    method: "POST",
    url: `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: `${process.env.AUTH0_CLIENT_ID}`,
      client_secret: `${process.env.AUTH0_CLIENT_SECRET}`,
      audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
    }),
  };

  // Send the POST request
  try {
    const response = await axios.request(options);
    return await response.data.access_token;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get access token");
  }
};

const getUserMetadata = async (accessToken: string, userId: string) => {
  const response = await fetch(
    `https://dev-praktische-it-sicherheit.eu.auth0.com/api/v2/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    console.error(response);
  }

  const data = await response.json();
  return await data.user_metadata;
};

export default async function Dashboard() {
  // Get the session
  const session = await getSession();

  // Redirect to the login page if the user is not logged in
  if (!session) {
    redirect("/api/auth/login");
  }

  // Get the user from the session
  const { user } = session;

  // Get the access token
  const accessToken = await getAccessToken();

  // Get the user metadata
  const user_metadata = await getUserMetadata(accessToken, user.sub);

  // Return the dashboard
  return (
    <main className="bg-secondary-50 min-h-dvh flex flex-col gap-6 items-center justify-center py-32">
      <Navbar />
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="w-full max-w-3xl flex flex-col gap-4">
        {user_metadata &&
          user_metadata.users.map((user: any) => (
            <li
              key={user.email}
              className="flex gap-2 bg-secondary-100 p-2 rounded-md hover:scale-105 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <img
                className="h-12 w-12 flex-none rounded-full bg-secondary-50"
                src={user.profile_picture}
              />
              <article className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-secondary-950">
                  {user.full_name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-secondary-500">
                  {user.email}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-secondary-500">
                  {user.tel}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-secondary-500">
                  {user.address}
                </p>
              </article>
            </li>
          ))}
      </ul>
    </main>
  );
}

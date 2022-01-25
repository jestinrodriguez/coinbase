import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "uwd17iln",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skrl9fQkgoondHFbDs2MopH7rTHlNZdhOEuAZxaWFGBelz3U4mSVVk93hORWacgb63GcuqGSeI2YUeom5vEF0SJpsklr7cM4h1pL6ntM57mSzLRKawiniourOnqbQ5hBTxVZeE9Ezg1vPZZmLilviNgeAulf5jtkAiAMOWcucXO3xrDThpMd",
  useCdn: false,
});

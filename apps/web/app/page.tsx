import { client } from "@repo/db/client"
export default async function Home() {
const users = await client.user.findMany();
  return (
    <div>
    {JSON.stringify(users)}

    </div>
  );
}

// export const revalidate = 60 // it will rebuild every second to revalidate if there is new entry in the database
export const dynamic = 'force-dynamic' // this will enforce the dynamic-ness it will no-more generated as static site

import { client } from "@repo/prisma/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      First name hehehahaa:
      {user?.username}
      password:
      {user?.id}
    </div>
  );
}

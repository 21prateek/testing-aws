import { client } from "@repo/prisma/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      First name hahaa:
      {user?.username}
      password:
      {user?.id}
    </div>
  );
}

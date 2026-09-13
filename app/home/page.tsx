// Remove "use client" so this runs as a Server Component
import { getSession } from "@/lib/session";
import clientPromise from "@/lib/db";
import Card from "@/components/card";
import Navbar from "@/components/navbar";
import Chart from "@/components/chart";
import profile from "@/public/images/wr.png";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page() {
  // Await the session data
  const session = await getSession();

  // Protect the route if no session exists
  if (!session) {
    redirect("/login");
  }

  const client = await clientPromise;
  const db = client.db("spell-chess");
  const user = await db
    .collection("users")
    .findOne({ username: session.username }, { projection: { rating: 1 } });
  const rating = user?.rating;
  console.log(session.userId, session.username);
  console.log(rating);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-12 mt-12">
        <Card className="flex-row gap-6">
          <div className="relative shrink-0">
            <Image
              className="h-20 w-20 rounded-full object-cover ring-2 ring-emerald-500 bg-neutral-800"
              src={profile}
              alt={
                session?.username
                  ? `${session.username}'s profile`
                  : "Profile Pic"
              }
              width={80}
              height={80}
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-neutral-900 rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-neutral-100 tracking-tight">
              {session?.username ?? "Player"}
            </h3>
            <div className="flex flex-row gap-6">
              <span>Rapid: {rating?.rapid}</span>
              <span>Blitz: {rating?.blitz}</span>
              <span>Bullet: {rating?.bullet}</span>
            </div>
          </div>
        </Card>

        <Card>
          <Chart />
        </Card>
      </div>
    </>
  );
}

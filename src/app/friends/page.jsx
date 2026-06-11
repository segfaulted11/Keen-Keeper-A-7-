import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const Friends = async () => {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const data = await fs.readFile(filePath, "utf8");
  const friends = JSON.parse(data);//array of objects

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold">Your Friends</h2>
      <div className="grid grid-cols-4 gap-4">
        {friends.map((friend) => {
          return (
            <Link href={`friends/${friend.id}`} className="card bg-base-100 w-76 shadow-sm cursor-pointer hover:scale-105 hover:bg-primary transition" key={friend.id}>
              <figure>
                <Image
                  src={friend.picture}
                  alt="img"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                ></Image>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{friend.name}</h2>
                <p>{friend.days_since_contact}</p>

                <div className="flex gap-3">
                  {friend.tags.map((tag, index) => {
                    return (
                      <div className="badge badge-secondary" key={index}>
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <div
                  className={`badge mx-auto
                     ${
                       friend.status === "on-track"
                         ? "badge-warning"
                         : friend.status === "overdue"
                           ? "badge-error"
                           : "badge-success"
                     }
                      `}
                >
                  {friend.status}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
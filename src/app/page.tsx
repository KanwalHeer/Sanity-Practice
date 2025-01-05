import { client } from "@/sanity/lib/client";
import React from "react";

interface nameTypee {
  name: string;
  _id: string;
}
export default async function Home() {
  const nameData = await client.fetch(`
  *[_type == "nameSchema"]{
  _id,
  name
}
`);
  // console.log(nameData.name,"nameData");

  return (
    <div>
      <h1 className="text-">
        {nameData.map((n: nameTypee) => {
          return (
            <div key={n._id}>
              <h1>{n.name}</h1>
            </div>
          );
        })}
      </h1>
    </div>
  );
}

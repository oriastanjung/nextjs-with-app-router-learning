import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";


export const metadata = {
  title : "Reviews"
}


export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((item) => (
          <li className="bg-white w-80 rounded shadow hover:shadow-xl">
            <Link href={`/reviews/${item.slug}`}>
              <img
                src={item.image}
                alt=""
                width={360}
                height={180}
                className="rounded-t"
              />
              <h2 className="font-semibold font-orbitron py-1 text-center">
                {item.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug: slug }));
}

// dynamic metadata by its params 
export async function generateMetadata(props){
  const review = await getReview(props.params.slug);
  return {
    title : review.title
  }
}

export default async function ReviewPage(props) {
  const review = await getReview(props.params.slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <img
        src={review.image}
        alt=""
        width={360}
        height={360}
        className="rounded mb-2"
      />
      <article
        className="prose max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
}

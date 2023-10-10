import Heading from "@/components/Heading";
import { ShareButtons } from "@/components/ShareButtons";
import  ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug: slug }));
}

// dynamic metadata by its params
export async function generateMetadata(props) {
  const review = await getReview(props.params.slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage(props) {
  const review = await getReview(props.params.slug);
  
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-center">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
        {/* <ShareButtons /> */}
      </div>
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

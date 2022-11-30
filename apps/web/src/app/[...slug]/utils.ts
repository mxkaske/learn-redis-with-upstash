import { allPages } from "contentlayer/generated";
import { notFound } from "next/navigation";

export function getPagefromSlug(slug: string[]) {
  const page = allPages.find((c) => {
    console.log(c.url);
    return c.url === `/${slug.join("/")}`;
  });
  if (!page) {
    return notFound();
  }
  return page;
}

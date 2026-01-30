import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import { News } from "@/components/news-list";

export default async function ImagePage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const newsItem = await getNewsItem(id) as News;
    if (!newsItem) {
        notFound();
    }
    return <div className="fullscreen-image"><img src={`/images/news/${newsItem.image}`} alt={newsItem.title} /></div>;
}
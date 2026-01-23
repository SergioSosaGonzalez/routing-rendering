import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import ModalBack from "./ModalBack";

export default async function ImagePage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === id);
    if (!newsItem) {
        notFound();
    }
    return <>
        <ModalBack />
        <dialog className="modal" open>
            <div className="fullscreen-image"><img src={`/images/news/${newsItem.image}`} alt={newsItem.title} /></div>
        </dialog>
    </>;
}
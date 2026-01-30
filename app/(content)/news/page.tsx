import NewsList, { News } from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
    const news = await getAllNews() as News[];

    return (
        <>
            <h1>News page</h1>
            <NewsList news={news} />
        </>
    );
}

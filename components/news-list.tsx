import Link from 'next/link';

export interface News {
    id: string;
    title: string;
    date: string;
    image: string;
    slug: string;
    content?: string;
}

interface NewsListProps {
    news: News[];
}

export default function NewsList({ news }: NewsListProps) {
    return (
        <ul className="news-list">
            {news.map((newsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                        <span>{newsItem.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

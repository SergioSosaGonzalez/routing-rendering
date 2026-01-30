import NewsList, { News } from "@/components/news-list";
import { getNewsForYear, getAvailableNewsYears, getNewsForYearAndMonth, getAvailableNewsMonths } from "@/lib/news";
import Link from "next/link";

export default async function ArchiveYearPage({ params }: { params: { filter: number[] } }) {
    const { filter } = await params;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    let news: News[] = [];
    let links = await getAvailableNewsYears();
    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(+selectedYear) as News[];
        links = getAvailableNewsMonths(+selectedYear);
    }
    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(+selectedYear, +selectedMonth) as News[];
        links = []
    }

    let newsContent = <p>No news found for this year.</p>;
    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }
    const availableYears = await getAvailableNewsYears();
    const availableYearsWithSelectedYears = await getAvailableNewsMonths(+selectedYear);
    if (
        (selectedYear && !availableYears.includes(+selectedYear)) ||
        (selectedMonth && !availableYearsWithSelectedYears.includes(+selectedMonth))) {
        throw new Error("Invalid filter");
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
}
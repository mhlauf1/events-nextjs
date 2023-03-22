import Image from 'next/image'
import Link from "next/link";

const EventCatPage = ({ data, pageName }) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            {data.map((event) => (
                <Link key={event.id} href={`/events/${event.city}/${event.id}`}>
                    <Image
                        src={event.image}
                        width={300}
                        alt=''
                        height={300}
                    />
                    <h2>{event.title}</h2>
                </Link>

            ))}
        </div>
    )
}

export default EventCatPage

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map((event) => {
        return {
            params: {
                cat: event.id.toString(),
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const { allEvents } = await import('/data/data.json');

    const data = allEvents.filter((event) => event.city === id);

    return { props: { data, pageName: id } };
}
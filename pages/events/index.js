import Image from 'next/image'
import Link from 'next/link'


const Events = ({ data }) => {
    return (
        <div>
            <h1>Events page</h1>
            <div>
                {data.map((event) => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                        <Image
                            src={event.image}
                            width={300}
                            alt={event.description}
                            height={300}
                        />
                        <h2>{event.title}</h2>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Events

export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');

    return {
        props: {
            data: events_categories
        }
    }
}
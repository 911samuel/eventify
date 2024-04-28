import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
<<<<<<< HEAD
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Hosting, Connecting, Celebrating: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Unlock Knowledge, Grow Skills, and Expand Networks in Our Vibrant
              Community of Experts.
=======
      {/* Hero section */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-10 md:py-20">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Discover, Connect, Celebrate: Events Made Easy!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Explore and Learn from Thousands of Events Hosted by Industry
              Experts.
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
<<<<<<< HEAD
          Trust by <br /> Thousands of Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
=======
          Trusted by <br /> Thousands of Event Organizers
        </h2>

        <div className="flex flex-col md:flex-row gap-5 w-full">
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
<<<<<<< HEAD
          emptyStateSubtext="Come back later"
=======
          emptyStateSubtext="Check back later for more exciting events!"
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
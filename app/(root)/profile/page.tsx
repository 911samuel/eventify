import React from "react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="text-center py-10">
        Please sign in to view your profile.
      </div>
    );
  }

  const userId = typeof user.publicMetadata.userId === "string" ? user.publicMetadata.userId : null;

  if (!userId) {
    return (
      <div className="text-center py-10">
        Unable to determine user ID. Please sign in again.
      </div>
    );
  }

  // Parse pagination from URL
  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  // Fetch user-specific data
  const orders = await getOrdersByUser({ userId, page: ordersPage });
  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size="lg" className="hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;

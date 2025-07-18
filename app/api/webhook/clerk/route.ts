import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createUser, deleteUser, updateUser } from '@/lib/actions/user.actions'
import { clerkClient } from "@clerk/clerk-sdk-node";
import { NextResponse } from 'next/server'

export async function POST(req: Request) {

  const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  console.log("svix-id:", svix_id);
  console.log("svix-timestamp:", svix_timestamp);
  console.log("svix-signature:", svix_signature);


  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.log('Error occurred -- no svix headers');
    return new Response('Error occurred -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);
  console.log("Webhook payload:", payload);


  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    })
  }

  console.log('Webhook verified successfully:', evt);

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log('Received event type:', eventType);

  if(eventType === 'user.created') {
    console.log('Handling user created event:', evt.data);

    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username ?? "",
      firstName: first_name ?? "",
      lastName: last_name ?? "",
      photo: image_url,
    };

    console.log('Creating user:', user);

    const newUser = await createUser(user);

    console.log('User created:', newUser);

    if(newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id
        }
      })
    }

    return NextResponse.json({ message: 'OK', user: newUser })
  }

  if (eventType === 'user.updated') {
    console.log('Handling user updated event:', evt.data);

    const {id, image_url, first_name, last_name, username } = evt.data

    const user = {
      firstName: first_name ?? "",
      lastName: last_name ?? "",
      username: username!,
      photo: image_url,
    };

    console.log('Updating user:', user);

    const updatedUser = await updateUser(id, user)

    console.log('User updated:', updatedUser);

    return NextResponse.json({ message: 'OK', user: updatedUser })
  }

  if (eventType === 'user.deleted') {
    console.log('Handling user deleted event:', evt.data);

    const { id } = evt.data

    const deletedUser = await deleteUser(id!)

    console.log('User deleted:', deletedUser);

    return NextResponse.json({ message: 'OK', user: deletedUser })
  }

  return new Response('', { status: 200 })
}

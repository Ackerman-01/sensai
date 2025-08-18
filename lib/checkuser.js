import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
const loggedInUser = await db.user.findUnique({
  where: {
    clerkUserId: user.id,
  },
});

// If Clerk ID not found, try matching by email
if (!loggedInUser) {
  const existingByEmail = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  if (existingByEmail) {
    // Update old record with new Clerk ID
    return await db.user.update({
      where: { email: user.emailAddresses[0].emailAddress },
      data: { clerkUserId: user.id },
    });
  }

  // No match, create new user
  const name = `${user.firstName} ${user.lastName}`;

  return await db.user.create({
    data: {
      clerkUserId: user.id,
      name,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });
}

return loggedInUser;
  } catch (error) {
    console.log(error.message);
  }
};
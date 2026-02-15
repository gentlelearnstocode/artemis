import clientPromise from '@repo/db';
import { USER_COLLECTION, User } from '@repo/db/schema';

async function main() {
  console.log('Connecting to MongoDB...');
  const client = await clientPromise;
  const db = client.db();
  console.log('Connected!');

  const collection = db.collection<User>(USER_COLLECTION);

  console.log('Creating test user...');
  const newUser: User = {
    email: `test-${Date.now()}@example.com`,
    name: 'Test User',
    createdAt: new Date(),
  };
  const result = await collection.insertOne(newUser);
  console.log('User created:', result.insertedId);

  console.log('Fetching user...');
  const foundUser = await collection.findOne({ _id: result.insertedId });
  console.log('User found:', foundUser);

  console.log('Deleting user...');
  await collection.deleteOne({ _id: result.insertedId });
  console.log('User deleted');

  // We don't close the client here because it might be shared,
  // but for a standalone script, we can force exit.
  process.exit(0);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});

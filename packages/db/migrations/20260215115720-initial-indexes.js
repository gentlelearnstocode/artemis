module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('video_clips').createIndex({ userId: 1 });
    await db.collection('video_clips').createIndex({ createdAt: -1 });
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    try {
      await db.collection('users').dropIndex('email_1');
    } catch (e) {
      console.warn('Index email_1 not found, skipping');
    }
    try {
      await db.collection('video_clips').dropIndex('userId_1');
    } catch (e) {
      console.warn('Index userId_1 not found, skipping');
    }
    try {
      await db.collection('video_clips').dropIndex('createdAt_-1');
    } catch (e) {
      console.warn('Index createdAt_-1 not found, skipping');
    }
  },
};

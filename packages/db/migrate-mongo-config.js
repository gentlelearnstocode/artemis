const path = require('path');
const fs = require('fs');

// Try to load env from apps/web/.env.local if MONGODB_URI is not set
if (!process.env.MONGODB_URI) {
  const envPath = path.resolve(__dirname, '../../apps/web/.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/^MONGODB_URI=(.*)$/m);
    if (match) {
      process.env.MONGODB_URI = match[1].trim().replace(/^["']|["']$/g, '');
    }
  }
}

// Parse database name from MONGODB_URI
let databaseName = 'artemis';
if (process.env.MONGODB_URI) {
  try {
    // Basic regex to find the database name in the URI: mongodb://host:port/databaseName?options
    const match = process.env.MONGODB_URI.match(/\/([^/?]+)(\?|$)/);
    if (match && match[1] !== 'undefined') {
      databaseName = match[1];
    }
  } catch (e) {
    // Keep default
  }
}

const config = {
  mongodb: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/artemis',
    databaseName: databaseName,
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'migrations',
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: 'commonjs',
};

module.exports = config;

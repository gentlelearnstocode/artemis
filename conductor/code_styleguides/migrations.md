# Database Migrations Guide

Artemis uses `migrate-mongo` for managing MongoDB schema changes and index creation.

## Location
Migrations are located in `packages/db/migrations/`.

## Workflow

### 1. Creating a Migration
To create a new migration, run the following command from the root or inside `packages/db`:
```bash
bun --filter @repo/db migrate:create <migration-name>
```
This will generate a new timestamped file in `packages/db/migrations/`.

### 2. Implementing the Migration
The migration file exports two functions: `up` and `down`.
- **`up(db, client)`**: Define the changes to apply (e.g., creating indexes, migrating data).
- **`down(db, client)`**: Define how to revert the changes.

Example:
```javascript
module.exports = {
  async up(db, client) {
    await db.collection('my_collection').createIndex({ field: 1 });
  },
  async down(db, client) {
    await db.collection('my_collection').dropIndex('field_1');
  }
};
```

### 3. Running Migrations
To apply pending migrations:
```bash
bun --filter @repo/db migrate:up
```

### 4. Reverting Migrations
To revert the last applied migration:
```bash
bun --filter @repo/db migrate:down
```

### 5. Checking Status
To see the status of migrations:
```bash
bun --filter @repo/db migrate:status
```

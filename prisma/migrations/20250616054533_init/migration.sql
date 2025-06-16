/*
  Warnings:

  - The values [PENDING,IN_PROGRESS,DONE] on the enum `ServiceStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ServiceStatus_new" AS ENUM ('pending', 'in_progress', 'done');
ALTER TABLE "serviceRecords" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "serviceRecords" ALTER COLUMN "status" TYPE "ServiceStatus_new" USING ("status"::text::"ServiceStatus_new");
ALTER TYPE "ServiceStatus" RENAME TO "ServiceStatus_old";
ALTER TYPE "ServiceStatus_new" RENAME TO "ServiceStatus";
DROP TYPE "ServiceStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "serviceRecords" ALTER COLUMN "serviceDate" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "status" DROP DEFAULT;

/*
  Warnings:

  - Added the required column `image` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Menu_name_key";

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "image" TEXT NOT NULL;

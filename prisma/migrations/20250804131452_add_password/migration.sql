/*
  Warnings:

  - You are about to drop the column `hashedpassword` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `hashedpassword`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL;

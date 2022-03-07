/*
  Warnings:

  - You are about to drop the column `fname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Made the column `notificationCategoryId` on table `notification` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `notification_notificationCategoryId_fkey`;

-- AlterTable
ALTER TABLE `institution` ADD COLUMN `status` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `notification` ADD COLUMN `expiresAt` DATETIME NOT NULL,
    ADD COLUMN `status` VARCHAR(255) NOT NULL,
    MODIFY `notificationCategoryId` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `fname`,
    DROP COLUMN `lname`,
    DROP COLUMN `name`,
    ADD COLUMN `fullName` VARCHAR(255) NULL,
    ADD COLUMN `status` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `notification_notificationCategoryId_fkey` FOREIGN KEY (`notificationCategoryId`) REFERENCES `notificationCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

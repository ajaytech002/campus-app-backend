/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `notifications` DROP FOREIGN KEY `notifications_createdBy_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_institutionId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_userCategoryId_fkey`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userCategoryId` VARCHAR(191) NULL,
    `institutionId` INTEGER NULL,
    `rollNumber` VARCHAR(255) NULL,
    `collegeId` INTEGER NULL,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `fname` VARCHAR(255) NULL,
    `lname` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `avatar` VARCHAR(512) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_institutionId_fkey` FOREIGN KEY (`institutionId`) REFERENCES `institutions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_userCategoryId_fkey` FOREIGN KEY (`userCategoryId`) REFERENCES `userCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `userCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_userCategoryId_fkey`;

-- DropTable
DROP TABLE `userCategories`;

-- CreateTable
CREATE TABLE `userCategory` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_userCategoryId_fkey` FOREIGN KEY (`userCategoryId`) REFERENCES `userCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

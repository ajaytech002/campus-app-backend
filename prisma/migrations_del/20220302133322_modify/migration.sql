-- AlterTable
ALTER TABLE `notification` ADD COLUMN `notificationCategoryId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `notificationCategory` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `notification_notificationCategoryId_fkey` FOREIGN KEY (`notificationCategoryId`) REFERENCES `notificationCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

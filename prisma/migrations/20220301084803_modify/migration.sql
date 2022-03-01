-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- DropIndex
DROP INDEX `users_phone_key` ON `users`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `avatar` VARCHAR(512) NULL,
    ADD COLUMN `collegeId` INTEGER NULL,
    ADD COLUMN `fname` VARCHAR(255) NULL,
    ADD COLUMN `institutionId` INTEGER NULL,
    ADD COLUMN `lname` VARCHAR(255) NULL,
    ADD COLUMN `rollNumber` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(255) NULL,
    MODIFY `name` VARCHAR(255) NULL,
    MODIFY `phone` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `Institution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_institutionId_fkey` FOREIGN KEY (`institutionId`) REFERENCES `Institution`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `yourEmail` VARCHAR(191) NOT NULL,
    `yourName` VARCHAR(191) NOT NULL,
    `friendName` VARCHAR(191) NOT NULL,
    `friendEmail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

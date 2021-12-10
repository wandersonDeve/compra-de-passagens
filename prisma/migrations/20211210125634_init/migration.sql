-- CreateTable
CREATE TABLE `Companhias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Companhias_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Voos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `saida` VARCHAR(191) NOT NULL,
    `chegada` VARCHAR(191) NOT NULL,
    `aeroportoOrigen` VARCHAR(191) NOT NULL,
    `aeroportoDestino` VARCHAR(191) NOT NULL,
    `quantidadeAssentos` INTEGER NOT NULL,
    `preco` DOUBLE NOT NULL,
    `companhiaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vooId` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `vooId` INTEGER NOT NULL,
    `assentos` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Voos` ADD CONSTRAINT `Voos_companhiaId_fkey` FOREIGN KEY (`companhiaId`) REFERENCES `Companhias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assento` ADD CONSTRAINT `Assento_vooId_fkey` FOREIGN KEY (`vooId`) REFERENCES `Voos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_vooId_fkey` FOREIGN KEY (`vooId`) REFERENCES `Voos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

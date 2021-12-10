/*
  Warnings:

  - You are about to alter the column `saida` on the `voos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `chegada` on the `voos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `compra` ADD COLUMN `horaCompra` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `voos` MODIFY `saida` DATETIME(3) NOT NULL,
    MODIFY `chegada` DATETIME(3) NOT NULL;

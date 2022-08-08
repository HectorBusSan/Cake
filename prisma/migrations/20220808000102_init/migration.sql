-- CreateTable
CREATE TABLE `pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigop` VARCHAR(250) NOT NULL,
    `idproducto` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `total` DOUBLE NOT NULL,
    `fechai` DATETIME(3) NOT NULL,
    `fechaf` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

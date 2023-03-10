-- CreateTable
CREATE TABLE `pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigop` BOOLEAN NOT NULL DEFAULT false,
    `codcake` VARCHAR(250) NOT NULL,
    `idproducto` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `total` DOUBLE NOT NULL,
    `fechai` DATETIME(3) NOT NULL,
    `fechaf` DATETIME(3) NOT NULL,
    `username` VARCHAR(250) NOT NULL,
    `completo` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `pedido_codcake_key`(`codcake`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

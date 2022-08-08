-- CreateTable
CREATE TABLE `productos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(250) NOT NULL,
    `informacion` VARCHAR(250) NOT NULL,
    `imagen` VARCHAR(250) NOT NULL,
    `precio` DOUBLE NOT NULL,

    UNIQUE INDEX `productos_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

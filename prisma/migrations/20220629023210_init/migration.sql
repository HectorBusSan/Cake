-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(250) NOT NULL,
    `ApellidoP` VARCHAR(250) NOT NULL,
    `ApellidoM` VARCHAR(250) NOT NULL,
    `Correo` VARCHAR(250) NOT NULL,
    `Password` VARCHAR(250) NOT NULL,

    UNIQUE INDEX `usuarios_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

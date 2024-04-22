-- MySQL Script generated by MySQL Workbench
-- Mon Apr 22 14:38:21 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema modulasys
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema modulasys
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `modulasys` DEFAULT CHARACTER SET utf8 ;
USE `modulasys` ;

-- -----------------------------------------------------
-- Table `modulasys`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `modulasys`.`users` ;

CREATE TABLE IF NOT EXISTS `modulasys`.`users` (
  `userdid` VARCHAR(20) NOT NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`userdid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `modulasys`.`inventarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `modulasys`.`inventarios` ;

CREATE TABLE IF NOT EXISTS `modulasys`.`inventarios` (
  `idinventarios` INT NOT NULL AUTO_INCREMENT,
  `nombreProducto` VARCHAR(45) NOT NULL,
  `existenciaProducto` INT NOT NULL,
  PRIMARY KEY (`idinventarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `modulasys`.`empleados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `modulasys`.`empleados` ;

CREATE TABLE IF NOT EXISTS `modulasys`.`empleados` (
  `idempleado` INT NOT NULL AUTO_INCREMENT,
  `nombreEmpleado` VARCHAR(45) NOT NULL,
  `apellidEmpleado` VARCHAR(45) NOT NULL,
  `direaccionEmpleado` VARCHAR(45) NOT NULL,
  `urlFotoEmpleado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idempleado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `modulasys`.`ventas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `modulasys`.`ventas` ;

CREATE TABLE IF NOT EXISTS `modulasys`.`ventas` (
  `idVenta` INT NOT NULL AUTO_INCREMENT,
  `empleados_idempleado` INT NOT NULL,
  `inventarios_idinventarios` INT NOT NULL,
  `cantidadVendida` INT NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`idVenta`),
  INDEX `fk_inventarios_has_empleados_empleados1_idx` (`empleados_idempleado` ASC) VISIBLE,
  INDEX `fk_inventarios_has_empleados_inventarios_idx` (`inventarios_idinventarios` ASC) VISIBLE,
  CONSTRAINT `fk_inventarios_has_empleados_inventarios`
    FOREIGN KEY (`inventarios_idinventarios`)
    REFERENCES `modulasys`.`inventarios` (`idinventarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inventarios_has_empleados_empleados1`
    FOREIGN KEY (`empleados_idempleado`)
    REFERENCES `modulasys`.`empleados` (`idempleado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
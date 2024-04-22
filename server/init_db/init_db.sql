-- MySQL Script generated by MySQL Workbench
-- Sun Apr 21 21:39:15 2024
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
  `userdid` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`userdid`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

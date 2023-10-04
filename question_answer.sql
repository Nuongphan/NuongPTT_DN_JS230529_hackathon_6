-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: question
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `questionId` int NOT NULL,
  `is_answer` bit(1) NOT NULL,
  `content` longtext NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `questionId` (`questionId`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (5,1,_binary '\0','Đông TiMo','2023-10-04'),(6,1,_binary '\0','Nhật Bản','2023-10-04'),(7,1,_binary '','Vatican','2023-10-04'),(8,1,_binary '\0','Bồ Đồ Nha','2023-10-04'),(9,2,_binary '','Scandinavia ','2023-10-04'),(10,2,_binary '\0','everest','2023-10-04'),(11,2,_binary '\0','andes','2023-10-04'),(12,2,_binary '\0','himalaya','2023-10-04'),(13,3,_binary '','Việt Nam ','2023-10-04'),(14,3,_binary '\0','Bỉ','2023-10-04'),(15,3,_binary '\0','Mỹ','2023-10-04'),(16,3,_binary '\0','Trung Của','2023-10-04'),(17,4,_binary '','Vụ Thái Giám','2023-10-04'),(18,4,_binary '\0','Đồng Tổng Quản','2023-10-04'),(19,4,_binary '\0','Không một ai','2023-10-04'),(20,4,_binary '\0','vô địch','2023-10-04'),(21,5,_binary '\0','Không em','2023-10-04'),(22,5,_binary '\0','Âm điểm','2023-10-04'),(23,5,_binary '','Nhất em rồi ','2023-10-04'),(24,5,_binary '\0','Tôi chịu','2023-10-04'),(25,6,_binary '\0','kệ mịe em ','2023-10-04'),(26,6,_binary '\0','là con ông nội mày ','2023-10-04'),(27,6,_binary '','Tôi chịu','2023-10-04'),(28,6,_binary '\0','về hỏi mẹ em ấy','2023-10-04');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-04 17:42:32


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- --------------------------------------------------------

--
-- Stable structure students
--


CREATE TABLE IF NOT EXISTS students (
  id int(11) NOT NULL AUTO_INCREMENT,
  address VARCHAR(255) NOT NULL,
	age VARCHAR(255) NOT NULL,
	emergency_contact VARCHAR(255) NOT NULL,
	ic VARCHAR(255) NOT NULL,
	name VARCHAR(255) NOT NULL,
	phone VARCHAR(255) NOT NULL,
	sex VARCHAR(255) NOT NULL,
	student_class VARCHAR(255) NOT NULL,
	student_code VARCHAR(255) NOT NULL,
	year VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for tablecustomer
--

INSERT INTO students (id, address, age, emergency_contact, ic, name, phone, sex, student_class, student_code, year) VALUES
(1, 'DESA JAYA', '10', 'mum 0126651111', '001', 'student 001', '03-12345678', 'M', 'CLASS-BLUE', 'CODE_001', '4'),
(2, 'TAMAN MEGAH', '8', 'mother 0126652222', '002', 'student 002', '01212345678', 'F', 'CLASS-APPLE', 'CODE_002', '2'),
(3, 'PJ SS2', '11', 'mum 0126653333', '003', 'student 003', '019-12345611', 'M', 'CLASS-BANANA', 'CODE_003', '5');




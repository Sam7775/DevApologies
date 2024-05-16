CREATE DATABASE DevApologies;

USE DevApologies;

CREATE TABLE `Apologies` (
    http_code SMALLINT AUTO_INCREMENT UNIQUE, 
    tag VARCHAR(55), -- specify a length for VARCHAR
    message_apology VARCHAR(255), -- specify a length for VARCHAR
    PRIMARY KEY (http_code) -- setting http_code as the primary key
);

ALTER TABLE `Apologies` AUTO_INCREMENT = 700;


INSERT INTO `Apologies` (`tag`, `message_apology`) VALUES
( 'default apology','Probléme de bus USB'),


INSERT INTO `Apologies` ( http_code, tag, message_apology)
VALUES
(701,"Inexcusable","Meh"),
(702,"Inexcusable","Emacs"),
(703,"Inexcusable","Explosion"),
(704,"Inexcusable","Goto Fail"),
(705,"Inexcusable","I wrote the code and missed the necessary validation
by an oversight"),
(706,"Inexcusable","Delete Your Account"),
(707,"Inexcusable","Can't quit vi"),
(710,"Novelty Implementations","PHP"),
(711,"Novelty Implementations","Convenience Store"),
(712,"Novelty Implementations","NoSQL"),
(718,"Novelty Implementations","I am not a teapot"),
(719,"Novelty Implementations","Haskell"),
(720,"Edge Cases","Unpossible"),
(721,"Edge Cases","Known Unknowns"),
(722,"Edge Cases","Unknown Unknowns"),
(723,"Edge Cases","Tricky"),
(724,"Edge Cases","This line should be unreachable"),
(725,"Edge Cases","It works on my machine"),
(726,"Edge Cases","It's a feature, not a bug"),
(727,"Edge Cases","32 bits is plenty"),
(728,"Edge Cases","It works in my timezone"),
(730,"Fucking","Fucking npm"),
(731,"Fucking","Fucking Rubygems"),
(732,"Fucking","Fucking Unicode"),
(733,"Fucking","Fucking Deadlocks"),
(734,"Fucking","Fucking Deferreds"),
(736,"Fucking","Fucking Race Conditions"),
(735,"Fucking","Fucking IE"),
(737,"Fucking","FuckThreadsing"),
(738,"Fucking","Fucking Exactly-once Delivery"),
(739,"Fucking","Fucking Windows"),
(750,"Syntax Errors","Didn't bother to compile it"),
(753,"Syntax Errors","Syntax Error"),
(754,"Syntax Errors","Too many semi-colons"),
(755,"Syntax Errors","Not enough semi-colons"),
(756,"Syntax Errors","Insufficiently polite"),
(757,"Syntax Errors","Excessively polite"),
(759,"Syntax Errors","Unexpected `T_PAAMAYIM_NEKUDOTAYIM`"),
(761,"Substance","Hungover"),
(762,"Substance","Stoned"),
(763,"Substance","Under-Caffeinated"),
(764,"Substance","Over-Caffeinated"),
(765,"Substance","Railscamp");

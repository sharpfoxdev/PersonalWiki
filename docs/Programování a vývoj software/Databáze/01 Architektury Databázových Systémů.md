---
tags:
  - 
share: "true"
---

# 01 Architektury Databázových Systémů

## Konceptuální, Logická a Fyzická Úroveň Pohledů Na Data
![[Pasted image 20240206160008.png|Pasted image 20240206160008.png]]
### Konceptuální Úroveň

- **Definice:** Konceptuální úroveň poskytuje abstraktní pohled na celou databázi nezávisle na fyzických aspektech uložení dat. Je zaměřena na strukturu dat, jejich vztahy a omezení, než na to, jak jsou data skutečně uložena. Tato úroveň slouží jako most mezi reálným světem a logickou reprezentací dat v systému.
- **Hlavní Prvky:**
	- **Entity:** Základní objekty, které reprezentují skutečné nebo abstraktní věci světa, například 'Student', 'Předmět', nebo 'Učitel'.
	- **Atributy:** Vlastnosti nebo charakteristiky entit, které je popisují, jako 'Jméno', 'Věk', nebo 'Adresa'.
	- **Vztahy:** Popisují interakce mezi entitami, ukazují, jak jsou entity navzájem spojené. Může být jednoduchý ('Student' je 'zapsán' na 'Předmět') nebo složitý, s atributy vlastními vztahům.
- **Příklady:**
	- **ER Diagramy (Entity-Relationship):** Grafické znázornění konceptuálního modelu, kde entity jsou reprezentovány obdélníky, vztahy diamanty a atributy kruhy nebo ovály.
	- **Příklad ER Diagramu:** Model univerzitního systému může zahrnovat entity jako 'Student', 'Předmět', a 'Učitel', s vztahy jako 'zapsán' (mezi 'Studentem' a 'Předmětem') a 'výuka' (mezi 'Učitelem' a 'Předmětem').
- **Význam:**
	- Konceptuální úroveň je klíčová pro pochopení struktury databáze a pro plánování její struktury a funkcí, než se přistoupí k jejímu fyzickému návrhu. Umožňuje designérům a uživatelům komunikovat o struktuře databáze bez potřeby technických detailů o uložení dat.

### Logická Úroveň

- **Definice:** Logická úroveň popisuje strukturu databáze na úrovni schématu, nezávisle na fyzickém uložení dat. Tato úroveň se zaměřuje na modelování datových struktur, včetně tabulek (relací), sloupců (atributů), klíčů a vztahů mezi datovými objekty, pomocí databázového modelu, nejčastěji relačního.
- **Hlavní Prvky:**
	- **Tabulky (Relace):** Základní struktura pro uložení a organizaci dat ve formě řádků a sloupců. Každý řádek reprezentuje jednu instanci entity a sloupce atributy této entity.
	- **Primární Klíče:** Unikátní identifikátor pro každý řádek v tabulce, umožňující jednoznačnou identifikaci každé entity.
	- **Cizí Klíče:** Atribut nebo soubor atributů v jedné tabulce, které odkazují na primární klíč v jiné tabulce, sloužící k definování vztahů mezi tabulkami.
	- **Normalizace:** Proces organizace atributů a tabulek databáze tak, aby minimalizoval redundanci a závislosti. Pomáhá zlepšit logickou konzistenci a efektivitu databáze.
- **Příklady:**
	- **Příklad Tabulky:** Tabulka `Studenti` s atributy `ID_Studenta` (primární klíč), `Jméno`, `Příjmení`, a `Věk`.
	- **Vztahy:** `Zápis` může být tabulka reprezentující vztah mezi studenty a kurzy, obsahující atributy `ID_Studenta` (cizí klíč odkazující na `Studenti`) a `ID_Kurzu` (cizí klíč odkazující na `Kurzy`).
- **Význam:**
	- Logická úroveň poskytuje flexibilitu v tom, jak jsou data modelována, a umožňuje účinnou manipulaci a dotazování dat bez ohledu na jejich fyzické uložení. Je klíčová pro návrh efektivních a flexibilních databázových aplikací.

### Fyzická Úroveň

- **Definice:** Fyzická úroveň se zabývá skutečným uložením dat na paměťových médiích. Tato úroveň popisuje, jak jsou data efektivně uložena, organizována a přistupována na diskách nebo v jiných paměťových zařízeních. Zahrnuje detaily, jako jsou struktury souborů, metody indexace a optimalizace dotazů, které přímo ovlivňují výkon a škálovatelnost databázových systémů.
- **Hlavní Prvky:**
	- **Souborové Struktury:** Formáty souborů a organizace, které určují, jak jsou data fyzicky uložena na disku.
	- **Indexace:** Techniky, jako jsou B-stromy nebo hashování, používané k efektivnímu vyhledávání a přístupu k datům.
	- **Stránkování a Segmentace:** Mechanismy pro správu paměti, které umožňují efektivnější přístup k datům a jejich ukládání.
	- **Optimalizace Dotazů:** Techniky a algoritmy používané pro minimalizaci času a zdrojů potřebných k získání výsledků dotazu.
- **Příklady:**
	- **Použití Indexu:** Pro tabulku `Studenti` může být indexován sloupec `Příjmení` pomocí B-stromu pro rychlejší vyhledávání studentů podle příjmení.
	- **Stránkování:** Data mohou být rozdělena do bloků (stránek) pevné velikosti, což usnadňuje jejich ukládání a načítání z disku.
- **Význam:**
	- Efektivní návrh na fyzické úrovni může výrazně zlepšit výkon databáze, snížit latenci při dotazech a optimalizovat využití systémových zdrojů. Tato úroveň je zásadní pro databázové administrátory a systémové architekty při plánování a implementaci databázových systémů.

## Algoritmy Návrhu Schémat Relací, Normální Formy, Referenční Integrita. Důvody pro Normalizaci Relací

### Algoritmy Návrhu Schémat Relací

- **Definice:** Algoritmy návrhu schémat relací jsou systematické postupy pro převod konceptuálních modelů dat (například ER diagramů) do relačních schémat, které efektivně reprezentují data v databázi. Tyto algoritmy se zaměřují na optimalizaci struktury databáze z hlediska redundance dat, integrity, a efektivity dotazů.

- **Klíčové Kroky:**
	- **Identifikace Entit a Atributů:** Z konceptuálního modelu určete entity a jejich atributy, které se stanou základem pro tabulky a sloupce v relačním schématu.
	- **Určení Primárních Klíčů:** Pro každou entitu vyberte atribut nebo kombinaci atributů, které jednoznačně identifikují řádky v tabulce.
	- **Transformace Vztahů:** Analyzujte vztahy mezi entitami v konceptuálním modelu a rozhodněte, jak je nejlépe reprezentovat v relačním modelu pomocí cizích klíčů nebo samostatných relačních tabulek pro m:n vztahy.
	- **Normalizace:** Aplikujte normalizační proces na vytvořené tabulky, aby se zajistila eliminace redundance a závislosti dat byly minimalizovány.
	- **Definice Integrity a Omezení:** Vytvořte pravidla a omezení pro udržení referenční integrity, datové typy a další obchodní pravidla relevantní pro databázi.

- **Příklady Použití:**
	- Převod ER diagramu s entitami `Student`, `Kurz`, a vztahem `Zapsán` může vést k vytvoření tabulek `Studenti` a `Kurzy`, s relační tabulkou `Zápisy` pro reprezentaci m:n vztahů, kde `Zápisy` obsahuje cizí klíče odkazující na primární klíče tabulek `Studenti` a `Kurzy`.

- **Význam:**
	- **Efektivita a Integrita:** Pomocí těchto algoritmů lze zajistit, že relační schéma bude efektivní z hlediska uložení a dotazování dat a zároveň bude zachována integrita dat.
	- **Adaptabilita:** Dobře navržené schéma umožňuje snadnější úpravy a rozšíření databáze v budoucnosti.
	- **Optimalizace Výkonu:** Správné návrhové rozhodnutí na začátku může výrazně ovlivnit výkon databázových operací, jako jsou vyhledávání, vkládání, aktualizace a mazání.

### Normální Formy

Normal forms are a series of guidelines for the design of relational database schemas, aimed at reducing redundancy, improving data integrity, and enhancing database performance. Each normal form addresses specific types of anomalies and dependencies, with the goal of making the database more logical, efficient, and easy to use.

- **První normální forma (1NF)**
	- Each table cell must contain a single value.
	- Each record must be unique.
	- **Příklad:** A table where each student has multiple email addresses in a single cell violates 1NF. Splitting the email addresses into separate records or creating a separate table for email addresses adheres to 1NF.

- **Druhá normální forma (2NF)**
	- Must meet all the requirements of 1NF.
	- All non-key attributes must be fully functional and dependent on the primary key.
	- **Příklad:** If a table contains student information and course details, where the course is not fully dependent on the primary key (student ID), moving the course details to a separate table where the course ID is the primary key achieves 2NF.

- **Třetí normální forma (3NF)**
	- Must meet all requirements of 2NF.
	- No transitive dependency of non-prime attributes on the primary key.
	- **Příklad:** If a table contains student ID, course, and course instructor, where the course instructor is dependent on the course and not directly on the student ID, moving the instructor to a separate table related to courses achieves 3NF.

- **Boyce-Coddova normální forma (BCNF)**
	- A stricter version of 3NF.
	- Every determinant must be a candidate key.
	- **Příklad:** In a table where a composite key exists, if one part of the key determines another attribute, but that attribute does not determine the second part of the key, restructuring is necessary to meet BCNF.

- **Čtvrtá normální forma (4NF)**
	- Must meet all requirements of BCNF.
	- No multi-valued dependencies unless related to a candidate key.
	- **Příklad:** A table where students have multiple majors and advisors, with majors determining advisors, should be split to remove the multi-valued dependency and achieve 4NF.

- **Pátá normální forma (5NF)**
	- Must meet all requirements of 4NF.
	- Every join dependency in the table is implied by the candidate keys.
	- **Příklad:** A complex scheduling system where entities are so tightly interrelated that only splitting into smaller, more specific tables based on primary keys can achieve 5NF.

### Důvody pro Normalizaci Relací

- **Redukce Redundance:** Minimizes duplicate data, leading to less space usage and fewer inconsistencies.
- **Prevence Anomálií:** Ensures that insert, update, and delete operations do not lead to unintended side effects.
- **Zlepšení Integrity:** By defining clear relationships and dependencies, data integrity is maintained throughout operations.
- **Optimalizace Dotazů:** Well-normalized schemas can lead to more efficient queries by reducing the need to process large volumes of duplicate data.

### Referenční Integrita

Referential integrity is a principle in relational databases that ensures relationships between tables remain consistent. It mandates that if a foreign key exists in one table, it must have a corresponding primary key in another table or be null.

- **Key Concepts:**
	- **Foreign Key:** An attribute in one table that links to the primary key of another table. It enforces a relationship between the tables.
	- **Primary Key:** A unique identifier for each record in a table.
	- **Constraint:** A rule enforced by the database management system to maintain referential integrity.

- **Implementation:**
	- **Foreign Key Constraints:** Enforce referential integrity by ensuring that any foreign key value always refers to an existing primary key value or is null.
	- **CASCADE Actions:** Specify actions that the database takes to maintain referential integrity upon deletion or update of the primary key. Actions include:
		- **CASCADE:** Automatically delete or update the rows in the foreign key table.
		- **SET NULL:** Set the foreign key value to null if the primary key is deleted or updated.
		- **NO ACTION/RESTRICT:** Prevent the deletion or update of the primary key if it would result in orphaned records in the foreign key table.

- **Examples:**
	- **Student and Enrollment Tables:**
		- `Students` table with `StudentID` as the primary key.
		- `Enrollments` table with `EnrollmentID` as the primary key and `StudentID` as a foreign key referencing `Students.StudentID`.
	- **Maintaining Referential Integrity:**
		- If a student is deleted from the `Students` table, any enrollments referencing that student in the `Enrollments` table must be handled according to the CASCADE action defined (e.g., also deleted or set to null).

- **Benefits of Referential Integrity:**
	- **Data Consistency:** Ensures that all references are valid and prevents orphaned records.
	- **Data Quality:** Improves the reliability of data within the database.
	- **Simplified Database Navigation:** Facilitates easier data exploration and manipulation by enforcing clear relationships.
	- **Enforcement of Business Rules:** Allows the database to enforce real-world constraints and relationships automatically.

### Důvody pro Normalizaci Relací

Referential integrity plays a critical role in relation normalization by ensuring that the database structure accurately reflects the real-world entities and relationships it models. This adherence to integrity constraints is fundamental for avoiding anomalies, reducing redundancy, and ensuring data consistency across relational databases.

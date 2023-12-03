---
tags:
  - 
date created: Monday, October 2nd 2023, 8:25:49 pm
date modified: Monday, December 4th 2023, 12:1853:50 am
share: "true"
---

# 00 Programovací Jazyky

- NPRG013 Programování v jazyce Java (5 kr)
- NPRG035 Programování v jazyce C# (5 kr)
- NPRG041 Programování v jazyce C++ (5 kr)

Některé následující body definují varianty požadavků pro různé individuální volby povinně volitelných předmětů.
Vyžaduje se zvládnutí obecných konceptů a zvládnutí jedné z konkrétních variant pro jazyk C#, C++ nebo Java.

- [[01 Koncepty pro Abstrakci, Zapouzdření a Polymorfismus|01 Koncepty pro Abstrakci, Zapouzdření a Polymorfismus]]
	- související konstrukty programovacích jazyků
		- třídy, rozhraní, metody, datové položky, dědičnost, viditelnost
		- Ⓥ zapouzdření poskytované moduly v Javě
	- (dynamický) polymorfismus, statické a dynamické typování
	- jednoduchá dědičnost
		- Ⓥ virtuální a nevirtuální metody v C++ a C#
	- vícenásobná dědičnost a její problémy
		- Ⓥ vícenásobná a virtuální dědičnost v C++
		- Ⓥ interfaces a defaultní metody v Javě
		- Ⓥ interfaces v C#
	- implementace rozhraní (interface)
	- vhodné použití uvedených konceptů
- [[02 Primitivní a Objektové Typy a Jejich Reprezentace|02 Primitivní a Objektové Typy a Jejich Reprezentace]]
	- číselné a výčtové typy
	- Ⓥ ukazatele a reference v C++
	- Ⓥ hodnotové a referenční typy v C#
	- Ⓥ reference, imutabilní typy a boxing v C# a Javě
- [[03 Generické Typy a Funkcionální Prvky (procedurálních Programovacích jazyků)|03 Generické Typy a Funkcionální Prvky (procedurálních Programovacích jazyků)]]
	- Ⓥ šablony (templates) a statický polymorfismus v C++
	- Ⓥ generické typy v Javě a C# (bez omezení typových parametrů)
	- Ⓥ typy reprezentující funkce v C++, C#, nebo Javě
	- lambda funkce a funkcionální rozhraní
- [[04 Manipulace Se Zdroji a Mechanizmy pro Ošetření Chyb|04 Manipulace Se Zdroji a Mechanizmy pro Ošetření Chyb]]
	- správa životního cyklu zdrojů v případě výskytu chyb
		- Ⓥ RAII v C++
		- Ⓥ using v C#
		- Ⓥ try-with-resources v Javě
	- konstrukce pro obsluhu a propagaci výjimek
- [[05 Životní Cyklus Objektů a Správa Paměti|05 Životní Cyklus Objektů a Správa Paměti]]
	- alokace (alokace statická, na zásobníku, na haldě)
	- inicializace (konstruktory, volání zděděných konstruktorů)
	- destrukce (destruktory, finalizátory)
	- explicitní uvolňování objektů, reference counting, garbage collector
- [[06 Vlákna a Podpora Synchronizace|06 Vlákna a Podpora Synchronizace]]
	- reprezentace vláken v programovacích jazycích
	- specifikace funkce vykonávané vláknem a základní operace na vlákny
	- časově závislé chyby a mechanizmy pro synchronizaci vláken
- [[07 Implementace Základních Prvků Objektových Jazyků|07 Implementace Základních Prvků Objektových Jazyků]]
	- základní objektové koncepty v konkrétním jazyce
	- implementace a interní reprezentace primitivních typů
	- implementace a interní reprezentace složených typů a objektů
	- implementace dynamického polymorfismu (tabulka virtuálních metod)
- [[08 Nativní a Interpretovaný Běh, Řízení Překladu a Sestavení Programu|08 Nativní a Interpretovaný Běh, Řízení Překladu a Sestavení Programu]]
	- reprezentace programu, bytecode, interpret jazyka
	- just-in-time (JIT) a ahead-of-time (AOT) překlad
	- proces sestavení programu, oddělený překlad, linkování
	- staticky a dynamicky linkované knihovny
	- běhové prostředí procesu a vazba na operační systém
---
tags:
  - 
date created: Monday, October 2nd 2023, 8:21:16 pm
date modified: Monday, December 4th 2023, 12:476:8539 am
share: "true"
---

# 00 Architektura Počítačů a Operačních Systémů

- NSWI120 Principy počítačů (3 kr)
- NSWI170 Počítačové systémy (5 kr)
Podle volby programovacího jazyka
- NPRG013 Programování v jazyce Java (1/5 z 5 kr)
- NPRG035 Programování v jazyce C# (1/5 z 5 kr)
- NPRG041 Programování v jazyce C++ (1/5 z 5 kr)


- [[01 Základní Architektura Počítače, Reprezentace Čísel, Dat a Programů|01 Základní Architektura Počítače, Reprezentace Čísel, Dat a Programů]]
	- reprezentace a přístup k datům v paměti, adresa, adresový prostor
	- ukládání jednoduchých a složených datových typů
	- základní aritmetické a logické operace
- [[02 Instrukční Sada, Vazba Na Prvky Vyšších Programovacích Jazyků|02 Instrukční Sada, Vazba Na Prvky Vyšších Programovacích Jazyků]]
	- Implementovat běžné programové konstrukce vyšších jazyků (přiřazení, podmínka, cyklus, volání funkce)
	   pomocí instrukcí procesoru
	- Zapsat běžnou konstrukci vyššího jazyka (přiřazení, podmínka, cyklus, volání funkce), která odpovídá
	   zadané sekvenci (vysvětlených) instrukcí procesoru
- [[03 Podpora pro Běh Operačního Systému|03 Podpora pro Běh Operačního Systému]]
	- privilegovaný a neprivilegovaný režim procesoru
	- jádro operačního systému
- [[04 Rozhraní Periferních Zařízení a Jejich Obsluha|04 Rozhraní Periferních Zařízení a Jejich Obsluha]]
	- Popsat roli řadiče zařízení při programem řízené obsluze zařízení (PIO), pro zadané adresy a funkce vstupních a výstupních portů implementovat programem řízenou obsluhu zadaného zařízení (myš, disk)
	- Popsat roli přerušení při programem řízené obsluze zařízení (PIO), na úrovni vykonávání instrukcí popsat reakci procesoru (hardware) a operačního systému (software) na žádost o přerušení
- [[05 Základní abstrakce, rozhraní a mechanizmy OS pro běh programů, sdílení prostředků a vstup/výstup|05 Základní abstrakce, rozhraní a mechanizmy OS pro běh programů, sdílení prostředků a vstup/výstup]]
	- neprivilegované (uživatelské) procesy
	- sdílení procesoru
		- procesy, vlákna, kontext procesu a vlákna
		- přepínání kontextu, kooperativní a preemptivní multitasking
		- plánování běhu procesů a vláken, stavy vlákna
	- sdílení paměti
		- Vysvětlit rozdíl mezi virtuální a fyzickou adresou a identifikovat, zda se v zadaném kontextu či frag mentu kódu používá virtuální nebo fyzická adresa
		- Na zadaném příkladu identifikovat a vysvětlit význam komponent virtuální a fyzické adresy (číslo stránky, číslo rámce, offset)
		- Pro konkrétní adresy a obsah jednoúrovňové stránkovací tabulky řešit úlohy překladu adres
		- Vysvětlit roli virtuálních adresových prostorů v ochraně paměti procesů a vláken
	- sdílení úložného prostoru
		- soubory, analogie s adresovým prostorem
		- abstrakce a rozhraní pro práci se soubory
- [[06 Paralelismus, Vlákna a Rozhraní pro Jejich Správu, Synchronizace Vláken|06 Paralelismus, Vlákna a Rozhraní pro Jejich Správu, Synchronizace Vláken]]
	- časově závislé chyby (race conditions)
	- kritická sekce, vzájemné vyloučení
	- základní sychronizační primitiva, jejich rozhraní a použití
		- zámky
		- aktivní a pasivní čekání

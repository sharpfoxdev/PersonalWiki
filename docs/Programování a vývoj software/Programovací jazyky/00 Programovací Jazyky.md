---
tags:
  - 
share: "true"
---

# 00 Programovací Jazyky

- NPRG024 Návrhové vzory (3 kr)
- NPRG043 Doporučené postupy v programování (5 kr)
- NSWI142 Programování webových aplikací (5 kr)
- NSWI163 Úvod do middleware (1 kr)
Podle volby programovacího jazyka
- NPRG021 Pokročilé programování v jazyce Java (5 kr), nebo
- NPRG038 Pokročilé programování v jazyce C# (5 kr), nebo
- NPRG051 Pokročilé programování v jazyce C++ (5 kr)


Některé následující body definují varianty požadavků pro různé individuální volby povinně volitelných předmětů.
Vyžaduje se zvládnutí obecných konceptů a zvládnutí jedné z konkrétních variant pro jazyk C#, C++ nebo Java, včetně společných požadavků z informatiky pro stejnou variantu.

- [[01 Programování V C++|01 Programování V C++]] 
	- Sémantika syntaktických konstrukcí a konceptů jazyka (r-value reference, move sémantika, lambdy) 
	- Běžné standardní knihovní typy, funkce a třídy, efektivita jejich používání
- [[02 Programování V Dynamických Jazycích|02 Programování V Dynamických Jazycích]]
	- Typové mechanismy dynamických jazyků, duck-typing, prototypy
	- Imutabilní typy, boxing/unboxing
- [[03 Statický vs. Dynamický Polymorfismus, Generické Programování, Typová Dedukce|03 Statický vs. Dynamický Polymorfismus, Generické Programování, Typová Dedukce]]
	- Výkonové důsledky různých implementací polymorfismu
	- Parametrizace generického kódu, politiky
	- Použití šablon v C++ (typově parametrizovaný kontejner, datový typ s operátory
- [[04 Paralelní Programování a Synchronizace|04 Paralelní Programování a Synchronizace]]
	- Vlákna, explicitní a implicitní vznik a zánik vláken
	- Prostředky pro implicitní (synchronized, atomic) a explicitní (mutex, condition_variable, semaphore) synchronizaci
	- Paralelní cykly, paralelně implementované knihovní funkce
	- Další abstrakce paralelismu (task, future/promise)
- [[05 Komponenty, Dependency Injection|05 Komponenty, Dependency Injection]]
	- Vlastnosti a účel komponent
	- Reprezentace komponenty v objektovém programovacím jazyce
	- Prostředky pro popis komponent
	- Běhová podpora pro práci s komponentami
- [[06 Reflexe a Introspekce|06 Reflexe a Introspekce]]
	- Ⓥ Statická introspekce v C++ (type_traits), run-time introspekce a reflexe v C# a Javě
	- Ⓥ Atributy v C++ a C#, anotace v Javě
	- Použití introspekce
- [[07 Návrhové Vzory|07 Návrhové Vzory]]
	- Konkrétní návrhové vzory dle GoF, jejich aplikace
- [[08 Principy WWW, HTTP, URL, Statické Webové Stránky|08 Principy WWW, HTTP, URL, Statické Webové Stránky]]
	- Tvorba statické webové stránky pomocí HTML a HTML5 (sémantické HTML tagy)
	- HTML formuláře, vstupní prvky a validace
	- Interpretace HTML prohlížečem, DOM
	- Vložení CSS do stránky, CSS selektory a jejich specificita
	- Využití CSS ke stylování webové stránky
	- Využití HTTP (hlavičky určující obsah, stavové kódy, struktura HTTP požadavku) a URL pro přístup k webové stránce
- [[09 Principy Webových Aplikací|09 Principy Webových Aplikací]]
	- Klient-server architektura
	- Principy single-page a multiple-page aplikací
	- Správa stavu webové aplikace
- [[10 Programování Na Straně Klienta|10 Programování Na Straně Klienta]]
	- Syntax JavaScriptu
	- Modifikace DOMu a obsluha událostí pomocí JavaScriptu
	- Aynchroní programování v JavaScriptu (promise, callback, async/await)
	- AJAX
- [[11 API Webových Aplikací|11 API Webových Aplikací]]
	- Návrh REST API
- [[12 Základy Bezpečnosti Webových Aplikací|12 Základy Bezpečnosti Webových Aplikací]]
	- SQL injection a cross-side scripting
	- HTTPS, digitální certifikáty
	- autentizace a autorizace

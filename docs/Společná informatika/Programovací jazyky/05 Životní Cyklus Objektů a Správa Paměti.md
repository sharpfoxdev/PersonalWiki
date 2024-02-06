---
tags:
  - 
share: "true"
---

# 05 Životní Cyklus Objektů a Správa Paměti

## Alokace (alokace Statická, Na Zásobníku, Na haldě)

- **Statická Alokace**:
	- Objekty a proměnné jsou alokovány na statické paměti (global scope).
	- Alokace a dealokace je spravována při načítání a ukončení programu.

```csharp
static int staticVariable = 10;
```

- **Alokace Na Zásobníku (Stack Allocation)**:
	- Automatická alokace a dealokace.
	- Proměnné jsou alokovány při vstupu do bloku a uvolněny při opuštění bloku.
	- Rychlá a efektivní pro dočasné proměnné.

```csharp
void Method() {
	int stackVariable = 5;
}
```

- **Alokace Na haldě (Heap Allocation)**:
	- Dynamická alokace paměti pro objekty.
	- Objekty na haldě existují, dokud nejsou odstraněny garbage collectorem.
	- Vhodné pro objekty s nejistou nebo dlouhodobou životností.

```csharp
var heapObject = new MyClass();
```

- **Garbage Collection**:
	- Automatické uvolňování paměti objektů, které již nejsou používány.
	- V C# je garbage collector spouštěn runtime prostředím.
	- Uvolňuje vývojáře od potřeby manuálně spravovat paměť.
- **Best Practices**:
	- Preferovat stack alokaci pro dočasné a malé objekty.
	- Používat heap alokaci pro velké nebo složité objekty a pro objekty s nejistou dobu života.
	- Uvědomit si dopady na výkon a paměť při volbě typu alokace.

## Inicializace (konstruktory, Volání Zděděných konstruktorů)

- **Konstruktory**:
	- Slouží k inicializaci objektů.
	- Automaticky volány při vytváření nové instance třídy.
	- Mohou přijímat parametry pro nastavení počátečního stavu objektu

```csharp
public class MyClass {
	public MyClass(int initialData) {
		// Inicializace
	}
}
```

- **Bezparametrické Konstruktory**:
	- Standardní konstruktory bez parametrů.
	- Pokud není v třídě explicitně definován žádný konstruktor, C# automaticky vytvoří bezparametrický konstruktor.

```csharp
public class MyClass {
	public MyClass() {
		// Bezparametrická inicializace
	}
}
```

- **Volání Zděděných konstruktorů**:
	- Konstruktory mohou volat konstruktory své rodičovské třídy pomocí `base`.
	- Umožňuje inicializaci zděděných vlastností.

```csharp
public class BaseClass {
	public BaseClass(int data) {
		// Inicializace
	}
}

public class DerivedClass : BaseClass {
	public DerivedClass(int data) : base(data) {
		// Další inicializace
	}
}
```

- **Inicializační Bloky**:
	- Kód umístěný mimo konstruktor, ale který je součástí procesu inicializace.
	- V C# se běžně používá inicializace přímo u deklarace proměnných.

```csharp
public class MyClass {
	private int data = 10;
}
```

- **Best Practices**:
	- V konstruktoru inicializovat všechny důležité vlastnosti třídy.
	- Používat `base` pro volání konstruktorů nadřazených tříd pro správnou inicializaci.
	- Oddělovat logiku inicializace od ostatních metod třídy.

## Destrukce (destruktory, finalizátory)

- **Destruktory**:
	- Slouží k uvolnění nebo zrušení zdrojů, které objekt drží před jeho likvidací z paměti.
	- Syntaxe destruktoru v C# je podobná konstruktoru, ale s prefixem `~`.
	- Volá se automaticky, když garbage collector zjistí, že objekt již není přístupný.

```csharp
public class MyClass {
	~MyClass() {
		// Kód pro uvolnění zdrojů
	}
}
```

- **Finalizátory**:
	- Termín "finalizátor" je někdy používán jako synonymum pro destruktor v C#.
	- Umožňují vyčistění zdrojů, které nejsou spravovány .NET runtime (např. externí soubory, síťová spojení).
- **Garbage Collector (GC)**:
	- GC automaticky spravuje paměť v .NET prostředí.
	- Uvolňuje paměť objektů, které již nejsou používány aplikací.
	- GC volá destruktor/finalizátor před uvolněním paměti objektu.
- **Pozorování**:
	- Čas, kdy GC spustí destruktor/finalizátor, není předvídatelný.
	- Není vhodné spoléhat se na destruktory pro uvolnění zdrojů, které vyžadují okamžité uvolnění.
- **IDisposable Rozhraní**:
	- Rozhraní `IDisposable` a metoda `Dispose()` poskytují alternativní způsob, jak uvolnit zdroje explicitně.

```csharp
public class MyClass : IDisposable {
	public void Dispose() {
		// Uvolnění zdrojů
	}
}
```

- **Best Practices**:
	- Implementace `IDisposable` pro třídy, které pracují s neřízenými zdroji.
	- Volání `Dispose()` v bloku `using`, aby bylo zajištěno správné uvolnění zdrojů.
	- Minimalizace použití destruktorů/finalizátorů, jelikož mohou negativně ovlivnit výkon GC.

## Explicitní Uvolňování Objektů, Reference Counting, Garbage Collector

- **Explicitní Uvolňování Objektů**:
	- V C# není obvyklé explicitně uvolňovat objekty, protože to spravuje garbage collector (GC).
	- Nicméně, pro neřízené zdroje (např. soubory, databázové spojení) je vhodné používat `Dispose` metodu.
		- Příklad:

			```csharp
			using (var resource = new Resource()) {
			    // Práce se zdrojem
			} // Automatické volání Dispose() na konci bloku
			```

- **Reference Counting**:
	- Reference counting není přímo používáno v C# pro správu paměti.
	- V .NET je paměť spravována prostřednictvím GC, který používá sofistikovanější techniky než je počítání referencí.
	- Nicméně, COM interop může využívat reference counting pro správu COM objektů.
- **Garbage Collector (GC)**:
	- GC automaticky uvolňuje paměť objektů, které již nejsou dosažitelné (nedržené žádnými referencemi).
	- GC v C# je generational, což znamená, že spravuje objekty podle jejich věku ve třech generacích (0, 1, 2).
	- GC periodicky běží na pozadí a uvolňuje paměť, aby se zabránilo únikům paměti.
	- Příklad GC procesu:
		- Identifikace nedosažitelných objektů.
		- Uvolnění paměti těchto objektů.
		- Kompaktní zbylé objekty pro optimalizaci paměti.
- **Best Practices**:
	- Využívat `using` statement pro automatické uvolnění zdrojů.
	- Vyhnout se ručnímu volání `GC.Collect()`, jelikož to může negativně ovlivnit výkon.
	- Implementovat `IDisposable` pro správnou správu neřízených zdrojů.

---
tags:
  - 
share: "true"
---

# 04 Manipulace Se Zdroji a Mechanizmy pro Ošetření Chyb

## Správa Životního Cyklu Zdrojů V Případě Výskytu Chyb

### Ⓥ Using V C\#

- **Účel Using**: Klíčové slovo `using` v C# se používá k automatickému spravování životního cyklu zdrojů, zejména pro objekty, které implementují rozhraní `IDisposable`.
    - Příklad: `using (var reader = new StreamReader("file.txt")) { /* čtení souboru */ }`
- **Automatické Uvolnění Zdrojů**:
    - Po ukončení bloku `using` se automaticky volá metoda `Dispose` na objektu, což zajišťuje uvolnění zdrojů.
    - Zabraňuje únikům paměti a jiným problémům spojeným se správou zdrojů.
- **Implementace IDisposable**:
    - Objekty použité v `using` musí implementovat rozhraní `IDisposable`.
        - Metoda `Dispose` by měla obsahovat veškerý kód potřebný k uvolnění zdrojů.

```csharp
public class Resource : IDisposable {
	public void Dispose() {
		// Uvolnění zdrojů
	}
}
```

- **Výhody Používání Using**:
    - Automatické a bezpečné uvolnění zdrojů.
    - Zlepšuje čitelnost a údržbu kódu.
    - Pomáhá předcházet chybám spojeným s manuálním uvolňováním zdrojů.
- **Using ve Více Zdrojích**:
    - Možnost použít `using` pro více objektů současně.

```csharp
using (var file = new StreamWriter("log.txt"))
using (var connection = new SqlConnection(connectionString)) {
	// Práce se souborem a databází
}
```

- **Using a Výjimky**:
    - `using` zajišťuje, že `Dispose` se zavolá i v případě výskytu výjimky v bloku kódu.
    - To znamená, že zdroje budou správně uvolněny i při chybě.
- **Novější Syntaxe Using (C# 8.0 a vyšší)**:
    - Od C# 8.0 je možné použít `using` bez závorek pro deklarace proměnných, které mají být uvolněny na konci oboru, ve kterém byly deklarovány.
    - Tato syntaxe zjednodušuje kód a zabraňuje nadměrnému zanořování.

```csharp
using var file = new StreamWriter("log.txt");
// Kód používající file
```

## Konstrukce pro Obsluhu a Propagaci Výjimek

- **Try-Catch Blok**:
	- Základní mechanismus pro zachycení a zpracování výjimek.
	- Kód, který může vyvolat výjimku, se umístí do bloku `try`.

```csharp
try {
	// Kód, který může vyvolat výjimku
} catch (Exception e) {
	// Zpracování výjimky
}
```

- **Catch Bloky pro Specifické Typy Výjimek**:
	- Možnost zachytit konkrétní typy výjimek.
	- Umožňuje specifickou reakci na různé druhy chyb.
		- Příklad:

```csharp
try {
	// Kód, který může vyvolat více typů výjimek
} catch (IOException e) {
	// Specifická reakce na I/O výjimku
} catch (Exception e) {
	// Všeobecná reakce na ostatní výjimky
}
```

- **Finally Blok**:
	- Slouží k provedení kódu, který se má vykonat bez ohledu na to, zda došlo k výjimce.
	- Často se používá pro uvolnění zdrojů.
		- Příklad:

```csharp
try {
	// Kód, který může vyvolat výjimku
} catch (Exception e) {
	// Zpracování výjimky
} finally {
	// Kód, který se vykoná vždy
}
```

- **Throwing Výjimek**:
	- Kód může vyvolat výjimku pomocí klíčového slova `throw`.
	- Umožňuje propagaci chybového stavu.
		- Příklad:

```csharp
if (conditionFails) {
	throw new InvalidOperationException("Nesplněná podmínka");
}
```

- **Vlastní Výjimky**:
	- Možnost vytvořit vlastní typy výjimek pro specifické scénáře.
	- Dědění od třídy `Exception` nebo jejích potomků.

```csharp
public class MyCustomException : Exception {
	public MyCustomException(string message) : base(message) { }
}
```

- **Best Practices**:
	- Zachycovat pouze výjimky, na které můžeme adekvátně reagovat.
	- Nepoužívat výjimky pro řízení běžného toku programu.
	- Poskytovat užitečné informace ve zprávě výjimky.

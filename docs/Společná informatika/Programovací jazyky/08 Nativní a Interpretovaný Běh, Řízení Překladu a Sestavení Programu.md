---
tags:
  - 
share: "true"
---

# 08 Nativní a Interpretovaný Běh, Řízení Překladu a Sestavení Programu

## Reprezentace Programu, Bytecode, Interpret Jazyka

- **Reprezentace Programu v C#**:
	- Zdrojový kód napsaný v C# je nejprve kompilován do mezikódu nazývaného Microsoft Intermediate Language (MSIL) nebo jednoduše Intermediate Language (IL).
	- IL je nezávislý na platformě a připravený pro JIT (Just-In-Time) kompilaci.

- **Bytecode (IL)**:
	- IL, často označovaný jako bytecode, je sada instrukcí, které rozumí Common Language Runtime (CLR) v .NET Frameworku.
	- Příklad IL kódu:

```
.method public hidebysig static void  Main() cil managed
{
  .entrypoint
  // Code size       11 (0xb)
  .maxstack  1
  IL_0000:  ldstr      "Hello World"
  IL_0005:  call       void [mscorlib]System.Console::WriteLine(string)
  IL_000a:  ret
} // end of method Program::Main
```

- **Interpret Jazyka (CLR v .NET)**:
	- Common Language Runtime (CLR) je virtuální stroj .NET Frameworku, který spravuje běh C# programů.
	- CLR poskytuje služby jako správa paměti, bezpečnostní kontrola, správa výjimek a podpora pro mnoho jazyků.
	- JIT kompilace: CLR kompiluje IL kód do nativního kódu specifického pro danou platformu přímo při běhu programu.
	- Tento proces umožňuje optimalizaci a efektivitu, protože kód je kompilován s ohledem na aktuální podmínky a vlastnosti hardwaru.

## Just-in-time (JIT) a Ahead-of-time (AOT) Překlad

- **Just-in-time (JIT) Překlad**:
	- JIT překládá MSIL (Microsoft Intermediate Language) kód do nativního strojového kódu právě v okamžiku, kdy je daný kód potřebný k vykonání.
	- To umožňuje optimalizace specifické pro konkrétní hardwarovou platformu a aktuální runtime podmínky.
	- Příklad: Když je v C# programu poprvé volána metoda, JIT ji přeloží do nativního kódu a tento kód je používán při všech dalších voláních této metody.
- **Ahead-of-time (AOT) Překlad**:
	- AOT překládá MSIL kód do nativního kódu předem, ještě před spuštěním aplikace.
	- Tento přístup může zlepšit dobu spouštění aplikací, protože není potřeba čekat na JIT kompilaci za běhu.
	- Příklad: .NET Native je nástroj, který umožňuje AOT kompilaci pro aplikace napsané v C# pro zvýšení jejich výkonu a snížení spotřeby paměti.
- **Porovnání JIT a AOT**:
	- JIT je výhodný pro dynamické optimalizace a menší velikost počátečního spustitelného souboru.
	- AOT zlepšuje dobu spouštění a celkový výkon, ale vede k větším spustitelným souborům a méně flexibilitě při optimalizacích.
	- V praxi jsou často používány kombinace obou přístupů pro dosažení optimálního výkonu a efektivity.
- **Využití v C#**:
	- V C# je primárně využíván JIT kompilátor CLR (Common Language Runtime).
	- AOT kompilace je možná například pomocí nástroje .NET Native, který je užitečný pro aplikace s vysokými požadavky na výkon a efektivitu.

## Proces Sestavení Programu, Oddělený Překlad, Linkování

### Proces Sestavení Programu

- **Definice**:
	- Sestavení programu zahrnuje kompilaci zdrojového kódu do mezijazyka (např. Intermediate Language v C#) a následné generování spustitelného souboru.
- **Kroky v C#**:
	- Zdrojový kód C# se kompiluje do IL kódu pomocí C# kompilátoru (csc.exe).
	- IL kód je pak za běhu aplikace přeložen JIT kompilátorem do nativního strojového kódu.
	- Příklad: `csc Program.cs` generuje `Program.exe` z `Program.cs`.
- **Výhody**:
	- Umožňuje větší kontrolu nad výsledným spustitelným souborem.
	- Zajišťuje optimalizaci pro konkrétní hardwarové platformy.

### Oddělený Překlad

- **Koncept**:
	- Oddělený překlad znamená, že jednotlivé části zdrojového kódu lze kompilovat nezávisle na sobě.
	- Používá se pro velké projekty rozdělené do více souborů nebo modulů.
- **V C#**:
	- Jednotlivé třídy nebo moduly jsou kompilovány do samostatných .dll (knihovny) nebo .exe souborů.
	- Příklad: V projektu může být `Utilities.dll` vytvořena z `Utilities.cs` a následně použita v hlavním programu.
- **Případ použití**:
	- Vývoj knihoven, které mohou být sdíleny mezi různými projekty.

### Linkování

- **Proces**:
	- Spojuje kompilované soubory (např. objektové soubory, knihovny) do jednoho spustitelného souboru.
	- V C# se obvykle provádí automaticky.
- **V C#**:
	- Kompilátor spojuje všechny .dll soubory s hlavním .exe při vytváření spustitelného souboru.
	- Dynamické linkování může být použito pro načítání knihoven za běhu.
- **Příklady**:
	- `Program.exe` může být sestaven z `Main.cs`, `Utilities.dll`, a dalších závislostí.
	- Použití `DllImport` pro dynamické linkování s nativními knihovnami v C#.

### Důležitost Odděleného Překladu a Linkování

- **Modularita a Opětovné Použití Kódu**:
	- Umožňuje sdílení kódu napříč projekty.
	- Usnadňuje údržbu a aktualizace softwaru.
- **Správa Velkých Projektů**:
	- Zjednodušuje navigaci a správu rozsáhlých kódových základen.
	- Zlepšuje efektivitu vývoje při práci v týmech.
- **Efektivní Distribuce a Aktualizace**:
	- Umožňuje distribuci menších aktualizací bez potřeby překompilování celého projektu.
	- Zjednodušuje správu závislostí v projektu.

## Staticky a Dynamicky Linkované Knihovny

### Staticky Linkované Knihovny

- **Definice**:
	- Statické knihovny jsou soubory kódu, které jsou kompilovány a spojeny s hlavním programem během kompilace.
- **Vlastnosti**:
	- Kód statické knihovny je součástí spustitelného souboru.
	- Zajišťuje, že všechny potřebné závislosti jsou k dispozici během spuštění programu.
- **Použití v C#**:
	- C# standardně používá dynamické knihovny (.dll), ale statické linkování lze realizovat pomocí nástrojů jako je ILMerge.
- **Příklad**:
	- V C++, `#include <some_library>` a kompilace s `-lstatic_library`.
- **Výhody**:
	- Zjednodušení distribuce (vše v jednom souboru).
	- Zabránění konfliktům verzí závislostí.
- **Nevýhody**:
	- Větší velikost spustitelného souboru.
	- Aktualizace knihovny vyžaduje rekompilaci celého programu.

### Dynamicky Linkované Knihovny

- **Definice**:
	- Dynamické knihovny jsou načítány do programu během jeho spuštění nebo provozu.
- **Vlastnosti**:
	- Umožňují sdílení kódu mezi více programy.
	- Knihovny jsou načítány až v okamžiku potřeby.
- **Použití v C#**:
	- V C# se používají soubory `.dll` pro dynamické knihovny.
	- `Assembly.Load()` může být použito pro načítání .dll za běhu.
- **Příklad**:
	- V C#: `Assembly.Load("MyLibrary.dll");`
- **Výhody**:
	- Menší velikost spustitelných souborů.
	- Možnost aktualizace knihoven bez nutnosti rekompilace aplikací.
- **Nevýhody**:
	- Možné problémy s verzemi a závislostmi knihoven.
	- Potřeba správně spravovat načítání knihoven (např. cesty, verze).

### Výběr Typu Knihovny

- **Kritéria pro výběr**:
	- Přenosnost: Dynamické knihovny jsou lepší pro přenositelné aplikace.
	- Výkon: Statické knihovny mohou nabídnout lepší výkon v některých situacích.
	- Správa závislostí: Dynamické knihovny usnadňují správu závislostí, ale vyžadují pečlivější řízení.

## Běhové Prostředí Procesu a Vazba Na Operační Systém

### Běhové Prostředí Procesu

- **Definice**:
	- Běhové prostředí procesu je soubor všech zdrojů a stavů, které proces potřebuje pro svůj běh.
- **Komponenty**:
	- **Paměťový prostor**:
		- Obsahuje kód programu, data a stack.
	- **Procesorový čas**:
		- Rozdělení CPU času mezi procesy.
	- **Systémové prostředky**:
		- Soubory, síťové spojení, atd.
- **Správa v C#**:
	- .NET runtime spravuje paměť, garbage collection a bezpečnost.
	- Přístup k systémovým prostředkům přes .NET API (např. `System.IO` pro práci se soubory).

### Vazba Na Operační Systém

- **Interakce s OS**:
	- Procesy komunikují s operačním systémem přes systémová volání.
- **V C# a .NET**:
	- .NET Framework poskytuje abstrakci nad systémovými voláními.
	- Např. `System.Diagnostics.Process` pro práci s procesy.
- **Příklad Vazby**:
	- Vytvoření souboru v C# pomocí `File.Create()` volá nativní funkce OS pro práci se soubory.
- **Platformní Závislosti**:
	- .NET Core poskytuje cross-platform podporu, minimalizuje závislosti na konkrétním OS.
	- Různé chování na různých systémech (Windows, Linux, macOS).

### Komunikace S Hardwarovými Prostředky

- **Přímý přístup k hardwaru**:
	- Omezeno v .NET z bezpečnostních důvodů.
	- Přístup přes platformní invokace (P/Invoke) pro volání nativních knihoven.
- **Příklad P/Invoke**:
	- Použití `[DllImport("user32.dll")]` pro interakci s Windows API.

### Bezpečnost a Omezení

- **Bezpečnostní Model .NET**:
	- Code Access Security (CAS) pro omezení přístupu k prostředkům.
- **Sandboxing**:
	- Izolace kódu pro zabránění neautorizovaného přístupu k systémovým prostředkům.
- **Příklady Omezení**:
	- Omezený přístup k souborovému systému v webových aplikacích.

### Běhové Prostředí a Výkon

- **Optimalizace Výkonu**:
	- JIT kompilace v .NET pro optimalizaci běhu.
	- Garbage collector spravuje paměť efektivně.
- **Monitoring a Ladění**:
	- Nástroje jako Visual Studio Debugger a Performance Profiler pro monitoring běhu aplikace.

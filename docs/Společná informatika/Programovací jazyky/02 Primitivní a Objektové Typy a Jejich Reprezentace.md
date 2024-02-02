---
tags:
  - 
share: "true"
---

# 02 Primitivní a Objektové Typy a Jejich Reprezentace

## Číselné a Výčtové Typy

- **Celé čísla**: `int`, `long`, `short`, `byte`
	- `int` - 32bitové celé číslo
	- `long` - 64bitové celé číslo
	- Příklad: `int i = 100;`
- **Desetinná čísla**: `float`, `double`, `decimal`
	- `float` - 32bitové desetinné číslo
	- `double` - 64bitové desetinné číslo
	- Příklad: `double d = 100.5;`
- **Logické hodnoty**: `bool`
	- `true` nebo `false`
	- Příklad: `bool isActive = true;`
- **Znaky a řetězce**: `char`, `string`
	- `char` - jediný znak
	- `string` - sekvence znaků
	- Příklad: `char c = 'A'; string s = "Hello";`
- **Enumerace (enum)**
	- Definuje sadu pojmenovaných konstant
	- Příklad: 

```csharp
enum Color { Red, Green, Blue }
Color c = Color.Red;
```

## Ⓥ Hodnotové a Referenční Typy V C#

- **Hodnotové typy (Value types)**
	- Ukládány na zásobníku (stack)
	- Obsahují přímo hodnotu
	- Příklad: `int`, `struct`

```csharp
int x = 10;
```

- **Referenční typy (Reference types)**
	- Ukládány na haldě (heap)
	- Obsahují referenci na paměťovou adresu, kde je hodnota uložena
	- Příklad: `class`, `string`, `array`

```csharp
string str = "Hello";
```

- **Boxing a Unboxing**
	- Boxing: Převod hodnotového typu na referenční typ
	- Unboxing: Převod zpět na hodnotový typ
	- Příklad:

		```csharp
		int val = 5;
		object obj = val; // Boxing
		int val2 = (int)obj; // Unboxing
		```

- **Základní rozdíly**
	- Hodnotové typy jsou efektivnější pro malé a jednoduché datové struktury
	- Referenční typy jsou vhodné pro větší a složitější struktury
	- Hodnotové typy jsou kopírovány při předání jako argumenty funkcím
	- Referenční typy předávají pouze referenci, což může ovlivnit původní objekt

## Ⓥ Reference, Imutabilní Typy a Boxing V C\#

### Reference

- V C# jsou reference používány pro odkazování na objekty.
	- Příklad: `var obj = new MyClass();` - `obj` je reference na instanci `MyClass`.
- Reference neobsahuje přímo data, ale ukazatel na místo v paměti, kde jsou data uložena.
	- Při přiřazení `var anotherObj = obj;` obě proměnné odkazují na stejný objekt.

### Imutabilní Typy

- Imutabilní (neměnné) typy jsou objekty, jejichž stav nelze po vytvoření změnit.
	- Například `string` v C# je imutabilní.
	- Při jakékoliv změně hodnoty se vytvoří nový objekt, původní zůstává nezměněn.
	- Příklad:

    ```csharp
    string s = "hello";
    s = s.ToUpper(); // Vytváří nový string "HELLO", původní "hello" zůstává nezměněný.
    ```

### Boxing a Unboxing

- Boxing je proces, při kterém se primitivní typ (hodnotový typ) převede na referenční typ (objekt).

```csharp
int i = 123;
object o = i; // Boxing
```

- Unboxing je opačný proces, kdy se referenční typ převede zpět na primitivní typ.

```csharp
int j = (int)o; // Unboxing
```

- Boxing a unboxing jsou nákladné na výkon a paměť a měly by se používat opatrně.
	- Neefektivní použití může vést k nadměrnému využití paměti a pomalému výkonu.

---
tags:
  - 
share: "true"
---

# 03 Generické Typy a Funkcionální Prvky (procedurálních Programovacích jazyků)

## Ⓥ Generické Typy V C# (bez Omezení Typových parametrů)

Generické typy v C# jsou klíčové pro vytváření flexibilních a opakovaně použitelných komponent. Umožňují nám vytvářet třídy, metody, rozhraní a delegáty, které mohou operovat s různými datovými typy bez nutnosti definovat více verzí pro každý datový typ.

### Základní Koncepty

- **Definice Generické Třídy**: Generické třídy jsou definovány s použitím zástupných symbolů pro typy, které jsou určeny v době vytváření instance třídy.
    - Syntax: `class MyClass<T> { /*...*/ }`
    - `T` je zde typový parametr, který lze nahradit jakýmkoli datovým typem.
- **Použití Generické Třídy**: K vytvoření instance generické třídy je třeba specifikovat konkrétní typ.
    - Příklad: `MyClass<int> myInstance = new MyClass<int>();`
- **Metody Generických Tříd**: Metody uvnitř generických tříd mohou využívat generické typové parametry.

```csharp
class MyClass<T> {
  public T GenericMethod(T param) {
	  return param;
  }
}
```

### Výhody Generických Typů

- **Bezpečnost Typů**: Generické typy poskytují bezpečnost typů v compile-time, což eliminuje riziko běhových chyb spojených s nesprávným typováním.
- **Opakované Použití Kódu**: Umožňují znovupoužitelnost kódu pro různé datové typy, aniž by bylo nutné psát nadbytečný kód pro každý typ.
- **Výkon**: Generické typy mohou zvýšit výkon, protože eliminují potřebu boxingu a unboxingu při práci s hodnotovými typy.

### Příklady Generických Typů

- **Generické Kolekce**: C# nabízí řadu generických kolekcí, jako jsou `List<T>`, `Dictionary<TKey, TValue>`, které jsou efektivnější a bezpečnější než jejich ne-generické protějšky.
    - Příklad: `List<string> strings = new List<string>();`
- **Generické Rozhraní**: Můžeme také vytvářet vlastní generické rozhraní.
    - Příklad:

      ```csharp
      interface IMyGenericInterface<T> {
          T PerformOperation(T param);
      }
      ```

- **Generické Delegáty**: Generické delegáty, jako `Func<T, TResult>` nebo `Action<T>`, jsou široce využívány v moderním C# kódu pro lambda výrazy a LINQ.
    - Příklad: `Func<int, int> doubleNumber = x => x * 2;`

## Ⓥ Typy Reprezentující Funkce V C\#

### Delegáty

- **Definice Delegátu**: Delegáty v C# jsou typy, které bezpečně zapouzdřují metody. Jsou podobné ukazatelům na funkce v jiných jazycích.
- **Použití Delegátů**:
    - Pro události a callbacky.
    - Pro definování metod, které mohou být předány jako parametry.
- **Vytvoření Delegátu**:

    ```csharp
    public delegate int Operation(int x, int y);
    ```

- **Použití Delegátu**:

    ```csharp
    Operation add = (x, y) => x + y;
    int result = add(5, 3); // Výsledek: 8
    ```

- **Multicast Delegáty**:
    - Mohou ukazovat na více metod.
    - Vyvolají metody v pořadí, v jakém byly přidány.

    ```csharp
    Action action = () => Console.WriteLine("Hello");
    action += () => Console.WriteLine("World");
    action(); // Vypíše "Hello" následované "World"
    ```

- **Předávání Delegátů jako Parametrů**:
    - Umožňují flexibilní manipulaci s funkcemi.

    ```csharp
    void ExecuteOperation(Operation operation, int x, int y)
    {
        Console.WriteLine(operation(x, y));
    }
    ExecuteOperation(add, 5, 3); // Vypíše 8
    ```

- **Generické Delegáty**:
    - `Func<>` a `Action<>` jsou vestavěné generické delegáty.
    - `Func<>` může vracet hodnotu, `Action<>` nevrací nic.

    ```csharp
    Func<int, int, int> multiply = (x, y) => x * y;
    Action<string> greet = name => Console.WriteLine($"Ahoj, {name}");
    ```

- **Anonymní Metody**:
    - Používají se pro inline definování delegátů.
    - Méně syntaxe než plně definované metody.

    ```csharp
    Operation subtract = delegate(int x, int y) { return x - y; };
    ```

- **Lambda Výrazy**:
    - Kratší zápis pro anonymní metody.
    - Často používané s LINQ.

    ```csharp
    Func<int, bool> isEven = number => number % 2 == 0;
    ```

## Lambda Funkce a Funkcionální Rozhraní

- **Lambda Funkce**: Lambda funkce v C# jsou anonymní metody používané k vytváření kompaktních způsobů implementace funkcí, které lze předat jako argumenty nebo použít v LINQ dotazech.
    - Základní syntaxe: `(parametry) => výraz nebo { příkazy }`
    - Příklad: `Func<int, int> square = x => x * x;`
- **Funkcionální Rozhraní**:
    - V C# se funkcionální rozhraní obvykle týká delegátů a vestavěných generických typů jako `Func<>` a `Action<>`.
    - `Func<>`: Představuje metodu, která vrací hodnotu.
        - Syntaxe: `Func<typy_parametrů, návratový_typ>`
        - Příklad: `Func<int, int, int> add = (x, y) => x + y;`
    - `Action<>`: Představuje metodu, která nevrací žádnou hodnotu (void).
        - Syntaxe: `Action<typy_parametrů>`
        - Příklad: `Action<string> greet = name => Console.WriteLine($"Hello, {name}");`
- **Použití Lambda Funkcí**:
    - V LINQ dotazech pro filtrování, mapování, atd.
        - `var filtered = numbers.Where(n => n > 5);`
    - Jako argumenty pro metody vyžadující delegáty.
        - `List.ForEach(n => Console.WriteLine(n));`
    - V událostech a asynchronním programování.
        - `button.Click += (sender, args) => { /* akce */ };`
- **Výhody Lambda Funkcí**:
    - Stručnost a čitelnost kódu.
    - Možnost přístupu k proměnným v oboru, kde byly lambda funkce definovány.
- **Uzavření (Closure)**:
    - Lambda funkce mohou zachytit a používat proměnné definované v oboru, ve kterém byly vytvořeny.
    - `int factor = 10; Func<int, int> multiplier = n => n * factor;`
    - Uzavření umožňuje lambda funkci zapamatovat stav svého okolí.

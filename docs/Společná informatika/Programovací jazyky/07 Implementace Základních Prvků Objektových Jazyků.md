---
tags:
  - 
share: "true"
---

# 07 Implementace Základních Prvků Objektových Jazyků

## Základní Objektové Koncepty V Konkrétním Jazyce

- **Třídy a Objekty**:
	- Třída je šablona pro objekty, definuje stavy a chování.
	- Objekt je instance třídy, obsahuje konkrétní stav.

```csharp
class Car {
	public string Make;
	public string Model;
	public void Drive() {
		// Implementace metody
	}
}
Car myCar = new Car();
```

- **Dědičnost**:
	- Umožňuje třídě dědit atributy a metody od jiné třídy.
	- Podporuje znovupoužitelnost kódu.

	```csharp
	class ElectricCar : Car {
		public int BatteryLevel;
	}
	```

- **Polymorfismus**:
	- Umožňuje objektům různých tříd mít stejné rozhraní.
	- Podporuje flexibilitu a integrační možnosti.
	- Příklad (Přetížení a Přepsání):

	```csharp
	class Car {
		public virtual void Drive() {
			// Základní implementace
		}
	}
	class ElectricCar : Car {
		public override void Drive() {
			// Specifická implementace
		}
	}
	```

- **Abstrakce**:
	- Umožňuje zaměřit se na co dělá objekt namísto toho, jak to dělá.
	- Používá abstraktní třídy a rozhraní.
	- Příklad (Abstraktní Třída a Rozhraní):

```csharp
abstract class Vehicle {
	public abstract void Drive();
}
interface IElectric {
	void Charge();
}
class ElectricCar : Vehicle, IElectric {
	public override void Drive() {
		// Implementace
	}
	public void Charge() {
		// Implementace
	}
}
```

- **Zapouzdření**:
	- Chrání data v třídě před přímým přístupem zvenčí.
	- Umožňuje kontrolovaný přístup prostřednictvím metod.
	- Příklad (Vlastnosti a Soukromé Pole):

```csharp
class Car {
	private int speed;
	public int Speed {
		get { return speed; }
		set { speed = value; }
	}
}
```

- **Konstruktory a Destruktory**:
	- Konstruktory inicializují nové objekty.
	- Destruktory se volají při zničení objektu.

```csharp
class Car {
	public Car() {
		// Konstruktor
	}
	~Car() {
		// Destruktor
	}
}
```

## Implementace a Interní Reprezentace Primitivních Typů

- **Základní Charakteristiky**:
	- Primitivní typy jsou základní datové typy, které jsou zabudované přímo do jazyka C#.
	- Jsou reprezentovány jednoduchými hodnotami, nikoli objekty.
	- Příklady zahrnují `int`, `float`, `char`, `bool`, atd.
- **Reprezentace v Paměti**:
	- Primitivní typy jsou uloženy přímo v paměti.
	- Velikost paměti závisí na typu (např. `int` je obvykle 4 bajty).
	- Hodnoty jsou uloženy na zásobníku, což zajišťuje rychlý přístup.
- **Defaultní Hodnoty**:
	- Každý primitivní typ má defaultní hodnotu, např. `0` pro `int`, `false` pro `bool`.
	- Při deklaraci bez inicializace je proměnná automaticky nastavena na defaultní hodnotu.
- **Převody Typů**:
	- Automatické převody jsou možné mezi některými primitivními typy (např. z `int` na `float`).
	- Explicitní převody (pomocí castingu)

## Implementace a Interní Reprezentace Složených Typů a Objektů

- **Definice Složených Typů**:
	- Složené typy v C# zahrnují třídy, struktury, rozhraní a pole.
	- Reprezentují komplexnější datové struktury než primitivní typy.
- **Interní Struktura**:
	- Objekty tříd jsou uloženy na haldě (heap), což umožňuje dynamickou správu paměti.
	- Struktury jsou typicky uloženy na zásobníku (stack), pokud nejsou součástí objektu.
- **Reprezentace v Paměti**:
	- U objektů tříd paměť obsahuje jak data členů, tak referenci na tabulku metod.
	- Struktury obsahují přímo data, bez dodatečných referencí na metody.
- **Konstruktory a Inicializace**:
	- Konstruktory slouží k inicializaci objektů.
	- Příklad konstruktoru třídy:

```csharp
public class MyClass {
	public MyClass(int initialData) {
		// Inicializace
	}
}
```

- **Dědičnost a Polymorfismus**:
	- Umožňuje třídám zdědit chování a vlastnosti od nadřazených tříd.
	- Polymorfismus umožňuje pracovat s objekty odvozených tříd jako s objekty základní třídy.
- **Garbage Collection**:
	- Automatická správa paměti, která uvolňuje paměť objektů, na které neexistují reference.
	- Pomáhá předcházet únikům paměti.
- **Reference vs. Hodnotové Typy**:
	- Třídy jsou referenční typy - proměnné obsahují referenci na objekt v paměti.
	- Struktury jsou hodnotové typy - proměnné obsahují přímo data.

## Implementace Dynamického Polymorfismu (tabulka Virtuálních metod)

- **Koncept Dynamického Polymorfismu**:
	- Dynamický polymorfismus umožňuje objektům různých tříd, které jsou odvozené od stejné základní třídy, reagovat různě na stejné volání metod.
	- Implementován pomocí virtuálních metod a přetížení metod v odvozených třídách.

- **Virtuální Metody**:
	- Metody deklarované jako `virtual` v základní třídě umožňují jejich přetížení v odvozených třídách pomocí klíčového slova `override`.
	- Příklad virtuální metody:

```csharp
public class BaseClass {
	public virtual void Display() {
		Console.WriteLine("Display základní třídy");
	}
}
```

- **Tabulka Virtuálních Metod (v-table)**:
	- Každý objekt odvozené třídy má ukazatel na tabulku virtuálních metod.
	- v-table obsahuje adresy přepsaných metod pro dynamické vázání za běhu.

- **Přetížení Metod v Odvozených Třídách**:
	- Metody ve třídách potomcích mohou přetížit virtuální metody základní třídy.
	- Příklad přetížení metody:

```csharp
public class DerivedClass : BaseClass {
	public override void Display() {
		Console.WriteLine("Display odvozené třídy");
	}
}
```

- **Pozdní Vázání (Late Binding)**:
	- Volání virtuálních metod se určuje až za běhu, ne při kompilaci.
	- Umožňuje objektům různých tříd mít odlišné chování i když jsou použity pod stejnou referencí základní třídy.
- **Využití v Praxi**:
	- Dynamický polymorfismus se často používá ve scénářích, kde různé třídy mají stejně pojmenované metody s odlišnými implementacemi.
	- Umožňuje snadnou rozšiřitelnost a údržbu kódu.

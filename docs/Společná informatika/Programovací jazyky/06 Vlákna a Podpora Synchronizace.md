---
tags:
  - 
share: "true"
---

# 06 Vlákna a Podpora Synchronizace

## Reprezentace Vláken V Programovacích Jazycích

- **Přehled Vláken v C#**:
	- Vlákna jsou základní jednotkou, která umožňuje paralelní provádění částí programu.
	- V C# je třída `Thread` používána pro práci s vlákny.
- **Vytváření a Spouštění Vláken**:
	- Vlákno je vytvořeno instancováním třídy `Thread` a předáním delegáta nebo metody, která se má vykonat.
	- Příklad:

		```csharp
		Thread thread = new Thread(new ThreadStart(MethodName));
		thread.Start(); // Spuštění vlákna
		```

- **Parametry a Vrácené Hodnoty**:
	- Vlákna obvykle pracují s void metodami, ale mohou přijímat parametry přes lambda výrazy nebo anonymní metody.
	- Příklad s parametrem:

		```csharp
		Thread thread = new Thread(() => MethodWithParameter("Hello"));
		thread.Start();
		```

- **Priorita Vlákna**:
	- Priorita vlákna určuje, jak často bude vlákno plánováno ke spuštění.
	- Lze ji nastavit pomocí vlastnosti `Thread.Priority`.
- **Ukončení a Přerušení Vlákna**:
	- Vlákno může být ukončeno nebo přerušeno, ale je doporučeno nechat vlákno dokončit svůj úkol přirozeně.
	- Použití `Thread.Abort()` je považováno za nebezpečné a mělo by se tomu vyhnout.
- **Synchronizace a Zámky**:
	- Synchronizace je nezbytná pro bezpečný přístup k sdíleným zdrojům.
	- V C# lze použít `lock`, `Monitor`, nebo jiné synchronizační konstrukty.
	- Příklad použití `lock`:

		```csharp
		lock (lockObject) {
		    // Kritická sekce
		}
		```

## Specifikace Funkce Vykonávané Vláknem a Základní Operace Na Vláknech

- **Specifikace Funkce Vykonávané Vláknem**:
	- Vlákna v C# jsou vytvářena pomocí třídy `Thread` 
	- Funkce, kterou má vlákno vykonávat, je specifikována při vytváření instance vlákna.

```csharp
void ThreadFunction() {
	// Kód, který má být vykonáván vláknem
}
Thread thread = new Thread(ThreadFunction);
```

- **Základní Operace Na Vláknech**:
	- **Start Vlákna**:
		- Spuštění vlákna se provádí metodou `Start()`.

	```csharp
	thread.Start();
	```

	- **Čekání na Dokončení Vlákna**:
		- Metoda `Join()` zablokuje volající vlákno, dokud cílové vlákno nedokončí svou činnost.

	```csharp
	thread.Join();
	```

	- **Přerušení Vlákna**:
		- Metoda `Interrupt()` slouží k přerušení vlákna, které čeká (např. na `Thread.Sleep` nebo `Monitor.Wait`).

	```csharp
	thread.Interrupt();
	```

	- **Ukončení Vlákna**:
		- Ukončení vlákna pomocí `Abort()` se nedoporučuje kvůli potenciálním problémům se stabilitou aplikace.
		- Bezpečnější je nechat vlákno přirozeně dokončit svou činnost.
	- **Priorita Vlákna**:
		- Priorita vlákna určuje, jak často bude vlákno plánováno ke spuštění.
		- Nastavuje se pomocí vlastnosti `Thread.Priority`.

	```csharp
	thread.Priority = ThreadPriority.Highest;
	```

	- **Detekce Stavu Vlákna**:
		- Stav vlákna lze zjistit pomocí vlastnosti `ThreadState`.

	```csharp
	ThreadState state = thread.ThreadState;
	```

## Časově Závislé Chyby a Mechanizmy pro Synchronizaci Vláken

- **Časově Závislé Chyby (Race Conditions)**:
	- Vznikají, když dva nebo více vláken přistupují ke sdíleným datům a alespoň jedno z nich provádí zápis.
	- Mohou vést k nepředvídatelnému a nesprávnému chování programu.

```csharp
int sharedResource;
void Increment() {
	sharedResource++;
}
```

- **Mechanizmy pro Synchronizaci Vláken**:
	- **Lock (Zámek)**:
		- `lock` klíčové slovo v C# zajistí, že kód uvnitř bloku lock může být spuštěn pouze jedním vláknem v daném okamžiku.
		- Používá se k zajištění bezpečnosti při přístupu ke sdíleným zdrojům.

	```csharp
	object lockObject = new object();
	void SafeIncrement() {
		lock(lockObject) {
			sharedResource++;
		}
	}
	```

	- **Monitor**:
		- Třída `Monitor` v .NET poskytuje podobnou funkcionalitu jako `lock`, ale s rozšířenými možnostmi.
		- Umožňuje například dočasně uvolnit zámek a čekat na událost.
		- Příklad:

	```csharp
	void SafeIncrementWithMonitor() {
		Monitor.Enter(lockObject);
		try {
			sharedResource++;
		}
		finally {
			Monitor.Exit(lockObject);
		}
	}
	```

	- **Mutex**:
		- Mutex je synchronizační mechanismus, který může být použit napříč různými procesy.
		- Používá se pro dlouhodobější operace a může být pojmenován pro meziprocesovou synchronizaci.
		- Příklad:

	```csharp
	Mutex mutex = new Mutex(false, "ExampleMutex");
	void MutexIncrement() {
		mutex.WaitOne();
		try {
			sharedResource++;
		}
		finally {
			mutex.ReleaseMutex();
		}
	}
	```

	- **Semaphore**:
		- Semafory omezují počet vláken, která mohou současně přistupovat k určité části kódu.
		- Užitečné pro omezení zdrojů nebo připojení.
		- Příklad:

	```csharp
	Semaphore semaphore = new Semaphore(0, 1);
	void SemaphoreIncrement() {
		semaphore.WaitOne();
		try {
			sharedResource++;
		}
		finally {
			semaphore.Release();
		}
	}
	```

	- **ManualResetEvent a AutoResetEvent**:
		- Slouží k signalizaci mezi vlákny.
		- `ManualResetEvent` zůstává v signálním stavu, dokud není explicitně resetován.
		- `AutoResetEvent` se automaticky resetuje po probuzení jednoho čekajícího vlákna.
		- Příklad:

	```csharp
	ManualResetEvent manualEvent = new ManualResetEvent(false);
	void WaitForEvent() {
		manualEvent.WaitOne();
		// Provedení akce po signalizaci
	}
	```

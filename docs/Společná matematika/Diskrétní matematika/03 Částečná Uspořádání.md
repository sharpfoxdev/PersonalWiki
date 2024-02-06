---
tags:
  - 
share: "true"
---

# 03 Částečná Uspořádání

## **Def:** Uspořádání

Relace $R$ na množině $X$ je uspořádání, značeno $\equiv R$, je **reflexivní, antisymetrická** a **tranzitivní**.

- **Lineární** ($\le$): $\forall x, y \in X: x \le y \lor y \le x$ (všechny dvojice $(x, y)$ jsou porovnatelné).
- **Částečné:** Ne lineární.
- **Ostré**: Pokud $\le$ je uspořádání, pak $x < y \equiv x \le y \land x \neq y$ je ostré uspořádání.
- $\ge := \le^{-1}$ je také uspořádání (to samé platí pro ostré).

## **Def:** Hasseův Diagram

Uvažme uspořádání $\left({1, 2, 3}, \subseteq\right)$. Jeho Hasseův diagram bude vypadat následně:
![[Pasted image 20240205230935.png|Pasted image 20240205230935.png]]
- Spojujeme **bezprostřední předky**, tj.: neexistuje $t \in X$ mezi $x, y$ takové, že $x < t < y$.

## Základní Pojmy

### **Def:** Minimální a Maximální Prvky

- $x$ je **minimální** prvek $\equiv \nexists y: y < x$ (analogicky maximální).
    - Tzn. *neexistuje menší*.

### **Def:** Nejmenší a Největší Prvky

- $x$ je **nejmenší** prvek $\equiv \forall y: x \le y$ (analogicky největší).
    - Tzn. *je menší než všechny ostatní*.
    - Silnější kritérium než minimální, jelikož musí být s všemi porovnatelný.

### **Def:** Řetězec, Antiřetězec

Pro částečně uspořádanou množinu $\left(X, \le\right)$:

- $A \subseteq X$ je *řetězec*, pokud $\forall a, b \in A$ jsou porovnatelné
    - $\omega\left(X, \le\right) :=$ délka nejdelšího řetězce
- $A \subseteq X$ je *antiřetězec*, pokud žádné dva prvky nejsou porovnatelné (nezávislá množina)
    - $\alpha\left(X, \le\right) :=$ délka nejdelšího antiřetězce

## Výška a Šířka Částečně Uspořádané Množiny a Věta O Jejich Vztahu (o Dlouhém a širokém)

### **Věta:** O Dlouhém a Širokém

Pro konečnou částečně uspořádanou množinu $\left(X, \le\right)$ platí, že $\left|X\right| \le \alpha \omega$.
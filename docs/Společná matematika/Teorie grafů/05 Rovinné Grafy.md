---
tags:
  - 
share: "true"
---

# 05 Rovinné Grafy

## Definice - Rovinný Graf, Rovinné Nakreslení Grafu, Stěny

**Definice (Bod):** je prvek $\mathbb{R}^2$
**Definice (Křivka):** je prostá a spojitá množina bodů
**Definice (Jednoduchá křivka = oblouk):** je $f: [0, 1] \mapsto \mathbb{R}^2$ spojitá a prostá.
- Jednoduchá **uzavřená** křivka = kružnice: prostá až na $f(0) = f(1)$
![[Pasted image 20240207202911.png|Pasted image 20240207202911.png]]
**Definice (Roviný Graf):** Graf je *rovinný*, pokud existuje nějaké jeho rovinné nakreslení.
- Cesta je rovinná
- Kružnice je rovinná
- Strom je rovinný (přidáváním listů -- vždy je „zoomovat“ a pokládat tam listy)
![[Pasted image 20240207202852.png|Pasted image 20240207202852.png]]
**Definice (Rovinné nakreslení) multigrafu $(V, E, K)$** je $\nu: V \mapsto \mathbb{R}^2$ a $\{C_e \mid e \in E\}$ množina oblouků/kružnic t. ž.:
1. $\forall e \in E, K(e) = \{u, v\} \implies C_e$ je oblouk s konci $\{\nu(u), \nu(v)\}$
    - Za každou hranu existuje oblouk
2. $\forall e \in E, K(e) = u \implies C_e$ je kružnice obsahující $\nu(u)$
    - Smyčky
3. $\forall e, f$ různé $\in E \implies C_e \cap C_f = \nu[K(e) \cap K(f)]$
    - Průniky jsou jen vrcholy
4. $\forall v \in V, \forall e \in E, \nu(v) \in C_e \implies v \in K(e)$
    - Protíná-li kružnice vrchol, pak je vrchol na té hraně
**Definice (Topologický graf):** graf nakreslený do roviny.
**Definice (Křížící číslo):** je min. počet křížení.
**Definice (Stěny nakreslení):** jsou komponenty obloukové souvislosti:

$$\mathbb{R}^2 \setminus \left(\left\{\nu(v) \mid v \in V \right\} \bigcup_{e \in E} C(e)\right)$$

![[Pasted image 20240207202816.png|Pasted image 20240207202816.png]]

## Eulerova Formule a Maximální Počet Hran Rovinného Grafu (důkaz a použití)

![[Pasted image 20240207203328.png|Pasted image 20240207203328.png]]
**Věta (Eulerova formule):** Nechť $G$ je souvislý graf nakreslený do roviny. Pak $v + f = e + 2$.

**Důkaz:** Fixujeme $v$, indukce podle $e$:
- Graf je strom: $e = v - 1; f =1$... $v + f = e + 2$.
- Indukční krok: uvažme hranu $h$ na kružnici a podívejme se na $G - h$:
    - $v' = v$
    - $e' = e - 1$ (odebrání hrany)
    - $f' = f - 1$ (spojení dvou stěn)

**Definice:** $G$ je maximálně rovinný $\iff G$ je rovinný a $G + e$ není rovinný $\forall e \notin E(G)$.

**Věta:** Pro maximálně rovinný graf $G$ s $v \ge 3$ jsou všechny jeho stěny trojúhelníky.

**Definice:**
1. Každý maximální graf je souvislý (pokud ne, tak lze nesouvislé komponenty spojit).
2. Kdyby existovala stěna s hranicí $C_n$ pro $n > 3$, pak můžeme v rámci stěny přidat hranu.
3. Strana, jejíž hranice není kružnice, neexistuje (mohli bychom přidat stěnu).

**Věta:** Nechť $G$ je maximálně rovinný s $v \ge 3$ vrcholy. Pak $e = \frac{3}{2} f$.

**Důkaz:** Každá stěna vytváří tři hrany, ze kterých každá patří právě do dvou stěn.

**Věta (Počet hran rovinného grafu):** Pro počet hran rovinného grafu platí $e \le 3v - 6$. Pro maximálně rovinný platí rovnost.

**Důkaz:** Dosazení pozorování výše do Eulerova vzorce (není-li graf maximálně rovinný, pak $e \le \frac{3}{2}f$, jelikož některé stěny budou mít větší počet hran).

**Věta:** V každém rovinném grafu existuje vrchol t. ž. $\mathrm{deg}(v) \le 5$

**Věta:** Nechť $G$ je maximálně rovinný bez trojúhelníků. Pak $e \le 2v - 4$.


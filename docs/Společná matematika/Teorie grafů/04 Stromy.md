---
tags:
  - 
share: "true"
---

# 04 Stromy

## Definice

- **Strom** je *souvislý acyklický graf*
- **Les** je *acyklický graf* (soubor stromů)
- **List** -- vrchol stromu s $\mathrm{deg}(v) = 1$

## Základní Vlastnosti

### Existence Listů

**Tvrzení:** Strom s alespoň 2 vrcholy má alespoň 2 *listy* (vrcholy, do kterých vede 1 hrana).
**Tvrzení:** Nechť $v$ je list grafu $G$. Pak $G$ je strom $\iff G - v$ je strom.

### Počet Hran Stromu

1. **Eulerova formule:** $G$ je souvislý a $\left|E(G)\right| = \left|V(G)\right| - 1$

## Ekvivalentní Charakteristiky Stromů

![[Pasted image 20240207203804.png|Pasted image 20240207203804.png]]
**Věta (Charakteristika stromu):** Následující tvrzení jsou ekvivalentní:

1. **Standardní:** $G$ je souvislý a acyklický
2. **Jednoznačná souvislost:** Mezi každými vrcholem $x, y$ vede *právě 1 cesta*
3. **Minimální souvislost:** $G$ je souvislý a $\forall e \in E(G): G - e$ souvislý není
4. **Maximální acykličnost:** $G$ je acyklický a $\forall e \in \binom{V(G)}{2} \setminus E(G): G + e$ obsahuje cyklus
5. **Eulerova formule:** $G$ je souvislý a $\left|E(G)\right| = \left|V(G)\right| - 1$

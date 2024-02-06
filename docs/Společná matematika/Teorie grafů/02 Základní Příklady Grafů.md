---
tags:
  - 
share: "true"
---

# 02 Základní Příklady Grafů

## Úplný Graf

- **úplný** $K_n \equiv \left(\left[n\right], \binom{V}{2}\right)$
    - opak je **diskrétní**

## Úplný Bipartitní Graf

- **úplný bipartitní** $K_{m, n}$:
    - $V\left(K_{m, n}\right) = \{a_1, \ldots, a_m, b_1, \ldots, b_n\}$ (rozdělíme na 2 části)
    - $E\left(K_{m, n}\right) = \{\{a_i, b_j\} \mid i \in \left[m\right], j \in \left[n\right]\}$
    - bipartitní -- $E \subseteq$ úplného bipartitního

## Cesty a Kružnice

- **cesta** $P_n \equiv \left(\left[n\right], \{\{i, i + 1\} \mid 0 \le i < n\}\right)$
- **cyklus/kružnice** $C_n \equiv \left(\left[n\right], \{\{i, (i + 1)\ \mathrm{mod}\ n\} \mid 0 \le i \le n\}\right)$

**Cesta:** v grafu délky $k$ je (2 pohledy):

1. $H \subseteq G$ t. ž. $H \cong P_k$
2. $(v_0, e_1, v_1, \ldots, e_k, v_k)$ t. ž.:
    - $\forall i: v_i \in V(G)$ + všechny $v_i$ jsou různé vrcholy
    - $\forall j: e_j \in E(G) \land e_j = \{v_{j-1}, v_j\}$

- Obdobně lze definovat kružnici, jen $v_0 = v_k$.

**Sled (procházka/walk):** v grafu $G$ je cesta, ve které se mohou vrcholy i hrany opakovat.

**Tvrzení:** pokud existuje sled z $x$ do $y$, pak existuje i cesta.
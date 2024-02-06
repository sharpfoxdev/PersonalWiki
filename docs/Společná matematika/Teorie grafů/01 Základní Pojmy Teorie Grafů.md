---
tags:
  - 
share: "true"
---

# 01 Základní Pojmy Teorie Grafů

## Graf, Vrcholy, Hrany

Graf je *uspořádaná dvojice* množin $\left(V, E\right)$, kde $V$ je *konečná, neprázdná* množina vrcholů a $E \subseteq \binom{V}{2}$ je množina hran.

- $\{u, v\} \in E$... mezi $u, v$ vede hrana (jsou sousední)
- $v \in e$ pro $e \in E$... vrchol leží v/na hraně

## Izomorfismus Grafů

Grafy $G$ a $H$ jsou **izomorfní** $\left(G \cong H\right) \equiv f: V\left(G\right) \mapsto V\left(H\right)$ bijekce t. ž. $\forall u, v \in V\left(G\right)$ platí: $\{u, v\} \in E\left(G\right) \iff \{f(u), f(v)\} \in E\left(H\right)$

- vlastně to je takové přejmenování vrcholů

## Podgraf

**Podgraf:** Graf $H$ je *podgrafem* grafu $G$ $\left(H \subseteq G\right)$ $\equiv V(H) \subseteq V(G) \land E(H) \subseteq E(G)$.

- vznik tak, že z grafu odebíráme hrany/vrcholy

**Indukovaný podgraf:** Graf $H$ je *indukovaným podgrafem* grafu $G$ $\left(H \subseteq G\right)$ $\equiv V(H) \subseteq V(G) \land E(H) = E(G) \cap \binom{V(H)}{2}$.

- vznik tak, že z grafu odebíráme pouze vrcholy (a s nimi spojené hrany)

## Okolí Vrcholu

// TODO

## Stupeň Vrcholu

- **stupeň vrcholu** $v$ grafu $G$ je $\mathrm{deg}_G(v) = \# \{w \in V(G): \{v, w\} \in E(G)\}$
    - tzn. kolik hran vede do vrcholu
    - $k$-regulární graf: stupeň všech vrcholů je $k$

- **Tvrzení:** $$\sum_{v \in V(G)} \mathrm{deg}(v) = 2 \cdot |E(G)|$$

## Doplněk Grafu

## Bipartitní Graf

viz [[02 Základní Příklady Grafů#Úplný Bipartitní Graf|02 Základní Příklady Grafů > Úplný Bipartitní Graf]]
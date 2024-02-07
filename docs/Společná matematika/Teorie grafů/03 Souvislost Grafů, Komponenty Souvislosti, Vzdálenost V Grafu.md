---
tags:
  - 
share: "true"
---

# 03 Souvislost Grafů, Komponenty Souvislosti, Vzdálenost V Grafu

## Souvislost Grafů

![[Pasted image 20240207202427.png|Pasted image 20240207202427.png]]
Graf $G$ je *souvislý* $\equiv \forall u, v \in V(G) \exists$ cesta v $G$ z $u$ do $v$
- Relace dosažitelnosti: $\sim$ na $V(G)$: $u \sim v \equiv \exists$ cesta z $u$ do $v$
    - Je to ekvivalence: je *reflexivní* (cesta z $u$ do $u$ velikosti 0), *symetrická* (graf je neorientovaný) i *tranzitivní* (jen pozor na to, že to po slepení může být sled -- je potřeba to ošetřit)

## Komponenty Souvislosti

![[Pasted image 20240207202501.png|Pasted image 20240207202501.png]]

## Vzdálenosti V Grafu

![[Pasted image 20240207202519.png|Pasted image 20240207202519.png]]
V souvislém grafu $G$ je vzdálenost vrcholu $u, v$ *minimum* z delek cest z $u$ do $v$ (značíme $\rho(u, v)$).

- Jedná se o *metriku*, jelikož splňuje následující:
    1. $\forall u, v: \rho(u, v) \ge 0$
    2. $\forall u, v: \rho(u, v) = 0 \iff u = v$
    3. $\forall u, v: \rho(u, v) = \rho(v, u)$
    4. $\forall u, v, w: \rho(u, v) \le \rho(u, w) + \rho(w, v)$ (trojúhelníková nerovnost)
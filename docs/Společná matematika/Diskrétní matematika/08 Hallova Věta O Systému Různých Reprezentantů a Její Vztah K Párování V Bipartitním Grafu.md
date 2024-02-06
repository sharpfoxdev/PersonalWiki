---
tags:
  - 
share: "true"
---

# 08 Hallova Věta O Systému Různých Reprezentantů a Její Vztah K Párování V Bipartitním Grafu

## Párování V Bipartitním Grafu

**Věta (Königova):** v bipartitním grafu je velikost maximálního párování rovna velikosti minimalního vrcholového pokrytí.

- $M \subseteq E$ je **párování**, pokud $\forall e, e' \in M, e \neq e': e \cap e' = \emptyset$
- $U \subseteq V$ je **vrcholové pokrytí**, pokud $\forall e \in E \exists u \in U: u \in e$

**Důkaz:** přes toky, jako na následujícím obrázku na síti kapacit (1):
![[Pasted image 20240206011016.png|Pasted image 20240206011016.png]]

- $R$ je minimální $(z-s)$ řez
- $C$ je minimální vrcholové pokrytí
- $f$ je maximální tok (hrany v původním grafu jsou maximální párování)
- $L, P =$ levá a pravá část grafu (bez zdroje a stoku)

Z toku získávám minimální $(z-s)$ řez $(R)$. Ten upravíme na minimální řez $(R')$ tak, aby neobsahoval hrany původního grafu. To jde, protože hranu původního grafu mohu vyměnit za tu ze zdroje/stoku, protože ta je jediný způsob, jak se dostat do hrany z původního vrcholu.

Tento řez určuje velikost minimálního vrcholového pokrytí (pokud by tomu tak nebylo, tak nemáme minimální řez).

Nyní chceme ukázat, že velikost $(R')$ je rovná velikosti nějakého vrcholového pokrytí, a že velikost min. pokrytí je rovna velikosti nějakému řezu, což k důkazu věty stačí.

Najdeme vrcholové pokrytí stejně veliké jako $(R')$:

$$W = \left\{u \in L\ |\ (z, u) \in R'\right\} \cup \left\{v \in P\ |\ (v, s) \in R'\right\}$$

je vrcholové pokrytí, v původním grafu by jinak existovala $(z-s)$ cesta a nejednalo se o řez.

Nyní pro $(W)$ minimální vrcholové pokrytí najdeme řez $(R)$:

$$R = \left\{(z, u)\ |\ u \in W \cap L\right\} \cup \left\{(u, s)\ |\ u \in W \cap P\right\}$$

je řez (pro spor by existovala cesta, kterou by $(W)$ nepokryl).

## Systém Reprezentantů

**Definice:**

- **množinový systém** na množině $X$ jsou množiny $M_i, i \in I$ t. ž. $M_i \subseteq X$
- **systém různých reprezentantů** (SRR) je funkce $f: I \mapsto X$ splňující:
    1. $\forall i \in I: f(i) \in M_i$ (z každé množiny volí reprezentanta)
    2. $f$ je prostá (stejného reprezentanta nikdy nevolí dvakrát)

**Věta (Hallova):** SRR $\exists \iff \forall J \subseteq I: \left|\bigcup_{i \in J} M_i\right| \ge |J|$.

**Důkaz (SSR $\Rightarrow$ Hall):** zvolím libovolnou $J \subseteq I$. Pak platí, že $\forall j \in J\ \exists p_j \in M_j, p_j = f(j)$, tak že prvky $p_j$ jsou navzájem různé ($f$ je prostá). V tom případě ale $|J| = \left|\{p_j\ |\\ j \in J\}\right| \le \left|\bigcup_{j \in J} M_j\right|$.

**Důkaz (SSR $\Leftarrow$ Hall):** opět najdu v grafu (celočíselný, jednotková síť) maximální tok. Najdu minimální řez z hran pouze ze zdroje/do stoku, ($|R| = |R'|$). Uvážím následující obrázek:

![[Pasted image 20240206011838.png|Pasted image 20240206011838.png]]
- $A =$ vrcholy incidentní s $R'$ v $I$
- $B =$ vrcholy incidentní s $R'$ v $X$
- $J = I \setminus A$

Chceme najít systém různých reprezentantů. Dokážeme to tak, že $|R'| = |I|$, pak max. tok má velikost $|I|$ a hrany s tokem $(1)$ mi dají SRR.

**Pozorování:** Hrany z $J$ vedou pouze do $B$, protože jinak by existovala $(z-s)$ cesta a nejednalo by se o řez, tedy $\left|\bigcup_{j \in J} M_j\right| \subseteq B$.

$$
\begin{aligned}
|R'| &= c(R') &&//\ \text{jednotkové kapacity}\\
&= |A| + |B| \\
&= \overbrace{|I| - |J|}^{|A|} + |B| \\
&\ge |I| - |J| + \left|\bigcup_{j \in J} M_j\right| &&//\ \text{z pozorování}\\
&\ge |I| - |J| + \left|J\right| &&//\ \text{z Hallovy podmínky}\\
&= |I| &&// \implies\ \text{tok má velikost alespoň |I|}
\end{aligned}
$$

Definuji SRR jako $f(i) = x \in X$, pokud po hraně $(i, x)$ něco teče.

**Důsledek:** nechť $B = (V_1 \cup V_2, E)$ je bipartitní graf, kde $k_1 = \mathrm{min}\ \underset{v \in V_1}{\deg}\ v,\ k_2 = \mathrm{max}\ \underset{v \in V_2}{\deg}\ v\ \text{a}\ k_1 \ge k_2$ pak je splněna Hallova podmínka.

# Princip Důkazu

# Algoritmické Aspekty (Polynomiální Algoritmus pro Nalezení SRR)
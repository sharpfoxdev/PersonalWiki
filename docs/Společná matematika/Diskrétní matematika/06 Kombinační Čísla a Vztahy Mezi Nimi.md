---
tags:
  - 
share: "true"
---

# 06 Kombinační Čísla a Vztahy Mezi Nimi

## Definice

$$\binom{X}{k} := \{A \subseteq X \mid |A| = k\}$$

$$\binom{n}{k} := \frac{n \cdot (n - 1) \cdot (n - 2) \cdot \ldots \cdot (n - k + 1)}{k \cdot (k - 1) \cdot (k - 2) \cdot \ldots \cdot 2 \cdot 1} = \frac{n!}{k! \cdot (n - k)!}$$

### Vlastnosti Kombinačních Čísel

- počet prázdných podmnožin = 1 = počet „plných“ podmnožin: $\binom{n}{0} = 1 = \binom{n}{n}$
- počet 1-prvkových podmnožin = n = počet podmnožin, kde 1 prvek chybí: $\binom{n}{1} = n = \binom{n}{n - 1}$
- generalizace předchozích dvou vzorečků... počítání doplňků: $\binom{n}{k} = \binom{n}{n - k}$
- počet podmnožin dané množiny: $\sum_{k=0}^{n} \binom{n}{k} = 2^n$
    - vlastně $n$-bitové číslo -- patří/nepatří $\binom{n}{k} = \binom{n - 1}{k} + \binom{n - 1}{k - 1}$
- $k$-prvkové množiny obsahující/neobsahující nějaký fixní prvek... pokud ho neobsahují, tak máme $k$ míst na ostatní prvky; jinak máme $k - 1$ míst (prvek jedno místo jinak zabírá)
 - **Věta:** $\left|\binom{X}{k}\right| = \binom{\left|X\right|}{k}$

## Binomická Věta a Její Aplikace

$$\forall n \in \mathbb{N}, \forall a, b \in \mathbb{R}: (a + b)^n = \sum_{k = 0}^{n} \binom{n}{k} a^{n - k}b^k$$

**Důkaz:**

- jedná se o *součty součinů*, které si ze závorek vybírají $a$ nebo $b$
    - $a^{n - k}b^k$ -- celkově jich musí být $n$
    - $\binom{n}{k}$ -- kolika způsoby si lze z $n$ závorek vybrat $k$ znaků

**Poznámka:**

- $(1 + 1)^n = 2^n = \sum_{k = 0}^{n}\binom{n}{k}$ -- součet řady Pascalova trojúhelníka
- $(1 - 1)^n = 0 = \sum_{k = 0}^{n}\binom{n}{k} (-1)^k$ -- počet podmnožin sudé velikosti je roven počtu podmnožin velikosti liché

### Odhady pro Faktoriál

- triviální: $2^{n - 1} \le n! \le n^n$
- rozumný: $n^{n / 2} \le n! \le \left(\frac{n + 1}{2}\right)^n$
- wtf: $e \cdot \left(\frac{n}{e}\right)^n \le n! \le en \cdot \left(\frac{n}{e}\right)^n$

**Lemma (a/g nerovnost):** $\sqrt{xy} \le \frac{x + y}{2} \qquad \forall x, y \ge 0$

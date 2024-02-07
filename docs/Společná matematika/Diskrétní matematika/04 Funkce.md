---
tags:
  - 
share: "true"
---

# 04 Funkce

## **Def:** Funkce

Relace $f$ mezi množinami $X, Y$ je funkce (zobrazení) $\equiv \forall x \in X \ \exists! \ y \in Y: x f y$

Jedná se o speciální druh relace, ve kterém se každý prvek z $X$ zobrazuje na prvek v $Y$ právě jednou.

Značíme $f: X \mapsto Y$ nebo $f(x) = y$.

## Typy Funkcí

- **Prostá** (injekce): $\forall x, x' \in X, x \neq x': f(x) \neq f(x')$ (dvě různá $x$ se nezobrazí na stejné $y$).
- **Na** (surjekce): $\forall y \in Y\ \exists x \in X: f(x) = y$ (na každé $y$ se něco zobrazí, klidně vícekrát!).
- **Bijekce**: $\forall y \in Y\ \exists! \ x \in X: f(x) = y$ (na každé $y$ z $Y$ se zobrazí právě jedno $x$ z $X$).
Poznámka: Podle definice jdou všechny prvky z $X$ někam do $Y$!

## Počty Různých Typů Funkcí Mezi Dvěma Konečnými Množinami

### Počítání Funkcí

**Věta:** Je-li množina $A$ $a$-prvková a množina $B$ $b$-prvková, pak počet funkcí $f: A \mapsto B$ je $b^a$.

**Důkaz:** Každý prvek z $A$ můžeme (z definice dokonce musíme) poslat do libovolného prvku z $B$.

**Věta:** $\left|2^X\right| = 2^{\left|X\right|}$

**Důkaz:** Pro $Y \subseteq X$ zavedeme *charakteristickou funkci* $C_Y: X \mapsto \{0, 1\}$, kde

```latex
C_Y(x) = \begin{cases} 
1 & \text{pokud } x \in Y, \\
0 & \text{jindy}.
\end{cases}
```

Každá $C_Y$ jasně určuje unikátní podmnožinu, tím pádem vlastně počítáme funkce z $n$-prvkové do $2$-prvkové množiny, kterých je $2^n$ (viz předešlá věta).

**Věta:** Je-li množina $A$ $a$-prvková a množina $B$ $b$-prvková, pak počet prostých funkcí $f: A \mapsto B$ je

$$
\prod_{i = 0}^{a - 1}(b - i) = b^{\underline{a}}
$$

**Důkaz:** První prvek z $A$ má $b$ možností, druhý má $b - 1$, atd.

**Počítání dvojic:** $f: \{1, 2\} \mapsto X \equiv X^2$

- Prvky jsou dvojice $(f(1), f(2))$.
- $\{1, \ldots, k\}$ -- uspořádání $k$-tic.
- $\mathbb{N} \mapsto X$ -- nekonečné posloupnosti prvků z $X$.

Počet $k$-tic různých prvků z $X$... $f: \{1, \ldots, k\} \mapsto X$ je

$$
n \cdot (n - 1) \cdot (n - 2) \cdot \ldots \cdot (n - k + 1)
$$

- $n = \left|X\right|$ (stejné jako počítání prostých funkcí).

**Věta:** Počet bijekcí mezi množinou $X$ a množinou $X$ (permutací) je $n \cdot (n - 1) \cdot \ldots \cdot 1 := n!$ (faktoriál).

**Definice (Pevný bod):** Permutace $p$ je prvek $x$ takový, že $p(x) = x$ (zobrazí se sám na sebe).

## Counting Functions

Let's consider two finite sets, $A$ and $B$, where the size of $A$ is $n$ and the size of $B$ is $m$.

1. **General Functions**: The number of general functions from $A$ to $B$ is $m^n$. This is because each of the $n$ elements in $A$ can be mapped to any of the $m$ elements in $B$.

2. **Injective Functions**: If $n > m$, there are no injective functions, since there aren't enough elements in $B$ for a one-to-one mapping. If $n \leq m$, the number of injective functions can be calculated using the permutation formula $P(m, n) = \frac{m!}{(m-n)!}$.

3. **Surjective Functions**: Counting surjective functions is more complex and often involves the use of the inclusion-exclusion principle. The number can be determined by considering all functions and then subtracting those that aren't onto.

4. **Bijective Functions**: For a function to be bijective, the size of $A$ must equal the size of $B$ ($n = m$). If $n = m$, there are $n!$ (factorial of $n$) bijective functions. If $n \neq m$, no bijective functions exist.


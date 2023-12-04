---
tags:
  - 
share: "true"
---

# 01 Užitečné Definice

## **Def:** Číselné Obory

$$
\begin{array}{lr}
\mathbb{N}=\{1,2,3,4, \ldots\} & \text { přirozená čísla } \\
\mathbb{N}_{0}=\mathbb{N} \cup\{0\} & \text {  } \\
\mathbb{Z}=\{\ldots,-2,-1,0,1,2, \ldots\} & \text { celá čísla } \\
\mathbb{Q}=\{\frac{k}{n}| k \in \mathbb{Z}, n \in \mathbb{N}\} & \text { racionální čísla }
\end{array}
$$

## **Def:** Mohutnost Množin

Dvě množiny $M$ a $N$ mají stejnou *mohutnost*, pokud existuje bijekce z $A$ do $B$. Množina $M$ je *spočetná* pokud má stejnou mohutnost jako $\mathbb{N}$.

## **Def:** Desetinné Rozvoje

Množina reálných čı́sel $\mathbb{R}$ je tvořena všemi desetinnými rozvoji

$$
\pm d_{0}, d_{1} d_{2} d_{3} \ldots
$$

kde $d_{0} \in \mathbb{N}_{0}$ a $d_{i} \in\{0,1,2,3, \ldots, 9\}$ pro $i \in \mathbb{N}$.

## **Věta:** Iracionalita Root 2

 $\sqrt{2}$ je iracionální.

## **Věta:** Hustota Racionálních Čísel

Pro každá dvě reálná čísla $a$ a $b$, taková že $a<b$ existuje racionální čislo $q$ takové, že $a<q<b$.

## **Věta:** Nespočetnost Reálných Čísel

Množina reálných čísel není spočetná.

## **Def:** Uspořádání, Omezenost, Supremum, Infumum, Minimum, Maximum, Závory

Necht’ $M$ je množina s uspořádáním $\succeq$ a $A \subset M$.

- Množina $A$ je *shora omezená* pokud existuje $m \in M$ takové, že $m \succeq a$ pro každý prvek $a \in A$. Takovému $m$ říkáme *horní závora množiny* $A$.
- Prvek $m \in M$ je *supremum množiny* $A$, pokud $m$ je nejmenší horní závora $A$. Zapisujeme $m=\sup A$.
- Prvek $m \in A$ je *maximum množiny* $A$, pokud pro každé $a \in A$ platí, že $m \succeq a$. Zapisujeme $m=\max A$.
- Množina $A$ je *zdola omezená* pokud existuje $m \in M$ takové, že $a \succeq m$ pro každý prvek $a \in A$. Takovému $m$ říkáme *dolní zavora množiny* $A$.
- Prvek $m \in M$ je *infimum množiny* $A$, pokud $m$ je největší dolní závora A. Zapisujeme $m=\inf A$.
- Prvek $m \in A$ je *minimum množiny* $A$, pokud pro každé $a \in A$ platí, že $a \succeq m$. Zapisujeme $m=\min A$.
- Množina $A$ je *omezená* pokud je *shora a zdola omezená*.
Přiklad 1.7. Necht’ $M=\mathbb{R}$ a $A$ je otevřený interval $(0,1)$. Pak $A$ je shora omezená množina - například 1 je její horní závora, ale nemá maximum.

## **Def:** Absolutní Hodnota

$$
|a|=\left\{\begin{array}{l}
a \quad \text { pro } a \geq 0 \\
-a \quad \text { pro } a<0
\end{array}\right.
$$

## **Def:** Metrický Prostor

Metrický prostor je dvojice $(M, d)$, kde $M$ je množina a $d$ : $M \times M \rightarrow[0, \infty)$ je funkce splňující následující podmnínky. Pro každé $x, y \in M$ platí, že

(i) $d(x, y)=0$ právě tehdy, když $x=y$,

(ii) $d(x, y)=d(y, x)$ a

(iii) $d(x, y) \leq d(x, z)+d(z, y)$ pro každé $z \in M$. - trojuhelníková nerovnost

Funkci $d$ nazýváme metrika na $M$.

## **Věta:** Trojúhelníková Nerovnost

Pro každé $a, b \in \mathbb{R}$ platí, že $|a+b| \leq$ $|a|+|b|$.

## Eukleidovská Metrika

Zobecněním této metriky je *Eukleidovská metrika* ve vicerozměrném prostoru $\mathbb{R}^{d}$. Vzdálenost mezi dvěma body $\mathbf{x}, \mathbf{y} \in \mathbb{R}^{\mathbf{d}}$, kde $\mathbf{x}=\left(x_{1}, \ldots, x_{d}\right)$ a $\mathbf{y}=\left(y_{1}, \ldots y_{d}\right)$ je definována jako

$$
\|\mathbf{x}-\mathbf{y}\|=\sqrt{\sum_{i=1}^{d}\left(x_{i}-y_{i}\right)^{2}}
$$

## **Věta:** Beroulliova Nerovnost

Pro každé reálné čŕslo $x \geq-1$ a celé črslo $n \geq 0$ plati, $\check{z} e$

$$
(1+x)^{n} \geq 1+n x
$$

## **Věta:** Nerovnost Mezi Aritmetickým a Geometrickým Průměrem

Pro všechna $n \in \mathbb{N}$ a nezáporná reálná čísla $x_{1}, \ldots, x_{n} \in[0, \infty)$ platí nerovnost

$$
\frac{x_{1}+x_{2}+\cdots+x_{n}}{n} \geq \sqrt[n]{x_{1} x_{2} \cdots x_{n}}
$$

(aritmetický průměr je větší rovný geometrickému)

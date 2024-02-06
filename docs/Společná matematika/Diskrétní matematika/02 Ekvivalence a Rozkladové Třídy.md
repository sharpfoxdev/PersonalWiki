---
tags:
  - 
share: "true"
---

# 02 Ekvivalence a Rozkladové Třídy

## **Def:** Ekvivalence

Relace $R$ na množině $X$ je ekvivalence, značeno $\equiv R$, jestliže je **tranzitivní, reflexivní** a **symetrická**.

## **Def:** Ekvivalenční Třída

Ekvivalenční třída prvku $x$, značeno $R[x]$, je definována jako ${y \in X \mid xRy}$ (všechny prvky jsou v relaci mezi sebou).

**Věta:** Nechť $R$ je ekvivalence na množině $X$. Potom:

1. $\forall x \in X: R[x] \neq \emptyset$
    - To vyplývá z reflexivity... ($x \in R[x]$).
2. $\forall x, y \in X:$ buď $R[x] = R[y]$ nebo $R[x] \cap R[y] = \emptyset$
    - Pro $R[x] \subseteq R[y]$: Uvažme $z \in R[x]$, tím pádem $zRx$ (symetrie) a $zRy$ (tranzitivita), proto i $xRy$ a tedy $z \in R[y]$ (pak stačí obrátit...).
    - Pokud $xRy$ neplatí -- sporem dokážeme, že $R[x] \cap R[y] = \emptyset$... Nechť existuje $z \in R[x] \cap R[y]$; potom $xRz$ a $zRy$ (tranzitivita), a tedy $xRy$, což je spor.
3. Ekvivalenční třídy určují $R$ jednoznačně
    - Zřejmé... $xRy$ právě když ${x, y}\subseteq R[x]$.
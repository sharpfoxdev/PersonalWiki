---
tags:
  - 
share: "true"
---

# 03 Matice

## Operace S Maticemi a Základní Typy Matic, Hodnost Matice

### **Def:** Rovnost Matic

Dvě matice se rovnají, $A=B$, pokud mají stejné rozměry $m \times n$ a $A_{i j}=B_{i j}$ pro $i=1, \ldots, m, j=1, \ldots, n$.

### **Def:** Součet Matic

Bud' $A, B \in \mathbb{R}^{m \times n}$. Pak $A+B$ je matice typu $m \times n$ s prvky $(A+B)_{i j}=A_{i j}+B_{i j}$, $i=1, \ldots, m, j=1, \ldots, n$.

### **Def:** Násobek Matice

Bud' $\alpha \in \mathbb{R}$ a $A \in \mathbb{R}^{m \times n}$. Pak $\alpha A$ je matice typu $m \times n$ s prvky $(\alpha A)_{i j}=\alpha A_{i j}$, $i=1, \ldots, m, j=1, \ldots, n$.

- Výše zmíněné operace umožňují zavést přirozeně i odčítání jako $A-B:=A+(-1) B$.

### **Def:** Nulová Matice

Matice, jejíž všechny prvky jsou nuly. Značíme ji 0 či $0_{m \times n}$ pro zdůraznění rozměru.

### **Tvrzení:** Vlastnosti Součtu a Násobku Matic

Pro reálná čísla $\alpha, \beta$ a matice $A, B, C \in \mathbb{R}^{m \times n}$ platí

(1) $A+B=B+A \quad$ (komutativita),

(2) $(A+B)+C=A+(B+C) \quad$ (asociativita),

(3) $A+0=A$,

(4) $A+(-1) A=0$,

(5) $\alpha(\beta A)=(\alpha \beta) A$,

(6) $1 A=A$,

(7) $\alpha(A+B)=\alpha A+\alpha B \quad$ (distributivita),

(8) $(\alpha+\beta) A=\alpha A+\beta A \quad$ (distributivita).

### **Def:** Součin Matic

Bud' $A \in \mathbb{R}^{m \times p}$ a $B \in \mathbb{R}^{p \times n}$. Pak $A B$ je matice typu $m \times n$ s prvky $(A B)_{i j}=$ $\sum_{k=1}^{p} A_{i k} B_{k j}$.

Bud'

$$

A=\left(\begin{array}{llll}
1 & 2 & 3 & 4 \\
0 & 1 & 0 & 1 \\
2 & 2 & 2 & 2
\end{array}\right), B=\left(\begin{array}{llll}
1 & 1 & 1 & 1 \\
1 & 0 & 2 & 2 \\
1 & 2 & 1 & 3 \\
1 & 2 & 1 & 0
\end{array}\right)

$$

Mnemotechnická pomůcka pro násobení matic $A B$, prvek na pozici $(i, j)$ spočítáme jako skalární součin
$i$-tého řádku matice $A$ a $j$-tého sloupce matice $B$ :
![[Pasted image 20231224105041.png|Pasted image 20231224105041.png]]

## Regulární a Inverzní Matice
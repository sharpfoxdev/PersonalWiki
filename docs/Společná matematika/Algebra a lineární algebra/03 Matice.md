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

### **Def:** Jednotková Matice

Značí se $I$ či $I_{n}$ a je to čtvercová matice řádu $n$ s prvky $I_{i j}=1$ pro $i=j$ a $I_{i j}=0$ jinak. 

### **Def:** Jednotkový Vektor

Jednotkový vektor $e_{i}$ je $i$-tý sloupec jednotkové matice, tj. $e_{i}=I_{* i}$.

### **Tvrzení:** Vlastnosti Součtu a Násobku Matic

Pro reálná čísla $\alpha, \beta$ a matice $A, B, C \in \mathbb{R}^{m \times n}$ platí

1. $A+B=B+A \quad$ (komutativita),
2. $(A+B)+C=A+(B+C) \quad$ (asociativita),
3. $A+0=A$,
4. $A+(-1) A=0$,
5. $\alpha(\beta A)=(\alpha \beta) A$,
6. $1 A=A$,
7. $\alpha(A+B)=\alpha A+\alpha B \quad$ (distributivita),
8. $(\alpha+\beta) A=\alpha A+\beta A \quad$ (distributivita).

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

### **Tvrzení:** Vlastnosti Součinu Matic

$\alpha$ je čislo a $A, B, C$ matice vhodných rozměru.

1. $(A B) C=A(B C) \quad$ (asociativita),
2. $A(B+C)=A B+A C \quad$ (distributivita zleva),
3. $(A+B) C=A C+B C \quad$ (distributivita zprava),
4. $\alpha(A B)=(\alpha A) B=A(\alpha B)$,
5. $0 A=A 0=0$,
6. $I_{m} A=A I_{n}=A$, kde $A \in \mathbb{R}^{m \times n}$.

Součin matic obecně není komutativní, pro mnoho matic je $A B \neq B A$. Například pro matice

### **Def:** Transpozice

Bud' $A \in \mathbb{R}^{m \times n}$. Pak transponovaná matice má typ $n \times m$, značí se $A^{T}$ a je definovaná $\left(A^{T}\right)_{i j}:=a_{j i}$.

Příklad 3.12. Transpozice vlastně znamená překlopení dle hlavní diagonály, např.

$$

A=\left(\begin{array}{ccc}
1 & 2 & 3 \\
4 & 5 & 6
\end{array}\right), \quad A^{T}=\left(\begin{array}{cc}
1 & 4 \\
2 & 5 \\
3 & 6
\end{array}\right)

$$

### **Tvrzení:** Vlastnosti Součinu Matic

$\alpha$ je číslo a $A, B$ matice vhodných rozměru.

1. $\left(A^{T}\right)^{T}=A$,
2. $(A+B)^{T}=A^{T}+B^{T}$,
3. $(\alpha A)^{T}=\alpha A^{T}$,
4. $(A B)^{T}=B^{T} A^{T}$.

### **Def:** Symetrická Matice

Matice $A \in \mathbb{R}^{n \times n}$ je symetrická, pokud $A=A^{T}$.

Pro libovolnou matici $B \in \mathbb{R}^{m \times n}$ je matice $B^{T} B$ symetrická. To snadno nahlédneme z definice, nebot její transpozicí je ona sama: $\left(B^{T} B\right)^{T}=B^{T}\left(B^{T}\right)^{T}=B^{T} B$.

### **Def:** Diagonální Matice

Matice $A \in \mathbb{R}^{n \times n}$ je diagonální, pokud $a_{i j}=0$ pro všechna $i \neq j$. Tedy diagonální matice má na diagonále libovolné prvky a mimo ni jsou nuly.

### **Def:** Horní Trojúhelníková Matice

Matice $A \in \mathbb{R}^{m \times n}$ je horní trojúhelníková, pokud $a_{i j}=0$ pro všechna $i>j$. Horní trojúhelníková matice má tedy pod diagonálou nuly. Může mít libovolné rozměry, i když nejčastější případ je čtvercová matice. Schematicky pro $m \leq n$

$$

\left(\begin{array}{cccccc}
a_{11} & \ldots & \ldots & a_{1 m} & \ldots & a_{1 n} \\
0 & a_{22} & & \vdots & & \vdots \\
\vdots & \ddots & \ddots & \vdots & & \vdots \\
0 & \ldots & 0 & a_{m m} & \ldots & a_{m n}
\end{array}\right)

$$

### **Def:** Standardní Skalární Součin

Transpozice a součin vektorů jakožto matic o jednom sloupci umožňují zavést součin vektorů $x, y \in \mathbb{R}^{n}$ jako $x^{T} y$ nebo jako $x y^{T}$, jiné kombinace nejsou možné. První z výrazů definuje standardni skalárni součin, a má tvar

$$

x^{T} y=\sum_{i=1}^{n} x_{i} y_{i}

$$

(formálně je to matice $1 \times 1$, ale ztotožníme ji s reálným číslem)

### **Def:** Standardní Eukleidovská Norma

Standardní eukleidovskou normu vektoru $x \in \mathbb{R}^{n}$ lze pak zavést jako

$$

\|x\|=\sqrt{x^{T} x}=\sqrt{\sum_{i=1}^{n} x_{i}^{2}} .

$$

### **Def:** Vnější Součin Vektorů

Vnějši součin vektorů $x, y$ je čtvercová matice řádu $n$

$$

\begin{aligned}
& x y^{T}=\left(\begin{array}{cccc}
x_{1} y_{1} & x_{1} y_{2} & \ldots & x_{1} y_{n} \\
x_{2} y_{1} & x_{2} y_{2} & \ldots & x_{2} y_{n} \\
\vdots & \vdots & & \vdots \\
x_{n} y_{1} & x_{n} y_{2} & \ldots & x_{n} y_{n}
\end{array}\right)=\left(\begin{array}{ccc}
- & x_{1} y^{T} & - \\
- & x_{2} y^{T} & - \\
& \vdots \\
- & x_{n} y^{T} & -
\end{array}\right)= \\
& =\left(\begin{array}{cccc}
\mid & \mid & & \mid \\
x y_{1} & x y_{2} & \cdots & x y_{n} \\
\mid & \mid & & \mid
\end{array}\right) .
\end{aligned}

$$

Protože v matici $x y^{T}$ jsou všechny řádky násobkem vektoru $y^{T}$ (a všechny sloupce násobkem vektoru $x$ ), tak má matice $x y^{T}$ hodnost nanejvýš 1 

### **Tvrzení:** Další Vlastnosi Součinu Matic

Bud' $A \in \mathbb{R}^{m \times n}, B \in \mathbb{R}^{n \times p}, x \in \mathbb{R}^{n} a y \in \mathbb{R}^{m}$. Pak platí:

1. $A e_{j}=A_{* j}$,
2. $e_{i}^{T} A=A_{i *}$,
3. $(A B)_{* j}=A B_{* j}$,
4. $(A B)_{i *}=A_{i *} B$
5. $A x=\sum_{j=1}^{n} x_{j} A_{* j}$,
6. $y^{T} A=\sum_{i=1}^{m} y_{i} A_{i *}$.

Schematické vyjádření vlastnosti (1)

$$

A e_{j}=\left(\begin{array}{ccccc}
\mid & & \mid & & \mid \\
A_{* 1} & \cdots & A_{* j} & \cdots & A_{* n} \\
\mid & & \mid & & \mid
\end{array}\right)\left(\begin{array}{c}
0 \\
\vdots \\
1 \\
\vdots \\
0
\end{array}\right)=\left(\begin{array}{c}
\mid \\
A_{* j} \\
\mid
\end{array}\right)

$$

vlastnosti (3)

![](https://cdn.mathpix.com/cropped/2023_12_16_555d57c40f5e0e1b3d41g-042.jpg?height=432&width=738&top_left_y=1506&top_left_x=636)

a vlastnosti (5)

$$

\left(\begin{array}{cccc}
\mid & \mid & & \mid \\
A_{* 1} & A_{* 2} & \ldots & A_{* n} \\
\mid & \mid & & \mid
\end{array}\right)\left(\begin{array}{c}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{array}\right)=\left(\begin{array}{c}
\mid \\
A_{* 1} \\
\mid
\end{array}\right) x_{1}+\left(\begin{array}{c}
\mid \\
A_{* 2} \\
\mid
\end{array}\right) x_{2}+\ldots+\left(\begin{array}{c}
\mid \\
A_{* n} \\
\mid
\end{array}\right) x_{n} .

$$

### **Def:** Zápis Interpretace Soustavy Rovnic

Soustavu lineárních rovnic (2.1) můžeme maticově zapsat také takto: $A x=b$, kde $x=\left(x_{1}, \ldots, x_{n}\right)^{T}$ je vektor proměnných, $b \in \mathbb{R}^{m}$ vektor pravých stran a $A \in \mathbb{R}^{m \times n}$ matice soustavy. To, že výraz $A x=b$ vyjadřuje soustavu lineárních rovnic (2.1), je snadno vidět rozepsáním tohoto výrazu:

$$

\left(\begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1 n} \\
\vdots & \vdots & & \vdots \\
a_{m 1} & a_{m 2} & \ldots & a_{m n}
\end{array}\right)\left(\begin{array}{c}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{array}\right)=\left(\begin{array}{c}
b_{1} \\
\vdots \\
b_{m}
\end{array}\right)

$$

neboli

$$

\begin{aligned}
a_{11} x_{1}+a_{12} x_{2}+\ldots+a_{1 n} x_{n} & =b_{1} \\
a_{21} x_{1}+a_{22} x_{2}+\ldots+a_{2 n} x_{n} & =b_{2} \\
& \vdots \\
a_{m 1} x_{1}+a_{m 2} x_{2}+\ldots+a_{m n} x_{n} & =b_{m}
\end{aligned}

$$

## Regulární a Inverzní Matice
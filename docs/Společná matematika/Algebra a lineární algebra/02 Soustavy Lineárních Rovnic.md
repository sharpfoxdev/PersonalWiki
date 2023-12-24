---
tags:
  - 
share: "true"
---

# 02 Soustavy Lineárních Rovnic

## Maticový Zápis, Elementární Řádkové Úpravy, Odstupňovaný Tvar Matice

### **Def:** Matice

Reálná matice typu $m \times n$ je obdélníkové schema (tabulka) reálných čísel

$$
A=\left(\begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1 n} \\
\vdots & \vdots & & \vdots \\
a_{m 1} & a_{m 2} & \ldots & a_{m n}
\end{array}\right)
$$

Prvek na pozici $(i, j)$ matice $A$ (tj. v $i$-tém řádku a $j$-tém sloupci) značíme $a_{i j}$ nebo $A_{i j}$.

### **Def:** \* Notace

$i$-tý řádek matice $A$ se značí: $A_{i *}=\left(a_{i 1}, a_{i 2}, \ldots, a_{i n}\right)$.

$j$-tý sloupec matice $A$ se značí: $A_{* j}=\left(\begin{array}{c}a_{1 j} \\ a_{2 j} \\ \vdots \\ a_{n j}\end{array}\right)$.

Matici $A \in \mathbb{R}^{m \times n}$ tudíž můžeme rozepsat po sloupcích a po řádcích takto

$$
A=\left(\begin{array}{cccc}
\mid & \mid & & \mid \\
A_{* 1} & A_{* 2} & \ldots & A_{* n} \\
\mid & \mid & & \mid
\end{array}\right)=\left(\begin{array}{ccc}
- & A_{1 *} & - \\
- & A_{2 *} & - \\
& \vdots & \\
- & A_{m *} & -
\end{array}\right)
$$

### **Def:** Matice Soustavy

Matice soustavy je matice

$$
A=\left(\begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1 n} \\
\vdots & \vdots & & \vdots \\
a_{m 1} & a_{m 2} & \ldots & a_{m n}
\end{array}\right)
$$

a rozšiřená matice soustavy je

$$
(A \mid b)=\left(\begin{array}{cccc|c}
a_{11} & a_{12} & \ldots & a_{1 n} & b_{1} \\
a_{21} & a_{22} & \ldots & a_{2 n} & b_{2} \\
\vdots & \vdots & & \vdots & \vdots \\
a_{m 1} & a_{m 2} & \ldots & a_{m n} & b_{m}
\end{array}\right)
$$

### **Def:** Elementární Řádkové Úpravy

Elementární řádkové úpravy matice jsou

1. vynásobení $i$-tého řádku reálným číslem $\alpha \neq 0$ (tj. vynásobí se všechny prvky řádku),
2. přičtení $\alpha$-násobku $j$-tého řádku k $i$-tému, přičemž $i \neq j$ a $\alpha \in \mathbb{R}$,
3. výměna $i$-tého a $j$-tého řádku.

Poznámka 2.9. Ve skutečnosti výše zmíněné úpravy nejsou zas tak elementární. U druhé řádkové úpravy vystačíme jen $\mathrm{s} \alpha=1$ a třetí úpravu lze simulovat pomocí předchozích dvou. Schematicky

$$
\left(\begin{array}{c}
\ldots \\
A_{i *} \\
\ldots \\
A_{j *} \\
\ldots
\end{array}\right) \sim\left(\begin{array}{c}
\ldots \\
A_{i *} \\
\ldots \\
A_{j *}-A_{i *} \\
\ldots
\end{array}\right) \sim\left(\begin{array}{c}
\ldots \\
A_{j *} \\
\ldots \\
A_{j *}-A_{i *} \\
\ldots
\end{array}\right) \sim\left(\begin{array}{c}
\ldots \\
A_{j *} \\
\ldots \\
-A_{i *} \\
\ldots
\end{array}\right) \sim\left(\begin{array}{c}
\ldots \\
A_{j *} \\
\ldots \\
A_{i *} \\
\ldots
\end{array}\right)
$$

Elementární řádkové operace zachovávaji množinu řešení soustavy.

### **Def:** Odstupňovaný Tvar Matice

Matice $A \in \mathbb{R}^{m \times n}$ je v řádkově odstupňovaném tvaru, pokud existuje $r$ takové, že platí

- řádky $1, \ldots, r$ jsou nenulové (tj. každý obsahuje aspoň jednu nenulovou hodnotu),
- řádky $r+1, \ldots, m$ jsou nulové,

a navíc označíme-li jako $p_{i}=\min \left\{j ; a_{i j} \neq 0\right\}$ pozici prvního nenulového prvku $\mathrm{v} i$-tém řádku, tak platí

- $p_{1}<p_{2}<\cdots<p_{r}$.

$\mathrm{K}$ odstupňovanému tvaru se vztahují některé zásadní pojmy: Pozice $\left(1, p_{1}\right),\left(2, p_{2}\right), \ldots,\left(r, p_{r}\right)$ se nazývají pivoty, sloupce $p_{1}, p_{2}, \ldots, p_{r}$ se nazývají bázické a ostatní sloupce nebázické (význam bude zřejmý později).

Schematické znázornění odstupňovaného tvaru. Pivoty jsou pozice černých teček a obsahují nenulové hodnoty.
![[Pasted image 20231224101438.png|Pasted image 20231224101438.png]]

### **Def:** Hodnost Matice

Hodností matice $A$ rozumíme počet nenulových řádků po převodu do odstupňovaného tvaru a značíme $\operatorname{rank}(A)$. Hodnost matice je tedy rovna počtu pivotů (tj. číslu $r$ ) po převedení do odstupňovaného tvaru.

### **Algo:** Převod Na Odstupňovaný Tvar REF(A)

Vstup: matice $A \in \mathbb{R}^{m \times n}$.

1. $i:=1, j:=1$,
2. if $a_{k \ell}=0$ pro všechna $k \geq i$ a $\ell \geq j$ then konec,
3. $j:=\min \left\{\ell ; \ell \geq j, a_{k \ell} \neq 0\right.$ pro nějaké $\left.k \geq i\right\}$, //přeskočíme nulové podsloupečky
4. urči $k$ takové, že $a_{k j} \neq 0, k \geq i$ a vyměň řádky $A_{i *}$ a $A_{k *}$, //nyní je na pozici pivota hodnota $a_{i j} \neq 0$
5. pro všechna $k>i$ polož $A_{k *}:=A_{k *}-\frac{a_{k j}}{a_{i j}} A_{i *}$, //2. elementární úprava
6. polož $i:=i+1, j:=j+1$, a jdi na krok 2 .

Výstup: matice $A$ v odstupňovaném tvaru. Krok 2 je ukončovací: Skončíme, když podmatice vpravo dole od aktuální pozice $(i, j)$ je nulová.

### **Příklad:** Převod Na Odstupňovaný Tvar REF(A)

Zakroužkované hodnoty ukazují aktuální pozice $i, j$, často to jsou pozice pivotů. U každého kroku označujeme, který krok algoritmu se zrovna použije. 
![[Pasted image 20231224102148.png|Pasted image 20231224102148.png]]

### **Def:** Redukovaný Odstupňovaný Tvar RREF(A)

Matice $A \in \mathbb{R}^{m \times n}$ je v redukovaném řádkově odstupňovaném tvaru, pokud je v REF tvaru a navíc platí

- $a_{1 p_{1}}=a_{2 p_{2}}=\ldots=a_{r p_{r}}=1$, tedy na pozicích pivotů jsou jedničky, a
- pro každé $i=1, \ldots, r$ je $a_{1 p_{i}}=a_{2 p_{i}}=\ldots=a_{i-1, p_{i}}=0$, tedy nad každým pivotem jsou samé nuly.

Narozdíl od REF jsou pivoty navíc znormovány na jedničku a nad nimi jsou samé nuly.
![[Pasted image 20231224103541.png|Pasted image 20231224103541.png]]

### **Algo:** Převod Na RREF(A)

Vstup: matice $A \in \mathbb{R}^{m \times n}$.

1. $i:=1, j:=1$,
2. if $a_{k \ell}=0$ pro všechna $k \geq i$ a $\ell \geq j$ then konec,
3. $j:=\min \left\{\ell ; \ell \geq j, a_{k \ell} \neq 0\right.$ pro nějaké $\left.k \geq i\right\}$, //přeskočíme nulové podsloupečky
4. urči $a_{k j} \neq 0, k \geq i$ a vyměň řádky $A_{i *}$ a $A_{k *}$, //nyní je na pozici pivota hodnota $a_{i j} \neq 0$
5. polož $A_{i *}:=\frac{1}{a_{i j}} A_{i *}$, //nyní je na pozici pivota hodnota $a_{i j}=1$
6. pro všechna $k \neq i$ polož $A_{k *}:=A_{k *}-a_{k j} A_{i *}$, //2. elementární úprava
7. polož $i:=i+1, j:=j+1$, a jdi na $\operatorname{krok}[2$.

Výstup: matice $A$ v redukovaném odstupňovaném tvaru.

### **Příklad:** Převod Na RREF(A)

![[Pasted image 20231224103757.png|Pasted image 20231224103757.png]]

## Gaussova a Gaussova-Jordanova Eliminace, Popis Množiny Řešení

### **Algo:** Gausova Eliminace

Bud' dána soustava rovnic $(A \mid b)$ ), kde $A \in \mathbb{R}^{m \times n}, b \in \mathbb{R}^{m}$. Převedeme rozšiř̌enou matici soustavy $(A \mid b)$ na odstupňovaný tvar $\left(A^{\prime} \mid b^{\prime}\right)$ a označíme $r=\operatorname{rank}(A \mid b)$. Nyní nastala právě jediná z následujících tří situací:

**(A) Soustava nemá řešeni.**

Tato situace nastane v případě, že poslední sloupec je bázický, čili v posledním sloupci je pivot. Ekvivalentně vyjádřeno, $\operatorname{rank}(A)<\operatorname{rank}(A \mid b)$, nebo ještě jinak $\operatorname{rank}\left(A^{\prime}\right)<\operatorname{rank}\left(A^{\prime} \mid b^{\prime}\right)$.

**(B) Soustava má alespoň jedno řešení.**

Tato situace naopak nastane, pokud poslední sloupec je nebázický, čili neobsahuje pivota. Jinými slovy to znamená, že $\operatorname{rank}(A)=\operatorname{rank}(A \mid b)$, neboli $\operatorname{rank}\left(A^{\prime}\right)=\operatorname{rank}\left(A^{\prime} \mid b^{\prime}\right)$. Rozlišíme dva podpřípady, odpovídající tomu, jestli má soustava jediné řešení nebo nekonečně mnoho řešení.

**(B1) Soustava má jediné řešeni.**

Jediné řešení existuje pokud $r=n$, to znamená, že počet proměnných je roven počtu pivotů. V každém sloupci, kromě nejpravějšího, se tudíž nachází pivot. Řešení nyní najdeme tzv. zpětnou substitucí: Postupně pro $k=n, n-1, \ldots, 1 \mathrm{v}$ tomto pořadí dosadíme

$$
x_{k}:=\frac{b_{k}^{\prime}-\sum_{j=k+1}^{n} a_{k j}^{\prime} x_{j}}{a_{k k}^{\prime}}
$$

**(B2) Soustava má nekonečně mnoho řešení.**

Tento případ nastane, pokud $r<n$. To znamená, že kromě nejpravějšího sloupečku je v matici alespoň jeden další nebázický sloupec. Množinu všech nekonečně mnoho řešení popíšeme parametricky. Jako bázické proměnné označíme ty, které odpovídají bázickým sloupcům, tj. $x_{p_{1}}$, $x_{p_{2}}, \ldots, x_{p_{r}}$, a jako nebázické proměnné ty zbývající. Potom nebázické proměnné budou parametry, které mohou nabývat libovolných reálných hodnot a pomocí nichž dopočítáme bázické proměnné opět zpětnou substitucí: Postupně pro $k=r, r-1, \ldots, 1$ v tomto pořadí dosadíme

$$
x_{p_{k}}:=\frac{b_{k}^{\prime}-\sum_{j=p_{k}+1}^{n} a_{k j}^{\prime} x_{j}}{a_{k p_{k}}^{\prime}}
$$

Počet nebázických proměnných je $n-r>0$ a toto číslo vyjadřuje dimenzi množiny řešení. Pokud $n-r=1$, pak je množinou řešení přímka, pokud $n-r=2$, pak množina řešení tvoří rovinu atp.

### **Příklad:** Gausova Eliminace

Vyřešíme Gaussovou eliminací následující soustavu. Nejprve převedeme rozšiřenou matici soustavy na odstupňovaný tvar

$$
\left(\begin{array}{rrrr|r}
2 & 2 & -1 & 5 & 1 \\
4 & 5 & 0 & 9 & 3 \\
0 & 1 & 2 & 2 & 4 \\
2 & 4 & 3 & 7 & 7
\end{array}\right) \underset{\sim}{\operatorname{REF}}\left(\begin{array}{rrrr|r}
2 & 2 & -1 & 5 & 1 \\
0 & 1 & 2 & -1 & 1 \\
0 & 0 & 0 & 3 & 3 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

Zpětná substituce probíhá takto:
1. $x_{4}=1$,
2. $x_{3}$ je volná (nebázická) proměnná,
3. $x_{2}=1+x_{4}-2 x_{3}=2-2 x_{3}$,
4. $x_{1}=\frac{1}{2}\left(1-5 x_{4}+x_{3}-2 x_{2}\right)=-4+\frac{5}{2} x_{3}$.

Všechna řešení jsou tvaru (zapsáno v řádku)

$$
\left(-4+\frac{5}{2} x_{3}, 2-2 x_{3}, x_{3}, 1\right), \text { kde } x_{3} \in \mathbb{R}
$$

Tato řešení můžeme vyjádřìt ekvivalentně ve tvaru

$$
(-4,2,0,1)+x_{3}\left(\frac{5}{2},-2,1,0\right), \text { kde } x_{3} \in \mathbb{R}
$$

jehož význam vyplyne $\mathrm{v}$ následující kapitole. $\mathrm{Z}$ tohoto vyjádření rovněž vyplyne, že množina řešení představuje přímku $\mathrm{v} \mathbb{R}^{4}$ se směrnicí $\left(\frac{5}{2},-2,1,0\right)$ a procházející bodem $(-4,2,0,1)$.

### **Algo:** Gausova-Jordanova Eliminace

Bud' dána soustava rovnic $(A \mid b)$, kde $A \in \mathbb{R}^{m \times n}$, $b \in \mathbb{R}^{m}$. Převedeme rozšířenou matici soustavy na redukovaný odstupňovaný tvar $\left(A^{\prime} \mid b^{\prime}\right)$ a označíme $r=\operatorname{rank}(A \mid b)$. Rozlišíme tři situace:

**(A) Soustava nemá řešení.**

Tento případ nastane, pokud je poslední sloupec bázický. Jinými slovy, poslední sloupec obsahuje pivota, čili $\operatorname{rank}(A)<\operatorname{rank}(A \mid b)$. Důkaz analogický jako pro Gaussovu eliminaci.

**(B1) Soustava má právě jedno řešení.**

Toto nastane, pokud je poslední sloupec nebázický (neobsahuje pivota) a zároveň $r=n$. Tudíž sloupce $1, \ldots, n$ jsou bázické a poslední je nebázický. Tvrdíme, že jednoznačné řešení má tvar $\left(x_{1}, \ldots, x_{n}\right)=\left(b_{1}^{\prime}, \ldots, b_{n}^{\prime}\right)$.

**(B2) Soustava má nekonečně mnoho řešení.**

Pro tento případ musí být poslední sloupec nebázický a $r<n$. Množinu řešení popíšeme parametricky. Označíme nebázické proměnné $x_{i}, i \in N$, kde $N=\{1, \ldots, n\} \backslash\left\{p_{1}, \ldots, p_{r}\right\}$. Opět, nebázické proměnné budou parametry, které mohou nabývat libovolných reálných hodnot a pomocí nich dopočítáme bázické proměnné opět zpětnou substitucí (zde lze i dopřednou): Postupně pro $k=r, r-1, \ldots, 1 \mathrm{v}$ tomto pořadí dosadíme

$$
x_{p_{k}}:=b_{k}^{\prime}-\sum_{j \in N, j>p_{k}} a_{k j}^{\prime} x_{j}
$$

### **Příklad:** Gausova-Jordanova Eliminace

Uvažujme soustavu z příkladu 2.18, ale tentokrát ji vyřešíme Gaussovou-Jordanovou eliminací. Převedeme rozšířenou matici soustavy na redukovaný odstupňovaný tvar

$$
\left(\begin{array}{rrrr|r}
2 & 2 & -1 & 5 & 1 \\
4 & 5 & 0 & 9 & 3 \\
0 & 1 & 2 & 2 & 4 \\
2 & 4 & 3 & 7 & 7
\end{array}\right) \underset{\sim}{\operatorname{RREF}}\left(\begin{array}{rrrr|r}
1 & 0 & -2.5 & 0 & -4 \\
0 & 1 & 2 & 0 & 2 \\
0 & 0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

Jednotlivé kroky zpětné substituce jsou:

1. $x_{4}=1$,
2. $x_{3}$ je volná (nebázická) proměnná,
3. $x_{2}=2-2 x_{3}$,
4. $x_{1}=-4+\frac{5}{2} x_{3}$.

Množinu řešení dostáváme opět ve tvaru $(-4,2,0,1)+x_{3}\left(\frac{5}{2},-2,1,0\right)$, kde $x_{3} \in \mathbb{R}$.
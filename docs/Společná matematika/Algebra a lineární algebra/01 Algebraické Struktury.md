---
tags:
  - 
share: "true"
---

# 01 Algebraické Struktury

## Grupy a Podgrupy, Permutace

### **Def:** Grupa

Bud’ $\circ: G^{2} \rightarrow G$ binární operace na množině $G$. Pak grupa je dvojice $(G, \circ)$ splňující:

(1) $\forall a, b, c \in G: a \circ(b \circ c)=(a \circ b) \circ c \quad$ (asociativita),

(2) $\exists e \in G \forall a \in G: e \circ a=a \circ e=a \quad$ (existence neutrálního prvku),

(3) $\forall a \in G \exists b \in G: a \circ b=b \circ a=e \quad$ (existence inverzního prvku).

**Abelova (komutativní) grupa** je taková grupa, která navíc splňuje:

(4) $\forall a, b \in G: a \circ b=b \circ a \quad$ (komutativita).

V definici grupy je implicitně schovaná podmínka uzavřenosti, aby výsledek operace nevypadl ven z množiny $G$, tedy aby pro každé dva prvky $a, b \in G$ platilo $a \circ b \in G$. Pokud je operací $\circ$ sčítání, většinou se značí neutrální prvek 0 a inverzní $-a$, pokud jde o násobení, neutrální prvek se označuje 1 a inverzní $a^{-1}$.

### Příklady Grup*

- abelosvské grupy
	- $(\mathbb{Z},+)$, $(\mathbb{Q},+)$, $(\mathbb{R},+$ ) a $(\mathbb{C},+)$. $e = 0$ , inverzn k$a$ je $-a$.
	- Konečná grupa $\left(\mathbb{Z}_{n},+\right)$, kde množina $\mathbb{Z}_{n}:=\{0,1, \ldots, n-1\}$ a sčítání se provádí modulo $n$. $e = 0$ , inverzním k $a$ je $-a \bmod n$.
	- $(\mathbb{Q} \backslash\{0\}, \cdot),(\mathbb{R} \backslash\{0\}, \cdot)$. Nulu musíme vynechat, protože nemá inverz. $e = 1$ , inverz k $a$ je $a^{-1}$.
	- Grupy matic $\left(\mathbb{R}^{m \times n},+\right)$. Neutrálním prvkem je nulová matice 0 rozměru $m \times n$, inverz k matici $A$ je $-A$.
- neabelovské grupy
	- Zobrazení na množině s operací skládání, např. rotace v $\mathbb{R}^{n}$ podle počátku nebo později probírané permutace. Rotace v rovině $\mathbb{R}^{2}$ jsou ještě komutativní, ale ve vyšších dimenzích komutativitu ztrácíme. Neutrálním prvkem je otočení o nulový úhel, inverzním prvkem je otočení o opačný úhel zpět.
	- Regulární matice pevného řádu $n$ s násobením (tzv. maticová grupa). Neutrálním prvkem je $I_{n}$, inverzním prvkem k matici $A$ je inverzní matice $A^{-1}$. Asociativita maticového součinu byla nahlédnuta ve tvrzení 3.9.
- negrupy
	- $(\mathbb{N},+),(\mathbb{Z},-),(\mathbb{R} \backslash\{0\},:), \ldots$

### **Tvrzení:** Základní Vlastnosti V grupě*

Pro prvky grupy $(G, \circ)$ platí následující vlastnosti.

(1) $a \circ c=b \circ c$ implikuje $a=b \quad$ (tzv. krácení),

(2) neutrálni prvek e je určen jednoznačně,

(3) pro každé $a \in G$ je jeho inverzni prvek určen jednoznačně,

(4) rovnice $a \circ x=b$ má právě jedno řešeni pro každé $a, b \in G$,

(5) $\left(a^{-1}\right)^{-1}=a$,

(6) $(a \circ b)^{-1}=b^{-1} \circ a^{-1}$.

### **Def:** Podgrupa

Podgrupa grupy $(G, \circ)$ je grupa $(H, \diamond)$ taková, že $H \subseteq G$ a pro všechna $a, b \in H$ platí $a \circ b=a \diamond b$. Značení: $(H, \diamond) \leq(G, \circ)$.

Jinými slovy, se stejně definovanou operací splňuje $H$ vlastnosti uzavřenost a existence neutrálního a inverzního prvku. To jest, pro každé $a, b \in H$ je $a \circ b \in H$, dále $e \in H$, a pro každé $a \in H$ je $a^{-1} \in H$.

Příklad:
- Každá grupa $(G, \circ)$ má dvě triviální podgrupy: sama sebe $(G, \circ)$ a $(\{e\}, \circ)$.
- $(\mathbb{N},+) \nleq (\mathbb{Z},+) \leq(\mathbb{Q},+) \leq(\mathbb{R},+) \leq(\mathbb{C},+)$.

### **Def:** Permutace

Permutace na konečné množině $X$ je vzájemně jednoznačné zobrazení $p: X \rightarrow$ $X$. 

(Vzájemně jednoznačné zobrazení $f: X \rightarrow Y$ je zobrazení, které je prosté (žádné dva různé prvky se nezobrazí na jeden) a „na“ (pokryje celou množinu $Y$ ).)

Většinou budeme uvažovat $X=\{1, \ldots, n\}$ Množina všech permutací na množině $\{1, \ldots, n\}$ se pak značí $S_{n}$. Zadání permutace je možné například:

- Tabulkou, nahoře vzory, dole obrazy

$$
p=\left(\begin{array}{llllll}
1 & 2 & 3 & 4 & 5 & 6 \\
2 & 1 & 3 & 5 & 6 & 4
\end{array}\right)
$$

- Grafem vyznačujícím kam se který prvek zobrazí

![](https://cdn.mathpix.com/cropped/2023_12_16_555d57c40f5e0e1b3d41g-065.jpg?height=280&width=285&top_left_y=1328&top_left_x=997)

- Rozložením na cykly - každá závorka uvádí seznam prvků v jednom cyklu. Tedy $\left(a_{1}, \ldots, a_{k}\right)$ znamená, že $a_{1}$ se zobrazí na $a_{2}, a_{2}$ se zobrazí na $a_{3}$, atd. $a_{k}$ se zobrazí na $a_{1}$. 

$$
p=(1,2)(3)(4,5,6),
$$

- redukovaný zápis - vynechává cykly délky 1.

$$
p=(1,2)(4,5,6)
$$

Příklady:
	- transpozice, což je permutace $t=(i, j) \mathrm{s}$ jedním cyklem délky 2 prohazující dva prvky. 
	- identita $i d$ zobrazující každý prvek na sebe.

### **Def:** Inverzní Permutace*

Bud’ $p \in S_{n}$. Inverzní permutace k $p$ je permutace $p^{-1}$ definovaná $p^{-1}(i)=j$, pokud $p(j)=i$.

Příklad 4.10. $(i, j)^{-1}=(i, j),(i, j, k)^{-1}=(k, j, i), \ldots$

### **Def:** Skládání permutací*

Bud'te $p, q \in S_{n}$. Složená permutace $p \circ q$ je permutace definovaná $(p \circ q)(i)=p(q(i))$.

Příklad 4.12. $i d \circ p=p \circ i d=p, p \circ p^{-1}=p^{-1} \circ p=i d, \ldots$

Skládání permutací je asociativní (jako každé zobrazení), ale komutativní obecně není. Například pro $p=(1,2), q=(1,3,2)$ máme $p \circ q=(1,3)$, ale $q \circ p=(2,3)$.

### **Def:** Znaménko permutace*

Nechť se permutace $p \in S_{n}$ skládá z $k$ cyklů. Pak znaménko permutace je číslo $\operatorname{sgn}(p)=(-1)^{n-k}$.

Příklad 4.14. $\operatorname{sgn}(i d)=1, \operatorname{sgn}((i, j))=-1, \ldots$

Znaménko je vždy 1 nebo -1. Podle toho se též rozdělují permutace na sudé (ty, co mají znaménko 1) a na liché (ty se znaménkem -1).

### **Věta:** O Znaménku Složení Permutace a transpozice*

Bud' $p \in S_{n}$ a bud’ $t=(i, j)$ transpozice. Pak $\operatorname{sgn}(p)=-\operatorname{sgn}(t \circ p)=-\operatorname{sgn}(p \circ t)$.

### **Poznámka:** Symetrická grupa*

Množina permutací $S_{n}$ s operací skládání o tvoří nekomutativní grupu ( $\left.S_{n}, \circ\right)$, tzv. symetrickou grupu. Dá se ukázat, že každá grupa je isomorfní nějaké podgrupě symetrické grupy (tzv. Cayleyova reprezentace, dokonce platí i zobecnění na nekonečné grupy). Podobnou roli hrají maticové grupy, protože každá konečná grupa je isomorfní nějaké maticové podgrupě (lineární reprezentace) s tím, že těleso, nad kterým s maticemi pracujeme, si můžeme dopředu zvolit.

## Tělesa a Speciálně Konečná Tělesa

Algebraická tělesa zobecňuji třídu tradičních číselných oborů jako je třeba množina reálných čísel na abstraktní množinu se dvěma operacemi a řadou vlastností. To nám umožní pracovat s maticemi (sčítat, násobit, invertovat, řešit soustavy rovnic, ...) nad jinými obory než jen nad $\mathbb{R}$.

### **Def:** Těleso

Těleso je množina $\mathbb{T}$ spolu se dvěma komutativními binárními operacemi $+$ a $\cdot$ splňující

(1) $(\mathbb{T},+)$ je Abelova grupa, neutrální prvek značíme 0 a inverzní k $a$ pak $-a$,

(2) $(\mathbb{T} \backslash\{0\}, \cdot)$ je Abelova grupa, neutrální prvek značíme 1 a inverzní k $a$ pak $a^{-1}$,

(3) $\forall a, b, c \in \mathbb{T}: a \cdot(b+c)=a \cdot b+a \cdot c \quad$ (distributivita).

Každé těleso má aspoň dva prvky, protože z definice nutně vyplývá, že $0 \neq 1$. 

Vlastnost inverzního prvku v grupě $(\mathbb{T},+)$ zavádí operaci „-" definovanou jako přičtení inverzního prvku, tj. $a-b \equiv a+(-b)$. 
Analogicky vlastnost inverzního prvku v grupě $(\mathbb{T} \backslash\{0\}, \cdot)$ zavádí operaci „/" definovanou jako násobení inverzním prvkem, tj. $a / b \equiv a b^{-1}$.

Proč jsme v definici tělesa požadovali, aby operace byly komutativní, když jejich komutativitu implicitně zahrnuje vlastnost Abelových grup? Důvod je ten, že druhá Abelova grupa nic neříká o prvku 0. Musíme proto nějakým způsobem dodat, že i násobení nulou je komutativní, tedy $0 a=a 0$ pro každé $a \in \mathbb{T}$.

### **Příklad:** Nekončná Tělesa

Příkladem nekonečných těles je například $\mathbb{Q}, \mathbb{R}$ nebo $\mathbb{C}$ s běžně používanými operacemi sčítání a násobení. Množina celých čísel $\mathbb{Z}$ ale těleso netvoří, protože chybí inverzní prvky pro násobení, (např. když invertujeme celočíselnou matici, tak často vycházejí zlomky a tím pádem se dostáváme mimo obor $\mathbb{Z})$.

### **Tvrzení:** Základní Vlastnosti V Tělese

(1) $0 a=0$,

(2) $a b=0$ implikuje, že $a=0$ nebo $b=0$,

(3) $-a=(-1) a$.

(4) distributivita zprava $(b+c) a=b a+c a$ plyne z levé distributivity a komutativity násobení

Druhá vlastnost (a její důkaz) předchozí věty mj. říkají, že při rozhodování, zda nějaká struktura tvoří těleso, nemusíme ověřovat uzavřenost násobení na množině $\mathbb{T} \backslash\{0\}$ (žádné dva nenulové prvky se nevynásobí na nulu), tato vlastnost vyplývá z ostatních. Stačí tedy jen uzavřenost na $\mathbb{T}$.

### **Def/Věta:** Konečná Tělesa

Mějme $\mathbb{Z}_{n}=\{0,1, \ldots, n-1\}$. Operace $+$ a $\cdot$ na této množině definujeme modulo $n$. Snadno nahlédneme, že $\mathbb{Z}_{2}$ a $\mathbb{Z}_{3}$ jsou tělesy, ale $\mathbb{Z}_{4}$ už není, nebot prvek 2 nemá inverzi $2^{-1}$. Tento výsledek můžeme zobecnit.

Bud' $n$ prvočíslo a bud' $0 \neq a \in \mathbb{Z}_{n}$. Pak při použití násobení modulo n platí

$$
\{0,1, \ldots, n-1\}=\{0 a, 1 a, \ldots,(n-1) a\} \text {. }
$$

Poznámka. V množině $\{0 a, 1 a, \ldots,(n-1) a\}$ se tedy postupně objeví všechna čísla $0,1, \ldots, n-1$ (ne nutně $\mathrm{v}$ tomto pořadí) a každé $\mathrm{z}$ nich právě jednou.

$\mathbb{Z}_{n}$ je těleso právě tehdy, když $n$ je prvočíslo.

### **Příklad:** Konečné Těleso $\mathbb{Z}_{5}$*

Pro ilustraci uvádíme v tabulkách dole explicitní vyjádření obou operací nad tělesem $\mathbb{Z}_{5}$ :

| + | 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 1 | 2 | 3 | 4 |
| 1 | 1 | 2 | 3 | 4 | 0 |
| 2 | 2 | 3 | 4 | 0 | 1 |
| 3 | 3 | 4 | 0 | 1 | 2 |
| 4 | 4 | 0 | 1 | 2 | 3 |

| $\cdot$ | 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 2 | 3 | 4 |
| 2 | 0 | 2 | 4 | 1 | 3 |
| 3 | 0 | 3 | 1 | 4 | 2 |
| 4 | 0 | 4 | 3 | 2 | 1 |

V tabulkách se odráží některé základní vlastnosti těles: Komutativita se projevuje jako symetrie tabulek, neutrální prvek kopíruje záhlaví tabulky do příslušného řádku a sloupce, a násobení nulou dává nulu. Vlastnost inverzního prvku se pak projevuje tak, že v každém řádku a sloupci (kromě násobení nulou) je uveden každý prvek tělesa právě jednou.

Inverzní prvky tělesa $\mathbb{Z}_{5}$ jsou pak:
- Chci, aby po sečtění a zmodulení vyšlo 0

| $x$ | 0 | 1 | 2 | 3 | 4 |
| :---: | :--- | :--- | :--- | :--- | :--- |
| $-x$ | 0 | 4 | 3 | 2 | 1 |

- Chci, aby povynásobení a zmodulení vyšla 1

| $x$ | 0 | 1 | 2 | 3 | 4 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x^{-1}$ | - | 1 | 3 | 2 | 4 |

Výpočet inverzní matice nad $\mathbb{Z}_{5}$ 

$$
\begin{aligned}
\left(A \mid I_{3}\right) & =\left(\begin{array}{lll|lll}
1 & 2 & 3 & 1 & 0 & 0 \\
2 & 0 & 4 & 0 & 1 & 0 \\
3 & 3 & 4 & 0 & 0 & 1
\end{array}\right) \sim\left(\begin{array}{lll|lll}
1 & 2 & 3 & 1 & 0 & 0 \\
0 & 1 & 3 & 3 & 1 & 0 \\
0 & 2 & 0 & 2 & 0 & 1
\end{array}\right) \sim\left(\begin{array}{lll|lll}
1 & 0 & 2 & 0 & 3 & 0 \\
0 & 1 & 3 & 3 & 1 & 0 \\
0 & 0 & 4 & 1 & 3 & 1
\end{array}\right) \sim \\
& \sim\left(\begin{array}{lll|lll}
1 & 0 & 2 & 0 & 3 & 0 \\
0 & 1 & 3 & 3 & 1 & 0 \\
0 & 0 & 1 & 4 & 2 & 4
\end{array}\right) \sim\left(\begin{array}{lll|lll}
1 & 0 & 0 & 2 & 4 & 2 \\
0 & 1 & 0 & 1 & 0 & 3 \\
0 & 0 & 1 & 4 & 2 & 4
\end{array}\right)=\left(I_{3} \mid A^{-1}\right)
\end{aligned}
$$

Poznámka 4.34 (Jak najít inverzi). Přirozená otázka při počítání nad tělesem $\mathbb{Z}_{p}$ zní, jak najít inverzní prvek k prvku $x \in \mathbb{Z}_{p} \backslash\{0\}$. Pro malé hodnoty $p$ mohu zkusit postupně $1,2, \ldots, p-1$ dokud nenarazím na inverzní prvek k $x$. Pokud $p$ je hodně velké prvočíslo, tento postup už není efektivní a postupuje se tzv. rozšiřeným Eukleidovým algoritmem, který najde $a, b \in \mathbb{Z}$ taková, že $a x+b p=1$. Z rovnice vidíme, že hledanou inverzí $x^{-1}$ je prvek $a$, bereme-li jeho zbytek po dělení $p$.

### **Věta:** O Velikosti Konečných Těles*

Existují konečná tělesa právě o velikostech $p^{n}$, kde $p$ je prvočíslo a $n \geq 1$.

### **Def:** Charakteristika Tělesa*

Charakteristika tělesa $\mathbb{T}$ je nejmenší $n$ takové, že

$$
\underbrace{1+1+\ldots+1}_{n}=0 .
$$

Pokud takové $n$ neexistuje pak ji definujeme jako 0 .

Kupříkladu nekonečná tělesa $\mathbb{Q}, \mathbb{R}$ či $\mathbb{C}$ mají charakteristiku 0 , těleso $\mathbb{Z}_{p}$ má charakteristiku $p$.

Charakteristika tělesa je bud’ nula, nebo prvočíslo.
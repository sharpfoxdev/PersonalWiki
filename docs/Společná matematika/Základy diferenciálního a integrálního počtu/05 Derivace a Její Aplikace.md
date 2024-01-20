---
tags:
  - 
share: "true"
---

# 05 Derivace a Její Aplikace

## Definice a Základní Pravidla pro Výpočet

### **Def:** Derivace Funkce V Bodě

Necht $f: M \rightarrow \mathbb{R}, b \in M$ a $U(b, \delta) \subseteq M$ pro nějaké $\delta>0$. Derivace funkce $f$ v bodě $b$ je limita

$$
f^{\prime}(b):=\lim _{h \rightarrow 0} \frac{f(b+h)-f(b)}{h}=\lim _{x \rightarrow b} \frac{f(x)-f(b)}{x-b} .
$$

Derivace funkce $f$ v bodě a zprava (zleva) je příslušná jednostranná limita pro $h \rightarrow 0^{+}\left(h \rightarrow 0^{-}\right)$, resp. $x \rightarrow a^{+}\left(x \rightarrow a^{-}\right)$. Tyto jednostranné derivace značíme $f_{+}^{\prime}(a)$ a $f_{-}^{\prime}(a)$.

Derivace bud' existuje **vlastní** $\left(f^{\prime}(b) \in \mathbb{R}\right)$ nebo **nevlastní** $\left(f^{\prime}(b)=\right.$ $\pm \infty)$ nebo neexistuje.

Stejně jako v případně limity, derivace existuje právě tehdy, když obě jednostranné derivace existují a jsou si rovny. 

Jestliže má $f$ v bodě $b$ vlastní derivaci, říkáme, že $f$ je v $b$ **diferencovatelná**.

### **Věta:** Diferencovatelnost => Spojitost

Má-li $f: U(b, \delta) \rightarrow \mathbb{R}$ v bodě $b$ vlastni derivaci, je $v$ b spojitá.

### **Věta:** Aritmetika Derivací

Necht’ $f, g: U(b, \delta) \rightarrow \mathbb{R}$ jsou funkce, které mají v bodě $b$ derivaci (vlastní či nevlastní). Pak

1. Platí, $\check{z} e(f+g)^{\prime}(b)=f^{\prime}(b)+g^{\prime}(b)$, je-li pravá strana definovaná.
2. Pro $\alpha \in \mathbb{R}$ platí $(\alpha f)^{\prime}(b)=\alpha\left(f^{\prime}(b)\right)$, je-li pravá strana definovaná.
3. Platí Leibnizova formule: $(f g)^{\prime}(b)=f^{\prime}(b) g(b)+f(b) g^{\prime}(b)$, je-li pravá strana definovaná a $f$ nebo $g$ je spojitá $v$ b.
4. Je-li g spojitá v $b$, $g(b) \neq 0$ a je-li pravá strana následujicí rovnosti definovaná, pak

$$
\left(\frac{f}{g}\right)^{\prime}(b)=\frac{f^{\prime}(b) g(b)-f(b) g^{\prime}(b)}{g(b)^{2}}
$$

### **Věta:** Derivace Složené Funkce

Nechť funkce $f$ má derivaci $v$ bodě $b$, funkce $g$ má derivaci v bodě $a$, $b=g(a)$ a $g$ je spojitá v $a$. Pak

$$
(f \circ g)^{\prime}(a)=f^{\prime}(b) \cdot g^{\prime}(a)
$$

je-li výraz na pravé straně definován.

### **Věta:** Derivace Inverzní Funkce

Nechť $J \subseteq \mathbb{R}$ je interval, $a \in J$ jeho vnitřní bod, $f: J \rightarrow \mathbb{R}$ je spojitá a ryze monotónni funkce (tj. rostoucí nebo klesajicí) a $f(a)=b$. Pak

1. Když má $f$ v a nenulovou derivaci $f^{\prime}(a)$, potom inverzní funkce $f^{<-1>}$ má v $b$ derivaci

$$
\left(f^{<-1>}\right)^{\prime}(b)=\frac{1}{f^{\prime}(a)}
$$

1. Když $f^{\prime}(a)=0$ a $f$ je rostoucí (resp. klesající), potom $\left(f^{<-1>}\right)^{\prime}(b)=+\infty$ (resp. $-\infty)$.

## L’Hospitalovo Pravidlo

### **Věta:** L’Hospitalovo Pravidlo

Necht' $a \in \mathbb{R}^{*}$, necht funkce $f, g: P(a, \delta) \rightarrow$ $\mathbb{R}$ maji na $P(a, \delta)$ vlastni derivaci a necht $g^{\prime}(x) \neq 0$ na $P(a, \delta)$.

1. Pokud $\lim _{x \rightarrow a} f(x)=\lim _{x \rightarrow a} g(x)=0$ a $\lim _{x \rightarrow a} f^{\prime}(x) / g^{\prime}(x)=A \in \mathbb{R}^{*}$, pak $i \lim _{x \rightarrow a} f(x) / g(x)=A$.
2. Pokud $\lim _{x \rightarrow a}|g(x)|=+\infty$ a $\lim _{x \rightarrow a} f^{\prime}(x) / g^{\prime}(x)=A \in \mathbb{R}^{*}$, pak $i$ $\lim _{x \rightarrow a} f(x) / g(x)=A$.

Totéž plati pro jednostranné limity $x \rightarrow a^{-}$ a $x \rightarrow a^{+}$.

Musí být splněn předpoklad, že čitatel a jmenovatel jdou k nule nebo absolutní hodnota jmenovatele jde do nekonečna. 

## Vyšetření Průběhu Funkcí: Extrémy, Monotonie a konvexita/konkavita

### **Věta:** Nutná Podmínka pro Lokální Extrém

Nechť má $f: U(a, \delta) \rightarrow \mathbb{R}$ v bodě $a$ nenulovou derivaci $f^{\prime}(a) \neq 0$. Potom $f$ nenabývá $v$ a lokálni extrém, to jest pro každé $\delta_{1}, 0<\delta_{1}<\delta$, existují body $b, c \in P\left(a, \delta_{1}\right)$ takové, že $f(b)<$ $f(a)<f(c)$.

Jinými slovy, pokud funkce $f$ má lokální extrém v bodě $a$, bud' $f^{\prime}(a)=0$, nebo $f^{\prime}(a)$ neexistuje. Opačná implikace ale neplatí - nulová, nebo neexistující derivace lokální extrém neimplikuje.

### **Věta:** Rolleova

Necht' $-\infty<a<b<+\infty$ a funkce $f:[a, b] \rightarrow \mathbb{R}$ je na $[a, b]$ spojitá, má na intervalu $(a, b)$ derivaci (i nevlastní) a $f(a)=f(b)$. Potom existuje $c \in(a, b)$ takové, $\check{z} e f^{\prime}(c)=0$.

![[Pasted image 20231211005144.png|Pasted image 20231211005144.png]]
Dle Rolleovya Lagrangeovy (dole) věty existuje bod $c$, kde je tečna grafu rovnoběžná se zadanou sečnou.

### **Věta:** Lagrangeova O Střední Hodnotě

Necht $-\infty<a<b<+\infty$ a funkce $f:[a, b] \rightarrow \mathbb{R}$ je na $[a, b]$ spojitá a má na intervalu $(a, b)$ derivaci ( $i$ nevlastní). Potom existuje $c \in(a, b)$ tak, že

$$
f^{\prime}(c)=\frac{f(b)-f(a)}{b-a}
$$

![[Pasted image 20231211005153.png|Pasted image 20231211005153.png]]

### **Věta:** Derivace a Monotonie

Nechť $J \subseteq \mathbb{R}$ je nedegenerovaný interval (s kladnou délkou), funkce $f: J \rightarrow \mathbb{R}$ je na $J$ spojitá a má v každém vnitřním bodě intervalu $J$ derivaci. Pokud na vnitřku $J$ plati $f^{\prime}>0$ (resp. $f^{\prime} \geq 0$ ), je $f$ na $J$ rostouci (resp. neklesajicí). Pokud na vnitřku $J$ plati $f^{\prime}<0$ (resp. $\left.f^{\prime} \leq 0\right)$, je $f$ na $J$ klesajici (resp. nerostouci).

### **Def:** Druhá Derivace

Pokud funkce $f: U(a, \delta) \rightarrow \mathbb{R}$ má na $U(a, \delta)$ vlastní derivaci $f^{\prime}(x)$ a existuje limita

$$
f^{\prime \prime}(a):=\lim _{x \rightarrow a} \frac{f^{\prime}(x)-f^{\prime}(a)}{x-a}
$$

nazveme ji druhou derivací $f$ v $a$. Analogicky definujeme derivace vyšších řádů: Má-li $f: U(a, \delta) \rightarrow \mathbb{R}$ na $U(a, \delta)$ derivaci $f^{(n-1)}(x)$ řádu $n-1$, derivace ráadu $n$ v a je limita

$$
f^{(n)}(a):=\lim _{x \rightarrow a} \frac{f^{(n-1)}(x)-f^{(n-1)}(a)}{x-a}
$$

když existuje.

Z definice plyne, že existence derivací nižšího řádu je nutná pro existenci derivací vyššího řádu, např. pokud existuje třetí derivace funkce, musí existovat také její první a druhá derivace.

### **Def:** Konvexní a Konkávní Funkce

Nechť $I$ je interval. Řekněme, že funkce $f: I \rightarrow \mathbb{R}$ je na intervalu $I$

- **konvexní**, pokud pro každá $a, x, b \in I$ taková, že $a<x<b$, platí

$$
f(x) \leq f(a)+(x-a) \frac{f(b)-f(a)}{b-a}
$$

- **ryze konvexní**, pokud je předchozí nerovnost ostrá,
- **konkávní**, pokud pro každá $a, x, b \in I$ taková, že $a<x<b$, platí

$$
f(x) \geq f(a)+(x-a) \frac{f(b)-f(a)}{b-a}
$$

- **ryze konkávní**, pokud je předchozí nerovnost ostrá.

Výraz na pravé straně nerovností (8.1) a (8.2) je rovnice přímky procházející body $(a, f(a))$ a $(b, f(b))$. Tyto nerovnosti lze tedy geometricky interpretovat tak, že pro konvexní funkci leží graf funkce $f$ na intervalu $(a, b)$ pod úsečkou spojující body $(a, f(a))$ a $(b, f(b))$, zatímco pro konkávní funkci naopak leží nad touto úsečkou.

### **Věta:** Konvexita, Konkavita a Druhá Derivace

Nechť $I \subseteq \mathbb{R}$ je otevřený interval, necht́ funkce $f: I \rightarrow \mathbb{R}$ má na $I$ druhou derivaci $f^{\prime \prime}(x)$. Pokud je $f^{\prime \prime}$ na $I$ kladná (resp. nezáporná), je $f$ na $I$ ryze konvexní (resp. konvexní). Pokud je $f^{\prime \prime}$ na $I$ záporná (resp. nekladná), je $f$ na $I$ ryze konkávni (resp. konkávní).

### **Def:** Inflexní Bod

Bod $a \in \mathbb{R}$ je inflexnim bodem funkce $f: U(a, \delta) \rightarrow \mathbb{R}$, pokud $f$ má vlastní derivaci $f^{\prime}(a)$ a existuje takové $\delta_{1}$, že $0<\delta_{1}<\delta$ a

$$
\begin{aligned}
& x \in\left(a-\delta_{1}, a\right) \Rightarrow f(x)<f(a)+f^{\prime}(a)(x-a) \quad \text { a } \\
& x \in\left(a, a+\delta_{1}\right) \Rightarrow f(x)>f(a)+f^{\prime}(a)(x-a)
\end{aligned}
$$

nebo jsou obě nerovnosti prohozené- pro $x$ nalevo od $a$ leží $(x, f(x))$ pod tečnou a pro $x$ napravo od $a$ nad ní nebo naopak. Jinými slovy, fukce má v $a$ inflexní bod, má-li její graf v bodě $(a, f(a))$ tečnu, která není svislá, a přechází-li graf $f \mathrm{v}$ okolí tohoto bodu z jedné strany tečny na druhou.

### **Věta:** Spojitost Derivace V Krajním Bodě

Necht' $I=[a, b)$ je interval, necht funkce $f: I \rightarrow \mathbb{R}$ je *spojitá zprava* v bodě $a$ a necht má na $(a, b)$ vlastní derivaci, pro níž platí $\lim _{x \rightarrow a^{+}} f^{\prime}(x)=A \in \mathbb{R}^{*}$. Potom má $f$ v bodě $a$ derivaci zprava, pro níž platí

$$
f_{+}^{\prime}(a)=A
$$

## Taylorův Polynom (limitní forma)

Jak už víme ze sedmé přednášky, pokud má funkce $f$ definovaná na okolí bodu $a \in \mathbb{R}$ v bodě $a$ vlastní první derivaci $f^{\prime}(a) \in \mathbb{R}$, má graf $f$ v bodě $a$ (přesněji v bodě $(a, f(a)))$ tečnu s rovnicí $t(x)=f(a)+f^{\prime}(a) \cdot(x-a)$. Toto $t(x)$ je pak jediný polynom stupně nejvýš 1 , pro nějž platí

$$
\lim _{x \rightarrow a} \frac{f(x)-t(x)}{x-a}=0
$$

a v tomto smyslu je $t(x)$ nejlepší aproximace $f$ pomocí lineární funkce v okolí bodu $a$.

Nyní budeme aproximovat fukci $f$ pomocí polynomů vyššího stupně. Ukážeme, že pro funkci $f$ s vlastní $n$-tou derivací v $a$ existuje právě jeden polynom $P(x)$ stupně nejvýše $n$, pro který

$$
\lim _{x \rightarrow a} \frac{f(x)-P(x)}{(x-a)^{n}}=0
$$

### **Def:** Taylorův Polynom

Necht $a \in \mathbb{R}$, necht $n \in \mathbb{N}_{0}$ a necht $f$ je funkce definovaná na okolí $a$, která má v $a$ vlastní $n$-tou derivaci $f^{(n)}(a) \in \mathbb{R}$. Pokud $n=0$, předpokládejme i spojitost $f$ v $a$. Taylorovým polynomem řádu $n$ funkce $f$ v bodě $a$ rozumíme polynom

$$
\begin{aligned}
T_{n}^{f, a}(x) & =\sum_{i=0}^{n} \frac{f^{(i)}(a)}{i !}(x-a)^{i} \\
& =f(a)+f^{\prime}(a)(x-a)+\frac{f^{\prime \prime}(a)}{2 !}(x-a)^{2}+\cdots+\frac{f^{(n)}(a)}{n !}(x-a)^{n}
\end{aligned}
$$

Ačkoli $0^{0}$ je obecně nedefinovaný výraz, v kontextu polynomů či mocninných řad budeme vždy interpretovat $(x-a)^{0}$ jako konstantní funkci rovnou 1 pro všechna $x$. Taylorův polynom je tedy definován i pro $x=a$. Bez této konvence bychom museli konstantní člen psát zvlášt́, mimo sumu. Používáme také konvenci $f^{(0)}=f$, tj. $f$ je svou vlastní 'nultou derivací'.

Všimněte si, že pro Taylorův polynom $T(x)=T_{n}^{f, a}(x)$ platí $T(a)=f(a)$, $T^{\prime}(a)=f^{\prime}(a), \ldots, T^{(n)}(a)=f^{(n)}(a)$. Všimněte si také, že pro $n \geq 1$ platí $\left(T_{n}^{f, a}\right)^{\prime}=T_{n-1}^{f^{\prime}, a}\left(\right.$ pro $n=1$ je nutno předpokládat spojitost $\left.f^{\prime} \mathrm{v} a\right)$.

### **Věta:** Charakterizace Taylorova Polynomu

Nechť funkce $f$ má Taylorův polynom řádu $n \in \mathbb{N}_{0} v$ bodě $a \in \mathbb{R}$. Potom $T(x)=T_{n}^{f, a}(x)$ je jediný polynom stupně nejvýše n s vlastností

$$
\lim _{x \rightarrow a} \frac{f(x)-T(x)}{(x-a)^{n}}=0 .
$$

![](https://cdn.mathpix.com/cropped/2023_12_01_ce99a492e660c7e6ad59g-46.jpg?height=637&width=1414&top_left_y=327&top_left_x=321)

Obrázek 9.1: Aproximace funkce $\sin x$ na okolí nuly polynomem prvního a třetího stupně.
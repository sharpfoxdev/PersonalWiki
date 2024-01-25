---
tags:
  - 
share: "true"
---

# 06 Integrály a Jejich Aplikace

## Primitivní Funkce: Definice a Metody Výpočtu (substituce, per-partes)

- ze zadané derivace se snažíme zrekonstruovat funkci

### **Def:** Primitivní Funkce

Nechť $-\infty \leq a<b \leq+\infty$ a $f:(a, b) \rightarrow \mathbb{R}$ je daná funkce. Pokud má funkce $F:(a, b) \rightarrow \mathbb{R}$ na $(a, b)$ derivaci a ta se rovná $f(x), \mathrm{tj} . F^{\prime}(x)=$ $f(x)$ pro každé $x \in(a, b)$, řekneme, že $F$ je na intervalu $(a, b)$ primitivní funkcí k funkci $f$.

### **Věta:** Primitivní Funkce Je Jednoznačná Až Na Konstantu

Je-li $F(x)$ primitivni funkci k $f(x)$ na $(a, b)$, je pro každé $c \in \mathbb{R}$ funkce $F(x)+c$ také primitivní k $f(x)$ na $(a, b)$. Naopak, jsou-li $F(x)$ a $G(x)$ primitivni k $f(x)$ na $(a, b)$, existuje konstanta $c \in \mathbb{R}$ taková, že $F(x)-G(x)=c$ pro každé $x \in(a, b)$.

Narozdíl od derivace tedy primitivní funkce není určena jednoznačně. Proto také nedává smysl mluvit o primitivní funkci v bodě.

### **Značení:** Množina Primitivních Funkcí

Množina funkcí primitivních k $f(x)$ se označuje symbolem integrálu

$$
\int f(x) d x
$$

Fakt, že $F(x)$ je primitivní funkcí k $f(x)$ značíme jako

$$
\int f(x) d x=F(x)+c
$$

kde $c$ je libovolná reálná konstanta. Např́klad $\int x^{2} d x=\frac{1}{3} x^{3}+c$ na $\mathbb{R}$.

### **Věta:** Spojitá Funkce Má Primitivní Funkci

Je-li $I$ neprázdný otevřený interval a funkce $f: I \rightarrow \mathbb{R}$ je na $I$ spojitá, pak má $f$ na $I$ primitivni funkci.

- spojitost není nutnou podmínkou pro existenci primitivní funkce, je ale podmínkou postačující

### **Věta:** Funkce S Primitivní Funkcí Má Darbouxovu Vlastnost

Má-li funkce $f: I \rightarrow \mathbb{R}$, kde $I=(a, b)$ je otevřený interval, na I primitivní funkci, je obraz $f(I)$ též interval. Funkce $f$ má tedy Darbouxovu vlastnost.

- darbouxova vlastnost (o nabývání mezihodnot) je nutnou podmínkou pro existenci primitivní funkce

### **Věta:** Součet Primitivních Funkcí

Nechť $F$ je primitivní funkcí k $f$ a $G$ je primitivní ke $g$ na intervalu $I$ a $\alpha, \beta \in \mathbb{R}$. Pak je funkce $\alpha F+\beta G$ na intervalu $I$ primitivní k $\alpha f+\beta g$

### **Věta:** O Substituci

Buďte dány funkce $\varphi:(\alpha, \beta) \rightarrow(a, b)$ a $f:(a, b) \rightarrow$ $\mathbb{R}$, přičemž $\varphi$ má na $(\alpha, \beta)$ vlastní derivaci. Necht’ je funkce $F:(a, b) \rightarrow \mathbb{R}$ na intervalu $(a, b)$ primitivni k funkci $f$. Pak na intervalu $(\alpha, \beta)$ platí, že

$$
\int f(\varphi(t)) \cdot \varphi^{\prime}(t) d t=F(\varphi(t))+c
$$

### **Věta:** Integrace per Partes

Necht' jsou funkce $f$ a $g$ spojité na intervalu $(a, b)$ a funkce $F$ a $G$ jsou k nim na $(a, b)$ primitivní. Potom i funkce $f G$ a $Fg$ mají na $(a, b)$ primitivní funkce a na $(a, b)$ platí identita

$$
\int f(x) G(x) d x+\int F(x) g(x) d x=F(x) G(x)+c,
$$

tj. součet funkce primitivnı́ k $f G$ a funkce primitivnı k $F g$ je až na aditivnı́ konstantu roven funkci $F G$.

## Riemannův Integrál: Definice, Souvislost S Primitivní Funkcí (Newtonovým integrálem)

- Určitý integrál - aplikace primitivních funkcí k pročítání ploch, objemů, energie, ...

### **Def:** Newtonův Integrál - Existence

Předpokládejme, že máme dáno $a, b \in \mathbb{R}$, kde $a<b$. Funkce $f:(a, b) \rightarrow \mathbb{R}$ má na intervalu $(a, b)$ Newtonův integrál, když má na $(a, b)$ primitivní funkci $F$ a ta má vlastní jednostranné limity

$$
F\left(a^{+}\right)=\lim _{x \rightarrow a^{+}} F(x) \text { a } F\left(b^{-}\right)=\lim _{x \rightarrow b^{-}} F(x)
$$

### **Def:** Newtonův Integrál

Newtonův integrál funkce $f$ na intervalu $(a, b)$ pak definujeme jako

$$
(N) \int_{a}^{b} f(x) d x:=[F]_{a}^{b}=F\left(b^{-}\right)-F\left(a^{+}\right)=\lim _{x \rightarrow b^{-}} F(x)-\lim _{x \rightarrow a^{+}} F(x) .
$$

Protože každé dvě funkce primitivní k $f$ na $(a, b)$ se liší jen o aditivní konstantu, rozdíl limit $F\left(b^{-}\right)-F\left(a^{+}\right)$na volbě $F$ nezávisí a definice Newtonova integrálu je korektní.

### **Tvrzení:** Newtonův Integrál a Spojitost

Je-li funkce $f:[a, b] \rightarrow \mathbb{R}$ spojitá, pak $(N) \int_{a}^{b} f(x) d x$ existuje.

Je nutná spojitost na uzavřeném intervalu $[a, b]$. Pouhá spojitost $f$ na $(a, b)$ nezaručuje existenci určitého integrálu.

### **Věta:** Per Partes pro Určitý Integrál

Nechť $f$ a $g$ jsou dvě funkce spojité na $[a, b]$. Nechť maji $f$ a $g$ na $(a, b)$ primitivni funkce $F$ a $G$, které lze spojitě rozširíit na $[a, b]$. Potom existuji oba určité integrály $(N) \int_{a}^{b} f G a(N) \int_{a}^{b} F g$ a platí

$$
(N) \int_{a}^{b} f G=[F G]_{a}^{b}-(N) \int_{a}^{b} F g
$$

### **Věta:** Substituce pro Určitý Integrál

- konvence
	- pokud $a<b$, tak výraz $(N) \int_{b}^{a} f$ definujeme jako $-(N) \int_{a}^{b} f$ a podobně $[F]_{b}^{a}$ položíme rovno $-[F]_{a}^{b}$
	- definujeme $(N) \int_{b}^{b} f:=0$ pro libovolné $b$ a $f$.
Necht $\varphi:[\alpha, \beta] \rightarrow \mathbb{R}$ je spojitá funkce, která má ve všech bodech otevřeného intervalu $(\alpha, \beta)$ vlastní derivaci. Označme $J:=\varphi((\alpha, \beta))=\{\varphi(t) ; t \in(\alpha, \beta)\}$. Ze spojitosti $\varphi$ na $[\alpha, \beta]$ plyne, že $J$ je omezený interval. Necht $f$ je funkce spojitá na $J$ a newtonovsky integrovatelná na vnitřku J. Potom

$$
(N) \int_{\alpha}^{\beta} f(\varphi(t)) \varphi^{\prime}(t) d t=(N) \int_{\varphi(\alpha)}^{\varphi(\beta)} f(x) d x
$$

speciálně tedy levá i pravá strana existuje.

Všimněte si, že na pravé straně rovnosti nemusí integrační meze splňovat nerovnost $\varphi(\alpha)<\varphi(\beta)$ - může se stát, že dolní mez bude větší než horní, případně že se meze budou rovnat. $V$ takových případech uplatníme konvenci zmíněnou před zněním věty.

### **Def:** Plocha Pod Křivkou

Pro nezápornou spojitou funkci $f:[a, b] \rightarrow$ $[0,+\infty)$ definujme následující rovinný útvar - plošný obsah

$$
U(a, b, f)=\left\{(x, y) \in \mathbb{R}^{2}: a \leq x \leq b, 0 \leq y \leq f(x)\right\}
$$

![](https://cdn.mathpix.com/cropped/2023_12_01_ce99a492e660c7e6ad59g-64.jpg?height=340&width=1372&top_left_y=332&top_left_x=343)
Oblast $U(a, b, f)$ pod grafem funkce $f$ (vlevo), a Riemannova metoda odhadu jejího plošného obsahu zdola (uprostřed) a shora (vpravo).

### **Def:** Horní/dolní Riemannova Suma

Nechť $-\infty<a<b<+\infty$ jsou dvě reálná čísla. Konečná $(k+1)$-tice bodů $D=\left(a_{0}, a_{1}, \ldots, a_{k}\right)$ z intervalu $[a, b]$ je jeho dělenim, pokud

$$
a=a_{0}<a_{1}<a_{2}<\cdots<a_{k}=b .
$$

Tyto body dělí interval $[a, b]$ na intervaly $I_{i}=\left[a_{i}, a_{i+1}\right]$. Délku intervalu označíme pomocí absolutní hodnoty: $\left|I_{i}\right|=a_{i+1}-a_{i}$ a $|[a, b]|=b-a$. Pro funkci $f:[a, b] \rightarrow \mathbb{R}$ a dělení $D=\left(a_{0}, a_{1}, \ldots, a_{k}\right)$ intervalu $[a, b]$ definujeme dolní, respektive horní, Riemannovu sumu jako

$$
s(f, D)=\sum_{i=0}^{k-1}\left|I_{i}\right| m_{i}, \quad \text { respektive } S(f, D)=\sum_{i=0}^{k-1}\left|I_{i}\right| M_{i}
$$

kde $m_{i}=\inf \left\{f(x) ; x \in I_{i}\right\}$ a $M_{i}=\sup \left\{f(x) ; x \in I_{i}\right\}$.

Tyto součty jsou vždy definované, $s(f, D) \in \mathbb{R} \cup\{-\infty\}$ a $S(f, D) \in \mathbb{R} \cup$ $\{+\infty\}$. 

### **Def:** Horní/dolní Riemannův Integrál

Dolni, respektive horni, Riemannův integrál funkce $f$ na intervalu $[a, b]$ definujeme jako

$$
\underline{\int_{a}^{b}} f=\underline{\int_{a}^{b}} f(x) d x=\sup \{s(f, D): D \text { je dělení }[a, b]\}
$$

respektive

$$
\overline{\int_{a}^{b}} f=\overline{\int_{a}^{b}} f(x) d x=\inf \{S(f, D): D \text { je dělení }[a, b]\}
$$

Tyto výrazy jsou opět vždy definované a máme $\underline{\int_{a}^{b}} f, \overline{\int_{a}^{b}} f \in \mathbb{R}^{*}=\mathbb{R} \cup\{-\infty,+\infty\}$.

### **Def:** Riemmanovsky Integrovatelná Funkce

Řekněme, že funkce $f:[a, b] \rightarrow \mathbb{R}$ má na intervalu $[a, b]$ Riemannuv integrál, případně že je riemannovsky integrovatelná, pokud

$$
\underline{\int_{a}^{b}} f(x) d x=\overline{\int_{a}^{b}} f(x) d x \in \mathbb{R} .
$$

Tuto společnou konečnou hodnotu, když existuje, značíme

$$
\int_{a}^{b} f(x) d x=\int_{a}^{b} f
$$

a nazýváme Riemannovým integrálem funkce $f$ na intervalu $[a, b]$. Třídu všech riemannovsky integrovatelných funkcí označujeme

$\mathcal{R}[a, b]:=\{f: f$ je definovaná a riemannovsky integrovatelná na $[a, b]\}$.

Fce neomezená na intervalu nemá riemannův integrál. 

### **Věta:** Nerovnost Dolní a Horní Riemannovy Sumy*

Nechť $f:[a, b] \rightarrow \mathbb{R}$ je funkce, $D^{\prime}$ a $D$ jsou dělení intervalu $[a, b]$. Pak platí

$$
s(f, D) \le \underline{\int_a^b}f \le \overline{\int_a^b f} \le S(f,D^{\prime})
$$

### **Věta:** Kritérium Integrovatelnosti

Nechť $f:[a, b] \rightarrow \mathbb{R}$. Potom

$$
f \in \mathcal{R}[a, b] \Longleftrightarrow \forall \varepsilon>0 \exists D: 0 \leq S(f, D)-s(f, D)<\varepsilon
$$

Jinými slovy, $f$ má Riemannưv integrál, právě když pro každé $\varepsilon>0$ je pro nějaké dělení $D$ intervalu $[a, b]$ odpovídajicí horní suma o méně než $\varepsilon$ většs než odpovídajicí dolni suma.

### **Věta:** Monotonie $\Rightarrow$ Integrovatelnost*

Je-li funkce $f:[a, b] \rightarrow \mathbb{R}$ na intervalu $[a, b]$ nerostoucí nebo neklesající, potom má Riemannův integrál.

### **Věta:** Spojitost $\Rightarrow$ Integrovatelnost*

Je-li funkce $f:[a, b] \rightarrow \mathbb{R}$ na intervalu $[a, b]$ spojitá, potom má Riemannův integrál.

### **Věta:** 1. Základní Věta Analýzy

Nechť $f \in \mathcal{R}[a, b]$ a funkce $F:[a, b] \rightarrow \mathbb{R}$ necht' je definována predpisem

$$
F(x)=\int_{a}^{x} f(t) d t
$$

Potom

1. F je na $[a, b]$ spojitá a
2. v každém bodě spojitosti $x_{0} \in[a, b]$ funkce $f$ existuje vlastní $F^{\prime}\left(x_{0}\right)$ a $F^{\prime}\left(x_{0}\right)=f\left(x_{0}\right)$ (platí to jednostranně, pokud $x_{0}=a$ nebo $x_{0}=b$ ).

- neformálně primitivní funkci lze za určitých podmínek spočítat pomocí Riemannova integrálu

### **Věta:** 2. Základní Věta Analýzy

Pokud $f \in \mathcal{R}[a, b] \cap \mathcal{N}(a, b)$, pak

$$
\int_{a}^{b} f=(N) \int_{a}^{b} f
$$

- pokud Riemannův a Newtonův integrál existují, jsou si rovny

### **Věta:** Porovnání Newtonova a Riemannova Integrálu

Označme $C[a, b]$ množinu funkcí spojitých na $[a, b]$. Máme

$$
C[a, b] \subseteq \mathcal{N}(a, b) \cap \mathcal{R}[a, b]
$$

Pokud $f \in \mathcal{N}(a, b) \cap \mathcal{R}[a, b]$, pak

$$
(N) \int_{a}^{b} f=\int_{a}^{b} f
$$

Množina $\mathcal{N}(a, b) \backslash \mathcal{R}[a, b]$ i $\mathcal{R}[a, b] \backslash \mathcal{N}(a, b)$ je neprázdná: existují funkce, které maji Newtonův integrál, ale ne Riemannův, i naopak.

## Aplikace

### Odhady Součtu Řad (konečných I nekonečných)

#### **Věta:** Odhad Konečného Součtu Řady Pomocí Integrálu

Necht’ $n$ je přirozené číslo a necht' $f$ je neklesajicí funkce na intervalu $[1, n]$. Potom platí

$$
\sum_{k=1}^{n-1} f(k) \leq \int_{1}^{n} f \leq \sum_{k=2}^{n} f(k)
$$

#### **Věta:** Integrální Kritérium Konvergence

Odhady konečných sum se nám mohou hodit i při vyšetřování konvergence nekonečných řad, nebot’ součet řady je definován jako limita posloupnosti jejích částečných součtů. V mnoha případech tak lze vyšetřování konvergence převést na výpočet integrálu, jak ukazuje tato věta.

Nechť $f:[1,+\infty) \rightarrow[0,+\infty)$ je nerostoucí nezáporná funkce. Potom řada $\sum_{k=1}^{\infty} f(k)$ konverguje právě tehdy, když platí

$$
\lim _{b \rightarrow+\infty} \int_{1}^{b} f<+\infty
$$

### Obsahy Rovinných Útvarů

Plochu rovinného útvaru $U(a, b, f)$ (jsou to body $(x, y)$ v rovině splňující $a \leq x \leq b$ a $0 \leq y \leq f(x))$ pod grafem funkce $f$ jsme víceméně definovali jako $\int_{a}^{b} f$.

### Objemy a Povrchy Rotačních Útvarů V Prostoru

#### **Věta:** Objem a Povrch Rotačního Tělesa

Nechť $f \in \mathcal{R}(a, b)$ a $f \geq 0$ na $[a, b]$. Pro objem rotačního tělesa

$$
T=\left\{(x, y, z) \in \mathbb{R}^{3} \mid a \leq x \leq b \& \sqrt{y^{2}+z^{2}} \leq f(x)\right\}
$$

vzniklého rotaci v $\mathbb{R}^{3}$ rovinného útvaru $U(a, b, f)$ pod grafem funkce $f$ kolem osy $x$ plati vatah

$$
\begin{gathered}
\operatorname{objem}(T)=\pi \int_{a}^{b} f(t)^{2} d t \\
\operatorname{povrch}(T)=2 \pi \int_{a}^{b} f(t) \sqrt{1+\left(f^{\prime}(t)\right)^{2}} d t
\end{gathered}
$$

### Délka Křivky

#### **Věta:** Délka Křivky

Dostáváme následující vzorec.

Věta 13.6 (Délka křivky). Necht $f:[a, b] \rightarrow \mathbb{R}$ má na $[a, b]$ spojitou derivaci $f^{\prime}\left(\right.$ takžze $\left.\sqrt{1+\left(f^{\prime}\right)^{2}} \in \mathcal{R}(a, b)\right)$. Pak

$$
\text{délka}\left(\left\{(x, f(x)) \in \mathbb{R}^{2} \mid a \leq x \leq b\right\}\right)=\int_{a}^{b} \sqrt{1+\left(f^{\prime}(t)\right)^{2}} d t
$$

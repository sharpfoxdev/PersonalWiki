---
tags:
  - 
share: "true"
---

# 04 Reálné Funkce Jedné Reálné Proměnné

## Limita Funkce V Bodě

### Definice, Aritmetika Limit

#### **Def:** Okolí Bodu

Okolí bodu $a \in \mathbb{R}$, přesněji $\delta$-okolí bodu $a$, kde $\delta \in \mathbb{R}$ a $\delta>0$, je interval $U(a, \delta)=(a-\delta, a+\delta)$. Jinak zapsáno,

$$
U(a, \delta)=\{x \in \mathbb{R}:|x-a|<\delta\}
$$

Okolí nekonečen definujeme jako $U(+\infty, \delta)=(1 / \delta,+\infty)$ a $U(-\infty, \delta)=$ $(-\infty,-1 / \delta)$. **Pravé** okolí, resp. **levé** okolí, bodu $a \in \mathbb{R}$ je interval $U^{+}(a, \delta)=$ $[a, a+\delta)$, resp. $U^{-}(a, \delta)=(a-\delta, a]$.

**Prstencová okolí** bodu $a \in \mathbb{R}$ jsou obyčejná okolí s vyjmutým bodem $a$ : $P(a, \delta)=U(a, \delta) \backslash\{a\}, P^{+}(a, \delta)=U^{+}(a, \delta) \backslash\{a\}$ a $P^{-}(a, \delta)=U^{-}(a, \delta) \backslash\{a\}$. Prstencová okolí nekonečen jsou stejná jako jejich obyčejná okolí.

#### **Def:** Limita Funkce

Řekněme, že funkce $f$ má v bodě $a \in \mathbb{R}^{*}$ limitu $A \in \mathbb{R}^{*}, \mathrm{když}$

$$
\forall \varepsilon>0 \exists \delta>0: x \in P(a, \delta) \Rightarrow f(x) \in U(A, \varepsilon)
$$

Zapisujeme

$$
\lim _{x \rightarrow a} f(x)=A
$$

Poznámka. Limita funkce $f$ v bodě $a$ nezávisí na její hodnotě v $a, f$ ani nemusí být v $a$ definovaná.

$\varepsilon$ beru na y ose a priblizuju se k $A$, $\delta$ beru na x ose

#### **Def:** Jednostranné Limity

Řekněme, že funkce $f(x)$ má v bodě $a \in R$ limitu zprava rovnou $A \in \mathbb{R}^{*}$, zapisujeme

$$
\lim _{x \rightarrow a^{+}} f(x)=A
$$

pokud

$$
\forall \varepsilon>0 \exists \delta>0: x \in P^{+}(a, \delta) \Rightarrow f(x) \in U(A, \varepsilon)
$$

Jestliže $\lim _{x \rightarrow a^{+}} f(x)=\lim _{x \rightarrow a^{-}} f(x)=A$, pak $\lim _{x \rightarrow a} f(x)=A$. Naopak, pokud jsou limity zprava a zleva různé, limita neexistuje.

#### **Věta:** Aritmetika Limit Funkcí

Nechť $a, A, B \in \mathbb{R}^{*}$, necht $f$ a $g$ jsou funkce definované na nějakém prstencovém okoli $P(a, \Delta)$ bodu $a$, a necht platí $\lim _{x \rightarrow a} f(x)=A$ a $\lim _{x \rightarrow a} g(x)=$ B. Potom

(a) $\lim _{x \rightarrow a} f(x)+g(x)=A+B$, je-li tento součet definován.
(b) $\lim _{x \rightarrow a} f(x) g(x)=A B$, je-li tento součin definován.
(c) Necht' je navíc $g(x)$ nenulová na nějakém prstencovém okolí bodu a. Pak $\lim _{x \rightarrow a} f(x) / g(x)=A / B$, je-li tento podí definován.

### Vztah S Uspořádáním

#### **Věta:** Limity Funkcí a Uspořádání

Nechť $c \in \mathbb{R}^{*}$ a funkce $f, g$ a $h$ jsou definované na nějakém prstencovém okolí bodu $c$.

1. Mají-li funkce $f$ a $g$ v bodě $c$ limitu a $\lim _{x \rightarrow c} f(x)>\lim _{x \rightarrow c} g(x)$, pak existuje $\delta>0$ takové, že $f(x)>g(x)$ pro každé $x \in P(c, \delta)$. (zmensim okoli natolik, ze pak bude $f(x)>g(x)$)
2. Existuje-li $\delta>0$ takové, že $f(x) \geq g(x)$ pro každé $x \in P(c, \delta)$, a mají-li funkce $f$ a $g$ limitu v bodě $c$, potom $\lim _{x \rightarrow c} f(x) \geq \lim _{x \rightarrow c} g(x)$. (obraceny priklad nez 1., akorat bez ostre nerovnosti)
3. Existuje-li $\delta>0$ takové, že $f(x) \leq h(x) \leq g(x)$ pro každé $x \in P(c, \delta) a$ $\lim _{x \rightarrow c} f(x)=\lim _{x \rightarrow c} g(x)=A \in \mathbb{R}^{*}$, potom i $\lim _{x \rightarrow c} h(x)=A$. (variace na dva policajty)

### Limita Složené Funkce

#### **Def:** Spojitost Funkce

Řekněme, že fce $f$ je v bodě $a \in \mathbb{R}$ spojitá, pokud

$$
\lim _{x \rightarrow a} f(x)=f(a)
$$

Funkce $f(x)$ je v bodě a spojitá zprava, pokud $\lim _{x \rightarrow a+} f(x)=f(a)$. 

#### **Věta:** Limita Složené Funkce

Nechť $A, B, C \in \mathbb{R}^{*}$, necht $g(x)$ je funkce splňujicí $\lim _{x \rightarrow A} g(x)=B$ a $f(x)$ je funkce splňujicí $\lim _{x \rightarrow B} f(x)=C$. Navíc nechť je splněna aspoň jedna z podminek $P 1$ a P2:

**P1**. Funkce $f(x)$ je spojitá v $B$ (jinými slovy, $f(B)=\lim _{x \rightarrow B} f(x)=C$ ).

**P2**. Na nějakém prstencovém okoli $P(A, \eta)$ funkce $g(x)$ nenabývá hodnotu $B$, tj. $B \notin g(P(A, \eta))$.

Potom

$$
\lim _{x \rightarrow A} f(g(x))=C
$$

![](https://cdn.mathpix.com/cropped/2023_12_01_ce99a492e660c7e6ad59g-23.jpg?height=648&width=1062&top_left_y=321&top_left_x=497)

## Funkce Spojité Na Intervalu

### Nabývání Mezihodnot

#### **Def:** Spojitost Na Intervalu

Nechť $I \subseteq \mathbb{R}$ je interval a $f: I \rightarrow \mathbb{R}$ je funkce na něm definovaná. Řekneme, že $f$ je na intervalu $I$ spojitá, je-li spojitá v každém vnitřním bodu $I$ a v každém krajním bodu $I$ je odpovídajícím způsobem jednostranně spojitá.

#### **Věta:** Darbouxova, O Nabývání Mezihodnot

Nechť $a<b$ jsou reálná čísla a nechť funkce $f:[a, b] \rightarrow \mathbb{R}$ je na intervalu $[a, b]$ spojitá. Označme $m=$ $\min \{f(a), f(b)\}$ a $M=\max \{f(a), f(b)\}$. Pak každé reálné číslo z intervalu $[m, M]$ je hodnotou funkce $f$, to jest pro každé $y \in[m, M]$ existuje $\alpha \in[a, b]$, $\check{z} e f(\alpha)=y$.

### Nabývání Maxima

#### **Def:** Extrémy Funkce

Necht’ $M \subseteq \mathbb{R}$ a $f: M \rightarrow \mathbb{R}$. Řekneme, že funkce $f$ v bodě $a \in M$ nabývá (na množině $M$ ) svého

- **minima**, když $\forall x \in M: f(x) \geq f(a)$;
- **maxima**, když $\forall x \in M: f(x) \leq f(a)$;
- **ostrého minima**, když $\forall x \in M, x \neq a: f(x)>f(a)$;
- **ostrého maxima**, když $\forall x \in M, x \neq a: f(x)<f(a)$;
- **lokálního minima**, když $\exists \delta>0 \forall x \in M \cap U(a, \delta): f(x) \geq f(a)$ ($f(x)$ jsou vetsi na okoli $a$)
- **lokálního maxima**, když $\exists \delta>0 \forall x \in M \cap U(a, \delta): f(x) \leq f(a)$
Ostré lokální extrémy jsou definovány analogicky.

#### **Věta:** Princip Maxima pro Spojité Funkce

Nechť $a, b \in \mathbb{R}, a \leq b$ a $f:[a, b] \rightarrow \mathbb{R}$ je spojitá funkce. Potom $f$ nabývá na intervalu $[a, b]$ svého maxima i minima.

## Ostatní Useful Věci (není V otázkách)

### Znaceni

Zaved'me si následující značení: pro funkci $f: \mathbb{R} \rightarrow \mathbb{R}$ a množinu $M \subseteq \mathbb{R}$ necht $f(M)$ označuje množinu $\{f(x) ; x \in M\}$. S tímto značením můžeme například výrok $\forall x \in P(b, \delta): f(x) \in U(L, \varepsilon)$, vyskytující se v definici limity funkce, zapsat úsporněji jako $f(P(b, \delta)) \subseteq U(L, \varepsilon)$.

### Definice

Řekněme, že fce $f:M \rightarrow \mathbb{R}, M \subseteq \mathbb{R}$ 
- **shora omezená** pokud existuje $K \in \mathbb{R}$ takové, že $f(x)<K$ pro každé $x \in M$,
- **zdola omezená** pokud existuje $K \in \mathbb{R}$ takové, že $f(x)>K$ pro každé $x \in M$,
- **omezená** pokud je shora i zdola omezená,
- **rostoucí** pokud $f(x)<f(y)$ pro každé $x, y \in M$ splňující $x<y$,
- **neklesajicí** pokud $f(x) \leq f(y)$ pro každé $x, y \in M$ splňující $x<y$,
- **klesajicí** pokud $f(x)>f(y)$ pro každé $x, y \in M$ splňující $x<y$,
- **nerostoucí** pokud $f(x) \geq f(y)$ pro každé $x, y \in M$ splňující $x<y$,
- **monotónní** pokud je neklesající nebo nerostoucí
- **periodická** funkce s periodou $p \in \mathbb{R}, p>0$, když pro každé $x \in M$ je i $x \pm p \in M$ a $f(x)=f(x \pm p)$,
- **prostá** pokud $x \neq y$ implikuje $f(x) \neq f(y)$

### Eulerovo Číslo, Exponenciální Fce

Pro libovolné $x \in \mathbb{R}$ definujeme exponenciálni funkci jako součet řady

$$
e^{x}=\exp (x):=\sum_{n=0}^{\infty} \frac{x^{n}}{n !}=1+x+\frac{x^{2}}{2}+\frac{x^{3}}{6}+\frac{x^{4}}{24}+\ldots
$$

Eulerovo čı́slo e definujeme jako $\exp (1)$, je tedy rovno $\sum_{n=0}^{\infty} \frac{1}{n !}$. Je to iracionální číslo, jeho číselná hodnota je asi 2,7 .

Řada konverguje pro každé $x \in \mathbb{R}$, takže exponenciální funkce je všude definovaná. Zřejmě $e^{0}=1$ a $e^{x} \geq 1$ pro $x \geq 0$ a $e^{x}$ je pro $x \geq 0$ rostoucí funkce.

#### Exp Součet => Součin

Funkce exp převádí součet na součin. Pro každé $x, y \in \mathbb{R} j e$

$$
\exp (x+y)=\exp (x) \exp (y)
$$

#### Vlastnosti Exp

- $\exp (-x)=1 / \exp (x)(\operatorname{protože~} \exp (x) \exp (-x)=\exp (0)=1)$,
- $\exp (x)>0$ pro každé $x \in \mathbb{R}$,
- $\exp (x)<1$ pro $x<0$,
- $\exp (x)$ je rostoucí funkce na $\mathbb{R}$, protože pokud $x<y, \exp (y)=\exp (x) \exp (y-$ $x)$ a $\exp (y-x)>1$,
- $\lim _{n \rightarrow \infty} \exp (n)=+\infty$, a
- $\lim _{n \rightarrow \infty} \exp (-n)=0$.

#### Logaritmus

Pro každé kladné y $\in \mathbb{R}$ má rovnice

$$
e^{x}=y
$$

právě jedno řě̌ení $x \in \mathbb{R}$, které označíme jako $\ln y:=x$ (přirozený logaritmus čissla y).

Přirozený logaritmus je tedy inverzní funkcí $\mathrm{k} \exp (x)$.

Pro kladné reálné číslo $b$ a reálné číslo $x$ definujeme $b^{x}:=$ $\exp (x \ln b)$. Pro kladné reálné číslo $b \neq 1$, definujeme logaritmus o základu $b$, píšeme $\log _{b} x$, jako inverzní funkci $\mathrm{k} b^{x}$. 

Logaritmus o dané bázi lze z přirozeného logaritmu spočíst jako $\log _{a} x=\frac{\ln x}{\ln a}$

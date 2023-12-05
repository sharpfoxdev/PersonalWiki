---
tags:
  - 
share: "true"
---

# 02 Posloupnosti Reálných Čísel a Jejich Limity

## Definice

### **Def:** Posloupnost S Hodnotami

Necht $M$ je množina. *Posloupnost s hodnotami* v $M$ je zobrazení z $\mathbb{N}$ do $M$.

Každé přrirozené číslo $n$ je tedy zobrazeno na nějaký prvek $a_{n}$ množiny $M$. Tomuto prvku říkáme $n$-tý *prvek posloupnosti*. Posloupnost $\left(a_{1}, a_{2}, a_{3}, \ldots\right)$ obvykle značíme $\left(a_{n}\right)_{n=1}^{\infty}$, nebo jen $\left(a_{n}\right)$. Zápis $\left(a_{n}\right) \subset M$ znamená, ze jde o posloupnost s hodnotami v $M$.

### **Def:** Vlastnosti Posloupností

- *shora omezená* pokud existuje $K \in \mathbb{R}$ takové, že $a_{n}<K$ pro každé $n \in \mathbb{N}$,
- *zdola omezená* pokud existuje $K \in \mathbb{R}$ takové, že $a_{n}>K$ pro každé $n \in \mathbb{N}$,
- *omezená* pokud je shora i zdola omezená,
- *rostoucí* pokud $a_{n}<a_{m}$ pro každé $n<m$,
- *neklesajicí* pokud $a_{n} \leq a_{m}$ pro každé $n<m$,
- *klesajicí* pokud $a_{n}>a_{m}$ pro každé $n<m$,
- *nerostoucí* pokud $a_{n} \geq a_{m}$ pro každé $n<m$,
- *monotónní* pokud je neklesající nebo nerostoucí.

### **Def:** Vlastní Limita

Nechť $\left(a_{n}\right)$ je posloupnost reálných čísel. Řekneme, že $A \in \mathbb{R}$ je *(vlastní) limita posloupnosti* $\left(a_{n}\right)$, pokud pro každé reálné číslo $\varepsilon>0$ existuje $n_{0} \in \mathbb{N}$ takové, že pro každé přirozené číslo $n \geq n_{0}$ je $\left|a_{n}-A\right|<\varepsilon$. Pokud posloupnost má vlastní limitu, ř́káme, že konverguje, případně, že je konvergentni a píšeme

$$
\lim _{n \rightarrow \infty} a_{n}=A \text {. }
$$

(všechna čísla od n nultého dál jsou blíž A, než epsilon)

### **Def:** Nevlastní Limita

Nechť $\left(a_{n}\right)$ je posloupnost reálných čísel. Řekneme, $\left(a_{n}\right)$ má (*nevlastní*) limitu $\infty$, píšeme $\lim _{n \rightarrow \infty} a_{n}=\infty$, pokud pro každé reálné číslo $K$ existuje $n_{0} \in \mathbb{N}$ takové, že pro každé přirozené číslo $n \geq n_{0}$ je $a_{n}>K$. Řekneme, $\left(a_{n}\right)$ má (*nevlastní*) limitu $-\infty$, píšeme $\lim _{n \rightarrow \infty} a_{n}=-\infty$ pokud pro každé reálné číslo $K$ existuje $n_{0} \in \mathbb{N}$ takové, že pro každé přirozené číslo $n \geq n_{0}$ je $a_{n}<K$.
(čísla od n nultého jsou větší než K, které může být libovolně velké)

### **Def:** Podposloupnost

Posloupnost $\left(b_{n}\right)$ je podposloupnosti posloupnosti $\left(a_{n}\right)$, když existuje takové rostoucí zobrazení $f: \mathbb{N} \rightarrow \mathbb{N}$, že $b_{n}=a_{f(n)}$. Jinými slovy, existuje rostoucí posloupnost přirozených čísel $k_{1}<k_{2}<\ldots$, že

$$
b_{n}=a_{k_{n}}, n=1,2, \ldots .
$$

Je jasné, že pak $k_{n} \geq n$ pro každé $n$. Relace „být podposloupností“ je tranzitivní a reflexivní, ale ne antisymetrická.

### **Def:** Neurčité Výrazy

$$
(+\infty)+(-\infty),(-\infty)+(+\infty), 0 \cdot( \pm \infty),( \pm \infty) \cdot 0, \frac{ \pm \infty}{ \pm \infty}, \frac{a}{0} \text { pro } a \in \mathbb{R}^{*}
$$

### **Def:** Hromadný Bod

Necht' $\left(a_{n}\right)$ je posloupnost reálných čísel. Rozšířené reálné číslo $\alpha \in \mathbb{R}^{*}$ je jejím hromadným bodem, pokud je limitou nějaké podposloupnosti $\left(a_{n}\right)$.

## **Věta:** Aritmetika Limit

![[Pasted image 20231018163657.png|Pasted image 20231018163657.png]]
![[Pasted image 20231018163720.png|Pasted image 20231018163720.png]]
Nechť $\left(a_{n}\right),\left(b_{n}\right)$ jsou posloupnosti reálných čísel s $\lim _{n \rightarrow \infty} a_{n}=a \in \mathbb{R}^{*}$ a $\lim _{n \rightarrow \infty} b_{n}=b \in \mathbb{R}^{*}$. Pak

(i) $\lim _{n \rightarrow \infty}\left(a_{n}+b_{n}\right)=a+b$, je-li výraz na pravé straně definován,

(ii) $\lim _{n \rightarrow \infty}\left(a_{n} b_{n}\right)=a b$, je-li výraz na pravé straně definován,

(iii) pokud $b_{n} \neq 0$ pro každé $n>n_{0}$, pak $\lim _{n \rightarrow \infty}\left(a_{n} / b_{n}\right)=a / b$, je-li výraz na pravé straně definován.

Důležité je, že aritmetika limit funguje jen jednosměrně. Není obecně pravda, že když $\left(a_{n}+b_{n}\right)$ konverguje k $a$, pak konvergují i $\left(a_{n}\right)$ a $\left(b_{n}\right)$ a $\lim _{n \rightarrow \infty}\left(a_{n}+\right.$ $\left.b_{n}\right)=\lim _{n \rightarrow \infty} a_{n}+\lim _{n \rightarrow \infty} b_{n}=a$ (např́́klad posloupnosti $a_{n}=(-1)^{n}$ a $b_{n}=-(-1)^{n}$ nekonvergují, ale jejich součet ano). Totéž platí pro součin a podíl.

## **Věta:** O Dvou Policajtech

Necht posloupnosti $\left(a_{n}\right),\left(b_{n}\right),\left(c_{n}\right) \subset \mathbb{R}$ splñují, že $\lim _{n \rightarrow \infty} a_{n}=\lim _{n \rightarrow \infty} b_{n}=a \in \mathbb{R}$ a pro každé $n>n_{0}$ je $a_{n} \leq c_{n} \leq b_{n}$. Pak $\left(c_{n}\right)$ konverguje a $\lim _{n \rightarrow \infty} c_{n}=a$.

$\mathrm{Z}$ (ii) věty o limitě a uspořádání plyne, že pokud $\left(c_{n}\right)$ má limitu, pak je rovna $a$. 

## **Věta:** O Limitě a Uspořádání

Nechť posloupnosti $\left(a_{n}\right),\left(b_{n}\right) \subset \mathbb{R}$ maji vlastní limity $\lim _{n \rightarrow \infty} a_{n}=a \in \mathbb{R}$ a $\lim _{n \rightarrow \infty} b_{n}=b \in \mathbb{R}$.

(i) Když $a<b$, tak existuje $n_{0}$, že $n>n_{0} \Rightarrow a_{n}<b_{n}$.

(ii) Když $a_{n} \leq b_{n}$ pro každé $n>n_{0}$, pak $a \leq b$.
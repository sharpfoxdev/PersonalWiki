---
tags:
  - 
share: "true"
---

# 03 Řady

## Definice Částečného Součtu a Součtu

### **Def:** Řada a Její Součet

Nekonečná řada (reálných čı́sel) je výraz

$$
\sum_{n=1}^{\infty} a_{n}=a_{1}+a_{2}+a_{3}+\cdots
$$

kde $\left(a_{n}\right)_{n \geq 1}$ je posloupnost reálných čísel. 

### **Def:** Řada a Její Částečný Součet

 $n$-tý částečný součet $s_{n}$, je součet jejích prvních $n$ členů řady. Pro řadu $\sum_{n=1}^{\infty} a_{n}$ je tedy $s_{n}=a_{1}+a_{2}+\cdots+a_{n}$ a pro řadu $\sum_{k>8} c_{k}$ je $s_{n}=c_{8}+c_{9}+\cdots+c_{n+7}$.
 
Pokud existuje vlastní limita posloupnosti $\left(s_{n}\right)$ částečných součtů dané řady, mluvíme o *konvergentní* řadě a limita $\lim _{n \rightarrow \infty} s_{n}$ je jejím součtem. Pokud $\lim s_{n}$ neexistuje nebo je nevlastní, je daná řada *divergentní*.

Řada $\sum_{n \geq 0}(-1)^{n}=1-1+1-1+\cdots$ je divergentní, protože $\left(s_{n}\right)=(1,0,1,0,1, \ldots)$.

## Geometrická Řada

$$
\sum_{n=0}^{\infty} q^{n}=1+q+q^{2}+q^{3}+\cdots
$$

kde $q \in \mathbb{R}$ je parametr zvaný kvocient. Pro součet geometrické řady platí, že

$$
\sum_{n=0}^{\infty} q^{n}=\left\{\begin{array}{lll}
\frac{1}{1-q} & \ldots & -1<q<1 \\
+\infty & \ldots & q \geq 1 \\
\text { neexistuje } & \ldots & q \leq-1
\end{array}\right.
$$

To vyplývá to ze vzorce pro částečný součet $(q \neq 1)$ :

$$
s_{n}=1+q+q^{2}+\cdots+q^{n-1}=\frac{q^{n}-1}{q-1} .
$$

- Pro $|q|<1$ je $\lim _{n \rightarrow \infty} q^{n}=0$ a podle aritmetiky $\operatorname{limit} \lim _{n \rightarrow \infty} s_{n}=(0-$ $1) /(q-1)=1 /(1-q)$. 
- Pro $q>1$ jako limita vyjde $(+\infty-1) /(q-1)=+\infty$ 
- pro $q=1$ také (tehdy $s_{n}=n$ ). 
- Pro $q \leq-1 \operatorname{limita} \lim _{n \rightarrow \infty} q^{n}$ neexistuje a neexistuje tedy ani limita $\lim _{n \rightarrow \infty} s_{n}=\lim _{n \rightarrow \infty}\left(q^{n}-1\right) /(q-1)$.

## Harmonická Řada

$$
\sum_{n=1}^{\infty} \frac{1}{n^{s}}=1+\frac{1}{2^{s}}+\frac{1}{3^{s}}+\frac{1}{4^{s}}+\cdots
$$

kde $s \in \mathbb{R}$. Pro jejich konvergenci platí, že

$$
\sum_{n=1}^{\infty} \frac{1}{n^{s}}\left\{\begin{array}{l}
\text { konverguje pro } s>1 \\
\text { diverguje pro } s \leq 1
\end{array}\right.
$$

Pro $s=1$ se tato řada nazývá *harmonická řada*. Je to důležitý příklad řady, která diverguje, ačkoli její prvky konvergují k nule.

Pro některé hodnoty $s$ jsou pro součty této řady známy explicitní vzorce, např́klad

$$
\sum_{n=1}^{\infty} \frac{1}{n^{2}}=\frac{\pi^{2}}{6} \text { a } \sum_{n=1}^{\infty} \frac{1}{n^{4}}=\frac{\pi^{4}}{90}
$$

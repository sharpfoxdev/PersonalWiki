---
tags:
  - 
share: "true"
---

# 07 Princip Inkluze a Exkluze

## Obecná Formulace (a důkaz)

**Věta (inkluze a exkluze):** Nechť $A_1, \ldots, A_n$ jsou konečné množiny. Potom:

$$\left|\bigcup_{i = 1}^{n} A_i\right| = \sum_{k = 1}^{n} (-1)^{k + 1} \sum_{I \in \binom{[n]}{k}} \left|\bigcap_{i \in I} A_i\right|$$

Také lze zapsat jako:

$$\left|\bigcup_{i = 1}^{n} A_i\right| = \sum_{\emptyset \neq I \subseteq [n]} (-1)^{|I| + 1} \left|\bigcap_{i \in I} A_i\right|$$

**Důkaz (počítací):** Kolikrát se prvek $x$ nachází nalevo a napravo:

- Nalevo: 1 (ve sjednocení je jednou právě).
- Napravo:
    - Předpokládejme, že se vyskytne v $j$ množinách -- vyskytuje se tedy v každé $k$-tici z těchto $j$ množin ($k \le j$).
    - Existuje $\binom{j}{k}$ $k$-prvkových podmnožin $j$-prvkové množiny (a ve vzorci se znaménka střídají), lze počet výskytů vyjádřit následovně: 

$$j - \binom{j}{2} + \binom{j}{3} - \ldots + (-1)^{j - 1}\binom{j}{j} = 1$$

## Použití

### Šatnářka - The Hat-Check Problem (A Classic Example)

The Hat-Check Problem poses a scenario where \(n\) people check their hats at a restaurant, but upon leaving, the hats are randomly returned. The question typically asks for the probability that none of the \(n\) people receive their own hat back.

#### Solution Approach Using PIE

To solve this, we calculate the total number of ways \(n\) hats can be distributed such that no one receives their own hat, known as a "derangement."

1. **Total Permutations**: There are \(n!\) ways to distribute \(n\) hats among \(n\) people.
2. **Applying PIE**: 
   - Subtract the ways in which at least one person gets their hat (single intersections).
   - Add the ways in which at least two people get their hats (double intersections), and so on.
   
The formula for the number of derangements (denoted as $D_n$) of $n$ items is given by:

$$D_n = n! \left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \ldots + (-1)^n \frac{1}{n!}\right)$$

This formula directly applies the principle of inclusion and exclusion by considering all permutations and systematically excluding those cases where one or more individuals receive their own hat.

#### Interpretation

- **For \(n=3\)**, for example, the calculation would be $D_3 = 3! \left(1 - \frac{1}{1!} + \frac{1}{2!}\right) = 2$, indicating there are 2 ways in which none of the three people get their own hat.
- **Probability**: The probability that no one receives their own hat is the ratio of the number of derangements to the total number of arrangements, $(P(D_n) = \frac{D_n}{n!}$.

### Eulerova Funkce pro Počet Dělitelů

Euler's totient function, $\varphi(n)$, is a crucial concept in number theory, giving the number of positive integers up to $n$ that are relatively prime to $n$. While the direct calculation of $\varphi(n)$ involves factors relatively prime to $n$, the principle of inclusion and exclusion (PIE) offers a systematic approach to related problems, such as finding the number of divisors of a number, by considering the prime factorization of $n$.

#### Calculating the Number of Divisors Using PIE

To calculate the number of divisors of a number $n$, including 1 and $n$ itself, using its prime factorization can be insightful. Given $n$ as a product of primes $n = p_1^{a_1} \cdot p_2^{a_2} \cdot \ldots \cdot p_k^{a_k}$, the number of divisors, $D(n)$, can be found without directly applying PIE but using a formula that emerges from a similar logic of inclusion (each factor contributes to possible divisors) and exclusion (divisors must be distinct):

$$D(n) = (a_1 + 1) \cdot (a_2 + 1) \cdot \ldots \cdot (a_k + 1)$$

This formula is derived by considering that each prime factor $p_i$ can appear in a divisor of $n$ from 0 up to $a_i$ times. The "+1" accounts for the option of excluding the prime factor altogether from a divisor.

#### Example: Finding the Number of Divisors

Consider $n = 12$. Its prime factorization is $2^2 \cdot 3^1$. Using the formula:

$$D(12) = (2 + 1) \cdot (1 + 1) = 3 \cdot 2 = 6$$

So, the number 12 has six divisors: 1, 2, 3, 4, 6, and 12.

#### Connection to PIE

While the direct application of PIE in computing $\varphi(n)$ or the number of divisors of $n$ might not be straightforward, the underlying logic of counting—considering each factor's contribution and ensuring distinct counts—mirrors the principle's approach of systematically including and excluding subsets to find a total count.

### Počet Surjekcí

#### Counting Surjections

Given two finite sets, $A$ and $B$, with $|A| = n$ and $|B| = m$, the goal is to count the number of surjective functions from $A$ to $B$. A function $f: A \rightarrow B$ is surjective if for every $b \in B$, there exists at least one $a \in A$ such that $f(a) = b$.

#### Formula for Counting Surjections Using PIE

The number of surjective functions can be calculated using PIE by considering all possible mappings and then excluding those that are not surjections. The formula is:

$$\sum_{k=0}^{m} (-1)^k \binom{m}{k} (m-k)^n$$

Here, $\binom{m}{k}$ is the binomial coefficient representing the number of ways to choose $k$ elements from a set of $m$ elements, and $(m-k)^n$ calculates the number of functions from $A$ to a subset of $B$ with $m-k$ elements, not considering the requirement for surjectivity. The alternating sign $(-1)^k$ ensures that we correctly apply the inclusion-exclusion principle by subtracting overcounted cases.

### Example: Calculating the Number of Surjections

Let's calculate the number of surjective functions from a set $A$ with 3 elements to a set $B$ with 2 elements.

Using the formula, we have:

$$\sum_{k=0}^{2} (-1)^k \binom{2}{k} (2-k)^3 = \binom{2}{0} (2-0)^3 - \binom{2}{1} (2-1)^3 + \binom{2}{2} (2-2)^3$$

$$= 1 \cdot 2^3 - 2 \cdot 1^3 + 1 \cdot 0^3 = 8 - 2 = 6$$

So, there are 6 surjective functions from a set of 3 elements to a set of 2 elements.

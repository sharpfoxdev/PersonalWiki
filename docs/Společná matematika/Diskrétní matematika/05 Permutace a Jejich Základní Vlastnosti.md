---
tags:
  - 
share: "true"
---

# 05 Permutace a Jejich Základní Vlastnosti

## Permutations Definition

A permutation is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. If the set has $n$ elements, the number of different permutations of the set is given by $n!$ (n factorial).

## Counting Permutations

### Permutations of a Set

The number of ways to arrange $n$ distinct objects into a sequence is given by:

$$n! = n \times (n-1) \times (n-2) \times \ldots \times 2 \times 1$$

For example, for a set of 3 elements $\{A, B, C\}$, there are $3! = 3 \times 2 \times 1 = 6$ permutations.

### Permutations of Multisets

If a set includes repeated elements, the formula adjusts to account for indistinguishable permutations. For a set with $n$ elements where the elements are not all distinct, and the multiplicities of the distinct elements are $n_1, n_2, \ldots, n_k$, the number of distinct permutations is:

$$\frac{n!}{n_1! \times n_2! \times \ldots \times n_k!}$$

## Fundamental Properties of Permutations

### Order Matters

In permutations, the order of elements is important. Changing the order of elements results in a different permutation.

### No Repetitions

In the basic concept of permutations, each element is considered unique, and each element can appear only once in any arrangement.

### Partial Permutations

When arranging $r$ elements out of a set of $n$ elements (where $r \leq n$), the number of permutations is given by the formula for permutations without repetition:

$$P(n, r) = \frac{n!}{(n-r)!}$$

This formula is used when we are interested in the order but do not use all available elements.

## Examples

1. **Permutations of "ABC"**: The permutations are "ABC", "ACB", "BAC", "BCA", "CAB", and "CBA".
2. **Permutations of "AAB"**: Since "A" is repeated, the number of distinct permutations is $\frac{3!}{2!} = 3$ permutations: "AAB", "ABA", and "BAA".

## Pevný Bod

**Definice (Pevný bod):** Permutace $p$ je prvek $x$ takový, že $p(x) = x$ (zobrazí se sám na sebe).
## Adaptive Random Search

[Book Link](http://www.cleveralgorithms.com/nature-inspired/stochastic/adaptive_random_search.html)

Adaptive Random Search is an evolved version of [Random Search](https://github.com/sushantdhiman/clever-algorithms/tree/master/algos/stochastic/random-search). Random Search has limitation of fixed step size, we will overcome it in this algorithm.

Adaptive Random Search continuously adjust the step size to reach the global optimum level. It does so by continuously monitoring change in cost, then try to adjust step size by increasing / decreasing it.

Algorithm take large steps to observe if there are any changes in cost, these large steps allow us to escape local optima. We can choose small steps if there are no changes in cost for extended iterations.

### Algorithm Example
We are trying to search for a number between `-5.0` and `+5.0`, that should have minimum value for following cost function.

```js
/**
 * Where `n` is the candidate and `i` is expansion factor
 * We can use any kind of cost function, that can evaluate candidate
 */
let costFx = (n,i) => ( (n^2) * i );
```

Optimum solution is `50` for `i = 2`, two solution exists `-5` and `+5`;

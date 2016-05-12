## Random Search

[Book Link](http://cleveralgorithms.com/nature-inspired/stochastic/random_search.html)

Random search deals with finding a solution `s` in a search space for `n` iterations. Solution `s` must be the most cost effective solution for all solutions found over `n` iterations.

Random search don't remember any previous selection thus can re-sample same solution again. Its also limited to run for `n` iteration where `` n < search_space_length ``, thus making it cost effective but approximate or random.

### Algorithm Example
We are trying to search for a number between `-5.0` and `+5.0`, that should have minimum value for following cost function.

```js
var costFx = (n,i) => ( (n^2) * i );
```
Optimum solution is `0.0` in this case.

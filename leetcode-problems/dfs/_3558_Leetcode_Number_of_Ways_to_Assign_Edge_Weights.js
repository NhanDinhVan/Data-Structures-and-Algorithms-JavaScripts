var assignEdgeWeights = function (edges) {
  const MOD = 1000000007n;
  const graph = {};

  for (const [u, v] of edges) {
    graph[u] ??= [];
    graph[v] ??= [];

    graph[u].push(v);
    graph[v].push(u);
  }

  function depth(node, parent) {
    let maxDepth = 0;

    for (const next of graph[node]) {
      if (next === parent) continue;

      maxDepth = Math.max(maxDepth, 1 + depth(next, node));
    }

    return maxDepth;
  }

  const maxDepth = depth(1, 0);

  function modPow(base, exp, mod) {
    let result = 1n;

    while (exp > 0n) {
      if (exp % 2n === 1n) {
        result = (result * base) % mod;
      }

      base = (base * base) % mod;
      exp = exp / 2n;
    }

    return result;
  }

  return Number(modPow(2n, BigInt(maxDepth - 1), MOD));
};

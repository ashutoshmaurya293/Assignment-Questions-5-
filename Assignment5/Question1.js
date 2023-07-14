function construct_2DArray(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }
    const result = [];
    for (let i = 0; i < m; i++) {
        result.push(original.slice(i * n, (i + 1) * n));
    }
    return result;
}
construct_2DArray([1,2,3,4], 2, 2);

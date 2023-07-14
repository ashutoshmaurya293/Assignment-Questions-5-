function findOriginal_Array(changed) {
    if (changed.length % 2 !== 0) {
        return [];
    }
    const map = new Map();
    for (const num of changed) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const result = [];
    changed.sort((a, b) => a - b);
    for (const num of changed) {
        if (map.get(num) === 0) {
            continue;
        }
        if (map.get(num * 2) === undefined || map.get(num * 2) === 0) {
            return [];
        }
        result.push(num);
        map.set(num, map.get(num) - 1);
        map.set(num * 2, map.get(num * 2) - 1);
    }
    return result;
}
findOriginal_Array([1,3,4,2,6,8]);

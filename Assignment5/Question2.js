function arrange_Coins(n) {
    let left = 0;
    let right = n;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const curr = mid * (mid + 1) / 2;
        if (curr === n) {
            return mid;
        }
        if (n < curr) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return right;
}
arrange_Coins(5);



function maxProfit(prices: number[]): number {
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - prices[i - 1]
        if (profit > 0) max += profit
    }
    return max
};


export default maxProfit

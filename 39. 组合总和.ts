function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];

    const dfs = (start: number, temp: number[], sum: number) => {
        if (sum > target) {
            return;
        } else if (sum === target) {
            res.push([...temp]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            temp.push(candidates[i]);
            dfs(i, temp, sum + candidates[i]);
            temp.pop();

        }
    }
    dfs(0, [], 0);
    return res;

};
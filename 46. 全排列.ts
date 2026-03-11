function permute(nums: number[]): number[][] {
    const res: number[][] = [];

    const dfs = (arr: number[], temp: number[]) => {
        if (arr.length === 0) {
            res.push([...temp]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const newArr = arr.filter((_, index) => index !== i);
            temp.push(arr[i]);
            dfs(newArr, temp);
            temp.pop();
        }
    }
    dfs(nums, []);
    return res;
};
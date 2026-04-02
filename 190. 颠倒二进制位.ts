function reverseBits_1(n: number): number {
    let rev = 0;
    for (let i = 0; i < 32 && n !== 0; ++i) {
        rev |= (n & 1) << (31 - i);
        n >>>= 1; 
    }
    return rev >>> 0; 
}


function reverseBits_2(n: number): number {
    const M1 = 0x55555555; // 01010101010101010101010101010101
    const M2 = 0x33333333; // 00110011001100110011001100110011
    const M4 = 0x0f0f0f0f; // 00001111000011110000111100001111
    const M8 = 0x00ff00ff; // 00000000111111110000000011111111
    
    let result: number = n;
    
    result = ((result >>> 1) & M1) | ((result & M1) << 1);
    result = ((result >>> 2) & M2) | ((result & M2) << 2);
    result = ((result >>> 4) & M4) | ((result & M4) << 4);
    result = ((result >>> 8) & M8) | ((result & M8) << 8);
    
    return ((result >>> 16) | (result << 16)) >>> 0;
}
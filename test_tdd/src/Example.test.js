test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
})

test('2 + 3 = 5', () => {
    expect(2 + 3).toBe(4);
})

it('2 + 4 = 6', () => {
    expect(2 + 4).toBe(6);
})

describe('간단한 테스트', () => {
    test('3 + 2 = 5', () => {
        expect(3 + 2).toBe(5);
    });

    it('4 + 3 = 7', () => {
        expect(4 + 3).toBe(7);
    })
})
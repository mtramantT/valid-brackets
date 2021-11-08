// Types
export type OpeningBracket = '(' | '{' | '[';
export type ClosingBracket = ')' | '}' | ']';
export type Bracket = OpeningBracket | ClosingBracket;

// Typegaurds
export const isOpeningBracket = (val: string): val is OpeningBracket => {
    return val === '(' || val === '{' || val === '[';
};
export const isClosingBracket = (val: string): val is ClosingBracket => {
    return val === ')' || val === '}' || val == ']';
};
export const isBracket = (val: string): val is Bracket => {
    return isOpeningBracket(val) || isClosingBracket(val);
};

// Methods - Private
const toStringArray = (val: string): string[] => {
    const chars = [];
    for (let i = 0; i < val.length; i++) {
        chars.push(val[i]);
    }
    return chars;
};
const matchingCloseBracket = (val: string | undefined): Bracket | undefined => {
    if (!val || !isBracket(val)) return undefined;
    switch (val) {
        case '(':
            return ')';
        case '{':
            return '}';
        case '[':
            return ']';
        case ')':
    }
};

// Main Functionality
export const isValid = (line: string): boolean => {
    const chars = toStringArray(line);
    const stack = [] as string[];

    for (let i = 0; i < chars.length; i++) {
        if (isOpeningBracket(chars[i])) {
            stack.push(chars[i]);
        } else if (isClosingBracket(chars[i])) {
            const compare = matchingCloseBracket(stack.pop());
            if (!compare || compare !== chars[i]) {
                return false;
            }
        }
    }

    return true;
};

export const isInvalidAt = (line: string): number => {
    const chars = toStringArray(line);
    const stack = [] as string[];

    for (let i = 0; i < chars.length; i++) {
        if (isOpeningBracket(chars[i])) {
            stack.push(chars[i]);
        } else if (isClosingBracket(chars[i])) {
            const compare = matchingCloseBracket(stack.pop());
            if (!compare || compare !== chars[i]) {
                return i;
            }
        }
    }

    return -1;
};

export default isValid;

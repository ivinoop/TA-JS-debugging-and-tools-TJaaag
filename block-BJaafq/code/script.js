// First

function addNum(numA, numB) {
    return numA + numB;
}

let result, expected;


//Testing Framework 

function test(message,callback) {
    try {
        callback();
        console.log('✔️', message);
    } catch (error) {
        console.error(error);
        console.log('❌', message);
    }
}

// Assertion Library

function expect(actual) {
    return {
        toEqual: function(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}

function testAddNum() {
    result = addNum(3,4);
    expected = 6;
    expect(result).toEqual(expected);
}

test("adding 3 and 4", testAddNum);

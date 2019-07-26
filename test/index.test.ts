import * as mocha from 'mocha';
import { swap } from "../src/";
import { expect } from "chai";

describe('swap', () => {

    it('swaps props ar runtime', () => {
        
        const t = {
            a: 1,
            b: 2,
        }
            
        swap(t, 'a', 'b');
        expect(t.a).to.equal(2);
        expect(t.b).to.equal(1);
    });
});
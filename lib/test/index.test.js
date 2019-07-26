"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src/");
var chai_1 = require("chai");
describe('swap', function () {
    it('swaps props ar runtime', function () {
        var t = {
            a: 1,
            b: 2,
        };
        src_1.swap(t, 'a', 'b');
        chai_1.expect(t.a).to.equal(2);
        chai_1.expect(t.b).to.equal(1);
    });
});
//# sourceMappingURL=index.test.js.map
## Swap values of 2 keys, with compile time type check for compatibility

Swap values of 2 keys, with compile time type check for compatibility

```typescript
import { swap } from 'ts-swap'
  const t = {
    a: 1,
    b: 2,
    c: '',
    c1: '',
    d: { a: 5 },
    e: { a: 6 },
    f: { b: 7 },
    g: { a: '' }
  }
 
 swap(t, 'a', 'b');
 swap(t, 'a', 'c'); //error
 swap(t, 'b', 'c'); //error
 swap(t, 'a', 'a'); //error
 swap(t, 'c', 'c1');
 swap(t, 'd','e');
 swap(t, 'd','f'); //error
 swap(t, 'd','g'); //error
```
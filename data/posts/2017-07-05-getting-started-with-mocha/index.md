---
title: Getting Started with Mocha testing in Javascript
date: 2017-07-05
tags: ["javascript", "mocha"]
---

Testing is one of those things that I have shrugged off for a while. It’s like flossing. I know the benefits. People say that it’s easy. It will make Future-Steve invincible. And, I feel bad about _not_ doing it. It just is one more thing that I am unsure of how to fit into my daily routine. So, with this new project I am working on I decided to do it right from the beginning.

I’m going to show you how to do some basic testing. Our end goal for this post will be to write a test for the following module:

```Javascript
// index.js
const isValidEmail = (email) => {
  return (email !== null && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(email)) ? true : false
}
```

(Side note: I know that this regular expression is not perfect. There are thousands of these out there and with every one a _thousand-and-one critics._ That said, we’re gonna write some tests against this function.)

We’re going to use [Mocha][] for our testing framework. Honestly, to get started I looked for the most popular framework and went with that. I don’t know a whole lot about testing at this point, so I wanted to use something well documented and well used.

We’re also going to use [Chai][]. From my understanding this is a Mocha plugin that just adds some assertions. It’s gonna make our tests more human-discernible.

Let’s start by installing these:

```shell
npm i mocha -D
npm i chai -D
```

…and open up our new `test.js` file.

From here, we need to initiate our Javascript file and let it know what it’s supposed to do.

```Javascript
// test/test.js
'use strict'
const chai = require('chai')
const login = require('../index')
```

Here we are using Chai like a plugin by requiring it. Also, we’re require the file we want to test. Makes sense, right?!

Okay, now, let’s write our first `describe`. A `describe` tells Mocha how to treat a certain function.

```Javascript
// test/test.js
describe('#isValidEmail', () => {
  // we're going to put our actual test in here.
}
```

Sweet. Now the first test we want to write is to make sure a “normal looking” email address (like “abc@def.com) ”returns true. So, in the describe let’s add our test. (the new stuff is in **bold**).

```Javascript
// test/test.js
describe('#isValidEmail', () => {
  it('should return true for abc@def.com', () => {
    var result = login.isValidEmail('abc@def.com')
    chai.expect(result).to.be.true
  })
}
```

Now, let’s break this down. The `it` line should read like a sentence, phrased with _“it should…”_ and then what it should do. Treat this like a note about how the code should test. If the test fails you will see this, so it needs to be helpful as to what this test is actually testing.

Next, we save the result of the function (with the fake email address) as a variable.

Finally, we use Chai to describe what we want the result to look like. It’s crazy how readable this is!

Chai expect[s][the] result to be true.

BOOM! We wrote a test!

…but how do we… _test it…_

It turns out this is ridiculously simple with npm. In your package.json, let’s add a test script

```json
// package.json
...
"scripts": {
  "test": "mocha --reporter spec"
}
...
```

Here we are telling npm that Mocha is our tester. Somehow it will find that `test.js` file. Now, if we run `npm test` in our terminal, Mocha should run the test file and should spit out some stuff!

```shell
> mocha --reporter spec

#isValidEmail
✓ should return true for abc@def.com

1 passing (9ms)
```

WHAT! This is freaking cool — and easy!

Let’s add a few more tests for giggles:

```javascript
// user forgot the `something@`
it("should return false for abcdef.com", () => {
  var result = login.isValidEmail("abcdef.com");
  chai.expect(result).to.be.false;
});

// user forgot the `.com`
it("should return false for abc@def", () => {
  var result = login.isValidEmail("abc@def");
  chai.expect(result).to.be.false;
});

// test for 2 character TLDs
it("should return true for abc@def.co", () => {
  var result = login.isValidEmail("abc@def.co");
  chai.expect(result).to.be.true;
});

// test for country TLDs
it("should return true for abc@def.co.uk", () => {
  var result = login.isValidEmail("abc@def.co.uk");
  chai.expect(result).to.be.true;
});
```

and then run `npm test`:

```shell
> mocha --reporter spec

#isValidEmail
✓ should return true for abc@def.com
✓ should return false for abcdef.com
✓ should return false for abc@def
✓ should return true for abc@def.co
✓ should return true for abc@def.co.uk

5 passing (26ms)
```

Sweet. Now, let’s say the Future-Steve rides in on his hover-board and messes something up with this function (because in the future I still don’t understand regular expressions!).

```Javascript
// index.js

// removed the bold *(\.\w+)+$ from the old verion
// which is the bit at the end that tell it that it needs the '.com'

// Future-Steve's modified code
const isValidEmail = (email) => {
return (email !== null && /^\w+([\.-]?\w+)\*@\w+([\.-]?\w+)/.test(email)) ? true : false
}

```

When Future-Steve runs `npm test`:

```shell
> mocha --reporter spec

#isValidEmail
✓ should return true for abc@def.com
✓ should return false for abcdef.com 1) should return false for abc@def
✓ should return true for abc@def.co
✓ should return true for abc@def.co.uk

4 passing (26ms)
1 failing

1. #isValidEmail should return false for abc@def:

   AssertionError: expected true to be false

   - expected - actual

   -true
   +false

   at Context.it (test/test.js:47:30)
```

Ha! Booyah Future-Steve! In your FACE! Future-Steve will know what he broke and exactly how he can fix it! Pretty cool!

[mocha]: https://mochajs.org/ "Mocha"
[chai]: http://chaijs.com/ "Chai"

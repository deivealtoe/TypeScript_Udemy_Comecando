"use strict";
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Hello, ${firstName} ${lastName}`;
    }
    return `Hello, ${firstName}`;
}
console.log(advancedGreeting(`Foo`));
console.log(advancedGreeting(`Foo`, `Bar`));

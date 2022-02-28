"use strict";
class StaticMembers {
    static showMessage() {
        console.log('Showing message');
    }
}
StaticMembers.property = 'Hello';
console.log(StaticMembers.property);
StaticMembers.showMessage();

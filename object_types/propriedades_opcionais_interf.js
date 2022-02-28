"use strict";
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email}`);
    if (user.role) {
        console.log(`Sua função é ${user.role}`);
    }
}
const user = {
    email: 'foo@bar.com'
};
const anotherUser = {
    email: 'jon@doe.net',
    role: 'Admin'
};
showUserDetails(user);
showUserDetails(anotherUser);

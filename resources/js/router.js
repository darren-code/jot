import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/Home";
import ContactsCreate from "./views/ContactsCreate";
import ContactsDetail from "./views/ContactsDetail";
import ContactsUpdate from "./views/ContactsUpdate";
import ContactsIndex from "./views/ContactsIndex";

import BirthdaysIndex from "./views/BirthdaysIndex";
import Logout from "./actions/Logout";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            meta: { title: 'Home' }
        },
        {
            path: '/contacts/create',
            component: ContactsCreate,
            meta: { title: 'Add New Contact' }
        },
        {
            path: '/contacts/:id',
            component: ContactsDetail,
            meta: { title: 'Details For Contact' }
        },
        {
            path: '/contacts/:id/edit',
            component: ContactsUpdate,
            meta: { title: 'Edit Contact' }
        },
        {
            path: '/contacts',
            component: ContactsIndex,
            meta: { title: 'Contacts' }
        },
        {
            path: '/birthdays',
            component: BirthdaysIndex,
            meta: { title: 'This Month\'s Birthdays' }
        },
        {
            path: '/logout',
            component: Logout,
            meta: { title: 'Thank You. Good Bye.' }
        },
    ],
    mode: 'history' // Browser Compatibility (Backward Compatibility)
});
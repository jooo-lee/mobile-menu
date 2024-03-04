import homeIcon from 'assets/home.svg';
import searchIcon from 'assets/magnify.svg';
import cartIcon from 'assets/cart.svg';
import accountIcon from 'assets/account.svg';
import settingsIcon from 'assets/cog.svg';

const prependIconToLink = function prependIconToLink(linkID, icon, alt) {
    const image = document.createElement('img');
    image.src = icon;
    image.classList.add('tab-icon');
    image.alt = alt;
    const link = document.querySelector(linkID);
    link.prepend(image);
};

const loadIcons = function loadIcons() {
    prependIconToLink('#home-link', homeIcon, 'Home');
    prependIconToLink('#search-link', searchIcon, 'Search');
    prependIconToLink('#cart-link', cartIcon, 'Cart');
    prependIconToLink('#account-link', accountIcon, 'Account');
    prependIconToLink('#settings-link', settingsIcon, 'Settings');
};

export default loadIcons;

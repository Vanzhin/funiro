<template>
	<header class="header">
            <div class="header__wrap">
                <div class="header__container _container">
                    <div class="header__body">
                        <input type="checkbox" name="menu__item-1" id="menu__burger" class="menu__label">
                        <div class="header__main">
                            <a href="" class="header__logo">Funiro.</a>
                            <div class="header__menu menu">
                                <nav class="menu__body">
                                    <ul class="menu__list">
                                        <li class="menu__item">
                                            <input type="checkbox" name="menu__item-1" id="menu__item-1" class="menu__label">
                                            <a href="#" class="menu__link">Products</a>
                                           
                                            <label for="menu__item-1" class="_label">
                                                <p data-spoller class="menu__arrow _icon-arrow-down">
                                                </p> 
                                            </label>
                                        <ul class="menu__sub-list">
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Product 1</a></li>
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Product 2</a></li>
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Product 3</a></li>
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Product 4</a></li>
                                        </ul>
                                        </li>
                                        <li class="menu__item">
                                            <input type="checkbox" name="menu__item-2" id="menu__item-2" class="menu__label">
                                            <a href="#" class="menu__link">Rooms</a>
                                           
                                            <label for="menu__item-2" class="_label">
                                                <p data-spoller class="menu__arrow _icon-arrow-down">
                                                </p> 
                                            </label>
                                        <ul class="menu__sub-list">
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Room 1</a></li>
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Room 2</a></li>
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Room 3</a></li>
                                            <li class="menu__sub-item"><a href="#" class="menu__sub-link">Room 4</a></li>
                                        </ul>
                                        </li>
                                        <li class="menu__item"><a href="#" class="menu__link">Inspirations</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header__search">
                            <div class="search-form">
                                <button type="button" class="search-form__icon _icon-search"></button>
                                <form action="#" class="search-form__item">
                                    <button type="button" class="search-form__btn _icon-search"></button> 
                                    <input type="text" autocomplete="off" name = "form[]" placeholder="Search for minimalist chair" class="search-form__input" > 
                                </form>
                            </div>
                        </div>
                        <div class="header__actions actions-header">
                            <a href="#" class="actions-header__item actions-header__item_favorites _icon-favorite"></a>
                            <div class="actions-header__item cart-header">
                                <a href="#" class="cart-header__icon _icon-cart"><span>1</span></a>
                                <div class="cart-header__body">
                                    <ul class="cart-header__list cart-list"></ul>    
                                </div>
                            </div>
                            <a href="#" class="actions-header__item actions-header__item_user">
                                <img src="static/img/IMG_1534.png" alt="avatar">
                            </a>
                        </div>
                        <label for="menu__burger" class="icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        
                    </div>
                </div>
            </div>
        </header>
</template>
<script>

</script>
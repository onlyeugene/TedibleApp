import home from '@/assets/internal/sidebar/home.svg'
import order from '@/assets/internal/sidebar/order.svg'
import favorite from '@/assets/internal/sidebar/favorite.svg'
import settings from '@/assets/internal/sidebar/settings.svg'
import help from '@/assets/internal/sidebar/help.svg'
import restaurant from '@/assets/internal/sidebar/restaurant.svg'

export const  SideBarLinks =[
    {
        'slug': 'home',
        'title': 'Home',
        'icon': home,
        'path' : '/internal/dashboard'
    },
    {
        'slug': 'restuarants',
        'title': 'Restaurants',
        'icon': restaurant,
        'path' : '/internal/restaurants'
    },
    {
        'slug': 'favorite',
        'title': 'Favorite',
        'icon': favorite,
        'path' : '/internal/favorite'
    },
    {
        'slug': 'order-history',
        'title': 'Order History',
        'icon': order,
        'path' : '/internal/order-history'
    },
    {
        'slug': 'help',
        'title': 'Help',
        'icon': help,
        'path' : '/internal/help'
    },
    {
        'slug': 'settings',
        'title': 'Settings',
        'icon': settings,
        'path' : '/internal/settings'
    },

]


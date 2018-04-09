var mainnav_data = [
    {
        caption: {pt: 'Início', es: 'Inicio', en: 'Home'},
        id: 'home',
        href: ''
    },
    {
        caption: {pt: 'Colabore', es: 'Participa', en: 'Get involved'},
        id: 'get_involved',
        items: [
            {
                href: 'get_involved',
                id: 'get_involved',
                caption: {pt: 'Chamada à voluntários', es: 'Llamada para voluntarios', en: 'Call for volunteers'}
            },
            {
                href: 'diversity',
                id: 'diversity',
                caption: {pt: 'Diversidades', es: 'Diversidad', en: 'Diversity'}
            }
        ]
    },
    {
        caption: {pt: 'Ajuda', es: 'Ayuda', en: 'Help'},
        id: 'faq',
        items: [
            {
                href: 'faq',
                id: 'faq',
                caption: {pt: 'FAQ', es: 'FAQ', en: 'FAQ'}
            }
        ]
    }
];

function getlang() {
    // TODO: Current language for translations
    return 'pt';
}

function getActiveRoute() {
    if ($.route)
        return $.route;
    return {section: null, page: null}
}

var app = angular.module('scipyla.mainnav', []);

app.controller('MainNavCtl',
    function ($scope) {
        $scope.lang = getlang();
        $scope.mainnav = mainnav_data;
        $scope.route = getActiveRoute();
        $scope.hprefix = $.page_level || '';
        $scope.template = {url: $scope.hprefix + 'assets/views/menu_ppal.html'};
    }
);


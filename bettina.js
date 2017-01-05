/* Widget fix for all properties page and afc-listings */

jQuery(document).ready(function () {
    var xWidget = {
        content: "",
        wrapper_open: "<div style='text-align: center;'><ul>",
        wrapper_close: "</ul></div>",
        prcTitle: function (xt='') {
            var t = xt.replace(/\\/g, "");
            t = t.replace(/\_/g, " ");
            t = "Search All " + t.substr(0, 1).toUpperCase() + t.substr(1) + " Properties By Price Range";
            t = t.replace("All All", "All");
            return t;
        },
        nbTitle: function (xt='', pt='') {
            var t = xt.replace(/\\/g, '');
            t = t.replace(/\_/g, ' ');

            var postTitle = (pt === 0) ? '' : ' Properties By Neighbourhood';
            t = 'Search All ' + t.substr(0, 1).toUpperCase() + t.substr(1) + postTitle;
            t = t.replace('All All', 'All');
            return t;
        },
        laTitle: function (xt='') {
            var t = xt.replace(/\\/g, '');
            t = t.replace(/\_/g, ' ');
            t = 'Search ' + t.substr(0, 1).toUpperCase() + t.substr(1) + ' By Area';
            t = t.replace('All All', 'All');
            return t;
        },
        initialize: function (details) {
            this.priceRange(details);
            this.neighbourhood(details);
            this.changeTopDescriptionTitle(details);
            if (details.tp) {
                this.topWidget(details);
            }
        },
        priceRange: function (d) {
            if (d.pr === 0) {//all houses
                var title = (d.prTitle) ? this.prcTitle(d.prTitle) : (d.nbTitle) ? this.prcTitle(d.nbTitle) : this.prcTitle(d.classname);
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + title + '</li>' +
                        '<li><a href="/' + d.prelink + 'under_500000">Under $500K</a></li>' +
                        '<li><a href="/' + d.prelink + '500000-600000">$500K-$600K</a></li>' +
                        '<li><a href="/' + d.prelink + '600000-700000">$600K-$700K</a></li>' +
                        '<li><a href="/' + d.prelink + '700000-800000">$700K-$800K</a></li>' +
                        '<li><a href="/' + d.prelink + '800000-900000">$800K-$900K</a></li>' +
                        '<li><a href="/' + d.prelink + 'over_900000">Over $900K</a></li>' + this.wrapper_close;
            } else if (d.pr === 1) { //all townhoues
                var title = (d.prTitle) ? this.prcTitle(d.prTitle) : (d.nbTitle) ? this.prcTitle(d.nbTitle) : this.prcTitle(d.classname);
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + title + '</li>' +
                        '<li><a href="/' + d.prelink + 'under_300000">Under 300K</a></li>' +
                        '<li><a href="/' + d.prelink + '300000-400000">$300K-$400K</a></li>' +
                        '<li><a href="/' + d.prelink + '400000-500000">$400K-$500K</a></li>' +
                        '<li><a href="/' + d.prelink + '500000-600000">$500K-$600K</a></li>' +
                        '<li><a href="/' + d.prelink + '600000-700000">$600K-$700K</a></li>' +
                        '<li><a href="/' + d.prelink + '700000-800000">$700K-$800K</a></li>' +
                        '<li><a href="/' + d.prelink + 'over_800000">Over $800K</a></li>' + this.wrapper_close;
            } else if (d.pr === 2) { //all condo
                var title = (d.prTitle) ? this.prcTitle(d.prTitle) : (d.nbTitle) ? this.prcTitle(d.nbTitle) : this.prcTitle(d.classname);
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + title + '</li>' +
                        '<li><a href="/' + d.prelink + 'under_200000">Under 200K</a></li>' +
                        '<li><a href="/' + d.prelink + '200000-300000">$200K-$300K</a></li>' +
                        '<li><a href="/' + d.prelink + '300000-400000">$300K-$400K</a></li>' +
                        '<li><a href="/' + d.prelink + '400000-500000">$400K-$500K</a></li>' +
                        '<li><a href="/' + d.prelink + '500000-600000">$500K-$600K</a></li>' +
                        '<li><a href="/' + d.prelink + '600000-700000">$600K-$700K</a></li>' +
                        '<li><a href="/' + d.prelink + 'over_700000">Over $700K</a></li>' + this.wrapper_close;
            } else if (d.pr === 3) { //listing by area widget
                var title = (d.postTitle) ? this.prcTitle(d.prTitle) : (d.nbTitle) ? this.prcTitle(d.nbTitle) : this.prcTitle(d.classname);
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + title + '</li>' +
                        '<li><a href="/' + d.prelink + 'under_300000">Under 300K</a></li>' +
                        '<li><a href="/' + d.prelink + '300000-400000">$300K-$400K</a></li>' +
                        '<li><a href="/' + d.prelink + '400000-500000">$400K-$500K</a></li>' +
                        '<li><a href="/' + d.prelink + '500000-600000">$500K-$600K</a></li>' +
                        '<li><a href="/' + d.prelink + '600000-700000">$600K-$700K</a></li>' +
                        '<li><a href="/' + d.prelink + '700000-800000">$700K-$800K</a></li>' +
                        '<li><a href="/' + d.prelink + '800000-900000">$800K-$900K</a></li>' +
                        '<li><a href="/' + d.prelink + 'over_900000">Over $900K</a></li>' + this.wrapper_close;
            } else {
                this.content = '';
            }
            console.log(d.classname);
            jQuery('.' + d.classname + ' .searchbyone').html(this.content);
        },
        neighbourhood: function (d) {
            var pt = (d.postTitle) ? 1 : 0;
            var t = (d.nbTitle) ? this.nbTitle(d.nbTitle, pt) : this.nbTitle(d.classname, pt);
            if (d.nb === 1) {//Cloverdale
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + t + '</li>' +
                        '<li><a href="/clayton">Clayton</a></li>' +
                        '<li><a href="/cloverdaleBC">Cloverdale</a></li>' +
                        '<li><a href="/serpentine">Serpentine</a></li>' + this.wrapper_close;
            } else if (d.nb === 2) {//langley
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + t + '</li>' +
                        '<li><a href="/murrayville">Murrayville</a></li>' +
                        '<li><a href="/walnut_grove">Walnut Grove</a></li>' +
                        '<li><a href="/willoughby_heights">Willoughby Heights</a></li>' +
                        '<li><a href="/brookswood_langley">Brookswood Langley</a></li>' +
                        '<li><a href="/fort_langley">Fort Langley</a></li>' +
                        '<li><a href="/langley_city">Langley City</a></li>' +
                        '<li><a href="/countryline_glen_valley">Country Line Glen Valley</a></li>' +
                        '<li><a href="/salmon_river">Salmon River</a></li>' +
                        '<li><a href="/aldergrove_langley">Aldergrove Langley</a></li>' +
                        '<li><a href="/campbell_valley">Campbell Valley</a></li>' + this.wrapper_close;
            } else if (d.nb === 3) {//south surrey/whiterock
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + t + '</li>' +
                        '<li><a href="/elgin_chantrell">Elgin/Chantrell</a></li>' +
                        '<li><a href="/sunnyside_park_surrey">Sunnyside Park Surrey</a></li>' +
                        '<li><a href="/crescent_beach_ocean_park">Crescent Beach/Ocean Park</a></li>' +
                        '<li><a href="/white_rock">White Rock</a></li>' +
                        '<li><a href="/king_george_corridor">King George Corridor</a></li>' +
                        '<li><a href="/hazelmere">Hazelmere</a></li>' +
                        '<li><a href="/grandview_heights">Grandview Heights</a></li>' +
                        '<li><a href="/morgan_creek">Morgan Creek</a></li>' +
                        '<li><a href="/pacific_douglas">Pacific Douglas</a></li>' + this.wrapper_close;
            } else if (d.nb === 4) {
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + t + '</li>' +
                        '<li><a href="/all-properties-for-sale-cloverdale-bc-canada">Search Houses In Cloverdale</a></li>' +
                        '<li><a href="/all-properties-for-sale-langley-bc-canada">Search Houses In Langley</a></li>' +
                        '<li><a href="/all-properties-for-sale-white-rock-south-surrey-bc-canada">Search Houses In South Surrey White Rock</a></li>' + this.wrapper_close;
            } else if (d.nb === 5) {
                this.content = this.wrapper_open +
                        '<li style="text-transform: capitalize">' + t + '</li>' +
                        '<li><a href="/cloverdaleBC">Cloverdale</a></li>' +
                        '<li><a href="/clayton">Clayton</a></li>' +
                        '<li><a href="/serpentine">Serpentine</a></li>' + this.wrapper_close;
            } else if (d.nb === 6) {
                var links = [
                    '<li style="text-transform: capitalize">' + t + '</li>' +
                            '<li><a href="/all_cloverdale_houses">Cloverdale Houses</a></li>' +
                            '<li><a href="/langley_houses">Langley Houses</a></li>' +
                            '<li><a href="/southsurrey_houses">South Surrey Houses</a></li>',
                    '<li style="text-transform: capitalize">' + t + '</li>' +
                            '<li><a href="/cloverdale_townhome">Cloverdale Townhouses</a></li>' +
                            '<li><a href="/langley_townhouses">Langley Townhouses</a></li>' +
                            '<li><a href="/southsurrey_townhouses">South Surrey Townhouses</a></li>',
                    '<li style="text-transform: capitalize">' + t + '</li>' +
                            '<li><a href="/cloverdale_condos">Cloverdale Condos</a></li>' +
                            '<li><a href="/langley_condos">Langley Condos</a></li>' +
                            '<li><a href="/southsurrey_condos">South Surrey Condos</a></li>'
                ];
                this.content = this.wrapper_open + links[d.nb6no] + this.wrapper_close;
            } else {
                this.content = '';
            }
            jQuery('.' + d.classname + ' .searchbytwo').html(this.content);
        },
        topWidget: function (d) {
            var title = (d.title) ? 'SEARCH FOR ' + d.title + ' BY PRICE RANGE' : 'START YOUR SEARCH';
            var content = '';
            var openWrapper = '<h2 class="sidebar-title">' + title + '</h2><div class="side_content sidebar"><div class="container searchbytype">';
            var closeWrapper = '</div></div>'
            var hoverimage = "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26544.png";
            var image = [
                "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26572.jpg",
                "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26573.jpg",
                "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26571.jpg"
            ];
            var link = [
                [["Under $800,000", "under_800000"],
                    ["$800,000 - $950,000", "800000-950000"],
                    ["Over $950,000", "over_950000"]],
                [["Under $300,000", "under_300000"],
                    ["$300,000 - $400,000", "300000-400000"],
                    ["Over $400,000", "over_400000"]],
                [["Under $200,000", "under_200000"],
                    ["$200,000 - $300,000", "200000-300000"],
                    ["Over $300,000", "over_300000"]]
            ];
            var level = (d.level) ? '.level_' + d.level : '.level_5';
            for (ctr = 0; ctr < 3; ctr++) {
                console.log(d.prelink)
                content +=
                        '<div class="col-xs-12 col-sm-4">' +
                        '<div class="strip-right">' +
                        '<h1>' + link[d.pr][ctr][0] + '</h1>' +
                        '<div class="strip-right-info">' +
                        '<h1>' + link[d.pr][ctr][0] + '</h1>' +
                        '<img src="' + hoverimage + '">' +
                        '<div class="info-text hvr">' +
                        '<p><a href="/' + d.prelink + link[d.pr][ctr][1] + '">LET\'S GET STARTED! <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i></a></p>' +
                        '</div></div></div>' +
                        '<a href="/' + d.prelink + link[d.pr][ctr][1] + '"><img src="' + image[ctr] + '" class="img-responsive"></a></div>';
            }
            console.log('.' + d.classname + level + ' #hf_top-main');
            jQuery('.' + d.classname + level + ' #hf_top-main').append(openWrapper + content + closeWrapper);
        },
        topWidget2: function (d) {
            prelink = (d.prelink2) ? d.prelink2 : d.classname;
            pretitle = (d.pretitle) ? d.pretitle : window.location.pathname.replace('/', '');
            pretitle = pretitle.replace('grandview', 'grand view');
            pretitle = pretitle.replace('countryline', 'country line');
            pretitle = pretitle.replace(/_/g, ' ').toUpperCase();
            pretitle = pretitle.replace(/-/g, ' ');
            pretitle = pretitle.replace('BC', '');

            if (pretitle === 'CONDOS' || pretitle === 'HOUSES' || pretitle === 'TOWNHOUSES') {
                pretitle = 'SEARCH ';
            }
            var content = '';
            var openWrapper = '<h2 class="sidebar-title">Start Your Search</h2><div class="side_content sidebar"><div class="container searchbytype">';
            var closeWrapper = '</div></div>'
            var hoverimage = "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26544.png";
            var image = [
                "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26570.png",
                "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26568.png",
                "http://storage.ubertor.com/bettinareid2.ourubertor.com/content/image/26569.png"
            ];
            var belowWidgets = [];
            var opt = (!d.belowWidgetOption) ? 0 : d.belowWidgetOption;
            switch (opt) {
                case 0:
                    var clss = (d.belowWidgetUseClass) ? d.prelink : '';
                    belowWidgets = [
                        '<a href="/'+clss+'houses_under_500000" class="price-range under">UNDER $500,000</a>' +
                                '<a href="/'+clss+'houses_500000-650000" class="price-range between">$500,000 - $650,000</a>' +
                                '<a href="/'+clss+'houses_over_650000" class="price-range over">OVER $650,000</a>',
                        '<a href="/'+clss+'townhouses_under_300000" class="price-range under">UNDER $300,000</a>' +
                                '<a href="/'+clss+'townhouses_300000-400000" class="price-range between">$300,000 - $400,000</a>' +
                                '<a href="/'+clss+'townhouses_over_400000" class="price-range over">OVER $400,000</a>',
                        '<a href="/'+clss+'condos_under_200000" class="price-range under">UNDER $200,000</a>' +
                                '<a href="/'+clss+'condos_200000-300000" class="price-range between">$200,000 - $300,000</a>' +
                                '<a href="/'+clss+'condos_over_300000" class="price-range over">OVER $300,000</a>'
                    ]
                    break;
                case 1:
                    belowWidgets = [
                        '<a href="/under_500000" class="price-range under">UNDER $500,000</a>' +
                                '<a href="/500000-650000" class="price-range between">$500,000 - $650,000</a>' +
                                '<a href="/650000_Over" class="price-range over">OVER $650,000</a>',
                        '<a href="/under_300000" class="price-range under">UNDER $300,000</a>' +
                                '<a href="/300000-400000" class="price-range between">$300,000 - $400,000</a>' +
                                '<a href="/over_400000" class="price-range over">OVER $400,000</a>',
                        '<a href="/under_200000" class="price-range under">UNDER $200,000</a>' +
                                '<a href="/200000-300000" class="price-range between">$200,000 - $300,000</a>' +
                                '<a href="/over_300000" class="price-range over">OVER $300,000</a>'
                    ]
                    pretitle = '';
                    break;
            }
            var link = ["houses", "townhouses", "condos"];

            for (ctr = 0; ctr < 3; ctr++) {
                var new_link = prelink.replace('\\\/', '_') + '_' + link[ctr];
                new_link = new_link.replace('__', '_');
                if(jQuery('body').hasClass(link[ctr]) && jQuery('body').hasClass('level_3') && jQuery('body').hasClass('listing_by_type')){
                    new_link=link[ctr];
                }
                content +=
                        '<div class="col-xs-12 col-sm-4">' +
                        '<div class="strip-right">' +
                        '<h1 style="width: 90%">' + pretitle + ' ' + link[ctr].toUpperCase() + '</h1>' +
                        '<div class="strip-right-info">' +
                        '<h1 style="width: 90%">' + pretitle + ' ' + link[ctr].toUpperCase() + '</h1>' +
                        '<img src="' + hoverimage + '">' +
                        '<div class="info-text hvr">' +
                        '<p><a href="/' + new_link + '">LET\'S GET STARTED! <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i></a></p>' +
                        '</div></div></div>' +
                        '<a href="/' + new_link + '"><img src="' + image[ctr] + '" class="img-responsive"></a>';
                if (d.bw) {
                    content += belowWidgets[ctr];
                }
                content += '</div>';
            }

            jQuery('.' + d.classname + '.level_' + d.level + ' #hf_top-main').append(openWrapper + content + closeWrapper);
        },
        changeTopDescriptionTitle: function (d) {

            function digits(d) {
                return d.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            }

            var t = window.location.pathname;
            t = t.replace("/", '');
            t = t.replace('BC', '');
            t = t.replace('_low','');
            t = t.replace('_high','');
            t = t.replace('_med','');
            t = t.replace('townhome','townhouses')
            
            tarr = t.split('/');
            tarr = tarr[0].split('_');
            var text = '';
            for (i = 0; i < tarr.length; i++) {
                if (tarr[i].toUpperCase() === 'UNDER') {
                    tarr[(i + 1)] = '$' + digits(tarr[(i + 1)]);
                    console.log(tarr[(i + 1)]);
                } else if (tarr[(i)].indexOf('-') > -1) {
                    text2 = tarr[i].split('-');
                    tarr[i] = 'BETWEEN $' + digits(text2[0]) + '-$' + digits(text2[1]);
                }
                text += tarr[i] + ' ';
            }
            
            //Special titles
            console.log(text);
            text = jQuery.trim(text);
            if(text.toUpperCase() == 'HOUSES 650000 OVER'){
                text = 'HOUSES OVER $650,000';
            }else if(text.toUpperCase() == 'TOWNHOUSES OVER 400000'){
                text = 'TOWNHOUSES OVER $400,000';
            }else if(text.toUpperCase() == 'CONDOS OVER 300000'){
                text = 'CONDOS OVER $300,000';
            }

            if (jQuery('body').hasClass('level_6')) {
                jQuery('.' + d.classname + ' #hf_top-main >h2:first-child').html(text);
            }

            if (jQuery('body').hasClass('level_4') || jQuery('body').hasClass('all_area_listings_by_price_range')) {
                jQuery('.' + d.classname + ' #hf_top-main >h2:first-child').html(text);
            }

            if(jQuery('body').hasClass('listings_by_neighbourhood') && jQuery('body').hasClass('level_4') || jQuery('body').hasClass('listings_by_neighbourhood') && jQuery('body').hasClass('level_5')){
                var text = '';
                if(d.postTitle){
                    text = 'ALL ' + d.prTitle + ' PROPERTIES';
                }else{
                    if(d.prTitle){
                        text = 'ALL PROPERTIES FOR SALE IN ' + d.prTitle;
                    }else{
                        text = d.classname.replace(/\_/g, ' ');
                    }
                }
                jQuery('.' + d.classname + ' #hf_top-main >h2:first-child').html( text );
            }
        },
        changeTopTitle: function (d) {
            if(jQuery('body').hasClass('listings_by_neighbourhood') && jQuery('body').hasClass('level_4')){
                jQuery('#hf_top-main > h2:first-child').html('ALL '+d.nbTitle+' PROPERTIES');
            }else{
                jQuery('#hf_top-main > h2:first-child').html(d.nbTitle);
            } 
        },
        changeTopDescriptionTitle2: function(d){
            jQuery('#hf_top-main > h2:first-child').html(d.title);
        },
        changeTopNavTitle: function (d) {
            var t;
            if (d.title) {
                t = 'SEARCH ALL '+d.title+' BY PRICE RANGE';
            } else {
                t = d.classname.replace(/\_/g, ' ');
                t = t.replace('\\/', ' ');
                t = 'Search for ' + t + ' properties for sale';
            }
            t = t.replace('BC', '');
            jQuery('#hf_top-main > h2:nth-child(4)').html(t);
        }
    }

    /*-----Listing By Type-----*/
    if (jQuery('body').hasClass('_cloverdale')) {
        var details = {level: 3, tp: false, pr: 3, nb: 1, belowWidgetUseClass: 1, classname: '_cloverdale', bw: true, prelink: 'cloverdale_', prelink2: 'cloverdale_', pretitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        //xWidget.changeTopTitle();
    } else if (jQuery('body').hasClass('_langley')) {
        var details = {level: 3, tp: false, pr: 3, nb: 2, belowWidgetUseClass: 1, classname: '_langley', bw: true, prelink: 'langley_', prelink2: 'langley', pretitle: 'Langley', postTitle: true};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        //xWidget.changeTopTitle();
    } else if (jQuery('body').hasClass('_white_rock_\/_south_surrey')) {
        var details = {level: 3, tp: false, pr: 3, nb: 3, belowWidgetUseClass: 1, classname: '_white_rock_\\/_south_surrey', bw: true, prelink: 'south_surrey_white_rock_', prelink2: 'southsurrey', pretitle: "South Surrey White Rock", postTitle: true};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        //xWidget.changeTopTitle();
    }

    //listing by area
    /*-----All Cloverdale Houses-----*/
    if (jQuery('body').hasClass('all_cloverdale_houses')) {
        var details = {level: 3, tp: true, pr: 0, nb: 1, classname: 'all_cloverdale_houses', prelink: 'cloverdale_houses_', title: 'CLOVERDALE HOUSES', nbTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('all_cloverdale_townhouses')) {
        var details = {level: 3, tp: true, pr: 1, nb: 1, classname: 'all_cloverdale_townhouses', prelink: 'cloverdale_townhouses_', title: 'CLOVERDALE TOWNHOUSES', nbTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('all_cloverdale_condos')) {
        var details = {level: 3, tp: true, pr: 2, nb: 1, classname: 'all_cloverdale_condos', prelink: 'cloverdale_condos_', title: 'CLOVERDALE CONDOS', nbTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    }
    /*-----All Langley-----*/
    if (jQuery('body').hasClass('all_langley_houses')) {
        var details = {level: 3, tp: true, pr: 0, nb: 2, classname: 'all_langley_houses', prelink: 'langley_houses_', title: 'LANGLEY HOUSES', nbTitle: 'Langley', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('all_langley_townhouses')) {
        var details = {level: 3, tp: true, pr: 1, nb: 2, classname: 'all_langley_townhouses', prelink: 'langley_townhouses_', title: 'LANGLEY TOWNHOUSES', nbTitle: 'Langley', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('all_langley_condos')) {
        var details = {level: 3, tp: true, pr: 2, nb: 2, classname: 'all_langley_condos', prelink: 'langley_condos_', title: 'LANGLEY CONDOS', nbTitle: 'Langley', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    }
    /*-----All South Surrey / White Rock-----*/
    if (jQuery('body').hasClass('all_south_surrey_and_white_rock_houses')) {
        var details = {level: 3, tp: true, pr: 0, nb: 3, classname: 'all_south_surrey_and_white_rock_houses', prelink: 'south_surrey_white_rock_houses_', title: 'SOUTH SURREY/WHITE ROCK HOUSES', nbTitle: 'South Surrey / White Rock', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('all_south_surrey_and_white_rock_townhouses')) {
        var details = {level: 3, tp: true, pr: 1, nb: 3, classname: 'all_south_surrey_and_white_rock_townhouses', prelink: 'south_surrey_white_rock_townhouses_', title: 'SOUTH SURREY/WHITE ROCK TOWNHOUSES', nbTitle: 'South Surrey / White Rock', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('all_south_surrey_and_white_rock_condos')) {
        var details = {level: 3, tp: true, pr: 2, nb: 3, classname: 'all_south_surrey_and_white_rock_condos', prelink: 'south_surrey_white_rock_condos_', title: 'SOUTH SURREY/WHITE ROCK CONDOS', nbTitle: 'South Surrey / White Rock', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    }
    /*-----End of Listing By Type-----*/

    /********/
    if(jQuery('body').hasClass('south_surrey_and_white_rock_houses_-_low') 
            || jQuery('body').hasClass('south_surrey_and_white_rock_houses_-_med') 
            || jQuery('body').hasClass('south_surrey_and_white_rock_houses_-_high')){
        var details = {title: 'SOUTH SURREY/WHITE ROCK HOUSES'};
        xWidget.changeTopDescriptionTitle2(details);
    }
    if(jQuery('body').hasClass('south_surrey_and_white_rock_townhouses_-_low') 
            || jQuery('body').hasClass('south_surrey_and_white_rock_townhouses_-_med') 
            || jQuery('body').hasClass('south_surrey_and_white_rock__townhouses_-_high')){
        var details = {title: 'SOUTH SURREY/WHITE ROCK TOWNHOUSES'};
        xWidget.changeTopDescriptionTitle2(details);
    }
    if(jQuery('body').hasClass('south_surrey_and_white_rock__condos_-_low') 
            || jQuery('body').hasClass('south_surrey_and_white_rock__condos_-_med') 
            || jQuery('body').hasClass('south_surrey_and_white_rock__condos_-_high')){
        var details = {title: 'SOUTH SURREY/WHITE ROCK CONDOS'};
        xWidget.changeTopDescriptionTitle2(details);
    }
    /*******/
    
    /*-----Listing By Area-----*/
    if (jQuery('body').hasClass('houses')) {
        var details = {level: 3, bw: true, tp: false, pr: 0, nb: 6, nb6no: 0, classname: 'houses', prelink: 'houses_', title: 'HOUSES', postTitle: false};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('townhouses')) {
        var details = {level: 3, bw: true, tp: false, pr: 1, nb: 6, nb6no: 1, classname: 'townhouses', prelink: 'townhouses_', title: 'TOWNHOUSES', postTitle: false};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('condos')) {
        var details = {level: 3, bw: true, tp: false, pr: 2, nb: 6, nb6no: 2, classname: 'condos', prelink: 'condos_', title: 'CONDOS', postTitle: false};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('all_area_listings_by_price_range')) {
        var details = {level: 4, bw: true, tp: false, pr: 3, nb: 6, nb6no: 2, classname: 'all_area_listings_by_price_range', prelink: '', title: 'AREA LISTINGS', postTitle: false, belowWidgetOption: 1};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        xWidget.changeTopNavTitle(details);
    }


    /*-----End of Listing By Area-----*/

    //Cloverdale
    /*-----Listing By Neighbourhood Clayton-----*/
    if (jQuery('body').hasClass('clayton_houses')) {
        var details = {tp: true, pr: 0, nb: 5, bw: false, classname: 'clayton_houses', prelink: 'clayton_houses_', nbTitle: 'Cloverdale', prTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('clayton_townhouses')) {
        var details = {tp: true, pr: 1, nb: 5, bw: false, classname: 'clayton_townhouses', prelink: 'clayton_townhouses_', nbTitle: 'Cloverdale', prTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('clayton_condos')) {
        var details = {tp: true, pr: 2, nb: 5, bw: false, classname: 'clayton_condos', prelink: 'clayton_condos_', nbTitle: 'Cloverdale', prTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('cloverdale') && jQuery('body').hasClass('clayton_')) {
        var details = {level: 4, classname: 'clayton_', bw: false, nbTitle: 'Cloverdale', prTitle: 'Clayton', nb: 5, postTitle: false, prelink: 'cloverdale_', pr: 3};
        xWidget.topWidget2(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
    }

    /*-----Listing By Neighbourhood Cloverdale-----*/
    if (jQuery('body').hasClass('cloverdale_houses')) {
        var details = {tp: true, pr: 0, nb: 5, bw: false, classname: 'cloverdale_houses', prelink: 'cloverdale_houses_', nbTitle: 'Cloverdale', prTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('cloverdale_townhouses')) {
        var details = {tp: true, pr: 1, nb: 5, bw: false, classname: 'cloverdale_townhouses', prelink: 'cloverdale_townhouses_', nbTitle: 'Cloverdale', prTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('cloverdale_condos')) {
        var details = {tp: true, pr: 2, nb: 5, bw: false, classname: 'cloverdale_condos', prelink: 'cloverdale_condos_', nbTitle: 'Cloverdale', prTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('cloverdale') && jQuery('body').hasClass('cloverdale_')) {
        var details = {level: 4, classname: 'cloverdale', bw: false, nbTitle: 'Cloverdale',  prTitle: 'Cloverdale', nb: 5, postTitle: false, prelink: 'cloverdaleBC_', prelink2: 'cloverdaleBC', pr: 3};
        xWidget.topWidget2(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
    }
    /*-----Listing By Neighbourhood Serpentine-----*/
    if (jQuery('body').hasClass('serpentine_houses')) {
        var details = {tp: true, pr: 0, nb: 5, bw: false, classname: 'serpentine_houses', prelink: 'serpentine_houses_', nbTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('serpentine_townhouses')) {
        var details = {tp: true, pr: 1, nb: 5, bw: false, classname: 'serpentine_townhouses', prelink: 'serpentine_townhouses_', nbTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('serpentine_condos')) {
        var details = {tp: true, pr: 2, nb: 5, bw: false, classname: 'serpentine_condos', prelink: 'serpentine_condos_', nbTitle: 'Cloverdale', postTitle: true};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('cloverdale') && jQuery('body').hasClass('serpentine')) {
        var details = {level: 4, classname: 'serpentine', bw: false, nbTitle: 'Cloverdale', prTitle: 'Serpentine', nb: 5, postTitle: false, prelink: 'cloverdale_', pr: 3};
        xWidget.topWidget2(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
    }

    //South Surrey White Rock
    /*-----Listing By Neighbourhood Elgin/Chantrell-----*/
    if (jQuery('body').hasClass('elgin\/chantrell_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'elgin\\/chantrell_houses', prelink: 'elgin_chantrell_houses_', postTitle: true , prTitle: 'Elgin Chantrell Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('elgin\/chantrell_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'elgin\\/chantrell_townhouses', prelink: 'elgin_chantrell_townhouses_', postTitle: true , prTitle: 'Elgin Chantrell Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('elgin\/chantrell_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'elgin\\/chantrell_condos', prelink: 'elgin_chantrell_condos_', postTitle: true , prTitle: 'Elgin Chantrell Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('elgin\/chantrell')) {
        var details = {level: 4, classname: 'elgin\\\/chantrell', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'Elgin Chantrell', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Sunnyside Park Surrey
    if (jQuery('body').hasClass('sunnyside_park_surrey_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'sunnyside_park_surrey_houses', prelink: 'sunnyside_park_surrey_houses_', postTitle: true , prTitle: 'Sunnyside Park Surrey Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('sunnyside_park_surrey_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'sunnyside_park_surrey_townhouses', prelink: 'sunnyside_park_surrey_townhouses_', postTitle: true , prTitle: 'Sunnyside Park Surrey Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('sunnyside_park_surrey_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'sunnyside_park_surrey_condos', prelink: 'sunnyside_park_surrey_condos_', postTitle: true , prTitle: 'Sunnyside Park Surrey Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('sunnyside_park_surrey')) {
        var details = {level: 4, classname: 'sunnyside_park_surrey', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'Sunnyside Park Surrey', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Crescent Beach/Ocean Park
    if (jQuery('body').hasClass('crescent_beach\/ocean_park_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'crescent_beach\\/ocean_park_houses', prelink: 'crescent_beach_ocean_park_houses_', postTitle: true , prTitle: 'Cresent Beach Ocean Park Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('elgin\/chantrell_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'crescent_beach\\/ocean_park_townhouses', prelink: 'crescent_beach_ocean_park_townhouses_', postTitle: true , prTitle: 'Cresent Beach Ocean Park Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('elgin\/chantrell_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'crescent_beach\\/ocean_park_condos', prelink: 'crescent_beach_ocean_park_condos_', postTitle: true , prTitle: 'Cresent Beach Ocean Park Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('crescent_beach\/ocean_park')) {
        var details = {level: 4, classname: 'crescent_beach\\\/ocean_park', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'Cresent Beach Ocean Park', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //White Rock
    if (jQuery('body').hasClass('white_rock_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'white_rock_houses', prelink: 'white_rock_houses_', postTitle: true , prTitle: 'White Rock Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('white_rock_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'white_rock_townhouses', prelink: 'white_rock_townhouses_', postTitle: true , prTitle: 'White Rock Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('white_rock_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'white_rock_condos', prelink: 'white_rock_condos_', postTitle: true , prTitle: 'White Rock Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('white_rock')) {
        var details = {level: 4, classname: 'white_rock', nb: 3, pr: 3, bw: false, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'White Rock', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //King George Corridor
    if (jQuery('body').hasClass('king_george_corridor_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'king_george_corridor_houses', prelink: 'king_george_corridor_houses_', postTitle: true , prTitle: 'King George Corridor Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('king_george_corridor_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'king_george_corridor_townhouses', prelink: 'king_george_corridor_townhouses_', postTitle: true , prTitle: 'King George Corridor Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('king_george_corridor_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'king_george_corridor_condos', prelink: 'king_george_corridor_condos_', postTitle: true , prTitle: 'King George Corridor Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('king_george_corridor')) {
        var details = {level: 4, classname: 'king_george_corridor', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'King George Corridor', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Hazelmere
    if (jQuery('body').hasClass('hazelmere_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'hazelmere_houses', prelink: 'hazelmere_houses_', postTitle: true , prTitle: 'Hazelmere Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('hazelmere_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'hazelmere_townhouses', prelink: 'hazelmere_townhouses_', postTitle: true , prTitle: 'Hazelmere Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('hazelmere_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'hazelmere_condos', prelink: 'hazelmere_condos_', postTitle: true , prTitle: 'Hazelmere Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('hazelmere')) {
        var details = {level: 4, classname: 'hazelmere', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'Hazelmere', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Grandview Heights
    if (jQuery('body').hasClass('grandview_heights_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'grandview_heights_houses', prelink: 'grandview_heights_houses_', postTitle: true , prTitle: 'Grandview Heights Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('grandview_heights_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'grandview_heights_townhouses', prelink: 'grandview_heights_townhouses_', postTitle: true , prTitle: 'Grandview Heights Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('grandview_heights_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'grandview_heights_condos', prelink: 'grandview_heights_condos_', postTitle: true , prTitle: 'Grandview Heights Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('grandview_heights')) {
        var details = {level: 4, classname: 'grandview_heights', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'Grandview Heights', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Morgan Creek
    if (jQuery('body').hasClass('morgan_creek_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'morgan_creek_houses', prelink: 'morgan_creek_houses_', postTitle: true , prTitle: 'Morgan Creek Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('morgan_creek_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'morgan_creek_townhouses', prelink: 'morgan_creek_townhouses_', postTitle: true , prTitle: 'Morgan Creek Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('morgan_creek_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'morgan_creek_condos', prelink: 'morgan_creek_condos_', postTitle: true , prTitle: 'Morgan Creek Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('morgan_creek')) {
        var details = {level: 4, classname: 'morgan_creek', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'Morgan Creek', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Pacific Douglas
    if (jQuery('body').hasClass('pacific_douglas_houses')) {
        var details = {tp: true, pr: 0, nb: 3, bw: false, classname: 'pacific_douglas_houses', prelink: 'pacific_douglas_houses_', postTitle: true , prTitle: 'Pacific Douglas Houses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('pacific_douglas_townhouses')) {
        var details = {tp: true, pr: 1, nb: 3, bw: false, classname: 'pacific_douglas_townhouses', prelink: 'pacific_douglas_townhouses_', postTitle: true , prTitle: 'Pacific Douglas Townhouses', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('pacific_douglas_condos')) {
        var details = {tp: true, pr: 2, nb: 3, bw: false, classname: 'pacific_douglas_condos', prelink: 'pacific_douglas_condos_', postTitle: true , prTitle: 'Pacific Douglas Condos', nbTitle: 'South Surrey / White Rock'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('south_surrey_white_rock') && jQuery('body').hasClass('pacific_douglas')) {
        var details = {level: 4, classname: 'pacific_douglas', bw: false, nb: 3, pr: 3, prelink: 'south_surrey_white_rock_', postTitle: false , prTitle: 'Pacific Douglas', nbTitle: 'South Surrey / White Rock'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Langley Neighbourhood
    //Murrayville
    if (jQuery('body').hasClass('murrayville_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'murrayville_houses', prelink: 'murrayville_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Murrayville Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('murrayville_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'murrayville_townhouses', prelink: 'murrayville_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Murrayvile Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('murrayville_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'murrayville_condos', prelink: 'murrayville_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Murrayville Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('murrayville')) {
        var details = {level: 4, classname: 'murrayville', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Murrayville'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Walnut Grove
    if (jQuery('body').hasClass('walnut_grove_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'walnut_grove_houses', prelink: 'walnut_grove_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Walnut Grove Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('walnut_grove_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'walnut_grove_townhouses', prelink: 'walnut_grove_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Walnut Grove Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('walnut_grove_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'walnut_grove_condos', prelink: 'walnut_grove_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Walnut Grove Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('walnut_grove')) {
        var details = {level: 4, classname: 'walnut_grove', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Walnut Grove'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Willoughby Heights
    if (jQuery('body').hasClass('willoughby_heights_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'willoughby_heights_houses', prelink: 'willoughby_heights_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Willoughby Heights Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('willoughby_heights_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'willoughby_heights_townhouses', prelink: 'willoughby_heights_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Willoughby Heights Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('willoughby_heights_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'willoughby_heights_condos', prelink: 'willoughby_heights_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Willoughby Heights Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('willoughby_heights')) {
        var details = {level: 4, classname: 'willoughby_heights', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Willoughby Heights'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Brookswood Langley
    if (jQuery('body').hasClass('brookswood_langley_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'brookswood_langley_houses', prelink: 'brookswood_langley_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Brookswood Langley Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('brookswood_langley_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'brookswood_langley_townhouses', prelink: 'brookswood_langley_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Brookswood Langley Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('brookswood_langley_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'brookswood_langley_condos', prelink: 'brookswood_langley_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Brookswood Langley Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('brookswood_langley')) {
        var details = {level: 4, classname: 'brookswood_langley', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Brookswood Langley'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Fort Langley
    if (jQuery('body').hasClass('fort_langley_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'fort_langley_houses', prelink: 'fort_langley_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Fort Langley Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('fort_langley_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'fort_langley_townhouses', prelink: 'fort_langley_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Fort Langley Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('fort_langley_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'fort_langley_condos', prelink: 'fort_langley_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Fort Langley Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('fort_langley')) {
        var details = {level: 4, classname: 'fort_langley', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Fort Langley'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Langley City
    if (jQuery('body').hasClass('langley_city_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'langley_city_houses', prelink: 'langley_city_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Langley City Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley_city_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'langley_city_townhouses', prelink: 'langley_city_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Langley City Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley_city_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'langley_city_condos', prelink: 'langley_city_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Langley City Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('langley_city')) {
        var details = {level: 4, classname: 'langley_city', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Langley City'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Country Line Glen Valley
    if (jQuery('body').hasClass('countryline_glen_valley_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'countryline_glen_valley_houses', prelink: 'countryline_glen_valley_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Country Line Glen Valley Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('countryline_glen_valley_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'countryline_glen_valley_townhouses', prelink: 'countryline_glen_valley_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Country Line Glen Valley Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('countryline_glen_valley_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'countryline_glen_valley_condos', prelink: 'countryline_glen_valley_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Country Line Glen Valley Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('country_line_glen_valley')) {
        var details = {level: 4, classname: 'country_line_glen_valley', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Country Line Glen Valley'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Salmon River
    if (jQuery('body').hasClass('salmon_river_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'salmon_river_houses', prelink: 'salmon_river_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Salmon River Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('salmon_river_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'salmon_river_townhouses', prelink: 'salmon_river_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Salmon River Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('salmon_river_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'salmon_river_condos', prelink: 'salmon_river_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Salmon River Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('salmon_river')) {
        var details = {level: 4, classname: 'salmon_river', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Salmon River'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Aldergrove Langley
    if (jQuery('body').hasClass('aldergrove_langley_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'aldergrove_langley_houses', prelink: 'aldergrove_langley_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Aldergrove Langley Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('aldergrove_langley_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'aldergrove_langley_townhouses', prelink: 'aldergrove_langley_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Aldergrove Langley Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('aldergrove_langley_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'aldergrove_langley_condos', prelink: 'aldergrove_langley_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Aldergrove Langley Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('aldergrove_langley')) {
        var details = {level: 4, classname: 'aldergrove_langley', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Aldergrove Langley'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    //Campbell Valley
    if (jQuery('body').hasClass('campbell_valley_houses')) {
        var details = {tp: true, pr: 0, nb: 2, bw: false, classname: 'campbell_valley_houses', prelink: 'campbell_valley_houses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Campbell Valley Houses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('campbell_valley_townhouses')) {
        var details = {tp: true, pr: 1, nb: 2, bw: false, classname: 'campbell_valley_townhouses', prelink: 'campbell_valley_townhouses_', nbTitle: 'Langley', postTitle: true , prTitle: 'Campbell Valley Townhouses'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('campbell_valley_condos')) {
        var details = {tp: true, pr: 2, nb: 2, bw: false, classname: 'campbell_valley_condos', prelink: 'campbell_valley_condos_', nbTitle: 'Langley', postTitle: true , prTitle: 'Campbell Valley Condos'};
        xWidget.initialize(details);
        xWidget.changeTopNavTitle(details);
    } else if (jQuery('body').hasClass('langley') && jQuery('body').hasClass('campbell_valley')) {
        var details = {level: 4, classname: 'campbell_valley', bw: false, nb: 2, pr: 3, prelink: 'langley_', nbTitle: 'Langley', postTitle: false , prTitle: 'Campbell Valley'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
        xWidget.changeTopNavTitle(details);
        xWidget.changeTopDescriptionTitle(details);
    }

    if (jQuery('body').hasClass('sales')){
        var details = {level: 4, classname: 'sales', bw: false, nb: 2, pr: 3, nbTitle: 'Sales'};
        xWidget.topWidget2(details);
        xWidget.neighbourhood(details);
        xWidget.priceRange(details);
    }
    //Area Search Properties
    jQuery('.area-search .properties-paging').append(jQuery('.area-search .container.main-content > .col-content > .col-md-9'));
    jQuery('.area-search .properties-paging').append(jQuery('.area-search .container.main-content > .col-content .row > .col-md-9'));
    jQuery('.area-search .properties-paging').append(jQuery('.area-search .container.main-content > .col-content .pSearch_sort'));
    jQuery('.properties-paging .pSearch_sort').removeClass('col-sm-12').addClass('col-md-3');
    jQuery('.area-search .container.main-content > .col-content > .row:first-child').remove();
    jQuery('.area-search .container.main-content > .col-content').addClass('col-md-9');
    var area_search_right_widget = '<div class="col-md-3 col-right-sidebar"><div id="hf_right-side" class="inset_wrapper">' +
            '<div class="container"><div id="search_board_listings" class="widget search_board_listings"></div></div>' +
            '<h2 class="sidebar-title">WHAT OUR CLIENTS SAY</h2>' +
            '<div class="side_content sidebar"><div class="tetsi"></div></div>' +
            '<div class="side_content sidebar"><div class="searchbyone"></div></div>' +
            '<div class="side_content home-quote-box"><div class="searchbytwo"></div></div></div></div>';
    jQuery('.area-search .container.main-content > .col-content').after(area_search_right_widget);

    if (jQuery('body').hasClass('area-search')) {
        var details = {level: 4, bw: true, tp: false, pr: 3, nb: 6, nb6no: 2, classname: 'area-search', prelink: '', title: 'SEARCH BY TYPE', postTitle: false, belowWidgetOption: 1};
        xWidget.initialize(details);
        xWidget.topWidget2(details);
        jQuery('.area-search').addClass('properties');
        jQuery('.area-search .properties-paging .pSearch_sort').removeClass('col-md-3');
        //remove area-search properties paging class
        jQuery('.area-search .properties-paging .col-md-9').removeClass('col-md-9');
        jQuery('.area-search .properties-paging >div > .row > div').removeClass('col-md-12').addClass('col-md-6 col-xs-6 col-sm-6');
    }
});
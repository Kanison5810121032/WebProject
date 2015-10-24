$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Leg: 2666,
            Abductor: null,
            Hip: 2647
        }, {
            period: '2010 Q2',
            Leg: 2778,
            Abductor: 2294,
            Hip: 2441
        }, {
            period: '2010 Q3',
            Leg: 4912,
            Abductor: 1969,
            Hip: 2501
        }, {
            period: '2010 Q4',
            Leg: 3767,
            Abductor: 3597,
            Hip: 5689
        }, {
            period: '2011 Q1',
            Leg: 6810,
            Abductor: 1914,
            Hip: 2293
        }, {
            period: '2011 Q2',
            Leg: 5670,
            Abductor: 4293,
            Hip: 1881
        }, {
            period: '2011 Q3',
            Leg: 4820,
            Abductor: 3795,
            Hip: 1588
        }, {
            period: '2011 Q4',
            Leg: 15073,
            Abductor: 5967,
            Hip: 5175
        }, {
            period: '2012 Q1',
            Leg: 10687,
            Abductor: 4460,
            Hip: 2028
        }, {
            period: '2012 Q2',
            Leg: 8432,
            Abductor: 5713,
            Hip: 1791
        }],
        xkey: 'period',
        ykeys: ['Leg', 'Abductor', 'Hip'],
        labels: ['Leg', 'Abductor', 'Hip'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Leg Extension",
            value: 12
        }, {
            label: "Abductor",
            value: 30
        }, {
            label: "Multi-Hip",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Line({
        element: 'morris-line-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});

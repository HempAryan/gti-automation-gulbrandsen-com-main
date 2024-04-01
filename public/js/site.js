//setup global variables.

var site = site || {};




(function() {
    //top level variables
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var token = null;
    var apigClient = apigClientFactory.newClient();


    site.njScrubberLive = function() {
        var gauges = {};
        gauges.scrubberDP = new RadialGauge({
            renderTo: 'scrubber-dp',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "in H2O",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 10,
            fontNumbersSize: 30,
            majorTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 3,
                    "color": "#2196f3"
                },
                {
                    "from": 3,
                    "to": 6,
                    "color": "#00FF00"
                },
                {
                    "from": 6,
                    "to": 10,
                    "color": "red"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.scrubberPH = new RadialGauge({
            renderTo: 'scrubber-ph',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "pH",
            fontUnitsSize: 30,
            minValue: 1,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 14,
            fontNumbersSize: 30,
            majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 7,
                    "to": 12,
                    "color": "#00FF00"
                },
                {
                    "from": 12,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.scrubberLevelPercent = new LinearGauge({
            renderTo: 'scrubber-level-percent',
            title: 'Level',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "%",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 100,
            fontNumbersSize: 30,
            // majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 50,
                    "color": "red"
                },
                {
                    "from": 50,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.scrubberLevelGallons = new LinearGauge({
            renderTo: 'scrubber-level-gallons',
            title: 'Level',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "gal",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 1000,
            fontNumbersSize: 30,
            majorTicks: [0, 200, 400, 600, 800, 1000],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 500,
                    "color": "red"
                },
                {
                    "from": 500,
                    "to": 900,
                    "color": "#00FF00"
                },
                {
                    "from": 900,
                    "to": 1000,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "right",
            numberSide: "right",
            needleSide: "right",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.scrubberGPM = new RadialGauge({
            renderTo: 'scrubber-gpm',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.scrubberConductivity = new RadialGauge({
            renderTo: 'scrubber-conductivity',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "S/m",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.demisterDP = new RadialGauge({
            renderTo: 'demister-dp',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "in H2O",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 10,
            fontNumbersSize: 30,
            majorTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 3,
                    "color": "#2196f3"
                },
                {
                    "from": 3,
                    "to": 6,
                    "color": "#00FF00"
                },
                {
                    "from": 6,
                    "to": 10,
                    "color": "red"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.demisterPH = new RadialGauge({
            renderTo: 'demister-ph',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "pH",
            fontUnitsSize: 30,
            minValue: 1,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 14,
            fontNumbersSize: 30,
            majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 7,
                    "to": 10,
                    "color": "#00FF00"
                },
                {
                    "from": 10,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.demisterLevelPercent = new LinearGauge({
            renderTo: 'demister-level-percent',
            title: 'Level',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "%",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 100,
            fontNumbersSize: 30,
            // majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 50,
                    "color": "red"
                },
                {
                    "from": 50,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.demisterLevelGallons = new LinearGauge({
            renderTo: 'demister-level-gallons',
            title: 'Level',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "gal",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 1000,
            fontNumbersSize: 30,
            majorTicks: [0, 200, 400, 600, 800, 1000],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 500,
                    "color": "red"
                },
                {
                    "from": 500,
                    "to": 900,
                    "color": "#00FF00"
                },
                {
                    "from": 900,
                    "to": 1000,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "right",
            numberSide: "right",
            needleSide: "right",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.demisterGPM1 = new RadialGauge({
            renderTo: 'demister-gpm1',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.demisterGPM2 = new RadialGauge({
            renderTo: 'demister-gpm2',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.demisterConductivity = new RadialGauge({
            renderTo: 'demister-conductivity',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "S/m",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.k11DumpGPM = new RadialGauge({
            renderTo: 'k11-dump-gpm',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.K11RecircGPM = new RadialGauge({
            renderTo: 'k11-recirc-gpm',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.k11LevelPercent = new LinearGauge({
            renderTo: 'k11-level-percent',
            title: 'Level',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "%",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 100,
            fontNumbersSize: 30,
            // majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 50,
                    "color": "red"
                },
                {
                    "from": 50,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.waterGPM = new RadialGauge({
            renderTo: 'water-gpm',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 7,
                    "color": "white"
                },
                {
                    "from": 80,
                    "to": 100,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        site.useToken(function(token) {
            if (token === null) {
                window.location = "/"; //redirect back to home.
            } else {
                site.downtimer(60, '#gauge-update-timer')
                site.njScrubberGaugePopulate(gauges);
                setInterval(function() {
                    site.njScrubberGaugePopulate(gauges);
                    site.downtimer(60, '#gauge-update-timer');
                }, 60000);
            }
        });
    };


    site.njScrubberGetWeekToCsv = function(items, location) {
        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {
                const NJSCRUBBERWEEK = document.querySelector('#njScrubberWeek');
                let t1 = new Date(NJSCRUBBERWEEK.value); //create a date from the web page date input type
                let firstDayOfMonth = new Date(Date.UTC(t1.getFullYear(), t1.getMonth())).valueOf(); //create a new date based on the first day of the month of t1.
                let day = t1.getUTCDay(); //returns Sunday - Saturday as a number 0 - 6
                let firstDayOfWeek = t1.valueOf() - (day * 24 * 60 * 60 * 1000); //subtract number of days (in milliseconds)
                let lastDayOfWeek = t1.valueOf() + ((7 - day) * 24 * 60 * 60 * 1000); //find the last day.

                var params = {};

                var body = {
                    yymm: firstDayOfMonth,
                    tmin: firstDayOfWeek,
                    tmax: lastDayOfWeek,
                    items: items
                };

                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };


                apigClient.njScrubberDetailCreateCsvPost(params, body, additionalParams).then(function(result) {
                    console.log(result.data);
                    location.setAttribute("href", result.data);
                    location.innerHTML = "Download CSV File";
                }).catch(function(err) {
                    console.log(err);
                });
            }
        });
    };

   
      site.SCGC958GetWeekToCsv = function(items, location) {
        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {
                const SCGC958WEEK = document.querySelector('#scGC958Week');
                let t1 = new Date(SCGC958WEEK.value); //create a date from the web page date input type
                let firstDayOfMonth = new Date(Date.UTC(t1.getFullYear(), t1.getMonth())).valueOf(); //create a new date based on the first day of the month of t1.
                let day = t1.getUTCDay(); //returns Sunday - Saturday as a number 0 - 6
                let firstDayOfWeek = t1.valueOf() - (day * 24 * 60 * 60 * 1000); //subtract number of days (in milliseconds)
                let lastDayOfWeek = t1.valueOf() + ((7 - day) * 24 * 60 * 60 * 1000); //find the last day.

                var params = {};

                var body = {
                    yymm: firstDayOfMonth,
                    tmin: firstDayOfWeek,
                    tmax: lastDayOfWeek,
                    items: items
                };

                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };


                apigClient.gc958scdataCreateCsvPost(params, body, additionalParams).then(function(result) {
                    console.log(result.data);
                    location.setAttribute("href", result.data);
                    location.innerHTML = "Download CSV File";
                }).catch(function(err) {
                    console.log(err);
                });
            }
        });
    };


    //get nj Scrubber selected week
    site.njScrubberGetWeek2 = function() {

        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //redirect to the login page.
            } else {
                //do something useful.

                const NJSCRUBBERWEEK = document.querySelector('#njScrubberWeek');
                let t1 = new Date(NJSCRUBBERWEEK.value); //create a date from the web page date input type
                let firstDayOfMonth = new Date(Date.UTC(t1.getFullYear(), t1.getMonth())).valueOf(); //create a new date based on the first day of the month of t1.
                let day = t1.getUTCDay(); //returns Sunday - Saturday as a number 0 - 6
                let firstDayOfWeek = t1.valueOf() - (day * 24 * 60 * 60 * 1000); //subtract number of days (in milliseconds)
                let lastDayOfWeek = t1.valueOf() + ((7 - day) * 24 * 60 * 60 * 1000); //find the last day.

                var items = {
                    pumpFlowRates: [
                        "fl_FT_Demister_Recirc_1_GPM",
                        "fl_FT_Demister_Recirc_2_GPM",
                        "fl_FT_K11_Dump_GPM",
                        "fl_FT_K11_Recirc_GPM",
                        "fl_FT_Scrubber_GPM",
                        "fl_FT_Water_GPM"
                    ],
                    scrubberLevels: [
                        "fl_LT_Demister_Percent",
                        "fl_LT_Scrubber_Percent",
                        "fl_LT_K11_Percent",
                        "fl_LT_Demister_Gallons",
                        "fl_LT_Scrubber_Gallons"
                    ],
                    phAndDiffPressure: [
                        "fl_DPT_Demister_Column_Differential_Pressure",
                        "fl_DPT_Scrubber_Column_Differential_Pressure",
                        "fl_pH_Demister",
                        "fl_pH_Scrubber"
                    ]
                };

                var getData = function(items, callback) {

                    var results = {};
                    var itemsProcessed = 0;

                    Object.keys(items).forEach(function(index) {

                        var params = {};

                        var body = {
                            yymm: firstDayOfMonth,
                            tmin: firstDayOfWeek,
                            tmax: lastDayOfWeek,
                            items: items[index]
                        };

                        var additionalParams = {
                            headers: {
                                Authorization: token
                            }
                        };

                        apigClient.njScrubberDetailPost(params, body, additionalParams).then(function(result) {
                            itemsProcessed++;
                            results[index] = result;
                            if (itemsProcessed === Object.keys(items).length) {
                                callback(results);
                            }
                        }).catch(function(err) {
                            console.log(err);
                        });
                    });
                };

                getData(items, function(results) {
                    console.log(results);
                    let series1 = { //pump speeds
                        fl_FT_Demister_Recirc_1_GPM: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Demister 1 GPM',
                            type: 'line'
                        },
                        fl_FT_Demister_Recirc_2_GPM: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Demister 2 GPM',
                            type: 'line'
                        },
                        fl_FT_K11_Dump_GPM: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'K11 Dump GPM',
                            type: 'line'
                        },
                        fl_FT_K11_Recirc_GPM: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'K11 Recirc GPM',
                            type: 'line'
                        },
                        fl_FT_Scrubber_GPM: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Scrubber GPM',
                            type: 'line'
                        },
                        fl_FT_Water_GPM: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Water GPM',
                            type: 'line'
                        }
                    };

                    site.formatCanvasJS2(series1, results.pumpFlowRates.data, 'Pump Flow Rates', 'chartContainer', function(data, chartTitle, chartContainer) {

                        let options = {
                            zoomEnabled: true,
                            animationEnabled: true,
                            title: {
                                text: chartTitle
                            },
                            axisY: [{
                                title: "GPM",
                                includeZero: false
                            }],
                            axisY2: [{
                                title: "GPM",
                                includeZero: false
                            }],
                            legend: {
                                cursor: "pointer",
                                itemclick: function(e) {
                                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                        e.dataSeries.visible = false;
                                    } else {
                                        e.dataSeries.visible = true;
                                    }

                                    e.chart.render();
                                }
                            },
                            data: data
                        };

                        var chart = new CanvasJS.Chart(chartContainer, options);
                        chart.render();
                        document.querySelector('#njScrubberWeekSelected .spinner-border').classList.add('invisible');
                        document.querySelector('#njScrubberWeekSelected .btn-text').innerHTML = "Select";
                    });

                    let series2 = { //scrubber levels
                        fl_LT_Demister_Percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Demister %',
                            type: 'line'
                        },
                        fl_LT_Scrubber_Percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Scrubber %',
                            type: 'line'
                        },
                        fl_LT_K11_Percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'K11 %',
                            type: 'line'
                        },
                        fl_LT_Demister_Gallons: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Demister Gal',
                            type: 'line'
                        },
                        fl_LT_Scrubber_Gallons: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Scrubber Gal',
                            type: 'line'
                        }
                    };

                    site.formatCanvasJS2(series2, results.scrubberLevels.data, 'Scrubber Levels', 'chartContainer2', function(data, chartTitle, chartContainer) {

                        let options = {
                            zoomEnabled: true,
                            animationEnabled: true,
                            title: {
                                text: chartTitle
                            },
                            axisY: [{
                                title: "% Full",
                                includeZero: false
                            }],
                            axisY2: [{
                                title: "Gallons",
                                includeZero: false
                            }],
                            legend: {
                                cursor: "pointer",
                                itemclick: function(e) {
                                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                        e.dataSeries.visible = false;
                                    } else {
                                        e.dataSeries.visible = true;
                                    }

                                    e.chart.render();
                                }
                            },
                            data: data
                        };

                        var chart2 = new CanvasJS.Chart('chartContainer2', options);
                        chart2.render();
                    });

                    let series3 = { //pH and Differential Pressure
                        fl_DPT_Demister_Column_Differential_Pressure: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Demister Diff Pressure',
                            type: 'line'
                        },
                        fl_DPT_Scrubber_Column_Differential_Pressure: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Scrubber Diff Pressure',
                            type: 'line'
                        },
                        fl_pH_Demister: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Demister pH',
                            type: 'line'
                        },
                        fl_pH_Scrubber: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Scrubber pH',
                            type: 'line'
                        }
                    };

                    site.formatCanvasJS2(series3, results.phAndDiffPressure.data, 'pH and Differential Pressure', 'chartContainer3', function(data, chartTitle, chartContainer) {

                        let options = {
                            zoomEnabled: true,
                            animationEnabled: true,
                            title: {
                                text: chartTitle
                            },
                            axisY: [{
                                title: "Inches of Water",
                                includeZero: false
                            }],
                            axisY2: [{
                                title: 'pH',
                                includeZero: false
                            }],
                            legend: {
                                cursor: "pointer",
                                itemclick: function(e) {
                                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                        e.dataSeries.visible = false;
                                    } else {
                                        e.dataSeries.visible = true;
                                    }

                                    e.chart.render();
                                }
                            },
                            data: data
                        };

                        var chart3 = new CanvasJS.Chart('chartContainer3', options);
                        chart3.render();
                    });
                });
            }
        });
    };


    site.njScrubberGaugePopulate = function(gauges) {
        site.njScrubberGaugeLiveData(function(data) {
            document.querySelector('#gauge-last-update-time').innerHTML = new Date(data.timestamp);
            gauges.scrubberDP.value = data.fl_DPT_Scrubber_Column_Differential_Pressure;
            gauges.scrubberPH.value = data.fl_pH_Scrubber;
            gauges.scrubberLevelPercent.value = data.fl_LT_Scrubber_Percent;
            gauges.scrubberLevelGallons.value = data.fl_LT_Scrubber_Gallons;
            gauges.scrubberGPM.value = data.fl_FT_Scrubber_GPM;
            document.querySelector('#scrubber-totalizer').innerHTML = data.fl_FT_Scrubber_Totalizer;
            gauges.scrubberConductivity.value = data.fl_C_Scrubber;
            gauges.demisterDP.value = data.fl_DPT_Demister_Column_Differential_Pressure;
            gauges.demisterPH.value = data.fl_pH_Demister;
            gauges.demisterLevelPercent.value = data.fl_LT_Demister_Percent;
            gauges.demisterLevelGallons.value = data.fl_LT_Demister_Gallons;
            gauges.demisterGPM1.value = data.fl_FT_Demister_Recirc_1_GPM;
            gauges.demisterGPM2.value = data.fl_FT_Demister_Recirc_2_GPM;
            gauges.demisterConductivity.value = data.fl_C_Demister;
            gauges.k11DumpGPM.value = data.fl_FT_K11_Dump_GPM;
            gauges.K11RecircGPM.value = data.fl_FT_K11_Recirc_GPM;
            gauges.k11LevelPercent.value = data.fl_LT_K11_Percent;
            gauges.waterGPM.value = data.fl_FT_Water_GPM;

        });

    };

    site.njScrubberGaugeLiveData = function(callback) {
        site.useToken(function(token) {
            var params = {};
            var body = {};
            var additionalParams = {
                headers: {
                    Authorization: token
                }
            };
            apigClient.njScrubberLiveGet(params, body, additionalParams).then(function(result) {
                console.log(result);
                callback(result.data[0]);
            }).catch(function(err) {
                console.log(err);
            });
        });
    };


    site.txScrubberGauge = function() {
        var gauges = {};
        gauges.ph = new RadialGauge({
            renderTo: 'gauge-ph',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "pH",
            fontUnitsSize: 30,
            minValue: 1,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 14,
            fontNumbersSize: 30,
            majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 1,
                    "to": 6,
                    "color": "white"
                },
                {
                    "from": 6,
                    "to": 9,
                    "color": "#00FF00"
                },
                {
                    "from": 9,
                    "to": 14,
                    "color": "white"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.dosing = new RadialGauge({
            renderTo: 'gauge-dosing',
            title: '',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "mA",
            fontUnitsSize: 30,
            minValue: 4,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 20,
            fontNumbersSize: 30,
            majorTicks: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                "from": 4,
                "to": 20,
                "color": "white"
            }],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.venturiGPM = new RadialGauge({
            renderTo: 'gauge-venturi-gpm',
            title: 'Venturi',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 70,
                    "color": "white"
                },
                {
                    "from": 70,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "#00FF00"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.scrubberGPM = new RadialGauge({
            renderTo: 'gauge-scrubber-gpm',
            title: 'Scrubber',
            fontTitleSize: 30,
            width: 200,
            height: 200,
            units: "GPM",
            fontUnitsSize: 30,
            minValue: 0,
            // startAngle: 90,
            // ticksAngle: 180,
            valueBox: true,
            valueDec: 1,
            maxValue: 120,
            fontNumbersSize: 30,
            majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 70,
                    "color": "white"
                },
                {
                    "from": 70,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "#00FF00"
                }
            ],
            highlightsWidth: 18,
            numbersMargin: -50,
            borders: true,
            colorPlate: "white",
            colorPlateEnd: "white",
            colorBorderInner: 'white',
            colorBorderInnerEnd: 'white',
            colorBorderMiddle: 'white',
            colorBorderMiddleEnd: 'white',
            colorBorderOuter: 'white',
            colorBorderOuterEnd: 'white',
            colorBorderShadow: '#046A38',
            borderInnerWidth: 20,
            // borderMiddleWidth: 10,
            // borderOuterWidth: 20,
            borderShadowWidth: 2,
            //colorMajorTicks: 'white',
            //colorMinorTicks: 'white',
            needleType: "arrow",
            needleWidth: 3,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: true,
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.venturiLevel = new LinearGauge({
            renderTo: 'gauge-venturi-level',
            title: 'Venturi',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "%",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 100,
            fontNumbersSize: 30,
            // majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 50,
                    "color": "red"
                },
                {
                    "from": 50,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.scrubberLevel = new LinearGauge({
            renderTo: 'gauge-scrubber-level',
            title: 'Scrubber',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "%",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 100,
            fontNumbersSize: 30,
            // majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 50,
                    "color": "red"
                },
                {
                    "from": 50,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.holdupLevel = new LinearGauge({
            renderTo: 'gauge-scrubber-holdup-level',
            title: 'Hold Up',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "%",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 100,
            fontNumbersSize: 30,
            // majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 50,
                    "color": "red"
                },
                {
                    "from": 50,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();

        gauges.t1914Level = new LinearGauge({
            renderTo: 'gauge-t1914-level',
            title: 'T1914',
            fontTitleSize: 30,
            width: 100,
            height: 300,
            units: "%",
            fontUnitsSize: 30,
            minValue: 0,
            valueBox: true,
            valueDec: 1,
            maxValue: 100,
            fontNumbersSize: 30,
            // majorTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            // minorTicks: 5,
            strokeTicks: true,
            highlights: [{
                    "from": 0,
                    "to": 50,
                    "color": "red"
                },
                {
                    "from": 50,
                    "to": 90,
                    "color": "#00FF00"
                },
                {
                    "from": 90,
                    "to": 100,
                    "color": "red"
                }
            ],
            barBeginCircle: 0,
            borders: false,
            colorPlate: "white",
            colorBar: 'white',
            colorBarEnd: 0,
            colorBarProgressEnd: '#046A38',
            borderShadowWidth: 0,
            needle: false,
            tickSide: "left",
            numberSide: "left",
            needleSide: "left",
            animationDuration: 1500,
            animationRule: "linear"
        }).draw();


        site.txScrubberGaugePopulate(gauges);
        site.downtimer(60, '#gauge-update-timer');

        setInterval(function() {
            site.txScrubberGaugePopulate(gauges);
            site.downtimer(60, '#gauge-update-timer');
        }, 60000);
    };


    //setup a basic downtimer and display it at an html id location.
    site.downtimer = function(duration, location) {
        var timer = duration;
        var countdown = setInterval(function() {
            document.querySelector(location).innerHTML = timer;
            timer--;
            if (timer < 1) {
                clearInterval(countdown);
            }
        }, 1000);
    };


    //get data from Amazon and populate the gauges
    site.txScrubberGaugePopulate = function(gauges) {
        site.useToken(function(token) {
            if (token === null) {
                //error
                window.location = '/'; //user not logged in
            } else {
                //do something useful
                var params = {};
                var body = {};
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                apigClient.txScrubberLiveGet(params, body, additionalParams).then(function(result) {
                    let updateTime = new Date(result.data[0].timestamp);
                    if (result.data[0].n_Venturi_Request_from_PPAC || result.data[0].n_Venturi_Request_from_HMI || result.data[0].n_HCL_Truck_Offload_Request) {
                        document.querySelector('#gauge-scrubber-status').classList.remove('btn-danger');
                        document.querySelector('#gauge-scrubber-status').classList.add('btn-success');
                        document.querySelector('#gauge-scrubber-status').innerHTML = "Scrubber Running";
                    } else {
                        document.querySelector('#gauge-scrubber-status').classList.remove('btn-success');
                        document.querySelector('#gauge-scrubber-status').classList.add('btn-danger');
                        document.querySelector('#gauge-scrubber-status').innerHTML = "Scrubber Stopped";
                    }

                    document.querySelector('#gauge-last-update-time').innerHTML = updateTime;

                    gauges.ph.value = result.data[0].fl_PH_Scrubber;
                    gauges.venturiGPM.value = result.data[0].fl_FT_Venturi_GPM;
                    gauges.scrubberGPM.value = result.data[0].fl_FT_Scrubber_GPM;
                    gauges.venturiLevel.value = result.data[0].fl_LT_Venturi_Percent;
                    gauges.scrubberLevel.value = result.data[0].fl_LT_Scrubber_percent;
                    gauges.holdupLevel.value = result.data[0].fl_LT_Scrubber_2_percent;
                    gauges.t1914Level.value = result.data[0].fl_LT_T1914_percent;
                    gauges.dosing.value = result.data[0].P_SCRUBBER_DOSAGE_PUMP_AO;

                    console.log(result);
                }).catch(function(err) {
                    console.log(err);
                });
            }
        });
    };


    //get TX Scrubber selected week
    site.txScrubberGetWeek = function() {
        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user not logged in
            } else {
                const TXSCRUBBERWEEK = document.querySelector('#txScrubberWeek');
                let t1 = new Date(TXSCRUBBERWEEK.value); //create a date from the web page date input type
                let firstDayOfMonth = new Date(Date.UTC(t1.getFullYear(), t1.getMonth())).valueOf(); //create a new date based on the first day of the month of t1.
                let day = t1.getUTCDay(); //returns Sunday - Saturday as a number 0 - 6
                let firstDayOfWeek = t1.valueOf() - (day * 24 * 60 * 60 * 1000); //subtract number of days (in milliseconds)
                let lastDayOfWeek = t1.valueOf() + ((7 - day) * 24 * 60 * 60 * 1000); //find the last day.

                var params = {};
                var body = {
                    yymm: firstDayOfMonth,
                    tmin: firstDayOfWeek,
                    tmax: lastDayOfWeek
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                apigClient.txScrubberPost(params, body, additionalParams).then(function(result) {

                    let series1 = {
                        fl_PH_Scrubber: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Scrubber pH',
                            type: 'line'
                        },
                        P_SCRUBBER_DOSAGE_PUMP_AO: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Dosing Pump mA',
                            type: 'line'
                        },
                        n_Venturi_Request_from_HMI: {
                            axisYType: "secondary",
                            axisYIndex: 1,
                            name: 'HMI',
                            type: 'area'
                        },
                        n_Venturi_Request_from_PPAC: {
                            axisYType: "secondary",
                            axisYIndex: 1,
                            name: 'PPAC',
                            type: 'area'
                        },
                        n_HCL_Truck_Offload_Request: {
                            axisYType: "secondary",
                            axisYIndex: 1,
                            name: 'HCL Truck',
                            type: 'area'
                        }
                    };

                    site.formatCanvasJS2(series1, result.data, 'pH', 'chartContainer', function(data, chartTitle, chartContainer) {

                        let options = {
                            zoomEnabled: true,
                            animationEnabled: true,
                            title: {
                                text: chartTitle
                            },
                            axisY: [{
                                title: "pH",
                                includeZero: false
                            }],
                            axisY2: [{
                                    title: "Dosage Pump mA",
                                    includeZero: false
                                },
                                {
                                    includeZero: false
                                }
                            ],
                            legend: {
                                cursor: "pointer",
                                itemclick: function(e) {
                                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                        e.dataSeries.visible = false;
                                    } else {
                                        e.dataSeries.visible = true;
                                    }

                                    e.chart.render();
                                }
                            },
                            data: data
                        };

                        var chart = new CanvasJS.Chart(chartContainer, options);
                        chart.render();
                    });

                    let series2 = { //scrubber levels
                        fl_LT_Scrubber_percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Scrubber',
                            type: 'line'
                        },
                        fl_LT_Scrubber_2_percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Hold Up',
                            type: 'line'
                        },
                        fl_LT_Venturi_Percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Venturi',
                            type: 'line'
                        },
                        fl_LT_Caustic_Tote_Percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Caustic Tote',
                            type: 'line'
                        },
                        fl_LT_T1914_percent: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'T1914',
                            type: 'line'
                        }
                    };

                    site.formatCanvasJS2(series2, result.data, 'Scrubber Levels', 'chartContainer2', function(data, chartTitle, chartContainer) {

                        let options = {
                            zoomEnabled: true,
                            animationEnabled: true,
                            title: {
                                text: chartTitle
                            },
                            axisY: [{
                                title: "% Full",
                                includeZero: false
                            }],
                            legend: {
                                cursor: "pointer",
                                itemclick: function(e) {
                                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                        e.dataSeries.visible = false;
                                    } else {
                                        e.dataSeries.visible = true;
                                    }

                                    e.chart.render();
                                }
                            },
                            data: data
                        };

                        var chart = new CanvasJS.Chart('chartContainer2', options);
                        chart.render();
                    });

                    let series3 = { //pump GPM
                        fl_FT_Scrubber_GPM: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Scrubber Pump',
                            type: 'line'
                        },
                        fl_FT_Venturi_GPM: {
                            axisYType: "primary",
                            axisYIndex: 0,
                            name: 'Venturi Pump',
                            type: 'line'
                        },
                        n_Venturi_Dump_Request: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Venturi Dump',
                            type: 'area'
                        },
                        n_LT_Venturi_High: {
                            axisYType: "secondary",
                            axisYIndex: 0,
                            name: 'Venturi High',
                            type: 'area'
                        },
                        n_Scrubber_Dump_Request: {
                            axisYType: 'secondary',
                            axisYIndex: 0,
                            name: 'Scrubber Dump',
                            type: 'area'
                        },
                        n_PH_Scrubber_Low: {
                            axisYType: 'secondary',
                            axisYIndex: 0,
                            name: 'PH Low',
                            type: 'area'
                        }
                    };

                    site.formatCanvasJS2(series3, result.data, 'Pump Flow Rates', 'chartContainer3', function(data, chartTitle, chartContainer) {

                        let options = {
                            zoomEnabled: true,
                            animationEnabled: true,
                            title: {
                                text: chartTitle
                            },
                            axisY: [{
                                title: "GPM",
                                includeZero: false
                            }],
                            axisY2: [{
                                title: '',
                                includeZero: false
                            }],
                            legend: {
                                cursor: "pointer",
                                itemclick: function(e) {
                                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                                        e.dataSeries.visible = false;
                                    } else {
                                        e.dataSeries.visible = true;
                                    }

                                    e.chart.render();
                                }
                            },
                            data: data
                        };

                        var chart = new CanvasJS.Chart('chartContainer3', options);
                        chart.render();

                        document.querySelector('#txScrubberWeekSelected .spinner-border').classList.add('invisible');
                        document.querySelector('#txScrubberWeekSelected .btn-text').innerHTML = "Select";
                    });

                }).catch(function(err) {
                    document.querySelector('chartContainer').innerHTML = err.message || err;
                });
            }
        });
    };



    //get the most current batches at TX site and display on one page
    site.txCurrentBatches = function() {
        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {};
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                apigClient.txLiveBatchesGet(params, body, additionalParams)
                    .then(function(result) {
                        console.log(result);
                        Object.keys(result.data).forEach(function(knum) {
                            let chartContainer = 'chartContainer-' + knum;
                            site.formatCanvasJS(result.data[knum].batchDetail, result.data[knum].bnum, chartContainer, site.plotBatch);
                        });

                    }).catch(function(err) {
                        console.log(err.message || err);
                    });
            }
        });
    };


    //select the TX Kettle to list all batches.
    site.txSelectKettle = function() {
        const KETTLE = document.querySelector('#txKettleSelected');
        const BATCH = document.querySelector('#txBatchSelected');


        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {
                    knum: KETTLE.value
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                apigClient.txListBatchesPost(params, body, additionalParams)
                    .then(function(result) {
                        site.listKettleBatches(result.data, BATCH);
                    }).catch(function(err) {
                        console.log(err.message || err);
                    });
            }
        });
    };


    //select the TX Kettle Batch to list details
    site.txSelectBatch = function() {
        const BATCH = document.querySelector('#txBatchSelected');
        chartTitle = BATCH.value;
        chartContainer = 'chartContainer';

        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {
                    bnum: BATCH.value
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                apigClient.txBatchDetailPost(params, body, additionalParams)
                    .then(function(result) {
                        //site.plotBatch(result);
                        site.formatCanvasJS(result.data, chartTitle, chartContainer, site.plotBatch);
                    }).catch(function(err) {
                        console.log(err.message || err);
                    });
            }
        });
    };


    //get the most current batches at SC site and display on one page
    site.scCurrentBatches = function() {
		site.useToken(function(token) {
				if (token === null) {
					window.location = '/'; //user is not logged in
				} else {

					var params = {};
					var body = {};
					var additionalParams = {
						headers: {
							Authorization: token
						}
					};

					apigClient.scLiveBatchesGet(params, body, additionalParams)
						.then(function(result) {
							console.log(result);
							Object.keys(result.data).forEach(function(knum) {
								let chartContainer = 'chartContainer-' + knum;
								site.formatCanvasJS(result.data[knum].batchDetail, result.data[knum].bnum, chartContainer, site.plotBatch);
							});

						}).catch(function(err) {
							console.log(err.message || err);

						});
				}
			});
		};

    

    //select the SC Kettle Batch to list details
    site.scCsvBatch = function() {
        const KETTLE = document.querySelector('#scKettleSelected');
        const BATCH = document.querySelector('#scBatchSelected');
        //const PREVIOUS = document.querySelector('#previous');
        //const NEXT = document.querySelector('#next');
        chartTitle = BATCH.value;
        //chartContainer = 'chartContainer';

        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {
                    bnum: BATCH.value
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                if ((KETTLE.value === "K5") || (KETTLE.value === "K4" && !BATCH.value.startsWith('2019'))) {
                    //do something useful here.  updated 2/20/2020
                    if (KETTLE.value === "K4") {
                        body = {
                            bn: BATCH.value,
                            kettle: KETTLE.value,
                            //limit: 1440,
                            /*items: [
                                "fl_K4_Density_SetPoint",
                                "fl_K4_SG_True",
                                "fl_K4_FM_City_Water_FlowRate",
                                "fl_K4_Kettle_Temperature",
                                "fl_K4_Chlorides_Reading",
                                "fl_K4_FM_HCL_FlowRate"
                            ]*/
                        };
                    }

                    if (KETTLE.value === "K5") {
                        body = {
                            bn: BATCH.value,
                            kettle: KETTLE.value,
                            /*limit: 1440,
                            items: [
                                "fl_K5_Density_SetPoint",
                                "fl_K5_SG_True",
                                "fl_K5_FM_City_Water_FlowRate",
                                "fl_K5_Kettle_Temperature",
                                "fl_K5_Chlorides_Reading",
                                "fl_K5_FM_HCL_FlowRate"
                            ]*/
                        };
                    }
                    apigClient.gc958scdatalivePost(params, body, additionalParams)
                }
            }
        });
    };




    //select the SC Kettle Batch to list details
    site.scSelectBatch = function() {
        const KETTLE = document.querySelector('#scKettleSelected');
        const BATCH = document.querySelector('#scBatchSelected');
        const PREVIOUS = document.querySelector('#previous');
        const NEXT = document.querySelector('#next');
        chartTitle = BATCH.value;
        chartContainer = 'chartContainer';

        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {
                    bnum: BATCH.value
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                if ((KETTLE.value === "K5") || (KETTLE.value === "K4" && !BATCH.value.startsWith('2019'))) {
                    //do something useful here.  updated 2/20/2020
                    if (KETTLE.value === "K4") {
                        body = {
                            bn: BATCH.value,
                            kettle: KETTLE.value,
                            limit: 1440,
                            items: [
                                "fl_K4_Density_SetPoint",
                                "fl_K4_SG_True",
                                "fl_K4_FM_City_Water_FlowRate",
                                "fl_K4_Kettle_Temperature",
                                "fl_K4_Chlorides_Reading",
                                "fl_K4_FM_HCL_FlowRate"
                            ]
                        };
                    }

                    if (KETTLE.value === "K5") {
                        body = {
                            bn: BATCH.value,
                            kettle: KETTLE.value,
                            limit: 1440,
                            items: [
                                "fl_K5_Density_SetPoint",
                                "fl_K5_SG_True",
                                "fl_K5_FM_City_Water_FlowRate",
                                "fl_K5_Kettle_Temperature",
                                "fl_K5_Chlorides_Reading",
                                "fl_K5_FM_HCL_FlowRate"
                            ]
                        };
                    }
                    apigClient.scBatchDetailGc958Post(params, body, additionalParams).then(function(result) {
                        PREVIOUS.dataset.timestamp = result.data.Items[0].timestamp;

                        if (result.data.hasOwnProperty('LastEvaluatedKey')) {
                            NEXT.dataset.key = JSON.stringify(result.data.LastEvaluatedKey);
                            NEXT.classList.remove('invisible');
                        } else {
                            NEXT.classList.add('invisible');
                            PREVIOUS.classList.add('invisible');
                        }

                        site.formatCanvasJS(result.data.Items, chartTitle, chartContainer, site.plotBatch);

                        console.log(result);
                    }).catch(function(err) {
                        console.log(err.message || err);
                    });
                    console.log(body);
                } else {
                    PREVIOUS.classList.add('invisible');
                    NEXT.classList.add('invisible');
                    apigClient.scBatchDetailPost(params, body, additionalParams).then(function(result) {
                        //site.plotBatch(result);
                        site.formatCanvasJS(result.data, chartTitle, chartContainer, site.plotBatch);
                    }).catch(function(err) {
                        console.log(err.message || err);
                    });
                }
            }
        });
    };


    //select the next page of the SC GC958 Kettle Batch to list details
    site.scSelectBatchNextPage = function() {
        const KETTLE = document.querySelector('#scKettleSelected');
        const BATCH = document.querySelector('#scBatchSelected');
        const PREVIOUS = document.querySelector('#previous');
        const NEXT = document.querySelector('#next');
        const CHART = document.querySelector('#chartContainer');
        chartTitle = BATCH.value;
        chartContainer = 'chartContainer';

        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {
                    bnum: BATCH.value
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };


                //do something useful here.  updated 2/20/2020
                if (KETTLE.value === "K4") {
                    body = {
                        bn: BATCH.value,
                        kettle: KETTLE.value,
                        limit: 1440,
                        items: [
                            "fl_K4_Density_SetPoint",
                            "fl_K4_SG_True",
                            "fl_K4_FM_City_Water_FlowRate",
                            "fl_K4_Kettle_Temperature",
                            "fl_K4_Chlorides_Reading",
                            "fl_K4_FM_HCL_FlowRate"
                        ]
                    };
                }

                if (KETTLE.value === "K5") {
                    body = {
                        bn: BATCH.value,
                        kettle: KETTLE.value,
                        limit: 1440,
                        items: [
                            "fl_K5_Density_SetPoint",
                            "fl_K5_SG_True",
                            "fl_K5_FM_City_Water_FlowRate",
                            "fl_K5_Kettle_Temperature",
                            "fl_K5_Chlorides_Reading",
                            "fl_K5_FM_HCL_FlowRate"
                        ]
                    };
                }

                body.next = true;
                body.LastEvaluatedKey = JSON.parse(NEXT.dataset.key);
                CHART.innerHTML = ""; //clear previous chart.

                apigClient.scBatchDetailGc958Post(params, body, additionalParams).then(function(result) {
                    PREVIOUS.dataset.timestamp = result.data.Items[0].timestamp;

                    if (result.data.hasOwnProperty('LastEvaluatedKey')) {
                        NEXT.dataset.key = JSON.stringify(result.data.LastEvaluatedKey);
                        NEXT.classList.remove('invisible');
                    } else {
                        NEXT.classList.add('invisible');
                    }

                    site.formatCanvasJS(result.data.Items, chartTitle, chartContainer, site.plotBatch);
                    PREVIOUS.classList.remove('invisible');

                    console.log(result);
                }).catch(function(err) {
                    console.log(err.message || err);
                });
                console.log(body);

            }
        });
    };


    //select the previous page of the SC GC958 Kettle Batch to list details
    site.scSelectBatchPreviousPage = function() {
        const KETTLE = document.querySelector('#scKettleSelected');
        const BATCH = document.querySelector('#scBatchSelected');
        const PREVIOUS = document.querySelector('#previous');
        const NEXT = document.querySelector('#next');
        const CHART = document.querySelector('#chartContainer');
        chartTitle = BATCH.value;
        chartContainer = 'chartContainer';

        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {
                    bnum: BATCH.value
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };


                //do something useful here.  updated 2/20/2020
                if (KETTLE.value === "K4") {
                    body = {
                        bn: BATCH.value,
                        kettle: KETTLE.value,
                        limit: 1440,
                        items: [
                            "fl_K4_Density_SetPoint",
                            "fl_K4_SG_True",
                            "fl_K4_FM_City_Water_FlowRate",
                            "fl_K4_Kettle_Temperature",
                            "fl_K4_Chlorides_Reading",
                            "fl_K4_FM_HCL_FlowRate"
                        ]
                    };
                }

                if (KETTLE.value === "K5") {
                    body = {
                        bn: BATCH.value,
                        kettle: KETTLE.value,
                        limit: 1440,
                        items: [
                            "fl_K5_Density_SetPoint",
                            "fl_K5_SG_True",
                            "fl_K5_FM_City_Water_FlowRate",
                            "fl_K5_Kettle_Temperature",
                            "fl_K5_Chlorides_Reading",
                            "fl_K5_FM_HCL_FlowRate"
                        ]
                    };
                }

                body.previous = true;
                body.LastEvaluatedKey = JSON.parse(NEXT.dataset.key);
                body.LastEvaluatedKey.timestamp = parseInt(PREVIOUS.dataset.timestamp); //change the start key to be the beginning instead of end.
                CHART.innerHTML = ""; //clear previous chart.

                apigClient.scBatchDetailGc958Post(params, body, additionalParams).then(function(result) {
                    console.log(result);
                    PREVIOUS.dataset.timestamp = result.data.Items[0].timestamp;

                    if (result.data.hasOwnProperty('LastEvaluatedKey')) {
                        NEXT.dataset.key = JSON.stringify(result.data.LastEvaluatedKey);
                        NEXT.classList.remove('invisible');
                    } else {
                        NEXT.classList.add('invisible');
                    }

                    site.formatCanvasJS(result.data.Items, chartTitle, chartContainer, site.plotBatch);
                    PREVIOUS.classList.remove('invisible');

                    console.log(result);
                }).catch(function(err) {
                    console.log(err.message || err);
                });
                console.log(body);

            }
        });
    };

    //format the incoming seriesDataPoints into the CanvasJS Spec.
    //Used in the TX and SC Kettle data
    site.formatCanvasJS = function(batchDetail, chartTitle, chartContainer, callback) {
        var data = [];
        var dataset = new Object();

        var keys = Object.keys(batchDetail[0]); //Return an array of a given objects property names

        //remove extra array elements we don't want to graph
        keys = site.arrayRemove(keys, 'timestamp');
        keys = site.arrayRemove(keys, 'BatchNumber');
        keys = site.arrayRemove(keys, 'group');


        //build the specs for each graph line
        keys.forEach(function(key, index) {
            dataset['dataSeries' + index] = {
                showInLegend: true,
                legendText: key,
                type: "line",
                dataPoints: []
            };

            //deal with left and right axis
            switch (key) {

                case 'chlorides':
                case 'fl_K5_Chlorides_Reading':
                case 'fl_K4_Chlorides_Reading':
                    dataset['dataSeries' + index].axisYType = 'primary';
                    dataset['dataSeries' + index].axisYIndex = 1;
                    break;

                case 'DPmA':
                    dataset['dataSeries' + index].axisYType = 'primary';
                    dataset['dataSeries' + index].axisYIndex = 1;
                    break;

                case 'trickleWaterGPM':
                case 'fl_K5_FM_City_Water_FlowRate':
                case 'fl_K4_FM_City_Water_FlowRate':
                case 'fl_K5_FM_HCL_FlowRate':
                case 'fl_K4_FM_HCL_FlowRate':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 0;
                    break;

                case 'trickleRainWaterGPM':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 0;
                    break;

                case 'poCancel':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 1;
                    break;

                case 'largeWaterAddRequired':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 1;
                    break;

                case 'trickleWaterTotalizer':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 1;
                    break;

                case 'trickleRainWaterTotalizer':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 1;
                    break;

                case 'bulkWaterTotalizer':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 1;
                    break;

                case 'temperature':
                case 'fl_K5_Kettle_Temperature':
                case 'fl_K4_Kettle_Temperature':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 2;
                    break;

                case 'bulkWaterGPM':
                    dataset['dataSeries' + index].axisYType = 'secondary';
                    dataset['dataSeries' + index].axisYIndex = 2;
                    break;

                default:
                    break;

            }
        });


        //put the xy coordinants into the data series
        batchDetail.forEach(function(item, i) {
            keys.forEach(function(key, j) {
                dataset['dataSeries' + j].dataPoints.push({
                    x: new Date(item.timestamp),
                    y: item[key]
                });
            });
        });


        //move the datasets into an array
        Object.keys(dataset).forEach(function(key) {
            data.push(dataset[key]);
        });

        callback(data, chartTitle, chartContainer);
    };

    //format the incoming seriesDataPoints into the CanvasJS Specification
    //used in the TX Scrubber data
    site.formatCanvasJS2 = function(series, seriesDataPoints, chartTitle, chartContainer, callback) {
        var data = [];
        var dataset = new Object();

        var keys = Object.keys(series); //Return an array of a given objects property names


        //build the specs for each graph line
        keys.forEach(function(key, index) {
            dataset['dataSeries' + index] = {
                showInLegend: true,
                //legendText: key,
                name: series[key].name,
                type: series[key].type,
                axisYType: series[key].axisYType,
                axisYIndex: series[key].axisYIndex,
                dataPoints: []
            };
        });


        //put the xy coordinants into the data series
        seriesDataPoints.forEach(function(item, i) {
            keys.forEach(function(key, j) {
                dataset['dataSeries' + j].dataPoints.push({
                    x: new Date(item.timestamp),
                    y: item[key]
                });
            });
        });


        //move the datasets into an array
        Object.keys(dataset).forEach(function(key) {
            data.push(dataset[key]);
        });

        callback(data, chartTitle, chartContainer);
    };

    //Add additional format and plot the data using CanvasJS
    site.plotTxScrubberWeek = function(data, chartTitle, chartContainer) {

        var options = {
            zoomEnabled: true,
            animationEnabled: true,
            title: {
                text: chartTitle
            },
            legend: {
                cursor: "pointer",
                itemclick: function(e) {
                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }

                    e.chart.render();
                }
            },
            axisY: [{
                    title: "Gravity",
                    includeZero: false
                },
                {
                    title: "mA & Chlorides",
                    includeZero: false
                }
            ],
            axisY2: [{
                    title: "Trickle Water GPM",
                    includeZero: false
                    //minimum: 0.01
                },
                {
                    title: "Totalizers (Gallons)",
                    includeZero: false
                    //minimum: 0.01
                },
                {
                    title: "Temp and Bulk Water GPM",
                    includeZero: false
                    //minimum: 0.01
                    // labelFontSize: 0,
                    // tickLength: 0,
                    // lineThickness: 0
                }
            ],
            data: data
        };
        var chart = new CanvasJS.Chart(chartContainer, options);
        chart.render();
    };

    //remove a text element from an array
    site.arrayRemove = function(arr, value) {
        return arr.filter(function(ele) {
            return ele != value;
        });
    };



    //plot the data using CanvasJS
    site.plotBatch = function(data, chartTitle, chartContainer) {
        //const BATCH = document.querySelector('#scBatchSelected');

        var options = {
            zoomEnabled: true,
            animationEnabled: true,
            title: {
                text: chartTitle
            },
            legend: {
                cursor: "pointer",
                itemclick: function(e) {
                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }

                    e.chart.render();
                }
            },
            axisY: [{
                    title: "Gravity",
                    includeZero: false
                },
                {
                    title: "mA & Chlorides",
                    includeZero: false
                }
            ],
            axisY2: [{
                    title: "Trickle Water GPM",
                    includeZero: false
                    //minimum: 0.01
                },
                {
                    title: "Totalizers (Gallons)",
                    includeZero: false
                    //minimum: 0.01
                },
                {
                    title: "Temp and Bulk Water GPM",
                    includeZero: false
                    //minimum: 0.01
                    // labelFontSize: 0,
                    // tickLength: 0,
                    // lineThickness: 0
                }
            ],
            data: data
        };
        var chart = new CanvasJS.Chart(chartContainer, options);
        chart.render();
    };


    //select the SC Kettle to list all batches.
    site.scSelectKettle = function() {
        const KETTLE = document.querySelector('#scKettleSelected');
        const BATCH = document.querySelector('#scBatchSelected');


        site.useToken(function(token) {
            if (token === null) {
                window.location = '/'; //user is not logged in
            } else {

                var params = {};
                var body = {
                    knum: KETTLE.value
                };
                var additionalParams = {
                    headers: {
                        Authorization: token
                    }
                };

                apigClient.scListBatchesPost(params, body, additionalParams).then(function(result) {
                    site.listKettleBatches(result.data, BATCH);
                }).catch(function(err) {
                    console.log(err.message || err);
                });
            }
        });
    };


    //takes an array of objects which contains batchnumbers and timestamps and list them out in a select drop down at a location document.querySelector()
    site.listKettleBatches = function(batches, LOCATION) {
        LOCATION.innerHTML = '<option value="select">Select Batch Number</option>';
        batches.forEach(function(batch, index) {
            LOCATION.innerHTML += '<option value="' + batch.BatchNumber + '">' + batch.BatchNumber + ' | ' + new Date(batch.timestamp) + '</option>';
        });
    };


    //handle resending a confirmation code with AWS Cognito
    site.resendConfirmationCode = function() {
        const USERNAME = document.querySelector('#username');

        var userData = {
            Username: USERNAME.value,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.resendConfirmationCode(function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        });

    };



    //handle email validation / confirmation with AWS Cognito
    site.confirmUser = function() {
        const USERNAME = document.querySelector('#username');
        const CODE = document.querySelector('#code');

        var userData = {
            Username: USERNAME.value,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.confirmRegistration(CODE.value, true, function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        });
    };



    //handle a login request with AWS Cognito.
    site.login = function() {
        const USERNAME = document.querySelector('#username');
        const PASSWORD = document.querySelector('#password');

        var authenticationData = {
            Username: USERNAME.value,
            Password: PASSWORD.value
        };

        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

        var userData = {
            Username: USERNAME.value,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {
                var token = result.getIdToken().getJwtToken();
                window.location = 'home.html';
            },
            onFailure: function(err) {
                alert(err.message || JSON.stringify(err));
            },
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                //User was signed up by an admin and must provide new
                //password and required attributes, if any to complete
                //authentication.

                window.location = 'new-password-required.html';

            }
        });
    };



    //handle a new user password reset OR a user changes the password on his own.
    site.newPasswordRequired = function() {
        const USERNAME = document.querySelector('#username');
        const OLD_PASSWORD = document.querySelector('#old-password');
        const PASSWORD = document.querySelector('#password');
        const CONFIRM = document.querySelector('#confirm-password');

        if (PASSWORD.value === CONFIRM.value) {
            var authenticationData = {
                Username: USERNAME.value,
                Password: OLD_PASSWORD.value
            };

            var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

            var userData = {
                Username: USERNAME.value,
                Pool: userPool
            };

            var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function(result) {
                    var token = result.getIdToken().getJwtToken();
                    window.location = 'home.html';
                },
                onFailure: function(err) {
                    alert(err.message || JSON.stringify(err));
                },
                newPasswordRequired: function(userAttributes, requiredAttributes) {
                    //User was signed up by an admin and must provide new
                    //password and required attributes, if any to complete
                    //authentication.

                    //the api doesn't accept this field back
                    delete userAttributes.email_verified;

                    cognitoUser.completeNewPasswordChallenge(PASSWORD.value, userAttributes, this);

                }
            });
        } else {
            alert('Passwords do not match');
        }
    };


    //get the active user's token to pass on to AWS API Gateway
    site.useToken = function(callback) {
        if (token === null) {
            userPool.getCurrentUser().getSession(function(err, session) {
                if (err) {
                    callback(token);
                } else {
                    callback(session.getIdToken().getJwtToken());
                }
            });
        } else {
            callback(token);
        }
    };


    //log the user out.
    site.signOut = function() {
        var cognitoUser = userPool.getCurrentUser();
        cognitoUser.signOut();
        window.location = '/';
    };


    //check to see if the user has logged in alread.  If not, redirect to login.
    site.checkLogin = function(redirectOnUserRecognized, redirectOnUserNotRecognized) {
        var cognitoUser = userPool.getCurrentUser();

        if (cognitoUser != null) {
            cognitoUser.getSession(function(err, session) {
                if (err) {
                    alert(err.message || JSON.stringify(err));
                } else {
                    console.log('Session validity: ' + session.isValid());
                }
            });
        }
        if (cognitoUser != null) {
            if (redirectOnUserRecognized) {
                window.location = 'home.html';
            }
        } else {
            if (redirectOnUserNotRecognized) {
                window.location = '/';
            }
        }
    };


    //handle change password requests from the user
    site.changePassword = function() {
        const OLD_PASSWORD = document.querySelector('#old-password');
        const PASSWORD = document.querySelector('#password');
        const CONFIRM = document.querySelector('#confirm-password');

        if (PASSWORD.value === CONFIRM.value) {
            var cognitoUser = userPool.getCurrentUser();

            if (cognitoUser != null) {
                cognitoUser.getSession(function(err, session) {
                    if (err) {
                        console.log(err.message || JSON.stringify(err));
                    } else {

                        cognitoUser.changePassword(OLD_PASSWORD.value, PASSWORD.value, function(err, result) {
                            if (err) {
                                alert(err.message || JSON.stringify(err));
                            } else {
                                console.log('call result: ' + result);
                                window.location = 'home.html';
                            }
                        });
                    }
                });
            }

        } else {
            alert('Passwords do not match.');
        }
    };

}());
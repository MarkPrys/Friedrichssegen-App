var wms_layers = [];

var lyr_Historische_Karte_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Historische_Karte",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Historische_Karte_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [849163.636809, 6496638.515055, 857621.489348, 6501947.899284]
                            })
                        });
var format_PDF_Punkte_1 = new ol.format.GeoJSON();
var features_PDF_Punkte_1 = format_PDF_Punkte_1.readFeatures(json_PDF_Punkte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDF_Punkte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDF_Punkte_1.addFeatures(features_PDF_Punkte_1);
var lyr_PDF_Punkte_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDF_Punkte_1, 
                style: style_PDF_Punkte_1,
                popuplayertitle: "PDF_Punkte",
                interactive: true,
                title: '<img src="styles/legend/PDF_Punkte_1.png" /> PDF_Punkte'
            });
var group_QField = new ol.layer.Group({
                                layers: [lyr_Historische_Karte_0,lyr_PDF_Punkte_1,],
                                fold: "open",
                                title: "QField"});

lyr_Historische_Karte_0.setVisible(true);lyr_PDF_Punkte_1.setVisible(true);
var layersList = [group_QField];
lyr_PDF_Punkte_1.set('fieldAliases', {'Id': 'Id', 'Infopunkt': 'Infopunkt', });
lyr_PDF_Punkte_1.set('fieldImages', {'Id': '', 'Infopunkt': '', });
lyr_PDF_Punkte_1.set('fieldLabels', {'Id': 'no label', 'Infopunkt': 'no label', });
lyr_PDF_Punkte_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
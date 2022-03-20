var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_images_1 = new ol.format.GeoJSON();
var features_images_1 = format_images_1.readFeatures(json_images_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_images_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_images_1.addFeatures(features_images_1);
var lyr_images_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_images_1, 
                style: style_images_1,
                interactive: true,
    title: 'images<br />\
    <img src="styles/legend/images_1_0.png" /> False<br />\
    <img src="styles/legend/images_1_1.png" /> True<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_images_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_images_1];
lyr_images_1.set('fieldAliases', {'location': 'location', 'imagefile': 'imagefile', 'cas_present': 'cas_present', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'URL': 'URL', });
lyr_images_1.set('fieldImages', {'location': 'Range', 'imagefile': 'TextEdit', 'cas_present': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'URL': '', });
lyr_images_1.set('fieldLabels', {'location': 'no label', 'imagefile': 'no label', 'cas_present': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'URL': 'no label', });
lyr_images_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
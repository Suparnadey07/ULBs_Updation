var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Telangana_State_2 = new ol.format.GeoJSON();
var features_Telangana_State_2 = format_Telangana_State_2.readFeatures(json_Telangana_State_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telangana_State_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telangana_State_2.addFeatures(features_Telangana_State_2);
var lyr_Telangana_State_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Telangana_State_2, 
                style: style_Telangana_State_2,
                popuplayertitle: ' Telangana_State',
                interactive: true,
                title: '<img src="styles/legend/Telangana_State_2.png" />  Telangana_State'
            });
var format_ExclusionofGPs_3 = new ol.format.GeoJSON();
var features_ExclusionofGPs_3 = format_ExclusionofGPs_3.readFeatures(json_ExclusionofGPs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExclusionofGPs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExclusionofGPs_3.addFeatures(features_ExclusionofGPs_3);
var lyr_ExclusionofGPs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExclusionofGPs_3, 
                style: style_ExclusionofGPs_3,
                popuplayertitle: 'Exclusion of GPs',
                interactive: true,
                title: '<img src="styles/legend/ExclusionofGPs_3.png" /> Exclusion of GPs'
            });
var format_UpgradationGreaterCorporation_4 = new ol.format.GeoJSON();
var features_UpgradationGreaterCorporation_4 = format_UpgradationGreaterCorporation_4.readFeatures(json_UpgradationGreaterCorporation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpgradationGreaterCorporation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpgradationGreaterCorporation_4.addFeatures(features_UpgradationGreaterCorporation_4);
var lyr_UpgradationGreaterCorporation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpgradationGreaterCorporation_4, 
                style: style_UpgradationGreaterCorporation_4,
                popuplayertitle: 'Upgradation-Greater Corporation',
                interactive: true,
                title: '<img src="styles/legend/UpgradationGreaterCorporation_4.png" /> Upgradation-Greater Corporation'
            });
var format_UpgradationMunicipalCorporation_5 = new ol.format.GeoJSON();
var features_UpgradationMunicipalCorporation_5 = format_UpgradationMunicipalCorporation_5.readFeatures(json_UpgradationMunicipalCorporation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpgradationMunicipalCorporation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpgradationMunicipalCorporation_5.addFeatures(features_UpgradationMunicipalCorporation_5);
var lyr_UpgradationMunicipalCorporation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UpgradationMunicipalCorporation_5, 
                style: style_UpgradationMunicipalCorporation_5,
                popuplayertitle: 'Upgradation-Municipal Corporation',
                interactive: true,
                title: '<img src="styles/legend/UpgradationMunicipalCorporation_5.png" /> Upgradation-Municipal Corporation'
            });
var format_InclusionofGPs_6 = new ol.format.GeoJSON();
var features_InclusionofGPs_6 = format_InclusionofGPs_6.readFeatures(json_InclusionofGPs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InclusionofGPs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InclusionofGPs_6.addFeatures(features_InclusionofGPs_6);
var lyr_InclusionofGPs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InclusionofGPs_6, 
                style: style_InclusionofGPs_6,
                popuplayertitle: 'Inclusion of GPs',
                interactive: true,
                title: '<img src="styles/legend/InclusionofGPs_6.png" /> Inclusion of GPs'
            });
var format_NewULBs18_7 = new ol.format.GeoJSON();
var features_NewULBs18_7 = format_NewULBs18_7.readFeatures(json_NewULBs18_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewULBs18_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewULBs18_7.addFeatures(features_NewULBs18_7);
var lyr_NewULBs18_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewULBs18_7, 
                style: style_NewULBs18_7,
                popuplayertitle: 'New ULBs(18)',
                interactive: true,
                title: '<img src="styles/legend/NewULBs18_7.png" /> New ULBs(18)'
            });
var format_ExistingULBs_8 = new ol.format.GeoJSON();
var features_ExistingULBs_8 = format_ExistingULBs_8.readFeatures(json_ExistingULBs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingULBs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingULBs_8.addFeatures(features_ExistingULBs_8);
var lyr_ExistingULBs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingULBs_8, 
                style: style_ExistingULBs_8,
                popuplayertitle: 'Existing ULBs',
                interactive: true,
                title: '<img src="styles/legend/ExistingULBs_8.png" /> Existing ULBs'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Telangana_State_2.setVisible(true);lyr_ExclusionofGPs_3.setVisible(true);lyr_UpgradationGreaterCorporation_4.setVisible(true);lyr_UpgradationMunicipalCorporation_5.setVisible(true);lyr_InclusionofGPs_6.setVisible(true);lyr_NewULBs18_7.setVisible(true);lyr_ExistingULBs_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Telangana_State_2,lyr_ExclusionofGPs_3,lyr_UpgradationGreaterCorporation_4,lyr_UpgradationMunicipalCorporation_5,lyr_InclusionofGPs_6,lyr_NewULBs18_7,lyr_ExistingULBs_8];
lyr_Telangana_State_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Area_SQ_KM': 'Area_SQ_KM', 'Population': 'Population(2011)', 'Pop_Den': 'Population Density(P/Sq.Km)', 'No_ULBs': 'No_ULBs', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Urban_pop': 'Urban(ULBs Population)', 'Area': 'ULB Area(SQ.KM)', 'ULB_P_Dens': 'ULBs PopDensity(P/SQ.KM)', });
lyr_ExclusionofGPs_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_Vill_Exclusion': 'No of Village Exclusion', 'Name_Vill_Exclusion': 'Name of Village Exclusion', });
lyr_UpgradationGreaterCorporation_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', });
lyr_UpgradationMunicipalCorporation_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', });
lyr_InclusionofGPs_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ulb_Name': 'Name of ULB', 'Present_Area': 'Present Area(SQ.KM)', 'Present_pop': 'Present Population(2021)', 'Present_Pop_Den': 'Present PopDensity(P/SQ.KM)', 'Proposed_Area': 'Proposed Area(SQ.KM)', 'Proposed_Pop': 'Proposed Population(2021)', 'Proposed_pop_Den': 'Proposed PopDensity(P/SQ.KM)', 'No_GPInclude': 'No of GP Included', 'Name_GP_Includ': 'Name of GP Included', });
lyr_NewULBs18_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name of ULBs', 'Area': 'Area(SQ.KM)', 'No_Vill': 'No of Villages', 'Name_Vill': 'Name of Villages', 'Population': 'Population(2021)', 'Pop_Den': 'Population Density(P/SQ.KM)', });
lyr_ExistingULBs_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Name': 'Name of ULBs', 'Area': 'Area(SQ.KM)', 'Population': 'Population(2011)', 'Pop_Den': 'Population Density(P/Sq.Km)', });
lyr_Telangana_State_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area_SQ_KM': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'Range', 'No_ULBs': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Urban_pop': 'Range', 'Area': 'TextEdit', 'ULB_P_Dens': 'Range', });
lyr_ExclusionofGPs_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_Vill_Exclusion': 'Range', 'Name_Vill_Exclusion': 'TextEdit', });
lyr_UpgradationGreaterCorporation_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', });
lyr_UpgradationMunicipalCorporation_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', });
lyr_InclusionofGPs_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Present_Area': 'TextEdit', 'Present_pop': 'Range', 'Present_Pop_Den': 'Range', 'Proposed_Area': 'TextEdit', 'Proposed_Pop': 'Range', 'Proposed_pop_Den': 'Range', 'No_GPInclude': 'Range', 'Name_GP_Includ': 'TextEdit', });
lyr_NewULBs18_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'No_Vill': 'Range', 'Name_Vill': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'Range', });
lyr_ExistingULBs_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'Population': 'Range', 'Pop_Den': 'TextEdit', });
lyr_Telangana_State_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area_SQ_KM': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', 'No_ULBs': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Urban_pop': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'ULB_P_Dens': 'inline label - visible with data', });
lyr_ExclusionofGPs_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_Vill_Exclusion': 'inline label - visible with data', 'Name_Vill_Exclusion': 'inline label - visible with data', });
lyr_UpgradationGreaterCorporation_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', });
lyr_UpgradationMunicipalCorporation_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', });
lyr_InclusionofGPs_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ulb_Name': 'inline label - visible with data', 'Present_Area': 'inline label - visible with data', 'Present_pop': 'inline label - visible with data', 'Present_Pop_Den': 'inline label - visible with data', 'Proposed_Area': 'inline label - visible with data', 'Proposed_Pop': 'inline label - visible with data', 'Proposed_pop_Den': 'inline label - visible with data', 'No_GPInclude': 'inline label - visible with data', 'Name_GP_Includ': 'inline label - visible with data', });
lyr_NewULBs18_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'No_Vill': 'inline label - visible with data', 'Name_Vill': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', });
lyr_ExistingULBs_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_Den': 'inline label - visible with data', });
lyr_ExistingULBs_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
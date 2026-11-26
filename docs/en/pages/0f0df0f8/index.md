---
title: "Sentinel-5P NRTI L3 Formaldehyde (HCHO)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P NRTI L3 Formaldehyde (HCHO)

Original name: Sentinel-5P NRTI HCHO: Near Real-Time Formaldehyde

## What this dataset is

This dataset provides near real-time high-resolution imagery of atmospheric formaldehyde (HCHO) concentrations.

Formaldehyde is an intermediate gas in almost all oxidation chains of non-methane volatile organic compounds (NMVOC), leading eventually to CO2. NMVOCs are, together with NOx, CO and CH4, among the most important precursors of tropospheric O3. The major HCHO source in the remote atmosphere is CH4 oxidation. Over the continents, the oxidation of higher NMVOCs emitted from vegetation, fires, traffic and industrial sources results in important and localized enhancements of the HCHO levels. The seasonal and inter-annual variations of the formaldehyde distribution are principally related to temperature changes and fire events, but also to changes in anthropogenic activities. [More information.](http://www.tropomi.eu/data-products/formaldehyde)

To make the NRTI L3 products, [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html) is used to grid the data.

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere). Because of noise in the data, negative vertical column values are often observed, in particular over clean regions or for low SO2 emissions. It is recommended not to filter these values except for outliers, i.e. for vertical columns lower than -0.001 mol/m^2.

The original Sentinel-5P Level 2 (L2) data is binned by time, not by latitude/longitude. To make it possible to ingest the data into Earth Engine, each Sentinel-5P L2 product is converted to L3, keeping a single grid per orbit (that is, no aggregation across products is performed). Source products spanning the antimeridian are ingested as two Earth Engine assets, with suffixes _1 and _2. The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) tool using the `bin_spatial` operation. The source data is filtered to remove pixels with QA values less than: 80% for AER_AI; 75% for the tropospheric_NO2_column_number_density band of NO2; 50% for all other datasets except for O3 and SO2. The O3_TCL product is ingested directly (without running harpconvert).

## Coverage and time range

- Coverage: Global
- Time range: 2018-10-02 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| tropospheric_HCHO_column_number_density | Tropospheric HCHO column number density. | 1113.2 |  |
| tropospheric_HCHO_column_number_density_amf | Tropospheric air mass factor. | 1113.2 |  |
| HCHO_slant_column_number_density | HCHO slant column number density. | 1113.2 |  |
| cloud_fraction | Effective cloud fraction.  See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220. | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'tropospheric_HCHO_column_number_density_validity>50;derive(datetime_stop {time});
bin_spatial(2001, 50.000000, 0.01, 2001, -120.000000, 0.01);
keep(tropospheric_HCHO_column_number_density,
     tropospheric_HCHO_column_number_density_amf,
     HCHO_slant_column_number_density,cloud_fraction,sensor_altitude,
     sensor_azimuth_angle, sensor_zenith_angle,solar_azimuth_angle,
     solar_zenith_angle)'
S5P_NRTI_L2__HCHO___20181017T181013_20181017T181513_05241_01_010102_20181017T185718.nc
output.h5
```

## What you can use it for

- VOC emission proxies and ozone precursor monitoring
- Fire and vegetation emission analysis
- Urban and industrial air quality studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_HCHO');
```

- Earth Engine ID: `COPERNICUS/S5P/NRTI/L3_HCHO`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_HCHO

## License and citation

- License: proprietary
- Keywords: air-quality, atmosphere, bira, copernicus, dlr, esa, eu, formaldehyde, hcho, pollution, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)](/en/pages/7fe826cd/)
- [Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)](/en/pages/eff44f62/)
- [Sentinel-5P OFFL L3 Cloud Properties (CLOUD)](/en/pages/f29bba93/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

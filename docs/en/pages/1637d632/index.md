---
title: "Sentinel-5P NRTI L3 Cloud Properties (CLOUD)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P NRTI L3 Cloud Properties (CLOUD)

Original name: Sentinel-5P NRTI CLOUD: Near Real-Time Cloud Properties

## What this dataset is

This dataset provides near real-time high-resolution imagery of cloud parameters.

The TROPOMI/S5P cloud properties retrieval is based on the OCRA and ROCINN algorithms currently being used in the operational GOME and GOME-2 products. OCRA retrieves the cloud fraction using measurements in the UV/VIS spectral regions and ROCINN retrieves the cloud height (pressure) and optical thickness (albedo) using measurements in and around the oxygen A-band at 760 nm. Version 3.0 of the algorithms are used, which are based on a more realistic treatment of clouds as optically uniform layers of light-scattering particles. Additionally, the cloud parameters are also provided for a cloud model which assumes the cloud to be a Lambertian reflecting boundary. [More information.](http://www.tropomi.eu/data-products/cloud)

To make the NRTI L3 products, [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html) is used to grid the data.

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere).

## Coverage and time range

- Coverage: Global
- Time range: 2018-07-05 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| cloud_fraction | Retrieved effective radiometric cloud fraction | 1113.2 |  |
| cloud_top_pressure | Retrieved atmospheric pressure at the level of cloud top | 1113.2 |  |
| cloud_top_height | Retrieved altitude of the cloud top | 1113.2 |  |
| cloud_base_pressure | Cloud base pressure | 1113.2 |  |
| cloud_base_height | Cloud base height | 1113.2 |  |
| cloud_optical_depth | Retrieved cloud optical depth | 1113.2 |  |
| surface_albedo | Surface albedo | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |

## What you can use it for

- Cloud fraction, height and optical depth for atmospheric retrievals
- Screening cloudy pixels in trace-gas analysis
- Cloud climatology at high spatial resolution

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_CLOUD');
```

- Earth Engine ID: `COPERNICUS/S5P/NRTI/L3_CLOUD`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_CLOUD

## License and citation

- License: proprietary
- Keywords: atmosphere, cloud, copernicus, dlr, esa, eu, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)](/en/pages/7fe826cd/)
- [Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)](/en/pages/eff44f62/)
- [Sentinel-5P OFFL L3 Cloud Properties (CLOUD)](/en/pages/f29bba93/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

---
title: "Sentinel-5P OFFL L3 Methane (CH4)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P OFFL L3 Methane (CH4)

Original name: Sentinel-5P OFFL CH4: Offline Methane

## What this dataset is

This dataset provides offline high-resolution imagery of methane concentrations.

Methane (CH4) is, after carbon dioxide (CO2), the most important contributor to the anthropogenically enhanced greenhouse effect. Roughly three-quarters of methane emissions are anthropogenic, and as such it is important to continue the record of satellite based measurements. TROPOMI aims at providing CH4 column concentrations with high sensitivity to the Earth's surface, good spatiotemporal coverage, and sufficient accuracy to facilitate inverse modeling of sources and sinks. TROPOMI uses absorption information from the Oxygen-A Band (760 nm) and the SWIR spectral range to monitor CH4 abundances in the Earth's atmosphere. [More information.](http://www.tropomi.eu/data-products/methane)

Currently, some data quality issues are known that are not covered by the quality flags and should be kept in mind when looking at the methane product and at preliminary validation results. For more details, see the [MPC VDAF website](http://mpc-vdaf.tropomi.eu). Note: no data are present between 2022-07-26 and 2022-08-31 due to a [provider outage](https://scihub.copernicus.eu/news/News01082).

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). CH4 is available as OFFL only; the other S5P datasets have both Near Real-Time (NRTI) and Offline (OFFL) versions. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere). Because of noise in the data, negative vertical column values are often observed, in particular over clean regions or for low SO2 emissions. It is recommended not to filter these values except for outliers, i.e. for vertical columns lower than -0.001 mol/m^2.

The original Sentinel-5P Level 2 (L2) data is binned by time, not by latitude/longitude. To make it possible to ingest the data into Earth Engine, each Sentinel-5P L2 product is converted to L3, keeping a single grid per orbit (that is, no aggregation across products is performed). Source products spanning the antimeridian are ingested as two Earth Engine assets, with suffixes _1 and _2. The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) tool using the `bin_spatial` operation. The source data is filtered to remove pixels with QA values less than: 80% for AER_AI; 75% for the tropospheric_NO2_column_number_density band of NO2; 50% for all other datasets except for O3 and SO2. The O3_TCL product is ingested directly (without running harpconvert).

## Coverage and time range

- Coverage: Global
- Time range: 2019-02-08 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| CH4_column_volume_mixing_ratio_dry_air | Column-averaged dry air mixing ratio of methane, as parts-per-billion | 1113.2 |  |
| aerosol_height | Aerosol height parameter in the CH<sub>4</sub> retrieval | 1113.2 |  |
| aerosol_optical_depth | aerosol optical thickness in the SWIR band | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| CH4_column_volume_mixing_ratio_dry_air_bias_corrected | Column-averaged dry air mixing ratio of methane, as parts-per-billion, corrected for surface albedo | 1113.2 |  |
| CH4_column_volume_mixing_ratio_dry_air_uncertainty | Uncertainty of the column averaged dry air mixing ratio of methane (1 sigma error) | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'CH4_column_volume_mixing_ratio_dry_air_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__CH4____20190223T202409_20190223T220540_07072_01_010202_20190301T221106.nc
grid_info.h5
```

## What you can use it for

- Methane emission source detection and inverse modelling
- Greenhouse gas monitoring
- Oil, gas and wetland emission studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_CH4');
```

- Earth Engine ID: `COPERNICUS/S5P/OFFL/L3_CH4`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_CH4

## License and citation

- License: proprietary
- Keywords: atmosphere, climate, copernicus, esa, eu, knmi, methane, s5p, sentinel, sron, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)](/en/pages/7fe826cd/)
- [Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)](/en/pages/eff44f62/)
- [Sentinel-5P OFFL L3 Cloud Properties (CLOUD)](/en/pages/f29bba93/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

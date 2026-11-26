---
title: "Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)

Original name: Sentinel-5P OFFL NO2: Offline Nitrogen Dioxide

## What this dataset is

This dataset provides offline high-resolution imagery of NO2 concentrations.

Nitrogen oxides (NO2 and NO) are important trace gases in the Earth's atmosphere, present in both the troposphere and the stratosphere. They enter the atmosphere as a result of anthropogenic activities (notably fossil fuel combustion and biomass burning) and natural processes (wildfires, lightning, and microbiological processes in soils). Here, NO2 is used to represent concentrations of collective nitrogen oxides because during daytime, i.e. in the presence of sunlight, a photochemical cycle involving ozone (O3) converts NO into NO2 and vice versa on a timescale of minutes. The TROPOMI NO2 processing system is based on the algorithm developments for the DOMINO-2 product and for the EU QA4ECV NO2 reprocessed dataset for OMI, and has been adapted for TROPOMI. [More information.](http://www.tropomi.eu/data-products/nitrogen-dioxide)

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere). Because of noise in the data, negative vertical column values are often observed, in particular over clean regions or for low SO2 emissions. It is recommended not to filter these values except for outliers, i.e. for vertical columns lower than -0.001 mol/m^2.

The original Sentinel-5P Level 2 (L2) data is binned by time, not by latitude/longitude. To make it possible to ingest the data into Earth Engine, each Sentinel-5P L2 product is converted to L3, keeping a single grid per orbit (that is, no aggregation across products is performed). Source products spanning the antimeridian are ingested as two Earth Engine assets, with suffixes _1 and _2. The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) tool using the `bin_spatial` operation. The source data is filtered to remove pixels with QA values less than: 80% for AER_AI; 75% for the tropospheric_NO2_column_number_density band of NO2; 50% for all other datasets except for O3 and SO2. The O3_TCL product is ingested directly (without running harpconvert).

## Coverage and time range

- Coverage: Global
- Time range: 2018-06-28 至 2026-10-24

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NO2_column_number_density | Total vertical column of NO<sub>2</sub> (ratio of the slant column density of NO<sub>2</sub> and the total air mass factor). | 1113.2 |  |
| tropospheric_NO2_column_number_density | tropospheric vertical column of NO<sub>2</sub> | 1113.2 |  |
| stratospheric_NO2_column_number_density | stratospheric vertical column of NO<sub>2</sub> | 1113.2 |  |
| NO2_slant_column_number_density | NO<sub>2</sub> slant column density | 1113.2 |  |
| tropopause_pressure | tropopause pressure | 1113.2 |  |
| absorbing_aerosol_index | Aerosol index (at wavelengths 354/388 nm, i.e. the OMI pair) from the AER_AI level 2 product.  See [Level 2 Algorithms - Ultraviolet Aerosol Index](https://sentinel.esa.int/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-ultraviolet-aerosol-index). | 1113.2 |  |
| cloud_fraction | Effective cloud fraction. See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220. | 1113.2 |  |
| sensor_altitude | Altitude of the satellite with respect to the geodetic sub-satellite point (WGS84). | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'tropospheric_NO2_column_number_density_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__NO2____20181010T074409_20181010T092539_05135_01_010100_20181016T092316.nc
grid_info.h5
```

## What you can use it for

- Urban and industrial NO2 pollution monitoring
- Emission trend analysis for traffic and power generation
- Air quality model validation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2');
```

- Earth Engine ID: `COPERNICUS/S5P/OFFL/L3_NO2`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_NO2

## License and citation

- License: proprietary
- Keywords: air-quality, atmosphere, copernicus, esa, eu, knmi, nitrogen-dioxide, no2, pollution, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)](/en/pages/eff44f62/)
- [Sentinel-5P OFFL L3 Cloud Properties (CLOUD)](/en/pages/f29bba93/)
- [Sentinel-5P OFFL L3 Tropospheric Ozone (O3_TCL)](/en/pages/469453b0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

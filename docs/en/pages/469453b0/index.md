---
title: "Sentinel-5P OFFL L3 Tropospheric Ozone (O3_TCL)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P OFFL L3 Tropospheric Ozone (O3_TCL)

Original name: Sentinel-5P OFFL O3 TCL: Offline Tropospheric Ozone

## What this dataset is

This dataset provides offline tropospheric high-resolution imagery of ozone concentrations between 20N and 20S. See also COPERNICUS/S5P/OFFL/L3_O3 and COPERNICUS/S5P/NRTI/L3_O3 for the total column data.

In the stratosphere, the ozone layer shields the biosphere from dangerous solar ultraviolet radiation. In the troposphere, it acts as an efficient cleansing agent, but at high concentration it also becomes harmful to the health of humans, animals, and vegetation. Ozone is also an important greenhouse-gas contributor to ongoing climate change. Since the discovery of the Antarctic ozone hole in the 1980s and the subsequent Montreal Protocol regulating the production of chlorine-containing ozone-depleting substances, ozone has been routinely monitored from the ground and from space.

For this product, the convective cloud differential (CCD) and cloud slicing (CSA) algorithms were used. [Product user manual.](https://sentinels.copernicus.eu/documents/247904/2474726/Sentinel-5P-Level-2-Product-User-Manual-Ozone-Tropospheric-Column) [More information.](http://www.tropomi.eu/data-products/tropospheric-ozone-column)

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere).

The original Sentinel-5P Level 2 (L2) data is binned by time, not by latitude/longitude. To make it possible to ingest the data into Earth Engine, each Sentinel-5P L2 product is converted to L3, keeping a single grid per orbit (that is, no aggregation across products is performed). Source products spanning the antimeridian are ingested as two Earth Engine assets, with suffixes _1 and _2. The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) tool using the `bin_spatial` operation. The source data is filtered to remove pixels with QA values less than: 80% for AER_AI; 75% for the tropospheric_NO2_column_number_density band of NO2; 50% for all other datasets except for O3 and SO2. The O3_TCL product is ingested directly (without running harpconvert).

## Coverage and time range

- Coverage: Tropics, between 20°N and 20°S
- Time range: 2018-04-30 至 2026-10-18

## Resolution and specifications

- Spatial resolution: about 111,320 m (about 111.32 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ozone_tropospheric_mixing_ratio | Average tropospheric ozone mixing ratio based on CCD algorithm. | 111320 |  |
| ozone_tropospheric_mixing_ratio_precision | Standard deviation of tropospheric ozone mixing ratio based on CCD algorithm. | 111320 |  |
| ozone_tropospheric_vertical_column | Average tropospheric ozone column based on CCD algorithm. | 111320 |  |
| ozone_tropospheric_vertical_column_precision | Standard deviation of tropospheric ozone column based on CCD algorithm. | 111320 |  |
| qa_value | A continuous quality descriptor, varying between 0 (no data) and 100 (full quality data). Pixels with qa_value <= 70 are masked out. | 111320 |  |

## What you can use it for

- Tropical tropospheric ozone monitoring
- Biomass burning and lightning NOx impact studies
- Greenhouse gas (tropospheric ozone) assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3_TCL');
```

- Earth Engine ID: `COPERNICUS/S5P/OFFL/L3_O3_TCL`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_O3_TCL

## License and citation

- License: proprietary
- Keywords: air-quality, atmosphere, copernicus, esa, eu, o3, ozone, pollution, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)](/en/pages/7fe826cd/)
- [Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)](/en/pages/eff44f62/)
- [Sentinel-5P OFFL L3 Cloud Properties (CLOUD)](/en/pages/f29bba93/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

---
title: "Sentinel-5P NRTI L3 Ozone (O3)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P NRTI L3 Ozone (O3)

Original name: Sentinel-5P NRTI O3: Near Real-Time Ozone

## What this dataset is

This dataset provides near-real-time high-resolution imagery of total column ozone concentrations. See also COPERNICUS/S5P/OFFL/L3_O3_TCL for the tropospheric column data.

In the stratosphere, the ozone layer shields the biosphere from dangerous solar ultraviolet radiation. In the troposphere, it acts as an efficient cleansing agent, but at high concentration it also becomes harmful to the health of humans, animals, and vegetation. Ozone is also an important greenhouse-gas contributor to ongoing climate change. Since the discovery of the Antarctic ozone hole in the 1980s and the subsequent Montreal Protocol regulating the production of chlorine-containing ozone-depleting substances, ozone has been routinely monitored from the ground and from space.

For this product, there are two algorithms that deliver total ozone: GDP for the near real-time and GODFIT for the offline products. GDP is currently being used for generating the operational total ozone products from GOME, SCIAMACHY and GOME-2, while GODFIT is being used in the ESA CCI and the Copernicus C3S projects. [More information.](https://www.tropomi.eu/data-products/ozone-total-column) [Product user manual.](https://sentinels.copernicus.eu/documents/247904/2474726/Sentinel-5P-Level-2-Product-User-Manual-Ozone-Total-Column)

To make the NRTI L3 products, [harpconvert](https://stcorp.github.io/harp/doc/html/harpconvert.html) is used to grid the data.

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere). Because of noise in the data, negative vertical column values are often observed, in particular over clean regions or for low SO2 emissions. It is recommended not to filter these values except for outliers, i.e. for vertical columns lower than -0.001 mol/m^2.

## Coverage and time range

- Coverage: Global
- Time range: 2018-07-10 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| O3_column_number_density | Total atmospheric column of O<sub>3</sub> between the surface and the top of atmosphere, calculated with the [DOAS algorithm](http://projects.knmi.nl/omi/research/product/product_generator.php?info=algo&product=Ozone&flavour=OMDOAO3&long=DOAS%20Total%20Ozone%20column). | 1113.2 |  |
| O3_column_number_density_amf | Weighted mean of cloudy and clear air mass factor (amf) weighted by intensity-weighted cloud fraction. | 1113.2 |  |
| O3_slant_column_number_density | O<sub>3</sub> ring corrected slant column number density | 1113.2 |  |
| O3_effective_temperature | Ozone cross section effective temperature | 1113.2 |  |
| cloud_fraction | Effective cloud fraction.  See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220. | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |

## What you can use it for

- Total ozone and ozone-hole monitoring
- UV exposure assessment
- Stratospheric ozone trend studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_O3');
```

- Earth Engine ID: `COPERNICUS/S5P/NRTI/L3_O3`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_O3

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

---
title: "Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)"
date: 2026-11-03 12:00:00
---

# Sentinel-5P OFFL L3 Sulfur Dioxide (SO2)

Original name: Sentinel-5P OFFL SO2: Offline Sulfur Dioxide

## What this dataset is

This dataset provides offline high-resolution imagery of atmospheric sulfur dioxide (SO2) concentrations.

Sulfur dioxide (SO2) enters the Earth's atmosphere through both natural and anthropogenic processes. It plays a role in chemistry on a local and global scale and its impact ranges from short-term pollution to effects on climate. Only about 30% of the emitted SO2 comes from natural sources; the majority is of anthropogenic origin. SO2 emissions adversely affect human health and air quality. SO2 has an effect on climate through radiative forcing, via the formation of sulfate aerosols. Volcanic SO2 emissions can also pose a threat to aviation, along with volcanic ash. S5P/TROPOMI samples the Earth's surface with a revisit time of one day with unprecedented spatial resolution of 3.5 x 7 km which allows the resolution of fine details including the detection of much smaller SO2 plumes. [More information.](https://www.tropomi.eu/data-products/sulfur-dioxide)

For this L3 SO2 product, the absorbing_aerosol_index is calculated with a pair of measurements at the 340 nm and 380 nm wavelengths. The [COPERNICUS/S5P/OFFL/L3_AER_AI](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_AER_AI) product has the absorbing_aerosol_index calculated using the 354 nm and 388 nm wavelengths.

Sentinel-5 Precursor is a satellite launched on 13 October 2017 by the European Space Agency to monitor air pollution. The onboard sensor is frequently referred to as Tropomi (TROPOspheric Monitoring Instrument). All of the S5P datasets, except CH4, have two versions: Near Real-Time (NRTI) and Offline (OFFL). CH4 is available as OFFL only. The NRTI assets cover a smaller area than the OFFL assets, but appear more quickly after acquisition. The OFFL assets contain data from a single orbit (which, due to half the earth being dark, contains data only for a single hemisphere). Because of noise in the data, negative vertical column values are often observed, in particular over clean regions or for low SO2 emissions. It is recommended not to filter these values except for outliers, i.e. for vertical columns lower than -0.001 mol/m^2.

The original Sentinel-5P Level 2 (L2) data is binned by time, not by latitude/longitude. To make it possible to ingest the data into Earth Engine, each Sentinel-5P L2 product is converted to L3, keeping a single grid per orbit (that is, no aggregation across products is performed). Source products spanning the antimeridian are ingested as two Earth Engine assets, with suffixes _1 and _2. The conversion to L3 is done by the [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) tool using the `bin_spatial` operation. The source data is filtered to remove pixels with QA values less than: 80% for AER_AI; 75% for the tropospheric_NO2_column_number_density band of NO2; 50% for all other datasets except for O3 and SO2. The O3_TCL product is ingested directly (without running harpconvert).

## Coverage and time range

- Coverage: Global
- Time range: 2018-12-05 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 1,113.2 m (about 1.11 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| SO2_column_number_density | SO<sub>2</sub> vertical column density at ground level, calculated using the DOAS technique. | 1113.2 |  |
| SO2_column_number_density_amf | Weighted mean of cloudy and clear air mass factor (amf) weighted by intensity-weighted cloud fraction. | 1113.2 |  |
| SO2_slant_column_number_density | SO<sub>2</sub> ring corrected slant column number density | 1113.2 |  |
| absorbing_aerosol_index | A measure of the prevalence of aerosols in the atmosphere, calculated by [this equation](https://sentinel.esa.int/web/sentinel/data-products/-/asset_publisher/fp37fc19FN8F/content/sentinel-5-precursor-level-2-ultraviolet-aerosol-index) using the 340/380 nm wavelength pair. | 1113.2 |  |
| cloud_fraction | Effective cloud fraction.  See the [Sentinel 5P L2 Input/Output Data Definition Spec](https://sentinels.copernicus.eu/documents/247904/3119978/Sentinel-5P-Level-2-Input-Output-Data-Definition), p.220. | 1113.2 |  |
| sensor_azimuth_angle | Azimuth angle of the satellite at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| sensor_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| solar_azimuth_angle | Azimuth angle of the Sun at the ground pixel location (WGS84); angle measured East-of-North. | 1113.2 |  |
| solar_zenith_angle | Zenith angle of the satellite at the ground pixel location (WGS84); angle measured away from the vertical. | 1113.2 |  |
| SO2_column_number_density_15km | SO<sub>2</sub> vertical column density at 15km, calculated using the DOAS technique. | 1113.2 |  |

```
harpconvert --format hdf5 --hdf5-compression 9
-a 'SO2_column_number_density_validity>50;derive(datetime_stop {time})'
S5P_OFFL_L2__SO2____20181228T231131_20181229T005301_06265_01_010105_20190104T083244.nc
grid_info.h5
```

## What you can use it for

- Volcanic SO2 plume monitoring and aviation safety
- Industrial and shipping emission tracking
- Air quality and acid deposition studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_SO2');
```

- Earth Engine ID: `COPERNICUS/S5P/OFFL/L3_SO2`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_SO2

## License and citation

- License: proprietary
- Keywords: air-quality, atmosphere, bira, copernicus, dlr, esa, eu, pollution, s5p, sentinel, so2, sulfur-dioxide, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Sentinel-5P OFFL L3 Carbon Monoxide (CO)](/en/pages/0bd864c8/)
- [Sentinel-5P OFFL L3 Nitrogen Dioxide (NO2)](/en/pages/7fe826cd/)
- [Sentinel-5P OFFL L3 Cloud Properties (CLOUD)](/en/pages/f29bba93/)
- [Sentinel-5P OFFL L3 Tropospheric Ozone (O3_TCL)](/en/pages/469453b0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

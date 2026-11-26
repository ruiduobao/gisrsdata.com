---
title: "ERA5-Land Static — ECMWF Climate Reanalysis"
date: 2026-11-03 12:00:00
---

# ERA5-Land Static — ECMWF Climate Reanalysis

Original name: ERA5-Land Static - ECMWF Climate Reanalysis

## What this dataset is

ERA5-Land is a reanalysis dataset providing a consistent view of the
evolution of land variables over several decades at an enhanced resolution
compared to ERA5. ERA5-Land has been produced by replaying the land
component of the ECMWF ERA5 climate reanalysis. Reanalysis combines model
data with observations from across the world into a globally complete and
consistent dataset using the laws of physics. Reanalysis produces data that
goes several decades back in time, providing an accurate description of the
climate of the past. This dataset includes all 50 variables as available on
CDS.

ERA5-Land data is available from 1950 to three months from real-time.

Please consult [the ERA5-Land "Known Issues" section](https://confluence.ecmwf.int/display/CKB/ERA5-Land%3A+data+documentation). In particular, note that three components of the total evapotranspiration have values swapped as follows:

* variable "Evaporation from bare soil" (mars parameter code 228101 (evabs)) has the values corresponding to the "Evaporation from vegetation transpiration" (mars parameter 228103 (evavt)),
* variable "Evaporation from open water surfaces excluding oceans (mars parameter code 228102 (evaow)) has the values corresponding to the "Evaporation from bare soil" (mars parameter code 228101 (evabs)),
* variable "Evaporation from vegetation transpiration" (mars parameter code 228103 (evavt)) has the values corresponding to the "Evaporation from open water surfaces excluding oceans" (mars parameter code 228102 (evaow)).

This dataset contains the static variables of ERA5-Land.
These variables do not vary in time.

## Coverage and time range

- Coverage: Global land
- Time range: 1950-01-01 至 至今
- Cadence: Static, time-invariant

## Resolution and specifications

- Spatial resolution: about 11,132 m (roughly 11 km grid)
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| glacier_mask | Fraction of the grid box covered by ice (glacier or ice cap). The values vary between 0 and 1 but do not vary in time. | 11132 |  |
| lake_cover | Fraction of the grid box that is occupied by lake (inland water). The values vary between 0 and 1 but do not vary in time. | 11132 |  |
| high_vegetation_cover | Fraction of the grid box that is covered with vegetation that is classified as "high". The values vary between 0 and 1 but do not vary in time. "High vegetation" consists of evergreen trees, deciduous trees, mixed forest/woodland, and interrupted forest. | 11132 |  |
| low_vegetation_cover | Fraction of the grid box that is covered with vegetation that is classified as "low". The values vary between 0 and 1 but do not vary in time. "Low vegetation" consists of crops and mixed farming, irrigated crops, short grass, tall grass, tundra, semidesert, bogs and marshes, evergreen shrubs, deciduous shrubs, and water and land mixtures. | 11132 |  |
| lake_total_depth | Total depth of the lake (both the water and ice part). This parameter does not vary in time. | 11132 |  |
| land_sea_mask | Fraction of the grid box that is land. The values vary between 0 and 1 but do not vary in time. | 11132 |  |
| soil_type | Texture (or classification) of soil used by the land surface scheme of the ECMWF Integrated Forecasting System (IFS) to predict the water holding capacity of soil in soil moisture and runoff calculations. It is derived from the root zone data (30-100 cm below the surface) of the FAO/UNESCO Digital Soil Map of the World, DSMW (FAO, 2003). | 11132 |  |
| type_of_high_vegetation | Indicates the types of high vegetation recognised by the ECMWF Integrated Forecasting System. Vegetation types are used to calculate the surface energy balance and snow albedo. This parameter does not vary in time. | 11132 |  |
| type_of_low_vegetation | Indicates the types of low vegetation recognised by the ECMWF Integrated Forecasting System. Vegetation types are used to calculate the surface energy balance and snow albedo. This parameter does not vary in time. | 11132 |  |

## What you can use it for

- Looking up static parameters such as glacier mask, lake cover, vegetation cover and soil type
- Auxiliary base layer for ERA5-Land analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('ECMWF/ERA5_LAND/STATIC');
```

- Earth Engine ID: `ECMWF/ERA5_LAND/STATIC`
- Providers: Copernicus Climate Data Store, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_LAND_STATIC

## License and citation

- License: proprietary
- Keywords: cds, climate, copernicus, ecmwf, era5-land, evaporation, heat, lakes, precipitation, pressure, radiation, reanalysis, runoff, snow, soil-water, temperature, vegetation, weather-and-climate, wind
- 数据引用：Mu&ntilde;oz Sabater, J., (2019): ERA5-Land monthly averaged data from 1981
to present. Copernicus Climate Change Service (C3S) Climate Data Store
(CDS). (&lt;date of access&gt;),
[doi:10.24381/cds.68d2bb30](https://doi.org/10.24381/cds.68d2bb30)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5-Land Daily Aggregated - ECMWF Climate Reanalysis](/pages/a05a1bb7/)
- [ERA5-Land Hourly - ECMWF Climate Reanalysis](/pages/0a0b8372/)
- [ERA5-Land Monthly Aggregated - ECMWF Climate Reanalysis](/pages/0889ecdc/)
- [ERA5-Land Monthly Averaged by Hour of Day - ECMWF Climate Reanalysis](/pages/39c04517/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.

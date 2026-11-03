---
title: "USGS Landsat 8 Level 2, Collection 2, Tier 2"
date: 2026-11-03 12:00:00
permalink: /pages/eca62d74/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cfmask"
  - "cloud"
  - "fmask"
  - "global"
  - "l8sr"
  - "landsat"
  - "lasrc"
  - "lc08"
  - "lst"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
---

# USGS Landsat 8 Level 2, Collection 2, Tier 2

## 数据集简介

This dataset contains atmospherically corrected
surface reflectance and land surface temperature derived from the data
produced by the Landsat 8 OLI/TIRS sensors.
These images contain 5 visible and near-infrared (VNIR) bands and
2 short-wave infrared (SWIR) bands processed to orthorectified surface
reflectance, and one thermal infrared (TIR) band processed to orthorectified
surface temperature. They also contain intermediate bands used in
calculation of the ST products, as well as QA bands.

Landsat 8 SR products are created with the Land Surface Reflectance Code
(LaSRC). All Collection 2 ST products are created with a single-channel
algorithm jointly created by the Rochester Institute of Technology (RIT) and
National Aeronautics and Space Administration (NASA)
Jet Propulsion Laboratory (JPL).

Strips of collected data are packaged into overlapping \"scenes\" covering approximately
170km x 183km using a [standardized reference grid](https://landsat.gsfc.nasa.gov/about/worldwide-reference-system).

Some assets have only SR data, in which case ST bands are present but empty.
For assets with both ST and SR bands, 'PROCESSING_LEVEL' is set to 'L2SP'.
For assets with only SR bands, 'PROCESSING_LEVEL' is set to 'L2SR'.

[Additional documentation and usage examples.](/earth-engine/guides/landsat)

Landsat Collection 2 files are publicly available in a [Google Cloud Storage
bucket](https://console.cloud.google.com/storage/browser/gee-public-data-landsat)
on requester-pays basis. The files are indexed in a regularly updated
BigQuery table for ease of analysis:
[earth-engine-public-data.geo_index.landsat_c2_index](https://console.cloud.google.com/bigquery?project=earth-engine-public-data&earth-engine-public-data!2sgeo_index=&inv=1&invt=Ab4V5A&ws=!1m5!1m4!4m3!1searth-engine-public-data!2sgeo_index!3slandsat_c2_index).

Data provider notes:

* Data products must contain both optical and thermal data to be
  successfully processed to surface temperature, as ASTER NDVI is
  required to temporally adjust the ASTER GED product to the target Landsat
  scene. Therefore, night time acquisitions cannot be processed to
  surface temperature.

* A known error exists in the surface temperature retrievals relative
  to clouds and possibly cloud shadows. The characterization of these
  issues has been documented by
  [Cook et al., (2014)](https://doi.org/10.3390/rs61111244).

* ASTER GED contains areas of missing mean emissivity data required for
  successful ST product generation. If there is missing ASTER GED
  information, there will be missing ST data in those areas.

* The ASTER GED dataset is created from all clear-sky pixels of ASTER scenes
  acquired from 2000 through 2008. While this dataset has a global spatial
  extent, there are areas missing mean emissivity information due to
  persistent cloud contamination in the ASTER measurements.

* The USGS further screens unphysical values (emissivity < 0.6) in ASTER
  GED to remove any emissivity underestimation due to undetected clouds. For
  any given pixel with no ASTER GED input or unphysical emissivity value,
  the resulting Landsat ST products have missing pixels. The missing Landsat
  ST pixels will be consistent through time (1982-present) given the static
  nature of ASTER GED mean climatology data. For more information refer to
  [landsat-collection-2-surface-temperature-data-gaps-due-missing](https://www.usgs.gov/landsat-missions/landsat-collection-2-surface-temperature-data-gaps-due-missing-aster-ged)

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/LC08/C02/T2_L2`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：2013-03-18 至 2026-10-26
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：cfmask, cloud, fmask, global, l8sr, landsat, lasrc, lc08, lst, reflectance, satellite-imagery, sr, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SR_B1 | Band 1 (ultra blue, coastal aerosol) surface reflectance | 30 | 0.435-0.451 &mu;m |
| SR_B2 | Band 2 (blue) surface reflectance | 30 | 0.452-0.512 &mu;m |
| SR_B3 | Band 3 (green) surface reflectance | 30 | 0.533-0.590 &mu;m |
| SR_B4 | Band 4 (red) surface reflectance | 30 | 0.636-0.673 &mu;m |
| SR_B5 | Band 5 (near infrared) surface reflectance | 30 | 0.851-0.879 &mu;m |
| SR_B6 | Band 6 (shortwave infrared 1) surface reflectance | 30 | 1.566-1.651 &mu;m |
| SR_B7 | Band 7 (shortwave infrared 2) surface reflectance | 30 | 2.107-2.294 &mu;m |
| SR_QA_AEROSOL | Aerosol attributes | 30 |  |
| ST_B10 | Band 10 surface temperature. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out. | 30 | 10.60-11.19 &mu;m |
| ST_ATRAN | Atmospheric Transmittance. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out. | 30 |  |
| ST_CDIST | Pixel distance to cloud. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out. | 30 |  |
| ST_DRAD | Downwelled Radiance. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out. | 30 |  |
| ST_EMIS | Emissivity of Band 10 estimated from ASTER GED. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out.  | 30 |  |
| ST_EMSD | Emissivity standard deviation. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out. | 30 |  |
| ST_QA | Uncertainty of the Surface Temperature band. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out.  | 30 |  |
| ST_TRAD | Thermal band converted to radiance. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out.  | 30 |  |
| ST_URAD | Upwelled Radiance. If 'PROCESSING_LEVEL' is set to 'L2SR', this band is fully masked out. | 30 |  |
| QA_PIXEL | Pixel quality attributes generated from the CFMASK algorithm. | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/LC08/C02/T2_L2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T2_L2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

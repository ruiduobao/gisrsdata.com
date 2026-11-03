---
title: "Brazil Forest Imagery Dataset 2008: Analytic Basemap"
date: 2026-11-03 12:00:00
permalink: /pages/9ead8e0f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brazil"
  - "forest-code"
  - "google"
  - "imagery"
  - "multispectral"
  - "satellite-imagery"
  - "spot"
---

# Brazil Forest Imagery Dataset 2008: Analytic Basemap

## 数据集简介

This dataset provides up to a 10-meter resolution multispectral (green, red, and near-infrared) basemap of Brazil, primarily captured in 2008, to support implementation of the [Brazil Forest Code](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/L12651compilado.htm). The mosaic is synthesized from SPOT 2, 4, and 5 satellite data. It serves as a higher-resolution alternative to Landsat for identifying consolidated areas, Permanent Protection Areas (APPs), and legal reserves as they existed on the July 22, 2008 regulatory deadline. Gaps in SPOT coverage are represented by a transparent mask to maintain data integrity. This multispectral product is designed to automate Brazil Forest Code related analysis such as identification of forest through vegetation indices like NDVI.

### Why Google created this basemap

While raw image collections are also available (see [MS](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1), [MS_NC](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1), [PMS_NC](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PMS_NC_V1), [PAN](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_PAN_V1)), this 2008-era multispectral mosaic was synthesized to provide a seamless, ready-to-use product for analysis. By performing radiometric and geometric corrections at scale, raw, disparate satellite scenes were transformed into a unified dataset that supports scientific analysis across Brazil in the context of the Brazil Forest Code, such as historic land cover classification relevant to Brazil's Rural Environmental Registry.


### Geographic prioritization and coverage

To maximize immediate environmental impact, image selection prioritized achieving near-complete, high-resolution coverage for privately held lands registered in the **Rural Environmental Registry (CAR)**. Specific focus was given to the **Amazon biome** and five states in the **"Arc of Deforestation"** - Maranhão, Mato Grosso, Pará, Rondônia, and Tocantins - where there is an average of 93% state-wide coverage. The average coverage across Brazil is 68% in v1. Gaps in coverage are represented by a transparent mask to maintain data integrity where high-quality 2008-era imagery was unavailable.


### Processing methodology

Please see the [methodology guide](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1) for an in-depth description of the processing, including:

* **Radiometric calibration:** Raw digital numbers were converted to TOA reflectance using band-specific physical gain and bias metadata, normalized by solar irradiance and Earth-Sun distance.
* **Radiometric normalization:** To minimize inter-image radiometric discontinuities pixel values were adjusted via histogram matching to a consistent Landsat 2008 mosaic target.
* **Edge refinement:** Google applied a 2.5-pixel focal minimum erosion to image masks to remove lossy compression artifacts present in the source data.
* **Cloud masking:** Trained surveyors manually delineated polygons around clouds and shadows, which were converted to a mask to ensure that only the most useful pixels are included in the composite.
* **Automated misregistration correction:** Select scenes were coregistered using the `ee.Image.register` algorithm against a 2008-era Landsat reference composite.
* **Composition:** The final mosaic prioritizes the highest resolution pixels available, layering SPOT 5 imagery (10 m) on top of SPOT 4 and 2\.


### Limitations and known issues

* **Spatial completeness:** Gaps exist where no imagery met the project’s strict 2008-era temporal window (2007–2009), cloud-cover thresholds, or quality standards.
* **Variable native resolution:**Boundaries between different nominal resolutions of source imagery may be visible because nearest neighbor resampling was used during processing..
* **Residual misregistration:** Spatial shifts may persist in some areas, particularly in regions with extreme terrain relief or dense, homogeneous forest areas.
* **Atmospheric and cloud artifacts:** Manual cloud masking is not exhaustive; users may encounter occasional residual artifacts like thin cirrus haze or small cloud shadows.
* **Radiometric inconsistency:** Residual spectral variation remains between adjacent images, which may increase spectral variance and reduce the precision of class separation during machine learning inference.
* **Spectral saturation:** In areas of extreme brightness, pixels may reach the sensor’s maximum detectable limit, resulting in a loss of texture and detail.


### Data access

To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## 基本信息

- 数据集编号（Earth Engine ID）：`GOOGLE/BRAZIL_FOREST_2008/V1/ANALYTIC`
- 数据类型：影像（Image）
- 提供方：Google、Google Earth Engine
- 时间范围：2007-01-01 至 2009-11-26
- 空间分辨率：10 米
- 许可：proprietary
- 关键词：brazil, forest-code, google, imagery, multispectral, satellite-imagery, spot

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| G | Green reflectance (top-of-atmosphere) | 10 |  |
| R | Red reflectance (top-of-atmosphere) | 10 |  |
| N | Near-infrared reflectance (top-of-atmosphere) | 10 |  |
| date | Observation date as epoch (seconds) | 10 |  |
| scale | Pixel size of source image (see [Methodology](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1)) | 10 |  |
| satellite | Source satellite (SPOT 2, 4, or 5) | 10 |  |
| coregistered | Boolean: 1 if automated misregistration correction was applied (see [Methodology](/earth-engine/guides/spot_brazil_forest_imagery_dataset_2008_v1)) | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('GOOGLE/BRAZIL_FOREST_2008/V1/ANALYTIC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_ANALYTIC

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

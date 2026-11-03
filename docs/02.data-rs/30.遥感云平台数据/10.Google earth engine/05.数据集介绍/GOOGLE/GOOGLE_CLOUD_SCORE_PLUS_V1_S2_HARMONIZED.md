---
title: "Cloud Score+ S2_HARMONIZED V1"
date: 2026-11-03 12:00:00
permalink: /pages/4a61128e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cloud"
  - "google"
  - "satellite-imagery"
  - "sentinel2-derived"
---

# Cloud Score+ S2_HARMONIZED V1

## 数据集简介

Cloud Score+ is a quality assessment (QA) processor for medium-to-high
resolution optical satellite imagery. The Cloud Score+ S2_HARMONIZED
dataset is being operationally produced from the
[harmonized Sentinel-2 L1C collection](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED),
and Cloud Score+ outputs can be used to identify relatively clear pixels and
effectively remove clouds and cloud shadows from [L1C (Top-of-Atmosphere)](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED)
or [L2A (Surface Reflectance)](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED)
imagery.

The Cloud Score+ S2_HARMONIZED dataset includes two QA bands, `cs` and
`cs_cdf`, that both grade the usability of individual pixels with respect to
surface visibility on a continuous scale between 0 and 1, where 0 represents
"not clear" (occluded), while 1 represents "clear" (unoccluded) observations.
The `cs` band scores QA based on a spectral distance between the observed
pixel and a (theoretical) clear reference observation, while the `cs_cdf` band
represents the likelihood an observed pixel is clear based on an estimated
cumulative distribution of scores for a given location through time. In
other words, `cs` can be thought of as a more instantaneous atmospheric
similarity score (i.e., how similar is this pixel to what we'd expect to
see in a perfectly a clear reference), while `cs_cdf` captures an expectation
of the estimated score through time (i.e., if we had all the scores for this
pixel through time, how would this score rank?).

Images in the Cloud Score+ S2_HARMONIZED collection have the same id and
`system:index` properties as the individual [Sentinel-2 L1C](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED)
assets from which they were produced such that Cloud Score+ bands can be
linked to source images based on their shared `system:index`.

Cloud Score+ backfill for the entire Sentinel-2 archive is currently in
progress and Dataset Availability dates will be updated periodically as new
results are added to the Cloud Score+ collection.

For more information about the Cloud Score+ dataset and modelling
approach, see
[this Medium post](https://medium.com/google-earth/all-clear-with-cloud-score-bd6ee2e2235e).

## 基本信息

- 数据集编号（Earth Engine ID）：`GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google Earth Engine、Google Earth Engine
- 时间范围：2015-06-27 至 2026-11-02
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：cloud, google, satellite-imagery, sentinel2-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cs | Pixel quality score based on spectral distance from a (theoretical) clear reference  | 10 |  |
| cs_cdf | Value of the cumulative distribution function of possible `cs` values for the estimated `cs` value  | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED
- 数据引用：Pasquarella, V. J., Brown, C. F., Czerwinski, W., & Rucklidge, W. J. (2023)
Comprehensive Quality Assessment of Optical Satellite Imagery Using Weakly
Supervised Video Learning. In Proceedings of the IEEE/CVF Conference on
Computer Vision and Pattern Recognition (pp. 2125-2135).
[doi:10.1109/CVPRW59228.2023.00206](https://doi.org/10.1109/CVPRW59228.2023.00206)
[PDF](https://openaccess.thecvf.com/content/CVPR2023W/EarthVision/html/Pasquarella_Comprehensive_Quality_Assessment_of_Optical_Satellite_Imagery_Using_Weakly_Supervised_CVPRW_2023_paper.html)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

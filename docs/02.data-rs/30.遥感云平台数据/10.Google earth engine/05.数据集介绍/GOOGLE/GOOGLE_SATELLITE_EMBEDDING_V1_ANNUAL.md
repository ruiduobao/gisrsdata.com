---
title: "Satellite Embedding V1"
date: 2026-11-03 12:00:00
permalink: /pages/f912c733/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "global"
  - "google"
  - "landsat-derived"
  - "satellite-imagery"
  - "sentinel1-derived"
  - "sentinel2-derived"
---

# Satellite Embedding V1

## 数据集简介

The Google Satellite Embedding dataset is a global, analysis-ready
collection of learned geospatial [embeddings](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space).
Each 10-meter pixel in this dataset is a 64-dimensional representation, or
"[embedding vector](https://developers.google.com/machine-learning/glossary#embedding-vector),"
that encodes temporal trajectories of surface conditions at and around that
pixel as measured by various Earth observation instruments and datasets,
over a single calendar year. Unlike conventional spectral inputs and
indices, where bands correspond to physical measurements, embeddings are
feature vectors that summarize relationships across multi-source,
multi-modal observations in a less directly interpretable, but more powerful
way.
[See usage examples and more detailed explanations](https://medium.com/google-earth/ai-powered-pixels-introducing-googles-satellite-embedding-dataset-31744c1f4650).

The dataset covers terrestrial land surfaces and shallow waters, including
intertidal and reef zones, inland waterways, and coastal waterways.
Coverage at the poles is limited by satellite orbits and instrument
coverage.

The collection is composed of images covering approximately 163,840 meters
by 163,840 meters, and each image has 64 bands `{A00, A01, …, A63}`, one for
each axis of the 64D embedding space. All bands should be used for
downstream analysis as they collectively refer to a 64D coordinate in
the embedding space and are not independently interpretable.

All images are generated in their local Universal Transverse Mercator
projection as indicated by the UTM_ZONE property, and have
`system:time_start` and `system:time_end` properties that reflect the
calendar year summarized by the embeddings; for example, an embedding image
for 2021 will have a `system:start_time` equal to
`ee.Date('2021-01-01 00:00:00')` and a `system:end_time` equal to
`ee.Date('2022-01-01 00:00:00')`.

The embeddings are unit-length, meaning they have a magnitude of 1 and
do not require any additional normalization, and are distributed across the
[unit sphere](https://en.wikipedia.org/wiki/Unit_sphere), making them
well-suited for use with clustering algorithms and tree-based classifiers.
The embedding space is also consistent across years, and embeddings from
different years can be used for condition change detection by considering
the dot product or angle between two embedding vectors. Furthermore, the
embeddings are designed to be linearly composable, i.e., they can be
aggregated to produce embeddings at coarser spatial resolutions or
transformed with vector arithmetic, and still retain their semantic meaning
and distance relationships.

The Satellite Embedding dataset was produced by [AlphaEarth Foundations](https://deepmind.google/discover/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/),
a geospatial embedding model that assimilates multiple datastreams including
optical, radar, LiDAR, and other sources (Brown, Kazmierski, Pasquarella et
al., 2025; preprint available [here](https://arxiv.org/abs/2507.22291)).

Because representations are learned across many sensors and images,
embedding representations generally overcome common issues such as
clouds, scan lines, sensor artifacts, or missing data, providing seamless
analysis-ready features that can be directly substituted for other Earth
Observation image sources in classification, regression, and change
detection analyses.

The embeddings in this image collection were generated using v2.1 of the
AlphaEarth Foundations model, which includes a number of improvements over
the v2.0 model evaluated in the AlphaEarth Foundations paper. Namely, the
training dataset was re-generated to include a large number of samples from
Antarctica that had previously been dropped due to limited sensor coverage,
effectively increasing the count of training video sequences from over 8.4
million to over 10.1 million sequences; and the USDA NASS Cropland Data
Layer was included as an additional target during training; loss weights for
NLCD and CDL were lowered from 0.50 to 0.25; and several other minor changes
were implemented to better mitigate visual artifacts associated with input
sensor swaths, tiling, and multi-resolution pixel targets. These changes did
not notably affect the model's performance in terms of evaluation metrics,
but generally improved the quality of the resulting embeddings.

While some large scale swath and data availability artifacts remain, these
typically represent minor vector offsets and generally do not significantly
affect downstream processing or results.

The dataset is also available on Google Cloud Storage (GCS) in the bucket
`gs://alphaearth_foundations`. You can
browse the bucket contents via the [Google Cloud
Console](https://console.cloud.google.com/storage/browser/alphaearth_foundations).
and refer to the bucket
[README](https://developers.google.com/earth-engine/guides/aef_on_gcs_readme)
for full details on the data structure. As of July 2026, this bucket is set
up as "provider pays".

Updates:

* As of 2025-11-17, embedding layers have DATASET_VERSION 1.1. This
includes a regenerated 2017 layer that incorporates additional Sentinel-1
acquisitions.

Google is committed to ongoing production of annual Satellite Embedding
layers and will provide at least one year of advance notice of any
anticipated change in delivery, subject to the ongoing availability of
input data streams from USGS and ESA that production of the dataset relies
on.

## 基本信息

- 数据集编号（Earth Engine ID）：`GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google Earth Engine、Google DeepMind、Google Earth Engine
- 时间范围：2017-01-01 至 2025-01-01
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：annual, global, google, landsat-derived, satellite-imagery, sentinel1-derived, sentinel2-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| A00 | The 0th axis of the embedding vector. | 10 |  |
| A01 | The 1st axis of the embedding vector. | 10 |  |
| A02 | The 2nd axis of the embedding vector. | 10 |  |
| A03 | The 3rd axis of the embedding vector. | 10 |  |
| A04 | The 4th axis of the embedding vector. | 10 |  |
| A05 | The 5th axis of the embedding vector. | 10 |  |
| A06 | The 6th axis of the embedding vector. | 10 |  |
| A07 | The 7th axis of the embedding vector. | 10 |  |
| A08 | The 8th axis of the embedding vector. | 10 |  |
| A09 | The 9th axis of the embedding vector. | 10 |  |
| A10 | The 10th axis of the embedding vector. | 10 |  |
| A11 | The 11th axis of the embedding vector. | 10 |  |
| A12 | The 12th axis of the embedding vector. | 10 |  |
| A13 | The 13th axis of the embedding vector. | 10 |  |
| A14 | The 14th axis of the embedding vector. | 10 |  |
| A15 | The 15th axis of the embedding vector. | 10 |  |
| A16 | The 16th axis of the embedding vector. | 10 |  |
| A17 | The 17th axis of the embedding vector. | 10 |  |
| A18 | The 18th axis of the embedding vector. | 10 |  |
| A19 | The 19th axis of the embedding vector. | 10 |  |
| A20 | The 20th axis of the embedding vector. | 10 |  |
| A21 | The 21st axis of the embedding vector. | 10 |  |
| A22 | The 22nd axis of the embedding vector. | 10 |  |
| A23 | The 23rd axis of the embedding vector. | 10 |  |
| A24 | The 24th axis of the embedding vector. | 10 |  |
| A25 | The 25th axis of the embedding vector. | 10 |  |
| A26 | The 26th axis of the embedding vector. | 10 |  |
| A27 | The 27th axis of the embedding vector. | 10 |  |
| A28 | The 28th axis of the embedding vector. | 10 |  |
| A29 | The 29th axis of the embedding vector. | 10 |  |
| A30 | The 30th axis of the embedding vector. | 10 |  |
| A31 | The 31st axis of the embedding vector. | 10 |  |
| A32 | The 32nd axis of the embedding vector. | 10 |  |
| A33 | The 33rd axis of the embedding vector. | 10 |  |
| A34 | The 34th axis of the embedding vector. | 10 |  |
| A35 | The 35th axis of the embedding vector. | 10 |  |
| A36 | The 36th axis of the embedding vector. | 10 |  |
| A37 | The 37th axis of the embedding vector. | 10 |  |
| A38 | The 38th axis of the embedding vector. | 10 |  |
| A39 | The 39th axis of the embedding vector. | 10 |  |
| A40 | The 40th axis of the embedding vector. | 10 |  |
| A41 | The 41st axis of the embedding vector. | 10 |  |
| A42 | The 42nd axis of the embedding vector. | 10 |  |
| A43 | The 43rd axis of the embedding vector. | 10 |  |
| A44 | The 44th axis of the embedding vector. | 10 |  |
| A45 | The 45th axis of the embedding vector. | 10 |  |
| A46 | The 46th axis of the embedding vector. | 10 |  |
| A47 | The 47th axis of the embedding vector. | 10 |  |
| A48 | The 48th axis of the embedding vector. | 10 |  |
| A49 | The 49th axis of the embedding vector. | 10 |  |
| A50 | The 50th axis of the embedding vector. | 10 |  |
| A51 | The 51st axis of the embedding vector. | 10 |  |
| A52 | The 52nd axis of the embedding vector. | 10 |  |
| A53 | The 53rd axis of the embedding vector. | 10 |  |
| A54 | The 54th axis of the embedding vector. | 10 |  |
| A55 | The 55th axis of the embedding vector. | 10 |  |
| A56 | The 56th axis of the embedding vector. | 10 |  |
| A57 | The 57th axis of the embedding vector. | 10 |  |
| A58 | The 58th axis of the embedding vector. | 10 |  |
| A59 | The 59th axis of the embedding vector. | 10 |  |
| A60 | The 60th axis of the embedding vector. | 10 |  |
| A61 | The 61st axis of the embedding vector. | 10 |  |
| A62 | The 62nd axis of the embedding vector. | 10 |  |
| A63 | The 63rd axis of the embedding vector. | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_SATELLITE_EMBEDDING_V1_ANNUAL
- 数据引用：Brown, C. F., Kazmierski, M. R., Pasquarella, V J., Rucklidge, W. J.,
Samsikova, M., Zhang, C., Shelhamer, E., Lahera, E.,  Wiles, O.,
Ilyushchenko, S., Gorelick, N., Zhang, L. L., Alj, S.,  Schechter, E.,
Askay, S., Guinan, O., Moore, R., Boukouvalas, A., & Kohli, P.(2025).
AlphaEarth Foundations: An embedding field model for accurate and
efficient global mapping from sparse label data. arXiv preprint
arXiv.2507.22291. [doi:10.48550/arXiv.2507.22291](https://doi.org/10.48550/arXiv.2507.22291)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

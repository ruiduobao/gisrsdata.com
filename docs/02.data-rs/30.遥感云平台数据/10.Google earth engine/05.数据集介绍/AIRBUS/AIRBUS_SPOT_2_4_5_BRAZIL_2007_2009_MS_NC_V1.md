---
title: "SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil"
date: 2026-11-03 12:00:00
permalink: /pages/1f2f6c63/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brazil"
  - "forest-code"
  - "google"
  - "rgb"
  - "satellite-imagery"
  - "spot"
---

# SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil

## 数据集简介

This collection contains 2008-era "pseudo natural color" RGB images derived from the native multispectral bands of SPOT 2, 4, and 5 for Brazil. Because the HRV and HRG sensors did not include a native blue band, this product synthesizes an RGB representation to approximate a natural appearance for visual land use/land cover assessment. The spatial resolution remains at the native multispectral scale (10m for SPOT 5; 20m for SPOT 2/4). See also [Brazil Forest Imagery Dataset 2008: Visual Basemap](/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_VISUAL).


### Google modifications

Addition of a cloud mask band. Google manually delineated polygons around clouds, wisps, and shadows for each image in this collection, converting the polygons into a mask image added as an additional band to the image.


### Data access

To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## 基本信息

- 数据集编号（Earth Engine ID）：`AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google/CNES、Google Earth Engine
- 时间范围：2007-01-01 至 2009-11-26
- 空间分辨率：20 米
- 许可：proprietary
- 关键词：brazil, forest-code, google, rgb, satellite-imagery, spot

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red reflectance | 20 |  |
| G | Green reflectance | 20 |  |
| B | Blue reflectance, representing the synthetic blue channel of the pseudo-natural color product for SPOT 2, 4, and 5 | 20 |  |
| cloud_mask | Cloud mask: 0 = cloud/shadow, 1 = clear | 20 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS_NC/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

---
title: "NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Asia"
date: 2026-11-03 12:00:00
permalink: /pages/c5b72586/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "basemaps"
  - "forest"
  - "nicfi"
  - "planet"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "tropics"
---

# NICFI Satellite Data Program Basemaps for Tropical Forest Monitoring - Asia

## 数据集简介

This image collection provides access to high-resolution satellite
monitoring of the tropics for the primary purpose of reducing and reversing the
loss of tropical forests, contributing to combating climate change, conserving
biodiversity, contributing to forest regrowth, restoration and enhancement, and
facilitating sustainable development, all of which must be Non-Commercial Use.

To learn how to access the Basemaps, follow the
[sign up instructions here](https://docs.planet.com/platform/integrations/google-earth-engine/nicfi-gee/).

The NICFI Satellite Data Program mosaics (also referred to as Planet-NICFI
mosaics) contain both monthly and biannual collections generated every
6 months.  The type of the mosaic is stored in the image metadata field
'cadence'. Use that field along with the start and end date for each mosaic
to find the desired imagery.

Full details about the Basemaps are available in
[NICFI Satellite Data Program Basemap spec](https://assets.planet.com/docs/NICFI_Basemap_Spec_Addendum.pdf).

For more information about the NICFI (Norway's International Climate
and Forest Initiative) Satellite Data Program and the data offered,
please visit
[the Program's website](https://assets.planet.com/docs/NICFI_General_FAQs.pdf).

In support of NICFI's mission, you can use this data for a number of projects
including, but not limited to:

* Advance scientific research about the world's tropical forests and the
  critical services they provide.
* Implement and improve policies for sustainable forest management and land
  use in developing tropical forest countries and jurisdictions.
* Increase transparency and accountability in the tropics.
* Protect and improve the rights of indigenous peoples and local communities
  in tropical forest countries.
* Innovate solutions towards reducing pressure on forests from global
  commodities and financial markets.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/planet-nicfi/assets/basemaps/asia`
- 数据类型：影像集合（ImageCollection）
- 提供方：Planet、Google Earth Engine
- 时间范围：2015-12-01 至 2026-09-01
- 空间分辨率：4.77 米
- 许可：proprietary
- 关键词：basemaps, forest, nicfi, planet, satellite-imagery, sr, surface-reflectance, tropics

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B | Blue | 4.77 |  |
| G | Green | 4.77 |  |
| R | Red | 4.77 |  |
| N | Near-infrared | 4.77 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/asia');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_planet-nicfi_assets_basemaps_asia
- 数据引用：Planet Team (2017). Planet Application Program Interface: In Space for Life
on Earth. San Francisco, CA. [https://api.planet.com](https://api.planet.com)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

---
title: "Global Map of Oil Palm Plantations [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/1dc500dd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "biodiversity"
  - "biopama"
  - "conservation"
  - "crop"
  - "global"
  - "landuse"
  - "palm"
  - "plantation"
---

# Global Map of Oil Palm Plantations [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The dataset is a 10m global industrial and smallholder oil palm map for 2019.
It covers areas where oil palm plantations were detected. The classified images are the output
of a convolutional neural network based on Sentinel-1 and Sentinel-2 half-year composites.

See [article](https://essd.copernicus.org/articles/13/1211/2021/) for additional information.

## 基本信息

- 数据集编号（Earth Engine ID）：`BIOPAMA/GlobalOilPalm/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Biopama programme、Google Earth Engine
- 时间范围：2019-01-01 至 2019-12-31
- 许可：CC-BY-4.0
- 关键词：agriculture, biodiversity, biopama, conservation, crop, global, landuse, palm, plantation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Oil Palm class description | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('BIOPAMA/GlobalOilPalm/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1
- 数据引用：Adrià, D., Serge, W., Erik, M., David, G., Stephen, P., & Zoltan, S. (2021). High resolution global industrial and smallholder oil palm map for 2019 (Version v1) [Data set]. Zenodo.
[doi:10.5281/zenodo.4473715](https://doi.org/10.5281/zenodo.4473715)

- DOI：10.5281/zenodo.4473715

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

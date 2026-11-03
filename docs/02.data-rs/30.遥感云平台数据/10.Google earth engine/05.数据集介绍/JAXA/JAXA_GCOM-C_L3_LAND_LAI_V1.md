---
title: "GCOM-C/SGLI L3 Leaf Area Index (V1)"
date: 2026-11-03 12:00:00
permalink: /pages/099c4e7b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "g-portal"
  - "gcom"
  - "gcom-c"
  - "jaxa"
  - "lai"
  - "land"
  - "leaf-area-index"
  - "vegetation-indices"
---

# GCOM-C/SGLI L3 Leaf Area Index (V1)

## 数据集简介

This product is the sum of the one-sided green leaf area per unit ground area.

A newer version [JAXA/GCOM-C/L3/LAND/LAI/V3](JAXA_GCOM-C_L3_LAND_LAI_V3) is also available
for this dataset which uses this [algorithm](https://suzaku.eorc.jaxa.jp/GCOM_C/data/product_std.html)
for processing.

GCOM-C conducts long-term and continuous global observation and data collection to elucidate the
mechanism behind fluctuations in radiation budget and carbon cycle needed to make accurate
projections regarding future temperature rise. At the same time, cooperating with research
institutions having a climate numerical model, it contributes to reduction of errors in
temperature rise prediction derived from the climate numerical model and improvement of accuracy
of prediction of various environmental changes. SGLI mounted on GCOM-C is the succession sensor
of the Global Imager (GLI) mounted on ADEOS-II (MIDORI II) and is the Imaging Radiometer which
measures the radiation from near-ultraviolet to thermal infrared region (380 nm-12 um) in 19
channels. Global observation of once for approximately every two days is possible at
mid-latitude near Japan by observation width at ground greater than 1,000 km. In addition, SGLI
realizes high resolution than the similar global sensor and has a polarized observation function
and a multi-angle observation function.

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/GCOM-C/L3/LAND/LAI/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Global Change Observation Mission (GCOM)、Google Earth Engine
- 时间范围：2018-01-01 至 2020-06-28
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：g-portal, gcom, gcom-c, jaxa, lai, land, leaf-area-index, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LAI_AVE | The sum of the one-sided green leaf area per unit ground area. | 4638.3 |  |
| LAI_QA_flag | LAI QA | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/LAND/LAI/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_LAND_LAI_V1
- 数据引用：Ono, Y. (Nov. 2011). GCOM-C1 / SGLI LAI Product Algorithm Theoretical Basis Document
(Version 1). Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/Ono_Y_ATBD.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/Ono_Y_ATBD.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

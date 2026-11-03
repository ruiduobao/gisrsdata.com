---
title: "GCOM-C/SGLI L3 Sea Surface Temperature (V3)"
date: 2026-11-03 12:00:00
permalink: /pages/ad2f1301/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "g-portal"
  - "gcom"
  - "gcom-c"
  - "jaxa"
  - "oceans"
  - "sea-surface-temperature"
  - "sst"
---

# GCOM-C/SGLI L3 Sea Surface Temperature (V3)

## 数据集简介

This product is the temperature of sea surface.

This is an ongoing dataset with a latency of 3-4 days.

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

- 数据集编号（Earth Engine ID）：`JAXA/GCOM-C/L3/OCEAN/SST/V3`
- 数据类型：影像集合（ImageCollection）
- 提供方：Global Change Observation Mission (GCOM)、Google Earth Engine
- 时间范围：2018-01-22 至 2026-10-14
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：climate, g-portal, gcom, gcom-c, jaxa, oceans, sea-surface-temperature, sst

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SST_AVE | Temperature of sea surface. | 4638.3 |  |
| SST_QA_flag | SST QA | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/OCEAN/SST/V3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_OCEAN_SST_V3
- 数据引用：Kurihara, Y. (Jun. 2020). GCOM-C/SGLI Sea Surface Temperature (SST) ATBD (Version 2).
Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_O1AB_SST_Kurihara_r1.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver2/V2ATBD_O1AB_SST_Kurihara_r1.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

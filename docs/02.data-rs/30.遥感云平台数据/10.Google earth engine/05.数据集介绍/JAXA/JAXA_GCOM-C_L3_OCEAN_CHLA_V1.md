---
title: "GCOM-C/SGLI L3 Chlorophyll-a Concentration (V1)"
date: 2026-11-03 12:00:00
permalink: /pages/9e90afdc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chla"
  - "chlorophyll-a"
  - "g-portal"
  - "gcom"
  - "gcom-c"
  - "jaxa"
  - "ocean-color"
  - "oceans"
---

# GCOM-C/SGLI L3 Chlorophyll-a Concentration (V1)

## 数据集简介

This product is the concentration of the photosynthetic pigment (chlorophyll-a) in phytoplankton
in the sea surface layer.

A newer version [JAXA/GCOM-C/L3/OCEAN/CHLA/V3](JAXA_GCOM-C_L3_OCEAN_CHLA_V3) is also available
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

- 数据集编号（Earth Engine ID）：`JAXA/GCOM-C/L3/OCEAN/CHLA/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Global Change Observation Mission (GCOM)、Google Earth Engine
- 时间范围：2018-01-01 至 2020-06-28
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：chla, chlorophyll-a, g-portal, gcom, gcom-c, jaxa, ocean-color, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CHLA_AVE | Concentration of the green pigment (chlorophyll-a) in phytoplankton in sea surface layer. | 4638.3 |  |
| CHLA_QA_flag | CHLA QA | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/OCEAN/CHLA/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_OCEAN_CHLA_V1
- 数据引用：Murakami, H. (Oct. 2018). ATBD of GCOM-C chlorophyll-a concentration algorithm (Version 1).
Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/SGLI_Chla_algorithm_v10.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/SGLI_Chla_algorithm_v10.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

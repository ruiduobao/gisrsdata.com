---
title: "SOLUS: Soil properties of the conterminous United States at 100-m resolution"
date: 2026-11-03 12:00:00
permalink: /pages/db424aa2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "soil"
  - "usda"
---

# SOLUS: Soil properties of the conterminous United States at 100-m resolution

## 数据集简介

SOLUS (Soil Landscapes of the United States) is a national map product
developed by the National Cooperative Soil Survey that is focused on
providing a consistent set of spatially continuous soil property maps to
support large scope soil investigations and land use decisions. SOLUS maps
use a digital soil mapping framework that combines multiple sources of soil
survey data with environmental covariate data and machine learning.
SOLUS100 is 100 m spatial resolution. Each 100 m raster cell represents
a 100 m by 100 m square on the ground with soil property values
estimated at seven depths: 0, 5, 15, 30, 60, 100, and 150 cm.

It provides estimates for soil organic carbon, bulk density, pH,
texture fractions (clay, silt, sand), calcium carbonate equivalent,
and depth to an anylithic contact (e.g. bedrock).

Each soil property is represented by a separate image in this collection.
For each soil property except depth to anylithic contact, bands are
provided for 7 depths: 0, 5, 15, 30, 60, 100, and 150cm. For each depth,
4 layers are provided: predicted value, lower 95% confidence limit,
upper 95% confidence limit, and a relative property index.
For depth to anylithic contact, a single image provides the 4 layers
representing depth in cm.

Image IDs correspond to soil properties:

*   `soc`: Soil organic carbon (%)
*   `bd`: Bulk density (g/cm^3)
*   `phh2o`: pH in water
*   `claytotal`: Clay (%)
*   `silttotal`: Silt (%)
*   `sandtotal`: Sand (%)
*   `caco3`: Calcium Carbonate (%)
*   `anylithicdpt`: Depth to an Anylithic Contact (cm)

## 基本信息

- 数据集编号（Earth Engine ID）：`USDA/SOLUS100/V0`
- 数据类型：影像集合（ImageCollection）
- 提供方：USDA-ARS、Google Earth Engine
- 时间范围：2023-12-15 至 2024-01-01
- 空间分辨率：100 米
- 许可：proprietary
- 关键词：soil, usda

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| r_0_cm_p | Predicted value of soil property at 0cm depth | 100 |  |
| r_0_cm_l | Lower 95% confidence limit of soil property at 0cm depth | 100 |  |
| r_0_cm_h | Upper 95% confidence limit of soil property at 0cm depth | 100 |  |
| r_0_cm_rpi | Relative property index of soil property at 0cm depth | 100 |  |
| r_5_cm_p | Predicted value of soil property at 5cm depth | 100 |  |
| r_5_cm_l | Lower 95% confidence limit of soil property at 5cm depth | 100 |  |
| r_5_cm_h | Upper 95% confidence limit of soil property at 5cm depth | 100 |  |
| r_5_cm_rpi | Relative property index of soil property at 5cm depth | 100 |  |
| r_15_cm_p | Predicted value of soil property at 15cm depth | 100 |  |
| r_15_cm_l | Lower 95% confidence limit of soil property at 15cm depth | 100 |  |
| r_15_cm_h | Upper 95% confidence limit of soil property at 15cm depth | 100 |  |
| r_15_cm_rpi | Relative property index of soil property at 15cm depth | 100 |  |
| r_30_cm_p | Predicted value of soil property at 30cm depth | 100 |  |
| r_30_cm_l | Lower 95% confidence limit of soil property at 30cm depth | 100 |  |
| r_30_cm_h | Upper 95% confidence limit of soil property at 30cm depth | 100 |  |
| r_30_cm_rpi | Relative property index of soil property at 30cm depth | 100 |  |
| r_60_cm_p | Predicted value of soil property at 60cm depth | 100 |  |
| r_60_cm_l | Lower 95% confidence limit of soil property at 60cm depth | 100 |  |
| r_60_cm_h | Upper 95% confidence limit of soil property at 60cm depth | 100 |  |
| r_60_cm_rpi | Relative property index of soil property at 60cm depth | 100 |  |
| r_100_cm_p | Predicted value of soil property at 100cm depth | 100 |  |
| r_100_cm_l | Lower 95% confidence limit of soil property at 100cm depth | 100 |  |
| r_100_cm_h | Upper 95% confidence limit of soil property at 100cm depth | 100 |  |
| r_100_cm_rpi | Relative property index of soil property at 100cm depth | 100 |  |
| r_150_cm_p | Predicted value of soil property at 150cm depth | 100 |  |
| r_150_cm_l | Lower 95% confidence limit of soil property at 150cm depth | 100 |  |
| r_150_cm_h | Upper 95% confidence limit of soil property at 150cm depth | 100 |  |
| r_150_cm_rpi | Relative property index of soil property at 150cm depth | 100 |  |
| r_cm_p | Predicted depth to anylithic contact in cm  | 100 |  |
| r_cm_l | Lower 95% confidence limit of depth to anylithic contact in cm  | 100 |  |
| r_cm_h | Upper 95% confidence limit of depth to anylithic contact in cm  | 100 |  |
| r_cm_rpi | Relative property index of depth to anylithic contact  | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USDA/SOLUS100/V0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USDA_SOLUS100_V0
- 数据引用：Nauman, T. W., Kienast-Brown, S., Roecker, S. M., Brungard, C., White,
D., Philippe, J., & Thompson, J. A. (2024). Soil landscapes of the
United States (SOLUS): developing predictive soil property maps of the
conterminous United States using hybrid training sets. Soil Science
Society of America Journal, 1-20.
[doi:10.1002/saj2.20769](https://doi.org/10.1002/saj2.20769)

- DOI：10.1002/saj2.20769

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

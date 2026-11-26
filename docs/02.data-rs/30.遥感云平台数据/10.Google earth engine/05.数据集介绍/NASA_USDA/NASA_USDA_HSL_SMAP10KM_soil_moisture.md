---
title: "NASA-USDA 增强 SMAP 全球土壤水分数据 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/7cc9ac3e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "hsl"
  - "nasa"
  - "smap"
  - "soil"
  - "soil-moisture"
  - "usda"
---

# NASA-USDA 增强 SMAP 全球土壤水分数据 [已弃用]

英文原名：NASA-USDA Enhanced SMAP Global Soil Moisture Data [deprecated]

## 这是什么数据

NASA-USDA 增强 SMAP 全球土壤水分数据以 10 千米空间分辨率提供全球土壤水分信息。本数据集包括：地表、地下、土壤水分（毫米）、土壤水分剖面（%）、地表与地下土壤水分异常（-）。

数据集通过使用一维集合卡尔曼滤波（EnKF）数据同化方法，将卫星源的土壤水分主动被动（SMAP）三级土壤水分观测整合进改进的双层 Palmer 模式生成。土壤水分异常从所关注日的气候态计算。气候态基于 SMAP 卫星观测的完整数据记录与 31 天居中移动窗口方法估计。SMAP 土壤水分观测的同化有助于改进基于模式的土壤水分预测，特别是在世界上缺乏高质量降水数据的仪器稀疏地区。

本数据集由 NASA 戈达德航天飞行中心水文科学实验室与 USDA 海外农业局及 USDA 水文与遥感实验室合作开发。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2015 年至 2022 年；分辨率：10,000 米。
- 时间范围：2015-04-02 至 2022-08-02

## 分辨率与规格

- 空间分辨率：约 10,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ssm | 地表土壤水分。 | 10000 |  |
| susm | 地下土壤水分。 | 10000 |  |
| smp | 土壤水分剖面。 | 10000 |  |
| ssma | 地表土壤水分异常。 | 10000 |  |
| susma | 地下土壤水分异常。 | 10000 |  |

## 能拿来做什么

- 全球土壤水分监测
- 农业干旱评估
- 作物产量预测支持

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA_USDA/HSL/SMAP10KM_soil_moisture');
```

- 数据集编号（Earth Engine ID）：`NASA_USDA/HSL/SMAP10KM_soil_moisture`
- 提供方：NASA GSFC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_USDA_HSL_SMAP10KM_soil_moisture

## 许可与引用

- 许可：proprietary
- 关键词：geophysical, hsl, nasa, smap, soil, soil-moisture, usda
- 数据引用：
**Sazib, N., J. D. Bolten, and I. E. Mladenova. 2021.**
Leveraging NASA Soil Moisture Active Passive for Assessing Fire
Susceptibility and Potential Impacts Over Australia and California.
*IEEE Journal of Selected Topics in Applied Earth Observations and
Remote Sensing*, 15: 779-787.
[doi:10.1109/jstars.2021.3136756](https://doi.org/10.1109/jstars.2021.3136756)

**Mladenova, I.E., Bolten, J.D., Crow, W., Sazib, N. and Reynolds, C., 2020.**
Agricultural drought monitoring via the assimilation of SMAP soil moisture retrievals into a
global soil water balance model. *Front. Big Data*,
3(10).
[doi:10.3389/fdata.2020.00010](https://doi.org/10.3389/fdata.2020.00010)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NASA-USDA SMAP 全球土壤水分数据 [已弃用]](/pages/e11c9b76/)
- [NASA-USDA 全球土壤水分数据 [已弃用]](/pages/369d0375/)
- [NLDAS-2：北美陆地数据同化系统强迫场](/pages/4a88073a/)
- [SPL3SMP_E.005 SMAP 三级辐射计全球逐日 9 千米土壤水分](/pages/ff73e36e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

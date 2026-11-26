---
title: "MCD18C2.061 光合有效辐射日 3 小时（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/8fba3263/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "par"
  - "radiation"
  - "weather-and-climate"
---

# MCD18C2.061 光合有效辐射日 3 小时（已弃用）

英文原名：MCD18C2.061 Photosynthetically Active Radiation Daily 3-Hour [deprecated]

## 这是什么数据

MCD18C2 版本 6.1 是一个中分辨率成像光谱仪（MODIS）Terra 与 Aqua 组合的光合有效辐射（PAR）格网三级产品，每日以 0.05 度（赤道 5,600 米）分辨率生产，带每 3 小时的 PAR 估计。PAR 是可见光光谱（400–700 纳米）内的入射太阳辐射，是陆面模型中处理各种科学与应用问题的重要变量。MCD18 产品基于一个原型算法，该算法使用 MODIS 数据的多时相特征推导地表反射率，然后使用查找表（LUT）方法计算入射 PAR。LUT 考虑各种照明/观测几何下不同类型的气溶胶与云负荷。全球 PAR 产品由 MODIS 与地球静止卫星数据生成。关于创建该数据所用方法的更多细节见[算法理论基础文档](https://lpdaac.usgs.gov/documents/106/MCD18_ATBD.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2024 年；分辨率：5,566 米。
- 时间范围：2002-02-24 至 2024-06-01

## 分辨率与规格

- 空间分辨率：约 5,566 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| GMT_0000_PAR | GMT 00:00 的总 PAR。 | 5566 |  |
| GMT_0300_PAR | GMT 03:00 的总 PAR。 | 5566 |  |
| GMT_0600_PAR | GMT 06:00 的总 PAR。 | 5566 |  |
| GMT_0900_PAR | GMT 09:00 的总 PAR。 | 5566 |  |
| GMT_1200_PAR | GMT 12:00 的总 PAR。 | 5566 |  |
| GMT_1500_PAR | GMT 15:00 的总 PAR。 | 5566 |  |
| GMT_1800_PAR | GMT 18:00 的总 PAR。 | 5566 |  |
| GMT_2100_PAR | GMT 21:00 的总 PAR。 | 5566 |  |

## 能拿来做什么

- 地表辐射与能量平衡研究
- 陆面模型输入
- 农业与生态辐射分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD18C2');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD18C2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD18C2

## 许可与引用

- 许可：proprietary
- 关键词：par, radiation, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD18C2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

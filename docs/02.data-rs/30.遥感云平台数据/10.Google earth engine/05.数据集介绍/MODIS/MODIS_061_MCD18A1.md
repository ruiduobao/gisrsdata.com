---
title: "MCD18A1.061 地表辐射日/3 小时（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/088bb19d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "par"
  - "radiation"
  - "weather-and-climate"
---

# MCD18A1.061 地表辐射日/3 小时（已弃用）

英文原名：MCD18A1.061 Surface Radiation Daily/3-Hour [deprecated]

## 这是什么数据

MCD18A1 版本 6.1 是一个中分辨率成像光谱仪（MODIS）Terra 与 Aqua 组合的向下短波辐射（DSR）格网三级产品，每日以 1 公里像元分辨率生产，带每 3 小时的 DSR 估计。DSR 是短波光谱（300–4,000 纳米）内陆地表面上的入射太阳辐射，是陆面模型中处理各种科学与应用问题的重要变量。MCD18 产品基于一个原型算法，该算法使用 MODIS 数据的多时相特征推导地表反射率，然后使用查找表（LUT）方法计算入射 DSR。LUT 考虑各种照明/观测几何下不同类型的气溶胶与云负荷。全球 DSR 产品由 MODIS 与地球静止卫星数据生成。关于创建该数据所用方法的更多细节见[算法理论基础文档](https://lpdaac.usgs.gov/documents/106/MCD18_ATBD.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2024 年；分辨率：1 公里。
- 时间范围：2000-02-24 至 2024-06-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DSR | MODIS 过境时的瞬时总 DSR。 | 1000 |  |
| Direct | MODIS 过境时的瞬时直接 DSR。 | 1000 |  |
| Diffuse | MODIS 过境时的瞬时漫射 DSR。 | 1000 |  |
| GMT_0000_DSR | GMT 00:00 的总 DSR。 | 1000 |  |
| GMT_0300_DSR | GMT 03:00 的总 DSR。 | 1000 |  |
| GMT_0600_DSR | GMT 06:00 的总 DSR。 | 1000 |  |
| GMT_0900_DSR | GMT 09:00 的总 DSR。 | 1000 |  |
| GMT_1200_DSR | GMT 12:00 的总 DSR。 | 1000 |  |
| GMT_1500_DSR | GMT 15:00 的总 DSR。 | 1000 |  |
| GMT_1800_DSR | GMT 18:00 的总 DSR。 | 1000 |  |
| GMT_2100_DSR | GMT 21:00 的总 DSR。 | 1000 |  |
| DSR_Quality | 质量标志。 | 1000 |  |

## 能拿来做什么

- 地表辐射与能量平衡研究
- 陆面模型输入
- 农业与生态辐射分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD18A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD18A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD18A1

## 许可与引用

- 许可：proprietary
- 关键词：par, radiation, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD18A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

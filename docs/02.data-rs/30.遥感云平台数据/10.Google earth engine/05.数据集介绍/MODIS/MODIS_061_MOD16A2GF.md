---
title: "MOD16A2GF.061 Terra 净蒸散填补 8 天全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/8ff1337c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "evapotranspiration"
  - "global"
  - "modis"
  - "nasa"
  - "water-vapor"
---

# MOD16A2GF.061 Terra 净蒸散填补 8 天全球 500 米

英文原名：MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m

## 这是什么数据

Terra 中分辨率成像光谱仪（MODIS）MOD16A2GF 版本 6.1 蒸散/潜热通量（ET/LE）产品是一个年末填补的 8 天合成数据集，以 500 米（m）像元分辨率生产。MOD16 数据产品集合使用的算法基于 Penman-Monteith 方程的逻辑，包括每日气象再分析数据输入以及 MODIS 遥感数据产品，如植被属性动力学、反照率与土地覆盖。

两个蒸散层（ET 与 PET）的像元值是合成时段内全部八天的总和，两个潜热层（LE 与 PLE）的像元值是合成时段内全部八天的平均值。每年的最后一个获取时段是 5 或 6 天的合成时段，取决于年份。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2025 年；分辨率：500 米。
- 时间范围：2000-01-01 至 2025-12-27

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ET | 总蒸散。 | 500 |  |
| LE | 平均潜热通量。 | 500 |  |
| PET | 总潜在蒸散。 | 500 |  |
| PLE | 平均潜在潜热通量。 | 500 |  |
| ET_QC | 蒸散质量控制标志。 | 500 |  |

## 能拿来做什么

- 蒸散与水资源评估
- 干旱监测
- 灌溉管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MOD16A2GF');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD16A2GF`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD16A2GF
* [User's Guide](https://lpdaac.usgs.gov/documents/931/MOD16_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2GF)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, evapotranspiration, global, modis, nasa, water-vapor
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2GF.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米](/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

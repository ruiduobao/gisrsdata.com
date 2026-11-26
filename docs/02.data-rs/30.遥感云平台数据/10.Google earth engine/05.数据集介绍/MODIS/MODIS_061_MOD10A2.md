---
title: "MOD10A2.061 Terra 雪覆盖 8 天 L3 全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/cf65a02a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cryosphere"
  - "daily"
  - "geophysical"
  - "global"
  - "modis"
  - "nasa"
  - "nsidc"
  - "snow"
  - "terra"
---

# MOD10A2.061 Terra 雪覆盖 8 天 L3 全球 500 米

英文原名：MOD10A2.061 Terra Snow Cover 8-Day L3 Global 500m

## 这是什么数据

MOD10A2 是一个来自 Terra 卫星 MODIS 的雪覆盖数据集。该数据集以 500 米分辨率报告八天时段内的最大雪覆盖范围。

选择八天合成时段是因为那正是 Terra 与 Aqua 平台的精确地面轨迹重复周期。八天内的雪覆盖在一个 SDS 中映射为最大雪范围，在另一个 SDS 中映射为观测年表。八天时段从每年的第一天开始并延伸到下一年。产品可用二到八天的输入生产。由于各种原因，可能并不总是有八天的输入，因此用户应检查属性以确定观测是在哪些天获得的。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2026 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2026-10-16

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Maximum_Snow_Extent | 八天时段内观测到的最大雪范围。 | 500 |  |
| Eight_Day_Snow_Cover | 八天观测时段内每天的雪年表比特标志。 | 500 |  |

## 能拿来做什么

- 雪覆盖监测与制图
- 水文与气候研究
- 雪反照率分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MOD10A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD10A2`
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD10A2
* [General documentation](https://doi.org/10.5067/MODIS/MOD10A2.061)
* [User's Guide]( https://modis-snow-ice.gsfc.nasa.gov/uploads/snow_user_guide_C6.1_final_revised_april.pdf),

## 许可与引用

- 许可：proprietary
- 关键词：cryosphere, daily, geophysical, global, modis, nasa, nsidc, snow, terra
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2016. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 6. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/MODIS/MOD10A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD10A1.061 Terra Snow Cover Daily Global 500m](/pages/63afd45f/)
- [MYD10A1.061 Aqua Snow Cover Daily Global 500m](/pages/fb16b7df/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

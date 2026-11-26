---
title: "MYD14A1.061：Aqua 热异常与火日产品全球 1 公里"
date: 2026-11-03 12:00:00
permalink: /pages/051acfdf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "fire"
  - "global"
  - "modis"
  - "myd14a1"
  - "nasa"
  - "usgs"
---

# MYD14A1.061：Aqua 热异常与火日产品全球 1 公里

英文原名：MYD14A1.061: Aqua Thermal Anomalies & Fire Daily Global 1km

## 这是什么数据

MYD14A1 V6.1 数据集提供源自 MODIS 4 与 11 微米辐射的 1 公里分辨率每日火掩膜合成。火探测策略基于对火的绝对探测（当火强度足以探测时），以及相对于其背景的探测（以考虑地表温度变异与阳光反射）。产品区分火、无火与无观测。此信息用于监测不同生态系统中火的空间与时间分布、探测火分布的变化并识别新的火前沿、野火，以及火频率或其相对强度的变化。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：1 公里。
- 时间范围：2002-07-04 至 2026-10-23

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| FireMask | 火的置信度。 | 1000 |  |
| MaxFRP | 最大火辐射功率。 | 1000 |  |
| sample | 火像元在扫描内的位置。 | 1000 |  |
| QA | 像元质量指示。 | 1000 |  |

## 能拿来做什么

- 火灾监测与预警
- 火烧迹地评估
- 火辐射功率分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD14A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD14A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD14A1
* [User's Guide](https://lpdaac.usgs.gov/documents/1005/MOD14_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/87/MOD14_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD14A1)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, fire, global, modis, myd14a1, nasa, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD14A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD64A1.061 MODIS Burned Area Monthly Global 500m](/pages/11a394bf/)
- [MOD14A1.061: Terra Thermal Anomalies & Fire Daily Global 1km](/pages/cfc73d5b/)
- [MOD14A2.061: Terra Thermal Anomalies & Fire 8-Day Global 1km](/pages/f1b7626d/)
- [MYD14A2.061: Aqua Thermal Anomalies & Fire 8-Day Global 1km](/pages/0b8d7e79/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

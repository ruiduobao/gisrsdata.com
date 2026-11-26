---
title: "NCEP-DOE 再分析 2（高斯网格）总云量"
date: 2026-11-03 12:00:00
permalink: /pages/388afaeb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "cloud"
  - "geophysical"
  - "ncep"
  - "noaa"
  - "reanalysis"
---

# NCEP-DOE 再分析 2（高斯网格）总云量

英文原名：NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage

## 这是什么数据

**此集合不再更新。模式已在源头停止更新。**

NCEP-DOE 再分析 2 项目使用最先进的分析/预报系统，对 1979 年至上一年的历史数据进行数据同化。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：1979 年至 2026 年；分辨率：278,300 米（高斯网格）。
- 时间范围：1979-01-01 至 2026-03-01

## 分辨率与规格

- 空间分辨率：约 278,300 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tcdc | 总云量 | 278300 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/NCEP_DOE_RE2/total_cloud_coverage');
```

- 数据集编号（Earth Engine ID）：`NOAA/NCEP_DOE_RE2/total_cloud_coverage`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NCEP_DOE_RE2_total_cloud_coverage

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, cloud, geophysical, ncep, noaa, reanalysis
- 数据引用：[NCEP-DOE AMIP-II Reanalysis (R-2): M. Kanamitsu, W. Ebisuzaki, J. Woollen, S-K Yang,
J.J. Hnilo, M. Fiorino, and G. L. Potter. 1631-1643, Nov 2002, Bulletin of the American
Meteorological Society.](https://journals.ametsoc.org/view/journals/bams/83/11/bams-83-11-1631.xml).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AERDB_D3_VIIRS_NOAA20.002：VIIRS/NOAA-20 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/64c851e2/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

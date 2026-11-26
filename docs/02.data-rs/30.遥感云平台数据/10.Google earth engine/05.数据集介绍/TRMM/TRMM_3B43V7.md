---
title: "TRMM 3B43：逐月降水估算"
date: 2026-11-03 12:00:00
permalink: /pages/a7993ae1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "jaxa"
  - "nasa"
  - "precipitation"
  - "rainfall"
  - "trmm"
  - "weather"
---

# TRMM 3B43：逐月降水估算

英文原名：TRMM 3B43: Monthly Precipitation Estimates

## 这是什么数据

**此集合不再更新。见 [IMERG 逐月](https://developers.google.com/earth-engine/datasets/catalog/NASA_GPM_L3_IMERG_MONTHLY_V06)**

本数据集以算法合并多颗卫星的微波数据，包括 SSMI、SSMIS、MHS、AMSU-B 与 AMSR-E，各自互定标到 TRMM 联合仪器。

算法 3B43 每个日历月执行一次，将 3 小时合并的高质量/红外估算（3B42）与逐月累积的全球降水气候中心（GPCC）雨量计分析结合，生成单一的最佳估算降水率与 RMS 降水误差估算场（3B43）。

所有全球降水数据集都有某种定标数据源，这对控制贡献卫星间的偏差差异是必要的。多卫星数据平均到逐月尺度，并与全球降水气候中心（GPCC）的逐月地表降水雨量计分析结合。在每种情况下，多卫星数据都调整到雨量计分析的大面积平均（在可用处，多在陆地上），然后使用简单的逆估算随机误差方差加权与雨量计分析结合。雨量计覆盖差的区域，如非洲中部与海洋，卫星输入的权重更高。

详情见 [算法说明](https://trmm.gsfc.nasa.gov/3b43.html) 与 [文件规格](https://pps.gsfc.nasa.gov/Documents/filespec.TRMM.V7.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：全球（热带与中纬度）；时间：1998 年至 2019 年（逐月）；分辨率：27,830 米（0.25 度）。
- 时间范围：1998-01-01 至 2019-12-01

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | 合并微波/红外降水估算 | 27830 |  |
| relativeError | 合并微波/红外降水随机误差估算 | 27830 |  |
| gaugeRelativeWeighting | 定标所用雨量计的相对权重 | 27830 |  |

## 能拿来做什么

- 做全球降水气候学与长期趋势分析。
- 为水资源评估提供逐月降水数据。
- 与 GPCP、IMERG 等产品交叉验证。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TRMM/3B43V7');
```

- 数据集编号（Earth Engine ID）：`TRMM/3B43V7`
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TRMM_3B43V7

## 许可与引用

- 许可：proprietary
- 关键词：climate, geophysical, jaxa, nasa, precipitation, rainfall, trmm, weather
- 数据引用：Adler, R.F., G.J. Huffman, A. Chang, R. Ferraro, P. Xie, J. Janowiak,
B. Rudolf, U. Schneider, S. Curtis, D. Bolvin, A. Gruber, J. Susskind,
P. Arkin, E.J. Nelkin, 2003: The Version 2 Global Precipitation
Climatology Project (GPCP) Monthly Precipitation Analysis (1979-Present).
J. Hydrometeor., 4(6), 1147-1167.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

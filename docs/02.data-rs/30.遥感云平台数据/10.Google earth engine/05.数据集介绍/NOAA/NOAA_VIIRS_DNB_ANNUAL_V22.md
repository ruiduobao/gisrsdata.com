---
title: "VIIRS 夜间日/夜波段年度合成 V2.2"
date: 2026-11-03 12:00:00
permalink: /pages/57765f1c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "dnb"
  - "eog"
  - "lights"
  - "nighttime"
  - "noaa"
  - "population"
  - "viirs"
  - "visible"
---

# VIIRS 夜间日/夜波段年度合成 V2.2

英文原名：VIIRS Nighttime Day/Night Annual Band Composites V2.2

## 这是什么数据

年度全球 VIIRS 夜间灯光数据集是由 2022 年逐月无云平均辐射格网生产的时间序列。更早年份的数据见 [NOAA/VIIRS/DNB/ANNUAL_V21](NOAA_VIIRS_DNB_ANNUAL_V21) 数据集。

初步过滤步骤移除了受日光、月光照射与多云的像元，得到包含灯光、火灾、极光与背景的粗合成。粗年度合成按月增量制作，再合并形成粗年度合成。

后续步骤使用十二个月辐射中位数剔除高、低辐射异常值，过滤掉大部分火灾并隔离背景。背景区域使用由 3×3 格网像元计算的数据范围（DR）置零。背景的 DR 阈值与云覆盖水平挂钩，无云覆盖次数少的区域 DR 阈值更高。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2012 年至 2025 年（逐年）；分辨率：463.83 米。
- 时间范围：2012-04-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 463.83 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| average | DNB 辐射平均值。 | 463.83 |  |
| average_masked | 掩膜后的 DNB 辐射平均值 | 463.83 |  |
| cf_cvg | 无云覆盖：进入每个像元的观测总数。此波段可用于识别观测数少、质量降低的区域。 | 463.83 |  |
| cvg | 无日光与月光的观测总数。 | 463.83 |  |
| maximum | DNB 辐射最大值。 | 463.83 |  |
| median | DNB 辐射中位数 | 463.83 |  |
| median_masked | 掩膜后的 DNB 辐射中位数。 | 463.83 |  |
| minimum | DNB 辐射最小值 | 463.83 |  |

## 能拿来做什么

- 做城市化与夜间经济活动的长时序分析。
- 估算人口与 GDP 的空间分布。
- 监测冲突、灾害造成的灯光变化。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/ANNUAL_V22');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/DNB/ANNUAL_V22`
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_ANNUAL_V22

## 许可与引用

- 许可：proprietary
- 关键词：annual, dnb, eog, lights, nighttime, noaa, population, viirs, visible
- 数据引用：Elvidge, C.D, Zhizhin, M., Ghosh T., Hsu FC, Taneja J. Annual time series of
global VIIRS nighttime lights derived from monthly averages:2012 to 2019.
Remote Sensing 2021, 13(5), p.922, doi:10.3390/rs13050922
[doi:10.3390/rs13050922](https://doi.org/10.3390/rs13050922)

- DOI：10.3390/rs13050922

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VIIRS 夜间日/夜波段合成第 1 版（月度）](/pages/331f49de/)
- [VIIRS 夜间日/夜波段年度合成 V2.1](/pages/98ca1d9b/)
- [VIIRS 杂散光校正夜间日/夜波段合成第 1 版（月度）](/pages/b0f1292c/)
- [VNP46A2：VIIRS 月光间隙填充 BRDF 夜间灯光逐日 L3 全球 500 米 [已弃用]](/pages/877e12fd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

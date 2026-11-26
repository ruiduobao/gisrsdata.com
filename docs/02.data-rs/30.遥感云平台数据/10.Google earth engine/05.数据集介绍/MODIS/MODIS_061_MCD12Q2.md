---
title: "MCD12Q2.061 MODIS 土地覆盖动力学年度全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/7a9ce2ed/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evi"
  - "global"
  - "landuse-landcover"
  - "modis"
  - "onset-greenness"
  - "phenology"
  - "usgs"
  - "yearly"
---

# MCD12Q2.061 MODIS 土地覆盖动力学年度全球 500 米

英文原名：MCD12Q2.006 Land Cover Dynamics Yearly Global 500m

## 这是什么数据

Terra 与 Aqua 组合的中分辨率成像光谱仪（MODIS）土地覆盖动力学（MCD12Q2）版本 6.1 数据产品以年度间隔提供全球地表物候指标。MCD12Q2 版本 6.1 数据产品源自从 MODIS 天底双向反射分布函数调整反射率（NBAR）计算的两波段增强植被指数（EVI2）时间序列。每年为最多两个检测到的生长周期以 500 米空间分辨率识别植被物候指标。对具有两个以上有效植被周期的像元，数据代表 NBAR-EVI2 振幅最大的两个周期。

每个资产包含以下图层：产品年份检测到的植被周期总数、返青开始、返青中点、成熟、峰值绿度、衰老、绿减中点、休眠、EVI2 最小值、EVI2 振幅、一个植被周期内的 EVI2 积分，以及总体与物候指标特定的质量信息。

对因云覆盖或其他原因导致 NBAR-EVI2 值缺失的区域，数据空白用产品年份前一年或后一年的高质量 NBAR-EVI2 值填充。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2001 年至 2025 年；分辨率：500 米。
- 时间范围：2001-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NumCycles | 产品年份内峰值的有效植被周期总数。 | 500 |  |
| Greenup_1 | EVI2 首次越过段 EVI2 振幅 15% 的日期（周期 1）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Greenup_2 | EVI2 首次越过段 EVI2 振幅 15% 的日期（周期 2）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| MidGreenup_1 | EVI2 首次越过段 EVI2 振幅 50% 的日期（周期 1）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| MidGreenup_2 | EVI2 首次越过段 EVI2 振幅 50% 的日期（周期 2）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Peak_1 | EVI2 达到段最大值的日期（周期 1）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Peak_2 | EVI2 达到段最大值的日期（周期 2）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Maturity_1 | EVI2 首次越过段 EVI2 振幅 90% 的日期（周期 1）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Maturity_2 | EVI2 首次越过段 EVI2 振幅 90% 的日期（周期 2）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| MidGreendown_1 | EVI2 最后越过段 EVI2 振幅 50% 的日期（周期 1）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| MidGreendown_2 | EVI2 最后越过段 EVI2 振幅 50% 的日期（周期 2）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Senescence_1 | EVI2 最后越过段 EVI2 振幅 90% 的日期（周期 1）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Senescence_2 | EVI2 最后越过段 EVI2 振幅 90% 的日期（周期 2）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Dormancy_1 | EVI2 最后越过段 EVI2 振幅 15% 的日期（周期 1）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| Dormancy_2 | EVI2 最后越过段 EVI2 振幅 15% 的日期（周期 2）。自 1970 年 1 月 1 日以来的天数。 | 500 |  |
| EVI_Minimum_1 | 段最小 EVI2 值（周期 1）。 | 500 |  |
| EVI_Minimum_2 | 段最小 EVI2 值（周期 2）。 | 500 |  |
| EVI_Amplitude_1 | 段最大 − 最小 EVI2（周期 1）。 | 500 |  |
| EVI_Amplitude_2 | 段最大 − 最小 EVI2（周期 2）。 | 500 |  |
| EVI_Area_1 | 从返青到休眠的每日插值 EVI2 之和（周期 1）。 | 500 |  |
| EVI_Area_2 | 从返青到休眠的每日插值 EVI2 之和（周期 2）。 | 500 |  |
| QA_Overall_1 | 整个段的 QA 代码（周期 1）。 | 500 |  |
| QA_Overall_2 | 整个段的 QA 代码（周期 2）。 | 500 |  |
| QA_Detailed_1 | 比特打包的、SDS 特定的 QA 代码（周期 1）。 | 500 |  |
| QA_Detailed_2 | 比特打包的、SDS 特定的 QA 代码（周期 2）。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD12Q2');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD12Q2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD12Q2

## 许可与引用

- 许可：proprietary
- 关键词：evi, global, landuse-landcover, modis, onset-greenness, phenology, usgs, yearly
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG](/pages/3c641846/)
- [MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m](/pages/676a6522/)
- [MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m](/pages/6ca60ab0/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

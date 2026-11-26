---
title: "MOD13A1.005 植被指数 16 天 L3 全球 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/79a4604d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "global"
  - "mod13a1"
  - "modis"
  - "ndvi"
  - "terra"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13A1.005 植被指数 16 天 L3 全球 500 米 [已弃用]

英文原名：MOD13A1.005 Vegetation Indices 16-Day L3 Global 500m [deprecated]

## 这是什么数据

全球 MODIS 植被指数旨在提供植被状况的一致空间与时间比较。分别以 469 纳米、645 纳米与 858 纳米为中心的蓝、红与近红外反射率用于确定 MODIS 每日植被指数。

MODIS 归一化差值植被指数（NDVI）补充 NOAA 的高级甚高分辨率辐射计（AVHRR）NDVI 产品，为时间序列历史应用提供连续性。MODIS 还包括一个新的增强植被指数（EVI），它最小化冠层背景变异并在茂密植被条件下保持灵敏度。EVI 还使用蓝波段去除由烟与亚像元薄云引起的残余大气污染。MODIS NDVI 与 EVI 产品由大气校正的双向地表反射率计算，并已对水、云、重气溶胶与云影做了掩膜。

全球 MOD13A1 数据每 16 天以 500 米空间分辨率提供，为正弦投影的格网三级产品。植被指数用于全球植被状况监测，并用于显示土地覆盖与土地覆盖变化的产品。这些数据可用作建模全球生物地球化学与水文过程以及全球与区域气候的输入。这些数据还可用于表征地表生物物理属性与过程，包括初级生产与土地覆盖转换。

版本 5 的 MODIS 植被指数产品已达到验证阶段 3。

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2017 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2017-03-06

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 归一化差值植被指数。 | 500 |  |
| EVI | 增强植被指数。 | 500 |  |
| DetailedQA | VI 质量指示。 | 500 |  |
| sur_refl_b01 | 红光地表反射率。 | 500 | 645nm |
| sur_refl_b02 | 近红外地表反射率。 | 500 | 858nm |
| sur_refl_b03 | 蓝光地表反射率。 | 500 | 469nm |
| sur_refl_b07 | 中红外地表反射率。 | 500 | 2130nm/2105 - 2155nm |
| ViewZenith | 观测天顶角。 | 500 |  |
| SolarZenith | 太阳天顶角。 | 500 |  |
| RelativeAzimuth | 相对方位角。 | 500 |  |
| DayOfYear | 年儒略日。 | 500 |  |
| SummaryQA | VI 像元的质量可靠性。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MOD13A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/MOD13A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13A1

## 许可与引用

- 许可：proprietary
- 关键词：16-day, evi, global, mod13a1, modis, ndvi, terra, vegetation, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

---
title: "GOES-19 MCMIPC 系列 ABI 二级云与水分影像 CONUS"
date: 2026-11-03 12:00:00
permalink: /pages/20e6bc59/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "abi"
  - "atmosphere"
  - "goes"
  - "goes-19"
  - "goes-east"
  - "goes-u"
  - "mcmip"
  - "nesdis"
  - "noaa"
  - "ospo"
  - "satellite-imagery"
  - "weather"
---

# GOES-19 MCMIPC 系列 ABI 二级云与水分影像 CONUS

英文原名：GOES-19 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS

## 这是什么数据

[GOES](https://www.goes.noaa.gov) 卫星是由 NOAA 运行的地球静止气象卫星。

云与水分影像产品均为 2 千米分辨率。波段 1–6 为反射性。无量纲的「反射因子」量由太阳天顶角归一化。这些波段支持云、植被、雪/冰与气溶胶的特征描述。波段 7–16 为发射性。大气顶（TOA）亮温以开尔文计。这些波段基于发射特性支持地表、云、水汽、臭氧、火山灰与沙尘的特征描述。

GOES-19 的业务数据生产于 2025 年 4 月 7 日开始。此日期之前的任何数据为临时数据。

[README](https://www.ncei.noaa.gov/products/satellite/goes-r-series)

NOAA 卫星与产品业务办公室有一个带状态更新的[通用卫星消息](https://www.ospo.noaa.gov/Operations/messages.html) 频道。

## 覆盖范围与时间

- 覆盖范围：空间：GOES-East 视场（美国本土（CONUS））；时间：2025 年至 2026 年；分辨率：2,000 米（原生）。
- 时间范围：2025-04-07 至 2026-11-03

## 分辨率与规格

- 空间分辨率：约 2,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CMI_C01 | 可见光 - 蓝光 白天陆地气溶胶、海岸水体测绘。 | 2000 | 0.45-0.49&micro;m |
| DQF_C01 | 数据质量标志。 | 2000 |  |
| CMI_C02 | 可见光 - 红光 白天云、雾、日射、风。 | 2000 | 0.59-0.69&micro;m |
| DQF_C02 | 数据质量标志。 | 2000 |  |
| CMI_C03 | 近红外 - 植被 白天植被、火烧迹地、水上气溶胶、风。 | 2000 | 0.846-0.885&micro;m |
| DQF_C03 | 数据质量标志。 | 2000 |  |
| CMI_C04 | 近红外 - 卷云 白天卷云。 | 2000 | 1.371-1.386&micro;m |
| DQF_C04 | 数据质量标志。 | 2000 |  |
| CMI_C05 | 近红外 - 雪/冰 白天云顶相态与粒子大小、雪。 | 2000 | 1.58-1.64&micro;m |
| DQF_C05 | 数据质量标志。 | 2000 |  |
| CMI_C06 | 近红外 - 云粒子大小 白天陆地、云特性、粒子大小、植被、雪。 | 2000 | 2.225-2.275&micro;m |
| DQF_C06 | 数据质量标志。 | 2000 |  |
| CMI_C07 | 红外 - 短波窗口 亮温。 | 2000 | 3.80-4.00&micro;m |
| DQF_C07 | 数据质量标志。 | 2000 |  |
| CMI_C08 | 红外 - 高层水汽 高层大气水汽、风、降雨 亮温。 | 2000 | 5.77-6.6&micro;m |
| DQF_C08 | 数据质量标志。 | 2000 |  |
| CMI_C09 | 红外 - 中层水汽 中层大气水汽、风、降雨 亮温。 | 2000 | 6.75-7.15&micro;m |
| DQF_C09 | 数据质量标志。 | 2000 |  |
| CMI_C10 | 红外 - 低层水汽 低层水汽、风与二氧化硫 亮温。 | 2000 | 7.24-7.44&micro;m |
| DQF_C10 | 数据质量标志。 | 2000 |  |
| CMI_C11 | 红外 - 云顶相态 稳定度总水、云相态、沙尘、二氧化硫、降雨 亮温。 | 2000 | 8.3-8.7&micro;m |
| DQF_C11 | 数据质量标志。 | 2000 |  |
| CMI_C12 | 红外 - 臭氧 总臭氧、湍流、风。 | 2000 | 9.42-9.8&micro;m |
| DQF_C12 | 数据质量标志。 | 2000 |  |
| CMI_C13 | 红外 - 「清洁」长波窗口 地表与云 亮温。 | 2000 | 10.1-10.6&micro;m |
| DQF_C13 | 数据质量标志。 | 2000 |  |
| CMI_C14 | 红外 - 长波窗口 影像、海表温度、云、降雨 亮温。 | 2000 | 10.8-11.6&micro;m |
| DQF_C14 | 数据质量标志。 | 2000 |  |
| CMI_C15 | 红外「脏」长波 总水、火山灰、海表温度 亮温。 | 2000 | 11.8-12.8&micro;m |
| DQF_C15 | 数据质量标志。 | 2000 |  |
| CMI_C16 | 红外 - CO_2 长波 气温、云高 亮温。 | 2000 | 13.0-13.6&micro;m |
| DQF_C16 | 数据质量标志。 | 2000 |  |

## 能拿来做什么

- 地球静止天气监测
- 云与水分分析
- 卫星影像应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/GOES/19/MCMIPC');
```

- 数据集编号（Earth Engine ID）：`NOAA/GOES/19/MCMIPC`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_19_MCMIPC

## 许可与引用

- 许可：proprietary
- 关键词：abi, atmosphere, goes, goes-19, goes-east, goes-u, mcmip, nesdis, noaa, ospo, satellite-imagery, weather
- 数据引用：Bah, Gunshor, Schmit, Generation of GOES-16 True Color Imagery without a
Green Band, 2018. [doi:10.1029/2018EA000379](https://doi.org/10.1029/2018EA000379)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GOES-16 MCMIPC 系列 ABI 二级云与水分影像 CONUS](/pages/22add1bd/)
- [GOES-16 MCMIPF 系列 ABI 二级云与水分影像全圆盘](/pages/3e56ea0f/)
- [GOES-16 MCMIPM 系列 ABI 二级云与水分影像中尺度](/pages/31a6c493/)
- [GOES-17 MCMIPC 系列 ABI 二级云与水分影像 CONUS](/pages/02883e14/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

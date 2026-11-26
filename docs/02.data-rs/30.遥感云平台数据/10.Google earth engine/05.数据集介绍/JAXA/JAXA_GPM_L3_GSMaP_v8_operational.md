---
title: "GSMaP 业务版：全球卫星降水制图 V8"
date: 2026-11-03 12:00:00
permalink: /pages/b5eebef7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "gpm"
  - "hourly"
  - "jaxa"
  - "precipitation"
  - "weather"
---

# GSMaP 业务版：全球卫星降水制图 V8

英文原名：GSMaP Operational: Global Satellite Mapping of Precipitation - V8

## 这是什么数据

全球卫星降水制图（GSMaP）提供 0.1×0.1 度分辨率的全球逐小时降水率。GSMaP 是全球降水测量（GPM）任务的产品，该任务每三小时提供一次全球降水观测。数值使用 GPM 核心观测卫星的多波段被动微波与红外辐射计估算，并有一组其他卫星协助。GPM 的降水率反演算法基于辐射传输模型。雨量站调整降水率的计算方法是：将 GSMaP 逐小时降水率的 24 小时累积量向 NOAA/CPC 雨量站实测的日降水量优化调整。本数据集以 GSMaP 算法第 8 版（产品第 5 版）处理。更多细节见 [GSMaP 技术文档](https://www.eorc.jaxa.jp/GPM/doc/product/format/en/07.GPM_GSMaP_Product_Format_V5_E.pdf)。

本数据集包含临时产品 GSMaP_NRT，当 GSMaP_MVK 数据可用时会被更新版本定期替换。产品以名为 'status' 的元数据属性标记。产品最初发布时，该属性值为 'provisional'；临时产品被最终版本更新后，该值更新为 'permanent'。更多信息请参阅[通用文档](https://eolp.jaxa.jp/GSMaP_Hourly.html)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1998 年 1 月 1 日至 2026 年 11 月 2 日；分辨率：约 11,132 米（0.1°×0.1°）。
- 时间范围：1998-01-01 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 11,132 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| hourlyPrecipRate | 逐小时降水率快照。 | 11132 |  |
| hourlyPrecipRateGC | 经雨量站调整的逐小时降水率快照。 | 11132 |  |
| observationTimeFlag | 自文件起始时刻至微波辐射计（成像仪/探测仪）观测时刻的相对时间；若该小时窗口内无观测，则为自上次观测以来的小时数的负值。 | 11132 |  |
| satelliteInfoFlag | 所用卫星/传感器。 | 11132 |  |
| gaugeQualityInfo | 当 status 为 'provisional' 时，表示是否存在雨量站调整，1 表示已调整、0 表示未调整；当 status 为 'permanent' 时，像元值为该像元内用于调整的雨量站数量的日平均。 | 11132 |  |

## 能拿来做什么

- 全球降水监测与洪水预警
- 水文模拟与水资源评估
- 气候与极端降水研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/GPM_L3/GSMaP/v8/operational');
```

- 数据集编号（Earth Engine ID）：`JAXA/GPM_L3/GSMaP/v8/operational`
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v8_operational

## 许可与引用

- 许可：proprietary
- 关键词：climate, geophysical, gpm, hourly, jaxa, precipitation, weather
- 数据引用：Kubota, T., K. Aonashi, T. Ushio, S. Shige, Y. N. Takayabu, M. Kachi,
Y. Arai, T. Tashima, T. Masaki, N. Kawamoto, T. Mega, M. K. Yamamoto,
A. Hamada, M. Yamaji, G. Liu and R. Oki 2020: Global Satellite Mapping of
Precipitation (GSMaP) products in the GPM era, Satellite precipitation
measurement, Springer, https://doi.org/10.1007/978-3-030-24568-9_20.

- DOI：10.57746/EO.01gs73bkt358gfpy92y2qns5e9

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GSMaP Operational: Global Satellite Mapping of Precipitation - V6](/pages/dd0d38ad/)
- [GSMaP Operational: Global Satellite Mapping of Precipitation - V7](/pages/b305a6bc/)
- [GSMaP Reanalysis: Global Satellite Mapping of Precipitation](/pages/49f8cd66/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

---
title: "CHIRTS 温度逐日：气候危害中心带站点的红外温度逐日数据产品"
date: 2026-11-03 12:00:00
permalink: /pages/b88bfce7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chg"
  - "climate"
  - "daily"
  - "era5"
  - "geophysical"
  - "reanalysis"
  - "temperature"
  - "ucsb"
  - "weather-and-climate"
  - "wind"
---

# CHIRTS 温度逐日：气候危害中心带站点的红外温度逐日数据产品

英文原名：CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product

## 这是什么数据

气候危害中心带站点的红外温度逐日温度数据产品（CHIRTS-daily；Verdin 等 2020）是一个准全球、高分辨率格网数据集（0.05° × 0.05° 分辨率，60°S–70°N），提供逐日最低（Tmin）与最高 2 米温度（Tmax）以及四个派生变量：饱和水汽压（SVP）、水汽压差（VPD）、相对湿度（RH）与炎热指数（HI）。CHIRTS 温度产品旨在支持温度极端与变异性分析，尤其在站点观测密度低的区域。

CHIRTS-daily 通过将高质量、高分辨率逐月最高温度数据集——气候危害中心带站点的红外温度逐月最高温度气候记录（CHIRTSmax；Funk 等 2019）——与欧洲中期天气预报中心（ECMWF）再分析 v5（ERA5）的逐日温度合并创建。结果是一个高分辨率逐日温度数据集，既保持逐月 CHIRTSmax 的时空信息，又保持 ERA5 的逐日与日间温度变异性。逐月 CHIRTSmax 基于：

1. 使用地理统计回归与 FAO 站点观测、ERA5 温度及其他几个地理预测因子的长期平均构建的 Tmax 气候态。

2. 使用约 15,000 个实地观测与高分辨率（0.05° × 0.05°）卫星观测的 Tmax 变异性估算。这些数据来自 Berkeley Earth 与全球电信系统（GTS）站点报告，以及经云筛查的 GridSat 地球静止卫星热红外亮温。

逐日 Tmax 值使用降尺度的 ERA5 Tmax 异常与高分辨率 CHIRTSmax 生产。逐日 Tmin 值通过去除降尺度的 ERA5 日温度范围（Tmax − Tmin）创建。逐日 SVP、VPD、RH 与 HI 使用 CHIRTS-daily 的 Tmin 与 Tmax 以及其他气象变量的逐小时 ERA5 输入计算（详情见 Williams 等，2024）。CHIRTS-daily 第 1 版覆盖 1983 至 2016 年时段。

## 覆盖范围与时间

- 覆盖范围：空间：准全球（60°S–70°N）；时间：1983 年至 2016 年（逐日）；分辨率：5,566 米（0.05 度）。
- 时间范围：1983-01-01 至 2016-12-31

## 分辨率与规格

- 空间分辨率：约 5,566 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| minimum_temperature | 24 小时内地面以上 2 米处记录的最低气温。 | 5566 |  |
| maximum_temperature | 24 小时内地面以上 2 米处记录的最高气温。 | 5566 |  |
| saturation_vapor_pressure | 在给定温度与气压下，地面以上 2 米处空气能容纳的最大水汽量。 | 5566 |  |
| vapor_pressure_deficit | 地面以上 2 米处饱和水汽压与实际水汽压之差。 | 5566 |  |
| relative_humidity | 地面以上 2 米处空气中实际水汽量与该温度气压下最大可容纳量（饱和水汽压）之比。 | 5566 |  |
| heat_index | 温度与湿度结合时体感炎热程度的度量。 | 5566 |  |

## 能拿来做什么

- 分析温度极端与热浪事件。
- 为农业与健康热风险评估提供温度数据。
- 在站点稀疏区域做气候监测。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('UCSB-CHG/CHIRTS/DAILY');
```

- 数据集编号（Earth Engine ID）：`UCSB-CHG/CHIRTS/DAILY`
- 提供方：UCSB/CHG、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRTS_DAILY

## 许可与引用

- 许可：CC0-1.0
- 关键词：chg, climate, daily, era5, geophysical, reanalysis, temperature, ucsb, weather-and-climate, wind
- 数据引用：Verdin, A., C. Funk, P. Peterson, M. Landsfeld, C. Tuholske, and Grace, K.,
2020: Development and validation of the CHIRTS-daily quasi-global
high-resolution daily temperature data set. Scientific Data, 7(1), 303.
[doi: 10.1038/s41597-020-00643-7](https://doi.org/10.1038/s41597-020-00643-7)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

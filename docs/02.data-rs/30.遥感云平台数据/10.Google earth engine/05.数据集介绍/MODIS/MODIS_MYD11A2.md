---
title: "MYD11A2.005 地表温度与发射率 8 天 L3 全球 1 公里 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/d602c2cf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "emissivity"
  - "global"
  - "landuse-landcover"
  - "lst"
  - "modis"
  - "myd11a2"
  - "surface-temperature"
---

# MYD11A2.005 地表温度与发射率 8 天 L3 全球 1 公里 [已弃用]

英文原名：MYD11A2.005 Land Surface Temperature and Emissivity 8-Day L3 Global 1km [deprecated]

## 这是什么数据

三级 MODIS 全球地表温度（LST）与发射率 8 天数据由每日 1 公里 LST 产品（MYD11A1）合成，并存储在 1 公里正弦格网上，作为 8 天时段内晴空 LST 的平均值。

MYD11A2 包含以下用于白天与夜间观测的层：

- LST_Day_1km：白天地表温度（K），比例 0.02 - QC_Day：白天表面温度质量控制评估，见 QC 比特标志 - Day_view_time：白天 LST 观测时间（小时），比例 0.1 - Day_view_angl：白天观测天顶角（度），偏移 −65.0 - LST_Night_1km：夜间地表温度（K），比例 0.02 - QC_Night：夜间表面温度质量控制评估，见 QC 比特标志 - Night_view_time：夜间 LST 观测时间（小时），比例 0.1 - Night_view_angl：夜间观测天顶角（度），偏移 −65.0 - Emis_31：波段 31 发射率，比例 0.002，偏移 0.49 - Emis_32：波段 32 发射率，比例 0.002，偏移 0.49 - Clear_sky_days：晴空日覆盖，见晴空标志。 - Clear_sky_nights：晴空夜覆盖，见晴空标志。

QC 比特标志：

- 比特 0-1：强制 QC 标志 - 00：已生产 LST，质量良好，无需检查详细 QC。 - 01：已生产 LST，质量不可靠或不可量化，建议检查更详细的 QC。 - 10：因云影响未生产 LST。 - 11：主要因云以外的原因未生产 LST。 - 比特 2-3：数据质量标志 - 00：波段 31 与 32 的 L1B 质量良好。 - 01：其他质量数据。 - 10：待定 - 11：待定 - 比特 4-5：发射率误差标志 - 00：平均发射率误差 ≤ 0.01 - 01：平均发射率误差 ≤ 0.02 - 10：平均发射率误差 ≤ 0.04 - 11：平均发射率误差 > 0.04 - 比特 6-7：LST 误差标志 - 00：平均 LST 误差 ≤ 1 K - 01：平均 LST 误差 ≤ 2 K - 10：平均 LST 误差 ≤ 3 K - 11：平均 LST 误差 > 3 K

晴空标志：

- 每日的晴空标志（比特 0 为第 1 天，比特 1 为第 2 天，以此类推）： - 0：白天/夜间非晴空。 - 1：白天/夜间晴空。

版本 5 的 MODIS/Aqua 地表温度/发射率产品为验证阶段 2，意味着精度已通过若干地面真值与验证工作，在广泛分布的地点与时段集合上做了评估。尽管之后可能有改进版本，这些数据已可用于科学出版物。

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：1 公里。
- 时间范围：2002-07-04 至 2017-03-22

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_Day_1km | 白天地表温度。 | 1000 |  |
| QC_Day | 白天 LST 质量指示。 | 1000 |  |
| Day_view_time | 白天观测的当地时间。 | 1000 |  |
| Day_view_angl | 白天观测的观测天顶角。 | 1000 |  |
| LST_Night_1km | 夜间地表温度。 | 1000 |  |
| QC_Night | 夜间 LST 质量指示。 | 1000 |  |
| Night_view_time | 夜间观测的当地时间。 | 1000 |  |
| Night_view_angl | 夜间观测的观测天顶角。 | 1000 |  |
| Emis_31 | 波段 31 发射率。 | 1000 |  |
| Emis_32 | 波段 32 发射率。 | 1000 |  |
| Clear_sky_days | 晴空条件的天数。 | 1000 |  |
| Clear_sky_nights | 晴空条件的夜数。 | 1000 |  |

## 能拿来做什么

- 地表温度监测
- 城市热岛与气候研究
- 干旱与蒸散评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MYD11A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/MYD11A2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD11A2

## 许可与引用

- 许可：proprietary
- 关键词：8-day, aqua, emissivity, global, landuse-landcover, lst, modis, myd11a2, surface-temperature
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

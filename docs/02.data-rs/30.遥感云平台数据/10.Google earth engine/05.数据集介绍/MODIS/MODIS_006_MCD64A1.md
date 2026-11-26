---
title: "MCD64A1.006 MODIS 过火面积月产品全球 500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/607a2ed5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "burn"
  - "fire"
  - "geophysical"
  - "global"
  - "mcd64a1"
  - "modis"
  - "monthly"
  - "nasa"
  - "usgs"
---

# MCD64A1.006 MODIS 过火面积月产品全球 500 米（已弃用）

英文原名：MCD64A1.006 MODIS Burned Area Monthly Global 500m [deprecated]

## 这是什么数据

Terra 与 Aqua 组合的 MCD64A1 版本 6 过火面积数据产品是一个月度、全球格网 500 米产品，包含逐像元过火面积与质量信息。MCD64A1 过火面积制图方法使用 500 米 MODIS 地表反射率影像结合 1 公里 MODIS 活跃火观测。算法使用一个过火敏感植被指数（VI）创建动态阈值并应用于合成数据。该 VI 源自 MODIS 短波红外大气校正地表反射率波段 5 与 7，并带一个时间纹理度量。算法识别每个 MODIS 瓦片内 500 米格网单元的过火日期。日期被编码在一个数据层中，为过火发生的历年序日，未过火陆地像元被赋予值，另有特殊值保留给缺失数据与水体格网单元。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2022 年；分辨率：500 米。
- 时间范围：2000-11-01 至 2022-12-01

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BurnDate | 过火年积日。可能值：0（未过火）、1–366（过火的大致儒略日）。 | 500 |  |
| Uncertainty | 过火日的估计不确定性。 | 500 |  |
| QA | 质量保证指标。 | 500 |  |
| FirstDay | 可靠变化检测的年初第一天。 | 500 |  |
| LastDay | 可靠变化检测的年末最后一天。 | 500 |  |

## 能拿来做什么

- 过火面积制图与火灾监测
- 火烧迹地碳排放估计
- 生态恢复评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MCD64A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD64A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD64A1
* [User's Guide](https://lpdaac.usgs.gov/documents/751/MCD64_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/115/MCD64_ATBD_V6.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD64A1)

## 许可与引用

- 许可：proprietary
- 关键词：burn, fire, geophysical, global, mcd64a1, modis, monthly, nasa, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD64A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD14A1.006: Terra Thermal Anomalies & Fire Daily Global 1km [deprecated]](/pages/90a353e5/)
- [MOD14A2.006: Terra Thermal Anomalies & Fire 8-Day Global 1km [deprecated]](/pages/f0c597d2/)
- [MYD14A1.006: Aqua Thermal Anomalies & Fire Daily Global 1km [deprecated]](/pages/488b79dc/)
- [MYD14A2.006: Aqua Thermal Anomalies & Fire 8-Day Global 1km [deprecated]](/pages/6b59dbe5/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
